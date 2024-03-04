"use client";

import { useEffect, useState } from "react";
import { Admin, Resource, DataProvider, ListGuesser } from "react-admin";
import buildGraphQLProvider from "ra-data-graphql-simple";
import { ClientList } from "@/components/ClientList";

export default function Home() {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider({
      clientOptions: { uri: "http://127.0.0.1:8000/graphql" },
    }).then((graphQlDataProvider) =>
      setDataProvider(() => graphQlDataProvider)
    );
  }, []);

  if (!dataProvider) {
    return <div>Loading</div>;
  }

  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="Client" list={ClientList} />
    </Admin>
  );
}
