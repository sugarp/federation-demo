import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export enum Color {
  Blue = 'BLUE',
  Green = 'GREEN',
  Red = 'RED'
}

export type Product = {
  __typename?: 'Product';
  color: Color;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  reviews?: Maybe<Array<Maybe<Review>>>;
};

export type Query = {
  __typename?: 'Query';
  findProduct?: Maybe<Product>;
};


export type QueryFindProductArgs = {
  id: Scalars['ID']['input'];
};

export type Review = {
  __typename?: 'Review';
  body: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type FindProductQueryVariables = Exact<{
  findProductId: Scalars['ID']['input'];
}>;


export type FindProductQuery = { __typename?: 'Query', findProduct?: { __typename?: 'Product', color: Color, id: string, name: string, reviews?: Array<{ __typename?: 'Review', body: string, id: string } | null> | null } | null };


export const FindProductDocument = gql`
    query FindProduct($findProductId: ID!) {
  findProduct(id: $findProductId) {
    color
    id
    name
    reviews {
      body
      id
    }
  }
}
    `;

/**
 * __useFindProductQuery__
 *
 * To run a query within a React component, call `useFindProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindProductQuery({
 *   variables: {
 *      findProductId: // value for 'findProductId'
 *   },
 * });
 */
export function useFindProductQuery(baseOptions: Apollo.QueryHookOptions<FindProductQuery, FindProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindProductQuery, FindProductQueryVariables>(FindProductDocument, options);
      }
export function useFindProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindProductQuery, FindProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindProductQuery, FindProductQueryVariables>(FindProductDocument, options);
        }
export type FindProductQueryHookResult = ReturnType<typeof useFindProductQuery>;
export type FindProductLazyQueryHookResult = ReturnType<typeof useFindProductLazyQuery>;
export type FindProductQueryResult = Apollo.QueryResult<FindProductQuery, FindProductQueryVariables>;