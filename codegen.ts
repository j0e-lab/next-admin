import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://127.0.0.1:8000/graphql",
  documents: [ "query.graphql" ],
    generates: {
      "./src/__generated__/": { // 生成ファイルの出力先
        preset: "client", // @graphql-codegen/client-presetを指定
        presetConfig: {
          gqlTagName: "gql", // デフォだと関数名はgraphqlになるが、gqlという略称を使用するよう設定
        },
      },
    },
};

export default config;
