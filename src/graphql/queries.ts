/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten
import gql from 'graphql-tag'

export const getSsTeMm = /* GraphQL */ gql`
  query GetSsTeMm($id: ID!, $timeStamp: AWSTimestamp!) {
    getSSTeMM(id: $id, timeStamp: $timeStamp) {
      id
      cognitoId
      timeStamp
      domain
      scoreCard
      totalScore
      reflection
    }
  }
`;
export const listSsTeMms = /* GraphQL */ gql`
  query ListSsTeMms(
    $filter: TableSSTeMMFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSSTeMMS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cognitoId
        timeStamp
        domain
        scoreCard
        totalScore
        reflection
      }
      nextToken
    }
  }
`;
