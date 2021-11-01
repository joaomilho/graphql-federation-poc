import { ApolloServer, gql } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";
import { getPortFor } from "./serviceList";

type Product = {
  id: string;
  name: string;
};

const typeDefs = gql`
  type Query {
    products: [Product]
  }

  type Product @key(fields: "id") {
    id: ID!

    name: String!
  }
`;

const db: Product[] = [
  {
    id: "123",
    name: "Crunchy Egg",
  },
  {
    id: "456",
    name: "Crunchy Bacon",
  },
];

const resolvers = {
  Query: {
    products(): Product[] {
      console.log("(products) fetching products");
      return db;
    },
  },
};

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
});

server.listen(getPortFor("products")).then(({ url }) => {
  console.log(`🚀 Catalog: ${url}`);
});
