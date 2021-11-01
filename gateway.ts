import { ApolloGateway } from "@apollo/gateway";
import { ApolloServer } from "apollo-server";
import { serviceList } from "./serviceList";

const gateway = new ApolloGateway({ serviceList });

const server = new ApolloServer({ gateway, subscriptions: false });

server.listen().then(({ url }) => {
  console.log(`🚀 Gateway: ${url}`);
});
