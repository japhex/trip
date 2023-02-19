/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DATETIME: any;
  Date: any;
  JSONObject: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Artist = {
  __typename?: 'Artist';
  genre?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  imageS3?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  subGenre?: Maybe<Scalars['String']>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Festival = {
  __typename?: 'Festival';
  end_date?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['String']>;
};

export type Gig = {
  __typename?: 'Gig';
  _id?: Maybe<Scalars['ID']>;
  artist: Artist;
  attending?: Maybe<Scalars['Boolean']>;
  date?: Maybe<GigDate>;
  festival?: Maybe<Festival>;
  info?: Maybe<Scalars['String']>;
  lineup?: Maybe<Array<Maybe<Artist>>>;
  ratings?: Maybe<Array<Maybe<Scalars['JSONObject']>>>;
  ticketmasterId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  venue?: Maybe<Venue>;
};

export type GigDate = {
  __typename?: 'GigDate';
  end?: Maybe<Scalars['Date']>;
  start?: Maybe<Scalars['Date']>;
  timestamp?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createGig: Gig;
  deleteGig?: Maybe<Scalars['JSONObject']>;
  rateGig?: Maybe<Scalars['Int']>;
};


export type MutationCreateGigArgs = {
  artist?: InputMaybe<Scalars['JSONObject']>;
  date?: InputMaybe<Scalars['JSONObject']>;
  festival?: InputMaybe<Scalars['JSONObject']>;
  id: Scalars['String'];
  info?: InputMaybe<Scalars['String']>;
  lineup?: InputMaybe<Array<InputMaybe<Scalars['JSONObject']>>>;
  ticketmasterId: Scalars['String'];
  venue?: InputMaybe<Scalars['JSONObject']>;
};


export type MutationDeleteGigArgs = {
  id: Scalars['ID'];
};


export type MutationRateGigArgs = {
  id: Scalars['ID'];
  rating: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  filterGigs?: Maybe<Array<Maybe<Gig>>>;
  gigs?: Maybe<Array<Maybe<Gig>>>;
  searchGig?: Maybe<Scalars['JSONObject']>;
};


export type QueryFilterGigsArgs = {
  filters: Scalars['JSONObject'];
};


export type QueryGigsArgs = {
  past?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySearchGigArgs = {
  artist: Scalars['String'];
  date?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  gigs: Array<Gig>;
  id: Scalars['ID'];
  username: Scalars['String'];
};

export type UserWithGigs = {
  __typename?: 'UserWithGigs';
  gigs?: Maybe<Array<Maybe<Gig>>>;
  id: Scalars['ID'];
  username: Scalars['String'];
};

export type Venue = {
  __typename?: 'Venue';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['JSONObject']>;
  longitude?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type GigsQueryVariables = Exact<{
  past?: InputMaybe<Scalars['Boolean']>;
}>;


export type GigsQuery = { __typename?: 'Query', gigs?: Array<{ __typename?: 'Gig', _id?: string | null, info?: string | null, ratings?: Array<any | null> | null, artist: { __typename?: 'Artist', name: string, image?: string | null, imageS3?: string | null, genre?: string | null, subGenre?: string | null }, date?: { __typename?: 'GigDate', start?: any | null, end?: any | null, timestamp?: number | null } | null, venue?: { __typename?: 'Venue', location?: any | null, name?: string | null, latitude?: string | null, longitude?: string | null, city?: string | null, country?: string | null } | null, lineup?: Array<{ __typename?: 'Artist', name: string, image?: string | null, genre?: string | null, subGenre?: string | null } | null> | null, festival?: { __typename?: 'Festival', start_date?: string | null, end_date?: string | null } | null } | null> | null };

export type CreateGigMutationVariables = Exact<{
  id: Scalars['String'];
  ticketmasterId: Scalars['String'];
  artist?: InputMaybe<Scalars['JSONObject']>;
  date?: InputMaybe<Scalars['JSONObject']>;
  info?: InputMaybe<Scalars['String']>;
  venue?: InputMaybe<Scalars['JSONObject']>;
  lineup?: InputMaybe<Array<InputMaybe<Scalars['JSONObject']>> | InputMaybe<Scalars['JSONObject']>>;
  festival?: InputMaybe<Scalars['JSONObject']>;
}>;


export type CreateGigMutation = { __typename?: 'Mutation', createGig: { __typename?: 'Gig', _id?: string | null, info?: string | null, artist: { __typename?: 'Artist', name: string, image?: string | null, genre?: string | null, subGenre?: string | null }, date?: { __typename?: 'GigDate', start?: any | null, end?: any | null, timestamp?: number | null } | null, venue?: { __typename?: 'Venue', location?: any | null, name?: string | null, latitude?: string | null, longitude?: string | null, city?: string | null, country?: string | null } | null, lineup?: Array<{ __typename?: 'Artist', name: string, image?: string | null, genre?: string | null, subGenre?: string | null } | null> | null, festival?: { __typename?: 'Festival', start_date?: string | null, end_date?: string | null } | null } };

export type DeleteGigMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteGigMutation = { __typename?: 'Mutation', deleteGig?: any | null };

export type SearchGigQueryVariables = Exact<{
  artist: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
  date?: InputMaybe<Scalars['String']>;
}>;


export type SearchGigQuery = { __typename?: 'Query', searchGig?: any | null };

export type FilterGigsQueryVariables = Exact<{
  filters: Scalars['JSONObject'];
}>;


export type FilterGigsQuery = { __typename?: 'Query', filterGigs?: Array<{ __typename?: 'Gig', _id?: string | null, info?: string | null, artist: { __typename?: 'Artist', name: string, image?: string | null, genre?: string | null, subGenre?: string | null }, date?: { __typename?: 'GigDate', start?: any | null, end?: any | null, timestamp?: number | null } | null, venue?: { __typename?: 'Venue', location?: any | null, name?: string | null, latitude?: string | null, longitude?: string | null, city?: string | null, country?: string | null } | null, lineup?: Array<{ __typename?: 'Artist', name: string, image?: string | null, genre?: string | null, subGenre?: string | null } | null> | null, festival?: { __typename?: 'Festival', start_date?: string | null, end_date?: string | null } | null } | null> | null };

export type RateGigMutationVariables = Exact<{
  id: Scalars['ID'];
  rating: Scalars['Int'];
}>;


export type RateGigMutation = { __typename?: 'Mutation', rateGig?: number | null };


export const GigsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"gigs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"past"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gigs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"past"},"value":{"kind":"Variable","name":{"kind":"Name","value":"past"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"imageS3"}},{"kind":"Field","name":{"kind":"Name","value":"genre"}},{"kind":"Field","name":{"kind":"Name","value":"subGenre"}}]}},{"kind":"Field","name":{"kind":"Name","value":"date"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"info"}},{"kind":"Field","name":{"kind":"Name","value":"venue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lineup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"genre"}},{"kind":"Field","name":{"kind":"Name","value":"subGenre"}}]}},{"kind":"Field","name":{"kind":"Name","value":"festival"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ratings"}}]}}]}}]} as unknown as DocumentNode<GigsQuery, GigsQueryVariables>;
export const CreateGigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createGig"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ticketmasterId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"artist"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"info"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"venue"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lineup"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"festival"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createGig"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"ticketmasterId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ticketmasterId"}}},{"kind":"Argument","name":{"kind":"Name","value":"artist"},"value":{"kind":"Variable","name":{"kind":"Name","value":"artist"}}},{"kind":"Argument","name":{"kind":"Name","value":"date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date"}}},{"kind":"Argument","name":{"kind":"Name","value":"info"},"value":{"kind":"Variable","name":{"kind":"Name","value":"info"}}},{"kind":"Argument","name":{"kind":"Name","value":"venue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"venue"}}},{"kind":"Argument","name":{"kind":"Name","value":"lineup"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lineup"}}},{"kind":"Argument","name":{"kind":"Name","value":"festival"},"value":{"kind":"Variable","name":{"kind":"Name","value":"festival"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"genre"}},{"kind":"Field","name":{"kind":"Name","value":"subGenre"}}]}},{"kind":"Field","name":{"kind":"Name","value":"date"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"info"}},{"kind":"Field","name":{"kind":"Name","value":"venue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lineup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"genre"}},{"kind":"Field","name":{"kind":"Name","value":"subGenre"}}]}},{"kind":"Field","name":{"kind":"Name","value":"festival"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}}]}}]}}]}}]} as unknown as DocumentNode<CreateGigMutation, CreateGigMutationVariables>;
export const DeleteGigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteGig"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteGig"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteGigMutation, DeleteGigMutationVariables>;
export const SearchGigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchGig"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"artist"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchGig"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"artist"},"value":{"kind":"Variable","name":{"kind":"Name","value":"artist"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date"}}}]}]}}]} as unknown as DocumentNode<SearchGigQuery, SearchGigQueryVariables>;
export const FilterGigsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"filterGigs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filterGigs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"genre"}},{"kind":"Field","name":{"kind":"Name","value":"subGenre"}}]}},{"kind":"Field","name":{"kind":"Name","value":"date"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"info"}},{"kind":"Field","name":{"kind":"Name","value":"venue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lineup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"genre"}},{"kind":"Field","name":{"kind":"Name","value":"subGenre"}}]}},{"kind":"Field","name":{"kind":"Name","value":"festival"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}}]}}]}}]}}]} as unknown as DocumentNode<FilterGigsQuery, FilterGigsQueryVariables>;
export const RateGigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"rateGig"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rating"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rateGig"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"rating"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rating"}}}]}]}}]} as unknown as DocumentNode<RateGigMutation, RateGigMutationVariables>;