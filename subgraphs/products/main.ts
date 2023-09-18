import { buildSubgraphSchema } from "@apollo/subgraph";
import { ApolloServer } from "apollo-server";
import { Color, Product, Resolvers } from "./src/generated/graphql";
import { gql } from "apollo-server";

export const PRODUCTS_SCHEMA = gql`
  enum Color {
    BLUE
    RED
    GREEN
  }

  type Product {
    id: ID!
    name: String!
    color: Color!
  }

  extend type Query {
    findProduct(id: ID!): Product
  }
`;

const products: Product[] = [
  {
    id: "1",
    name: "Table",
    color: Color.Blue,
  },
  {
    id: "2",
    name: "Couch",
    color: Color.Red,
  },
  {
    id: "3",
    name: "Chair",
    color: Color.Green,
  },
];

const resolvers: Resolvers = {
  Query: {    
    findProduct: {
      resolve: async (parent, args) => {
        console.log('finding products for', args.id);

        return (
          products.find(product => product.id === args.id) ?? products[0]
        );
      },
    },
  },
};

const server = new ApolloServer({
  schema: buildSubgraphSchema([
    {
      resolvers,
      typeDefs: PRODUCTS_SCHEMA,
    },
  ]),
});

server.listen({port: 4000}).then(({url})=> {
  console.log(`Server ready at ${url}`);
})
