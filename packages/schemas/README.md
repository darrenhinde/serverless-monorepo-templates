# Schemas

This package serves as the single source of truth for business objects and their types.

## Purpose

The schemas package provides a unified approach to data validation and type safety throughout the application. By centralizing schema definitions, we ensure consistency and reduce duplication across different parts of the codebase.

Here, we include:

1. **Zod Schemas**: Define all business object schemas using Zod, a TypeScript-first schema declaration and validation library. (see [Zod docs](https://zod.dev/))
2. **TypeScript Types**: Export TypeScript types inferred from the Zod schemas, providing compile-time type checking.
3. **Cross-Package Usage**: Schemas defined here can be imported and used in other packages within the monorepo.

Schemas defined in this package are used for:

- Validating forms on the frontend
- Validating tRPC route endpoints on the backend and frontend
- Ensuring data integrity in DynamoDB by validating objects against Zod schemas
- Providing TypeScript types for compile-time checks across the codebase

## Benefits

1. **Type Safety**: TypeScript provides compile-time type checking, while Zod ensures runtime validation.
2. **Consistency**: Having a single source of truth for schemas ensures consistency across the application.
3. **Maintainability**: Centralizing schema definitions makes it easier to update and maintain data structures.
4. **Reusability**: Schemas can be easily imported and reused across different parts of the application.

## Best Practices

1. Keep all schema definitions in this package.
2. Export both Zod schemas and inferred TypeScript types.
3. Use descriptive names for schemas and types.
4. Keep schemas focused and modular, composing larger schemas from smaller ones when necessary.
