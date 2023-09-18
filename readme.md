---1
npx graphql-code-generator init


---1
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

3. 
const server = new ApolloServer({
  schema: buildSubgraphSchema([
    {
      typeDefs: schema,
      resolvers
    }
  ])
})


server.listen({port: 4000}).then(({url}) => {
  console.log(`Subgraph is running on ${url}`);
});



1. 
"start": "ts-node main.ts"



FE:

npm install -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-resolvers @graphql-codegen/typescript-react-apollo 

@graphql-codegen/typescript-operations @graphql-codegen/introspection


FE codegen.ts:

```
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000",
  documents: "src/**/*.tsx",
  generates: {
    "src/generated.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHOC: false,
        withComponent: false,
        withHooks: true,
      },
    },
  },
};

export default config;
```
