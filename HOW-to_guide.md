# Guide to Adding a New DynamoDB Table Using SST v3

In this guide, we'll walk through the process of adding a new DynamoDB table to your SST v3 project. We'll follow the pattern used for the `employees` table in your project, covering:

- Creating the DynamoDB table with SST
- Defining the schema using Zod
- Implementing the database entity with ElectroDB
- Creating queries and mutations
- Setting up tRPC routers for API calls
- Integrating with the dashboard project

We'll also provide a Mermaid diagram to visualize the flow and explain the necessary checks when adding a table to DynamoDB.

---

## Overview of the Process

```mermaid
graph TD
    A[Define DynamoDB Table in SST] --> B[Create Zod Schema]
    B --> C[Implement Entity with ElectroDB]
    C --> D[Write Queries and Mutations]
    D --> E[Set Up tRPC Routers]
    E --> F[Integrate with Dashboard Frontend]
```

---

## Step 1: Create the DynamoDB Table in SST

First, you'll need to define a new DynamoDB table in your SST configuration.

### 1.1 Define the Table in `infra/dynamo.ts`

In your `infra/dynamo.ts` file, you can define the new table using the `sst.aws.Dynamo` component. Here's how you might define a table called `SecondaryTable`:

```typescript:infra/dynamo.ts
// Define the secondary DynamoDB table
export const secondaryTable = new sst.aws.Dynamo("SecondaryTable", {
  ttl: "expires",
  fields: {
    PK: "string",
    SK: "string",
    // Add any additional fields you need
  },
  primaryIndex: { hashKey: "PK", rangeKey: "SK" },
  transform: {
    table: (args) => {
      args.billingMode = "PAY_PER_REQUEST";
      // Define any global secondary indexes if needed
    },
  },
});
```

**Explanation:**

- **Table Definition:** We define a new DynamoDB table named `SecondaryTable`.
- **Fields:** Define the attributes (columns) of your table.
- **Primary Index:** Set up the primary key using `PK` and `SK`.
- **Transform:** Configure the table settings, such as billing mode.

### 1.2 Update SST Config to Include the New Table

Ensure that your `sst.config.ts` includes the new table:

```typescript:sst.config.ts
export default $config({
  app(input) {
    // ... existing config
  },
  async run() {
    const dynamo = await import("./infra/dynamo");
    // ... other imports

    return {
      // ... existing outputs
      SecondaryTableName: dynamo.secondaryTable.name,
      SecondaryTableArn: dynamo.secondaryTable.arn,
    };
  },
});
```

---

## Step 2: Define the Schema Using Zod

Next, create a Zod schema to define the data structure for your new entity.

### 2.1 Create Schema File

In your `packages/schemas` directory, create a new schema file, e.g., `NewEntitySchema.ts`:

```typescript:packages/schemas/NewEntitySchema.ts
import { z } from "zod";

export const NewEntitySchema = z.object({
  id: z.string(),
  // Define other properties
  name: z.string(),
  createdAt: z.number(),
});

export type NewEntitySchema = z.infer<typeof NewEntitySchema>;
```

**Explanation:**

- **Zod Schema:** Defines the shape of your data for type safety and validation.
- **Type Inference:** Exports TypeScript types inferred from the Zod schema for use throughout your codebase.

---

## Step 3: Implement the Database Entity with ElectroDB

Use ElectroDB to model your DynamoDB entity based on the schema.

### 3.1 Create Entity File

In `packages/core/src/database/entities`, create `NewEntity.ts`:

```typescript:packages/core/src/database/entities/NewEntity.ts
import { Entity as ElectroEntity, EntityItem } from "electrodb";
import { Dynamo } from "../dynamo";
import { NewEntitySchema } from "@yourproject/schemas/NewEntitySchema";
import * as crypto from "crypto";
import { getCurrentEpochSeconds } from "../../utils/epochSeconds";

export const Entity = new ElectroEntity(
  {
    model: {
      service: "yourServiceName",
      entity: "newEntity",
      version: "1",
    },
    attributes: {
      id: {
        type: "string",
        required: true,
        default: () => crypto.randomUUID(),
      },
      name: {
        type: "string",
        required: true,
      },
      createdAt: {
        type: "number",
        required: true,
        default: () => getCurrentEpochSeconds(),
      },
      // Add other attributes as per your schema
    },
    indexes: {
      byId: {
        pk: {
          field: "PK",
          composite: ["id"],
        },
        sk: {
          field: "SK",
          composite: [],
        },
      },
      // Define additional indexes if needed
    },
  },
  Dynamo.Service
);

export type NewEntityType = EntityItem<typeof Entity>;
```

**Explanation:**

- **ElectroEntity:** Models the DynamoDB entity, specifying attributes and indexes.
- **Attributes:** Map to the fields defined in your DynamoDB table.
- **Indexes:** Define how you will query the data efficiently.
- **Type Checking:** Ensures your entity matches the schema.

### 3.2 Implement CRUD Operations

Add functions to interact with the entity.

```typescript:packages/core/src/database/entities/NewEntity.ts
import { NewEntitySchema } from "@yourproject/schemas/NewEntitySchema";

// Create a new item
export const create = async (data: NewEntitySchema) => {
  return await Entity.create(data).go();
};

// Get an item by ID
export const getById = async (id: string) => {
  const res = await Entity.get({ id }).go();
  return res.data;
};

// Update an item
export const update = async (id: string, data: Partial<NewEntitySchema>) => {
  return await Entity.update({ id }).set(data).go();
};

// Delete an item
export const remove = async (id: string) => {
  return await Entity.delete({ id }).go();
};
```

