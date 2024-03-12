import { useQuery, useMutation } from "@apollo/client";
import { ClientsDocument, CreateClientDocument, DeleteClientDocument, UpdateClientDocument } from "@/__generated__/graphql";

export const Clients = () => {
  const { loading, error, data } = useQuery(ClientsDocument);

  // 作成ボタンクリック時にクライアントを作成
  // TODO 作成自体はできているもののレスポンス周りでエラーでてるけど一旦スルー
  const [createClient] = useMutation(CreateClientDocument, {
    variables: { name: "7&i" },
  });

  // 更新ボタンクリック時にクライアントを更新
  const [updateClient] = useMutation(UpdateClientDocument, {
    variables: { id: 1, name: "渋谷証券" },
  });

  // 削除ボタンクリック時にクライアントを削除
  const [deleteClient] = useMutation(DeleteClientDocument, {
    variables: { id: 3 },
  });

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
      <button onClick={() => createClient()}>作成</button>
      <button onClick={() => updateClient()}>更新</button>
      <button onClick={() => deleteClient()}>削除</button>
    </div>
  );
};
