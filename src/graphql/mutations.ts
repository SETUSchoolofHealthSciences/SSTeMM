/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten
import gql from 'graphql-tag'

export const createSsTeMm = /* GraphQL */ gql`
  mutation CreateSsTeMm($input: CreateSSTeMMInput!) {
    createSSTeMM(input: $input) {
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
export const updateSsTeMm = /* GraphQL */ `
  mutation UpdateSsTeMm($input: UpdateSSTeMMInput!) {
    updateSSTeMM(input: $input) {
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
export const deleteSsTeMm = /* GraphQL */ `
  mutation DeleteSsTeMm($input: DeleteSSTeMMInput!) {
    deleteSSTeMM(input: $input) {
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
