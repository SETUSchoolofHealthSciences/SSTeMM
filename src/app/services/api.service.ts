import { Injectable } from '@angular/core';
import { StressSignatue } from '../interface/stress-signature';
import { AppsyncService } from './appsync.service';
import { StorageService } from './storage.service';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { listSsTeMms } from '../../graphql/queries';
import { LoadingController } from '@ionic/angular';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  homeSignatures = [] as StressSignatue[];
  allSignatures = [] as StressSignatue[];
  displayNoEntries = false;

  constructor(private appsync: AppsyncService,
              private storageService: StorageService) { }

  fetchData(loading: LoadingController){
    this.displayNoEntries = false;
    this.allSignatures = [] as StressSignatue[];
    this.homeSignatures = [] as StressSignatue[];
    let observables: any;
    this.storageService.getLocalData(TOKEN_KEY).then(async (res) => {
      if (res !== null) {
        const decoded = jwt_decode<JwtPayload>(res);
        observables = await this.getItems(decoded);
        if (observables.data.listSSTeMMS.items.length === 5) {
          console.log('fiver');
          observables = await this.getItems(decoded);
        }
        observables.data.listSSTeMMS.items.sort((a: StressSignatue, b: StressSignatue) => a.timeStamp < b.timeStamp ? 1 : -1);
        const tempobs = observables.data.listSSTeMMS.items;
        console.log('length ', observables.data.listSSTeMMS.items.length);
        for (const con of  observables.data.listSSTeMMS.items){
            this.allSignatures.push(con);
          }
        tempobs.splice(5);
        for (const con of  tempobs){
            this.homeSignatures.push(con);
          }
        if (this.allSignatures.length === 0) {
            this.displayNoEntries = true;
          }
        loading.dismiss();
      }
    });
  }

  private async getItems(token: JwtPayload){
    let results: any;
    await this.appsync.initializeClient().then(async client => {
      const query = listSsTeMms;
      results =  await client.query({
        query,
        fetchPolicy: 'network-only',
        variables: {
          filter: {cognitoId: {eq: token.sub}},
          limit: 500
        }
      });
    });
    return results;
  }
}
