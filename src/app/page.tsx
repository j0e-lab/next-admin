"use client";

// 一見使用されていないimportだが、GraphqlとRESTのコンポーネントを用途によって使い分けているためであり消すのはNG
import { Client } from "@/components/Client";

import { WithApollo } from "../components/WithApollo";
import { Clients } from "@/components/Clients";
import { Admin, EditGuesser, ListGuesser, Resource } from "react-admin";
// import dataProvider from "./dataProvider";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

export default function Home() {
  return (
    // GraphQLの疎通確認用コンポーネント（GraphQL使う箇所はadmin使用しない想定のため自前のコンポーネントを用意している）
    // <WithApollo>
    //   <Clients />
    // </WithApollo>

    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={ListGuesser} edit={EditGuesser} />
    </Admin>
  );
}