---

## Step 4: Create Queries and Mutations

Implement queries and mutations that use the entity functions.

### 4.1 Create Queries

In `packages/core/src/queries`, create `NewEntityQueries.ts`:

```typescript:packages/core/src/queries/NewEntityQueries.ts
import { getById } from "../database/entities/NewEntity";

export const NewEntityQueries = {
  getById: async (id: string) => {
    return await getById(id);
  },
  // Add other query functions as needed
};
```

### 4.2 Create Mutations

In `packages/core/src/mutations`, create `NewEntityMutations.ts`:

```typescript:packages/core/src/mutations/NewEntityMutations.ts
import { create, update, remove } from "../database/entities/NewEntity";
import { NewEntitySchema } from "@yourproject/schemas/NewEntitySchema";

export const NewEntityMutations = {
  create: async (data: NewEntitySchema) => {
    return await create(data);
  },
  update: async (id: string, data: Partial<NewEntitySchema>) => {
    return await update(id, data);
  },
  delete: async (id: string) => {
    return await remove(id);
  },
};
```

---

## Step 5: Set Up tRPC Routers

Use tRPC to create API endpoints for your new entity.

### 5.1 Create tRPC Router

In `packages/core/src/trpc/routers`, create `newEntity.ts`:

```typescript:packages/core/src/trpc/routers/newEntity.ts
import { procedure, router } from "..";
import { NewEntitySchema } from "@yourproject/schemas/NewEntitySchema";
import { NewEntityQueries } from "../../queries/NewEntityQueries";
import { NewEntityMutations } from "../../mutations/NewEntityMutations";
import { z } from "zod";

export const newEntityRouter = router({
  getById: procedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      return await NewEntityQueries.getById(input.id);
    }),
  create: procedure
    .input(NewEntitySchema)
    .mutation(async ({ input }) => {
      return await NewEntityMutations.create(input);
    }),
  update: procedure
    .input(z.object({ id: z.string(), data: NewEntitySchema.partial() }))
    .mutation(async ({ input }) => {
      return await NewEntityMutations.update(input.id, input.data);
    }),
  delete: procedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      return await NewEntityMutations.delete(input.id);
    }),
});
```

### 5.2 Add Router to tRPC App Router

In your main tRPC router file, e.g., `packages/core/src/trpc/routers/index.ts`, include your new router:

```typescript:packages/core/src/trpc/routers/index.ts
import { newEntityRouter } from "./newEntity";

export const appRouter = router({
  // ...existing routers
  newEntity: newEntityRouter,
});

export type AppRouter = typeof appRouter;
```

---

## Step 6: Integrate with the Dashboard Frontend

Finally, connect your frontend dashboard to the new tRPC endpoints.

### 6.1 Update tRPC Client

Ensure your frontend project has access to the updated tRPC client that includes the new router.

### 6.2 Create Hooks for API Calls

Create custom React hooks to interact with your tRPC endpoints.

**Example:** In `packages/dashboard/src/hooks/useNewEntity.ts`:

```typescript:packages/dashboard/src/hooks/useNewEntity.ts
import { trpc } from "../trpc/client";

export const useGetNewEntity = (id: string) => {
  return trpc.newEntity.getById.useQuery({ id });
};

export const useCreateNewEntity = () => {
  const utils = trpc.useContext();
  return trpc.newEntity.create.useMutation({
    onSuccess: () => {
      // Invalidate queries or update cache
      utils.newEntity.invalidate();
    },
  });
};

// Similarly, create useUpdateNewEntity and useDeleteNewEntity
```

### 6.3 Use Hooks in Components

In your dashboard component, you can now use these hooks.

```typescript:packages/dashboard/src/components/NewEntityComponent.tsx
import React from "react";
import { useGetNewEntity, useCreateNewEntity } from "../hooks/useNewEntity";

export const NewEntityComponent = () => {
  const { data, isLoading } = useGetNewEntity("some-id");
  const createNewEntity = useCreateNewEntity();

  // Render your component with data
  return (
    <div>
      {isLoading ? "Loading..." : data?.name}
      <button
        onClick={() => {
          createNewEntity.mutate({ name: "New Entity" });
        }}
      >
        Create
      </button>
    </div>
  );
};
```

---

## Checks and Considerations When Adding a Table to DynamoDB

- **Naming Conventions:** Consistency is key. Follow existing naming patterns in your project for tables, attributes, and indexes.
- **Index Design:** Plan your access patterns ahead of time. Define primary and secondary indexes based on how you'll query the data.
- **Billing Mode:** Use `PAY_PER_REQUEST` for variable workloads unless you have consistent high traffic where `PROVISIONED` might be more cost-effective.
- **Attribute Definitions:** Ensure the attributes in your ElectroDB entity match the fields defined in your DynamoDB table.
- **Type Safety:** Use Zod schemas to define and validate your data structures. This ensures type safety across your application.
- **Security:** Implement proper authentication and authorization in your tRPC procedures to protect your data.
- **Error Handling:** Add error handling in your mutations and queries to manage exceptions gracefully.
- **Testing:** Write unit tests for your entity methods, queries, mutations, and frontend hooks to ensure everything works as expected.

---

## Conclusion

By following these steps, you've added a new DynamoDB table to your SST v3 project, connected it with ElectroDB for data modeling, set up queries and mutations, exposed API endpoints using tRPC, and integrated it into your dashboard frontend.

This pattern promotes consistency, type safety, and scalability in your application.

---

If you have any questions or need further clarification on any of the steps, feel free to ask!