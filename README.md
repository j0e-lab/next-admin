This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 概要
[react-adminの公式サイト](https://marmelab.com/react-admin/NextJs.html)でnext対応のプロジェクトを作成する章があったのでそこをベースにNext > strawberryにクエリが飛ぶようにしていく。


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

## Exposing The Admin App Component

React-adminは、クライアント側でレンダリングされるSPAとして設計されています。さまざまなクライアント側のみのライブラリ（react-router、material-ui等）が付属しています。
そのため、NextでAdminAppコンポーネントを含める場合、Nextによるサーバー上でのレンダリングを防止する必要があります。

そのためには、Next.jsでAdminAppコンポーネントを遅延読み込みしてインポートし、ssrオプションをfalseに指定します。（以下記述の話）
`const AdminApp = dynamic(() => import("@/components/AdminApp"), { ssr: false });`

ssrをfalseにしなかった場合、react-adminがサーバーサイドでレンダリングされるがその際にDOM（ブラウザ上にある）にアクセスできないためエラーになる

## Rendering React-Admin In A Sub Route

- `http://localhost:3000/admin`みたいなサブルートを作ることもできる
