/**
 * This file is responsible for setting up a DynamoDB NoSQL Database table following the single table design pattern.
 *
 * NoSQL databases were designed to handle high-scale applications that relational databases could not handle.
 * To do this, NoSQL databases removed some features from relational databases that were sources of slowness, like joins and aggregations.
 * With DynamoDB your performance won't degrade over time, even if your application scales to 1000x the original size.
 *
 * A single table design in DynamoDB involves using a single table to store multiple types of entities.
 * This design leverages the flexibility of DynamoDB's schema-less nature and its powerful indexing capabilities to efficiently handle various access patterns within a single table.
 *
 * A single table design is superior for scalability and cost efficiency because:
 * - Scalability: A single table scales horizontally, handling large data volumes and high request rates seamlessly.
 * - Cost Efficiency: Optimizing access patterns in a single table reduces read/write operations, saving costs, especially with PAY_PER_REQUEST billing.
 */

// This single DynamoDB table will hold most off you primary application data
export const primaryTable = new sst.aws.Dynamo("PrimaryTable", {
  ttl: "expires", // This attribute allows you to automatically delete expired items from the table by simply setting an attribute "expires" on the item.

  fields: {
    PK: "string",
    SK: "string",
    GSI1PK: "string",
    GSI1SK: "string",
    GSI2PK: "string",
    GSI2SK: "string",
    GSI3PK: "string",
    GSI3SK: "string",
  },

  /**
   * Next, we will add some indexes to the table.
   * DynamoDB indexes are mechanisms to allow efficient querying of data.
   * You can define dozens of them on a single table, however, in most cases you will only need a few.
   * Here we define three indices on our table, which should be enough to cover a large number of access patterns.
   *
   * We define them as generic as possible because ElectroDB will deal with the specifics.
   *
   * @see https://electrodb.dev/en/core-concepts/quick-start/#create-your-table
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.html
   */
  primaryIndex: { hashKey: "PK", rangeKey: "SK" },

  transform: {
    table: (args) => {
      args.billingMode = "PAY_PER_REQUEST";
      args.globalSecondaryIndexes = [
        {
          name: "GSI1",
          projectionType: "ALL",
          hashKey: "GSI1PK",
          rangeKey: "GSI1SK",
        },
        {
          name: "GSI2",
          projectionType: "ALL",
          hashKey: "GSI2PK",
          rangeKey: "GSI2SK",
        },
        {
          name: "GSI3",
          projectionType: "ALL",
          hashKey: "GSI3PK",
          rangeKey: "GSI3SK",
        },
      ];
    },
  },
});
