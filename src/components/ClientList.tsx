import { Datagrid, DateField, List, TextField } from "react-admin";

export const ClientList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" label="ID" />
      <TextField source="name" label="クライアント名" />
      <DateField source="created_at" label="作成日" />
      <DateField source="updated_at" label="更新日" />
    </Datagrid>
  </List>
);
