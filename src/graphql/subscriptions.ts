/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSsTeMm = /* GraphQL */ `
  subscription OnCreateSsTeMm(
    $id: ID
    $cognitoId: ID
    $timeStamp: AWSTimestamp
    $domain: [String]
    $scoreCard: AWSJSON
  ) {
    onCreateSSTeMM(
      id: $id
      cognitoId: $cognitoId
      timeStamp: $timeStamp
      domain: $domain
      scoreCard: $scoreCard
    ) {
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
export const onUpdateSsTeMm = /* GraphQL */ `
  subscription OnUpdateSsTeMm(
    $id: ID
    $cognitoId: ID
    $timeStamp: AWSTimestamp
    $domain: [String]
    $scoreCard: AWSJSON
  ) {
    onUpdateSSTeMM(
      id: $id
      cognitoId: $cognitoId
      timeStamp: $timeStamp
      domain: $domain
      scoreCard: $scoreCard
    ) {
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
export const onDeleteSsTeMm = /* GraphQL */ `
  subscription OnDeleteSsTeMm(
    $id: ID
    $cognitoId: ID
    $timeStamp: AWSTimestamp
    $domain: [String]
    $scoreCard: AWSJSON
  ) {
    onDeleteSSTeMM(
      id: $id
      cognitoId: $cognitoId
      timeStamp: $timeStamp
      domain: $domain
      scoreCard: $scoreCard
    ) {
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
