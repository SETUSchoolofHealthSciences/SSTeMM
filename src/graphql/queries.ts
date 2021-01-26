/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const listSstemms = /* GraphQL */ `
  query ListSstemms(
    $filter: TableSstemmFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSstemms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cognitoId
        timestamp
        domain
        score
        reflection
      }
      nextToken
    }
  }
`;
