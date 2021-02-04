/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSstemmInput = {
  cognitoId: string,
  timestamp: string,
  domain?: string | null,
  score?: number | null,
  reflection?: string | null,
};

export type UpdateSstemmInput = {
  id: string,
  cognitoId?: string | null,
  timestamp?: string | null,
  domain?: string | null,
  score?: number | null,
  reflection?: string | null,
};

export type DeleteSstemmInput = {
  id: string,
};

export type TableSstemmFilterInput = {
  id?: TableIDFilterInput | null,
  cognitoId?: TableIDFilterInput | null,
  timestamp?: TableStringFilterInput | null,
  score?: TableIntFilterInput | null,
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

export type CreateSstemmMutationVariables = {
  input: CreateSstemmInput,
};

export type CreateSstemmMutation = {
  createSstemm:  {
    __typename: "sstemm",
    id: string,
    cognitoId: string,
    timestamp: string,
    domain: string | null,
    score: number | null,
    reflection: string | null,
  } | null,
};

export type UpdateSstemmMutationVariables = {
  input: UpdateSstemmInput,
};

export type UpdateSstemmMutation = {
  updateSstemm:  {
    __typename: "sstemm",
    id: string,
    cognitoId: string,
    timestamp: string,
    domain: string | null,
    score: number | null,
    reflection: string | null,
  } | null,
};

export type DeleteSstemmMutationVariables = {
  input: DeleteSstemmInput,
};

export type DeleteSstemmMutation = {
  deleteSstemm:  {
    __typename: "sstemm",
    id: string,
    cognitoId: string,
    timestamp: string,
    domain: string | null,
    score: number | null,
    reflection: string | null,
  } | null,
};

export type GetSstemmQueryVariables = {
  id: string,
};

export type GetSstemmQuery = {
  getSstemm:  {
    __typename: "sstemm",
    id: string,
    cognitoId: string,
    timestamp: string,
    domain: string | null,
    score: number | null,
    reflection: string | null,
  } | null,
};

export type ListSstemmsQueryVariables = {
  filter?: TableSstemmFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSstemmsQuery = {
  listSstemms:  {
    __typename: "sstemmConnection",
    items:  Array< {
      __typename: "sstemm",
      id: string,
      cognitoId: string,
      timestamp: string,
      domain: string | null,
      score: number | null,
      reflection: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateSstemmSubscriptionVariables = {
  id?: string | null,
  cognitoId?: string | null,
  timestamp?: string | null,
  domain?: string | null,
  score?: number | null,
};

export type OnCreateSstemmSubscription = {
  onCreateSstemm:  {
    __typename: "sstemm",
    id: string,
    cognitoId: string,
    timestamp: string,
    domain: string | null,
    score: number | null,
    reflection: string | null,
  } | null,
};

export type OnUpdateSstemmSubscriptionVariables = {
  id?: string | null,
  cognitoId?: string | null,
  timestamp?: string | null,
  domain?: string | null,
  score?: number | null,
};

export type OnUpdateSstemmSubscription = {
  onUpdateSstemm:  {
    __typename: "sstemm",
    id: string,
    cognitoId: string,
    timestamp: string,
    domain: string | null,
    score: number | null,
    reflection: string | null,
  } | null,
};

export type OnDeleteSstemmSubscriptionVariables = {
  id?: string | null,
  cognitoId?: string | null,
  timestamp?: string | null,
  domain?: string | null,
  score?: number | null,
};

export type OnDeleteSstemmSubscription = {
  onDeleteSstemm:  {
    __typename: "sstemm",
    id: string,
    cognitoId: string,
    timestamp: string,
    domain: string | null,
    score: number | null,
    reflection: string | null,
  } | null,
};

export type StressSignatue = {
  id: string;
  cognitoId: string;
  timestamp: string;
  domain: string | null;
  score: number | null;
  reflection: string | null;
};
