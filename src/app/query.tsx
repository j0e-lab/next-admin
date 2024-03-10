import { gql } from "../__generated__";

export const GET_CLIENTS = gql(`
  query Clients {
    allClients {
      id
      name
      created_at
      updated_at
    }
  }
`);
