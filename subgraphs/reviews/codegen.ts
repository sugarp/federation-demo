
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "main.ts",
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"]
    }
  }
};

export default config;
