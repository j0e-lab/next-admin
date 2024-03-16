This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 概要
- [react-adminの公式サイト](https://marmelab.com/react-admin/NextJs.html)でnext対応のプロジェクトを作成する章があったのでそこをベースにNext > strawberryにクエリが飛ぶようにしていく。
- [ここのサイト](https://maku.blog/p/n2k2hxd/)を参考にGraphQLスキーマからtypescriptの生成ができるかどうかの検証もこのリポジトリで行っている。


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Note

- [このページ](https://zenn.dev/a_da_chi/articles/181ea4ccc39580)に記載されているデフォルトで作成されるファイルのうち、不要と判断したものは削除してある
- [Pages Router と App Routerの違い](https://qiita.com/Yasushi-Mo/items/865a8d6e1a063058d702)
- [react-admin関連のエラー対処法](https://github.com/imakyo97/python_catch_up/blob/main/python-catch-up/docs/react_admin.md)

## React-Adminチュートリアル

### Using an API As Data Source

- データプロバイダーとは
  - react-admin単体ではAPIとの通信機能はもっていないため通信用のアダプターが必要 > それがデータプロバイダー

### Exposing The Admin App Component

React-adminは、クライアント側でレンダリングされるSPAとして設計されています。さまざまなクライアント側のみのライブラリ（react-router、material-ui等）が付属しています。
そのため、NextでAdminAppコンポーネントを含める場合、Nextによるサーバー上でのレンダリングを防止する必要があります。

そのためには、Next.jsでAdminAppコンポーネントを遅延読み込みしてインポートし、ssrオプションをfalseに指定します。（以下記述の話）
`const AdminApp = dynamic(() => import("@/components/AdminApp"), { ssr: false });`

ssrをfalseにしなかった場合、react-adminがサーバーサイドでレンダリングされるがその際にDOM（ブラウザ上にある）にアクセスできないためエラーになる

### Rendering React-Admin In A Sub Route

- `http://localhost:3000/admin`みたいなサブルートを作ることもできる

### 参考情報
- [admin使ったデモ画面が見れるとこ](https://marmelab.com/react-admin/Demos.html)

## データプロバイダーを自作する方法
- [公式](https://marmelab.com/react-admin/DataProviderWriting.html)
- [Data Providerとは](https://marmelab.com/react-admin/doc/3.19/DataProviders.html)

## GraphQLスキーマからtypescriptの自動生成

- 自動生成するうえで必要なconfigファイルはts(codegen.ts)とyaml(codege.yaml)の2通りの形式を選べる > yamlの方が見やすく、使用している人が多い印象
- tsとyaml2つのconfigがある状態でgenerateするとyamlの内容が優先実行される
- バックエンドのスキーマ情報をinstropection経由で取得しているらしいが、その対象になるのは以下の箇所で定義されているQueryやMutationと思われる
  - そのためバックエンド側で下記定義が用意されていないとtsの生成ができない

```
@strawberry.type
class Query:
    allClients: list[ClientType] = strawberry.field(resolver=get_clients)

@strawberry.type
class Mutation:
    createClient: ClientType = strawberry.mutation(resolver=create_client)
```

- GraphQLのリクエスト文字列のことをGraphQLドキュメントという（↓こんなやつ）[情報元](https://hasura.io/learn/ja/graphql/intro-graphql/core-concepts/)
```
{
  author {
    id
    name
  }
}
```

graphql-codegenコマンドのオプション確認（npmでも似たようなやつあるはず）
```sh
yarn -s graphql-codegen --help
```

オプション
```
Options:
      --help         ヘルプを表示                    [boolean]
      --version      バージョン表示                   [boolean]
  -c, --config       コード生成のための設定ファイル（codegen.yaml）のパスを指定する時に使う
                     デフォルトだとカレントディレクトリのcodegen.yamlを使用  [string]
  -w, --watch        変更を監視し、自動的にコード生成を実行します。
  -r, --require      Code Generatorがサポートしていない形式のファイルを読み込む必要がある場合に使用 [array] [default: []]
  -o, --overwrite    既存のファイルを上書きする                         [boolean]
  -s, --silent       エラー出力を抑止する                        [boolean]
  -e, --errors-only  エラーのみ出力する                                 [boolean]
      --profile      パフォーマンスを計測するためにプロファイラを使用する               [boolean]
  -p, --project      GraphQL Config内のプロジェクト名を指定                [string]
  -v, --verbose      パフォーマンス面の詳細出力が欲しい場合に使用 [boolean] [default: false]
  -d, --debug        デバッグ出力をする       [boolean] [default: false]
```

ちなみに上記コマンドオプションは`codegen.yaml`にプロパティとして記載することができるため<br>
必ずしもコマンドオプションとして使用する必要はない。一時的に付与したい場合のみコマンドオプションとして使う感じ。

### 参考情報
- [GraphQL Code Generator公式](https://the-guild.dev/graphql/codegen/docs/getting-started)
- [codegen.tsの構成オプション](https://the-guild.dev/graphql/codegen/docs/config-reference/codegen-config)
- [自動生成手順参考サイト](https://qiita.com/yoshii0110/items/b461e608dc0cff78982e)↓のapolloのサイトとアプローチが微妙に違う。実際のプロジェクトではapolloサイトに記載のある方法で自動生成することになりそう
- [GraphQL Code Generatorの使用方法（apollo公式）](https://www.apollographql.com/tutorials/client-side-graphql-react/05-codegen) 
  - こっちの方がGraphQL Code Generatorの公式ページより説明あってわかりやすい
    - このサイトではqueryをgql関数内に書いているが若干ブサイク。以下サイトを参考に`.graphql`で用意するのがスマート。codegenに`.graphql`のファイルを指定すれば同じように動く
      - https://qiita.com/yoshii0110/items/b461e608dc0cff78982e  
- [codegenの設定ファイルが`.ts`だけでなく`yaml`にも対応している理由](https://the-guild.dev/graphql/codegen/docs/config-reference/codegen-config#:~:text=the%20next%20major.-,Other%20ways%20to%20provide%20configuration,-GraphQL%2DCodegen%20uses)

## OpenAPIからTypescript生成

[FastAPI公式](https://fastapi.tiangolo.com/ja/advanced/generate-clients/)に沿って自動生成を実装
[openapi-typescript-codegen](https://www.npmjs.com/package/openapi-typescript-codegen) < 生成に使用するライブラリ

### Generate Client Code

- 生成コマンド（generate-client）のオプションの詳細はライブラリの[公式ページ](https://www.npmjs.com/package/openapi-typescript-codegen)を参照

### Generate a TypeScript Client with Tags

タグ無しで生成した場合は`client/services/DefaultService.ts`に全てのリクエスト用メソッドが生成されるが、<br>
タグ付けするとタグごとにServiceファイルが生成されるようになる

### 参考情報

- [openapi-typescript-codegen公式リポジトリ](https://github.com/ferdikoomen/openapi-typescript-codegen/wiki)
