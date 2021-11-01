import { ApolloServer, gql } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";
import { getPortFor } from "./serviceList";

const db = {
  "123": ["Eggs", "Crunchy"],
  "456": ["Bacon", "Crunchy"],
};

type Label = {
  productId: string;
  label: string;
};

const typeDefs = gql`
  extend type Product @key(fields: "id") {
    id: ID! @external
    labels: [String]
  }
`;

const resolvers = {
  Product: {
    labels(parent, args): string {
      console.log("(labels) fetching for product id", { parent, args });
      return db[parent.id];
    },
  },
};

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
});

server.listen(getPortFor("labels")).then(({ url }) => {
  console.log(`🚀 LDAP: ${url}`);
});
