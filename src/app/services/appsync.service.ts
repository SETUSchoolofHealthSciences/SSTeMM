import { Injectable } from '@angular/core';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import { Auth } from 'aws-amplify';
import { awsappsyncgraphqlEndpoint, awsappsyncregion } from 'config';

@Injectable({
  providedIn: 'root',
})
export class AppsyncService {
  apolloClient;

  constructor() {
    // set up apollo client
    const client = new AWSAppSyncClient({
      url: awsappsyncgraphqlEndpoint,
      region: awsappsyncregion,
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
