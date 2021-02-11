/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSSTeMMInput = {
  cognitoId: string,
  timeStamp: number,
  domain?: Array< string | null > | null,
  scoreCard?: string | null,
  totalScore?: number | null,
  reflection?: string | null,
};

export type UpdateSSTeMMInput = {
  id: string,
  cognitoId?: string | null,
  timeStamp: number,
  domain?: Array< string | null > | null,
  scoreCard?: string | null,
  totalScore?: number | null,
  reflection?: string | null,
};

export type DeleteSSTeMMInput = {
  id: string,
  timeStamp: number,
};

export type TableSSTeMMFilterInput = {
  id?: TableIDFilterInput | null,
  cognitoId?: TableIDFilterInput | null,
  timeStamp?: TableIntFilterInput | null,
  domain?: TableStringFilterInput | null,
  totalScore?: TableIntFilterInput | null,
  reflection?: TableStringFilterInput | null,
};

export type TableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateSsTeMmMutationVariables = {
  input: CreateSSTeMMInput,
};

export type CreateSsTeMmMutation = {
  createSSTeMM:  {
    __typename: "SSTeMM",
    id: string,
    cognitoId: string,
    timeStamp: number,
    domain: Array< string | null > | null,
    scoreCard: string | null,
    totalScore: number | null,
    reflection: string | null,
  } | null,
};

export type UpdateSsTeMmMutationVariables = {
  input: UpdateSSTeMMInput,
};

export type UpdateSsTeMmMutation = {
  updateSSTeMM:  {
    __typename: "SSTeMM",
    id: string,
    cognitoId: string,
    timeStamp: number,
    domain: Array< string | null > | null,
    scoreCard: string | null,
    totalScore: number | null,
    reflection: string | null,
  } | null,
};

export type DeleteSsTeMmMutationVariables = {
  input: DeleteSSTeMMInput,
};

export type DeleteSsTeMmMutation = {
  deleteSSTeMM:  {
    __typename: "SSTeMM",
    id: string,
    cognitoId: string,
    timeStamp: number,
    domain: Array< string | null > | null,
    scoreCard: string | null,
    totalScore: number | null,
    reflection: string | null,
  } | null,
};

export type GetSsTeMmQueryVariables = {
  id: string,
  timeStamp: number,
};

export type GetSsTeMmQuery = {
  getSSTeMM:  {
    __typename: "SSTeMM",
    id: string,
    cognitoId: string,
    timeStamp: number,
    domain: Array< string | null > | null,
    scoreCard: string | null,
    totalScore: number | null,
    reflection: string | null,
  } | null,
};

export type ListSsTeMmsQueryVariables = {
  filter?: TableSSTeMMFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSsTeMmsQuery = {
  listSSTeMMS:  {
    __typename: "SSTeMMConnection",
    items:  Array< {
      __typename: "SSTeMM",
      id: string,
      cognitoId: string,
      timeStamp: number,
      domain: Array< string | null > | null,
      scoreCard: string | null,
      totalScore: number | null,
      reflection: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateSsTeMmSubscriptionVariables = {
  id?: string | null,
  cognitoId?: string | null,
  timeStamp?: number | null,
  domain?: Array< string | null > | null,
  scoreCard?: string | null,
};

export type OnCreateSsTeMmSubscription = {
  onCreateSSTeMM:  {
    __typename: "SSTeMM",
    id: string,
    cognitoId: string,
    timeStamp: number,
    domain: Array< string | null > | null,
    scoreCard: string | null,
    totalScore: number | null,
    reflection: string | null,
  } | null,
};

export type OnUpdateSsTeMmSubscriptionVariables = {
  id?: string | null,
  cognitoId?: string | null,
  timeStamp?: number | null,
  domain?: Array< string | null > | null,
  scoreCard?: string | null,
};

export type OnUpdateSsTeMmSubscription = {
  onUpdateSSTeMM:  {
    __typename: "SSTeMM",
    id: string,
    cognitoId: string,
    timeStamp: number,
    domain: Array< string | null > | null,
    scoreCard: string | null,
    totalScore: number | null,
    reflection: string | null,
  } | null,
};

export type OnDeleteSsTeMmSubscriptionVariables = {
  id?: string | null,
  cognitoId?: string | null,
  timeStamp?: number | null,
  domain?: Array< string | null > | null,
  scoreCard?: string | null,
};

export type OnDeleteSsTeMmSubscription = {
  onDeleteSSTeMM:  {
    __typename: "SSTeMM",
    id: string,
    cognitoId: string,
    timeStamp: number,
    domain: Array< string | null > | null,
    scoreCard: string | null,
    totalScore: number | null,
    reflection: string | null,
  } | null,
};
