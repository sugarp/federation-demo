import { ApolloServer } from "apollo-server";
import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway"

const supergraph = new IntrospectAndCompose({
  subgraphs: [
    { name: "products", url: "http://localhost:4000/graphql" },
    { name: "reviews", url: "http://localhost:4001/graphql" },
  ],
});

const gateway = new ApolloGateway({
  supergraphSdl: supergraph,
  __exposeQueryPlanExperimental: true,
  validateSupergraph: true,
  debug: true,
});

const server = new ApolloServer({
  gateway,
})

server.listen({ port: 3000 }).then(({url}) => {
  console.log(`Gateway running at ${url}`);
});
