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
uery listSstemms {
  listSstemms(filter: {cognitoId: {eq: "08ea6725-6c74-4390-8cd5-bcf28ff806a9"}}) {
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
