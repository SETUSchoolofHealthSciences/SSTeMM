/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten
import gql from 'graphql-tag'
export const getSstemm = /* GraphQL */ `
  query GetSstemm($id: ID!) {
    getSstemm(id: $id) {
      id
      cognitoId
      timestamp
      domain
      score
      reflection
    }
  }
`;
export const listSstemms = /* GraphQL */ gql`
query listSstemms ($filter: TableSstemmFilterInput!) {
  listSstemms(filter: $filter) {
    items {
      id
      cognitoId
      timestamp
      domain
      score
      reflection
    }
  }
}
`;
