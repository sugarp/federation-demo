
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
