"use client";

import { Client } from "@/components/Client";

import { WithApollo } from "../components/WithApollo";

export default function Home() {
  return (
    <WithApollo>
      <Client />
    </WithApollo>
  );
}
