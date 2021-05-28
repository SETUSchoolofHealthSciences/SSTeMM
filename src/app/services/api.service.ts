import { Injectable } from '@angular/core';
import { StressSignatue } from '../interface/stress-signature';
import { AppsyncService } from './appsync.service';
import { StorageService } from './storage.service';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { listSsTeMms } from '../../graphql/queries';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AuthenticationService } from './authentication.service';
import { TranslationService } from './translation.service';
const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  homeSignatures = [] as StressSignatue[];
  allSignatures = [] as StressSignatue[];
  displayNoEntries = false;

  constructor(private appsync: AppsyncService,
              private route: NavController,
              private auth: AuthenticationService,
              private toaster: ToastController,
              private translate: TranslationService) { }

  async fetchData(loading: LoadingController){
    this.displayNoEntries = false;
    this.allSignatures = [] as StressSignatue[];
    this.homeSignatures = [] as StressSignatue[];
    let observables: any;
    await this.auth.checkToken();
    if (this.auth.authenticationState) {
      observables = await this.getItems(this.auth.currentToken);
      if (observables.data.listSSTeMMS.items.length === 5) {
        console.log('fiver');
        observables = await this.getItems(this.auth.currentToken);
      }
      observables.data.listSSTeMMS.items.sort((a: StressSignatue, b: StressSignatue) => a.timeStamp < b.timeStamp ? 1 : -1);
      console.log('length ', observables.data.listSSTeMMS.items.length);
      for (const con of  observables.data.listSSTeMMS.items){
            this.allSignatures.push(con);
      }
      this.slice();
      if (this.allSignatures.length === 0) {
        this.displayNoEntries = true;
      }
      loading.dismiss();
    } else {
      this.translate.timeout();
      const toast = this.toaster.create({
        message: this.translate.toastMessage,
        duration: 3000,
        position: 'top'
      });
      // tslint:disable-next-line: no-shadowed-variable
      toast.then(toast => toast.present());
      this.route.navigateRoot(['login']);
    }
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

  slice(){
    const size = 5;
    const sliced = this.allSignatures.slice(0, size);
    this.homeSignatures = sliced;
  }
}
