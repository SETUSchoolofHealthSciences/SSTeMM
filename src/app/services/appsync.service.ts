import { Injectable } from '@angular/core';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import aws_exports from '../../aws-exports';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root',
})
export class AppsyncService {
  apolloClient;

  constructor() {
    // set up apollo client
    const client = new AWSAppSyncClient({
      url: aws_exports.aws_appsync_graphqlEndpoint,
      region: aws_exports.aws_project_region,
      auth: {
        type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
        jwtToken: async () =>
          (await Auth.currentSession()).getIdToken().getJwtToken(),
      },
    });
    // this.hc = client.hydrated;
    this.apolloClient = client;
  }

  initializeClient() {
    return this.apolloClient.hydrated();
  }
}
