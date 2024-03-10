"use client";

import { useEffect, useState } from "react";
import { Admin, Resource, DataProvider, ListGuesser } from "react-admin";
import buildGraphQLProvider from "ra-data-graphql-simple";
import { ClientList } from "@/components/ClientList";
import { Client } from "@/components/Client";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

import { WithApollo } from "../components/WithApollo"
import { Clients } from "../components/Clients"

export default function Home() {

  return (
    <WithApollo>
      <Clients />
    </WithApollo>
  );
}
