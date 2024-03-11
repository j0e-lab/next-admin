import { useQuery } from "@apollo/client";
import { ClientDocument } from "../__generated__/graphql";
import { useParams } from "react-router-dom";


export const Client = () => {
  // 本当はuseParams()使って受け取ったパラメータをidに指定する
  const { data } = useQuery(ClientDocument, { variables: { id: 3 } });

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
