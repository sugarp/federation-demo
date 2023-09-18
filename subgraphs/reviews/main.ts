import { ApolloServer } from "apollo-server";
import { Resolvers, Review, ReviewResolvers } from "./src/generated/graphql";
import { buildSubgraphSchema } from "@apollo/subgraph";

import { gql } from "apollo-server";

export const REVIEWS_SCHEMA = gql`
  type Review {
    id: ID!
    body: String!
  }

  extend type Product @key(fields: "id") {
    id: ID! @external
    reviews: [Review]
  }
`;

const reviews = [{
  body: 'sada',
  id: 'sadas',
}, {
  body: 'sawdwqdqw',
  id: 'od0a'
}] as Review[]

const resolvers: Resolvers = {
  Product: {
    reviews: {
      resolve: (parent, args, context) => {
        console.log('resolving reviews of product', parent.id);
        return reviews;
      },
    },
  },
};

const server = new ApolloServer({
  schema: buildSubgraphSchema([
    {
      typeDefs: REVIEWS_SCHEMA,
      resolvers,
    },
  ]),
});

server.listen({ port: 4001 }).then(({url}) => {
  console.log(`Server is ready at ${url}`)
})
