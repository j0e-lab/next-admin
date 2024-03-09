import { useQuery } from "@apollo/client";
import { ClientDocument, ClientsDocument } from "../generated/schema";
import { useEffect } from "react";

export const Client = () => {
  const { data } = useQuery(ClientDocument);

  if (!data?.Client) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ul>
        {data.Client ? (
          <h3>{data.Client.name}</h3>
        ) : (
          <li>No clients data available</li>
        )}
      </ul>
    </div>
  );
};
