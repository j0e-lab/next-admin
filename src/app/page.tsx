"use client";

import { Client } from "@/components/Client";

import { WithApollo } from "../components/WithApollo";
import { Clients } from "@/components/Clients";

export default function Home() {
  return (
    <WithApollo>
      <Clients />
    </WithApollo>
  );
}
