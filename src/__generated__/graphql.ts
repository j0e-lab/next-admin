/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Date with time (isoformat) */
  DateTime: { input: any; output: any; }
};

export type ClientType = {
  __typename?: 'ClientType';
  created_at: Scalars['DateTime']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type MemberType = {
  __typename?: 'MemberType';
  created_at: Scalars['DateTime']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createClient: ClientType;
  deleteClient: ClientType;
  updateClient: ClientType;
};


export type MutationCreateClientArgs = {
  name: Scalars['String']['input'];
};


export type MutationDeleteClientArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateClientArgs = {
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  Client?: Maybe<ClientType>;
  allClients: Array<ClientType>;
  allMembers: Array<MemberType>;
};


export type QueryClientArgs = {
  id: Scalars['Int']['input'];
};

export type AllClientsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllClientsQuery = { __typename?: 'Query', allClients: Array<{ __typename?: 'ClientType', id?: number | null, name: string, created_at: any, updated_at: any }> };

export type ClientQueryVariables = Exact<{
  clientId: Scalars['Int']['input'];
}>;


export type ClientQuery = { __typename?: 'Query', Client?: { __typename?: 'ClientType', id?: number | null, name: string, created_at: any, updated_at: any } | null };

export type CreateClientMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CreateClientMutation = { __typename?: 'Mutation', createClient: { __typename?: 'ClientType', id?: number | null, name: string, created_at: any, updated_at: any } };

export type UpdateClientMutationVariables = Exact<{
  updateClientId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
}>;


export type UpdateClientMutation = { __typename?: 'Mutation', updateClient: { __typename?: 'ClientType', id?: number | null, name: string, created_at: any, updated_at: any } };

export type DeleteClientMutationVariables = Exact<{
  deleteClientId: Scalars['Int']['input'];
}>;


export type DeleteClientMutation = { __typename?: 'Mutation', deleteClient: { __typename?: 'ClientType', id?: number | null, name: string, created_at: any, updated_at: any } };

export type AllMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllMembersQuery = { __typename?: 'Query', allMembers: Array<{ __typename?: 'MemberType', id?: number | null, name: string, created_at: any, updated_at: any }> };


export const AllClientsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllClients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allClients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<AllClientsQuery, AllClientsQueryVariables>;
export const ClientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Client"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clientId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Client"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clientId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<ClientQuery, ClientQueryVariables>;
export const CreateClientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateClient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<CreateClientMutation, CreateClientMutationVariables>;
export const UpdateClientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateClient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateClientId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateClientId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<UpdateClientMutation, UpdateClientMutationVariables>;
export const DeleteClientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteClient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteClientId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteClientId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<DeleteClientMutation, DeleteClientMutationVariables>;
export const AllMembersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allMembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allMembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<AllMembersQuery, AllMembersQueryVariables>;