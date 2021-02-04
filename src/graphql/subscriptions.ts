/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSstemm = /* GraphQL */ `
  subscription OnCreateSstemm(
    $id: ID
    $cognitoId: ID
    $timestamp: AWSDateTime
    $domain: AWSJSON
    $score: Int
  ) {
    onCreateSstemm(
      id: $id
      cognitoId: $cognitoId
      timestamp: $timestamp
      domain: $domain
      score: $score
    ) {
      id
      cognitoId
      timestamp
      domain
      score
      reflection
    }
  }
`;
export const onUpdateSstemm = /* GraphQL */ `
  subscription OnUpdateSstemm(
    $id: ID
    $cognitoId: ID
    $timestamp: AWSDateTime
    $domain: AWSJSON
    $score: Int
  ) {
    onUpdateSstemm(
      id: $id
      cognitoId: $cognitoId
      timestamp: $timestamp
      domain: $domain
      score: $score
    ) {
      id
      cognitoId
      timestamp
      domain
      score
      reflection
    }
  }
`;
export const onDeleteSstemm = /* GraphQL */ `
  subscription OnDeleteSstemm(
    $id: ID
    $cognitoId: ID
    $timestamp: AWSDateTime
    $domain: AWSJSON
    $score: Int
  ) {
    onDeleteSstemm(
      id: $id
      cognitoId: $cognitoId
      timestamp: $timestamp
      domain: $domain
      score: $score
    ) {
      id
      cognitoId
      timestamp
      domain
      score
      reflection
    }
  }
`;
