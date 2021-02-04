/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten
import gql from 'graphql-tag'

export const createSstemm = /* GraphQL */ gql`
  mutation CreateSstemm($input: CreateSstemmInput!) {
    createSstemm(input: $input) {
      id
      cognitoId
      timestamp
      domain
      score
      reflection
    }
  }
`;
export const updateSstemm = /* GraphQL */ `
  mutation UpdateSstemm($input: UpdateSstemmInput!) {
    updateSstemm(input: $input) {
      id
      cognitoId
      timestamp
      domain
      score
      reflection
    }
  }
`;
export const deleteSstemm = /* GraphQL */ `
  mutation DeleteSstemm($input: DeleteSstemmInput!) {
    deleteSstemm(input: $input) {
      id
      cognitoId
      timestamp
      domain
      score
      reflection
    }
  }
`;
