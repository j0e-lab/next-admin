import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../app/query";
import { Layout } from "react-admin";

export const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <h1>Clients</h1>
      <ul>
        {data?.allClients?.map((client) => (
          <li key={client?.id}>
            {client?.name} (ID: {client?.id})
          </li>
        ))}
      </ul>
    </div>
  );
};
