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
    this.storageService.getLocalData(TOKEN_KEY).then((res) => {
      if (res !== null) {
        const decoded = jwt_decode<JwtPayload>(res);
        this.appsync.initializeClient().then(async client => {
          console.log('scanlop client ', client)
          const query = listSsTeMms;
          const observables = await client.query({
            query,
            fetchPolicy: 'network-only',
            variables: {
              filter: {cognitoId: {eq: decoded.sub}},
            }
          });
          observables.data.listSSTeMMS.items.sort((a: StressSignatue, b: StressSignatue) => a.timeStamp < b.timeStamp ? 1 : -1);
          for (const con of  observables.data.listSSTeMMS.items){
            console.log('length ', observables.data.listSSTeMMS.items.length)
            this.allSignatures.push(con);
          }
          observables.data.listSSTeMMS.items.splice(5);
          for (const con of  observables.data.listSSTeMMS.items){
            this.homeSignatures.push(con);
          }
          if (this.allSignatures.length === 0) {
            this.displayNoEntries = true;
          }
          loading.dismiss();
        });
      }
    });
  }
}
