import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { listSstemms, allItems } from '../../graphql/queries';
import { AppsyncService } from '../services/appsync.service';
import { StorageService } from '../services/storage.service';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { StressSignatue } from '../../API';
import gql from 'graphql-tag';
import { timeStamp } from 'console';


const TOKEN_KEY = 'auth-token';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  signatures = [] as StressSignatue[];

  constructor(private go: Router,
              private auth: AuthenticationService,
              private appsync: AppsyncService,
              private storageService: StorageService) {
                // this.readData();
              }

  ngOnInit(): void {
    
  }

  ionViewDidEnter(){
    this.signatures = [] as StressSignatue[];
    this.fetchData();
  }

  add(){
    this.go.navigate(['/stress-signature']);
  }

  logout(){
    this.auth.signOut();
  }

  fetchData(){
    this.storageService.getLocalData(TOKEN_KEY).then((res) => {
      if (res !== null) {
        const decoded = jwt_decode<JwtPayload>(res);
        this.appsync.initializeClient().then(async client => {
          const query = listSstemms;
          const observables = await client.query({
            query,
            fetchPolicy: 'network-only',
            variables: {
              filter: {cognitoId: {eq: decoded.sub}},
            }
          });
          for (const con of  observables.data.listSstemms.items){
            this.signatures.push(con);
          }
          if (this.signatures.length === 0) {
            for (const con of  observables.data.listSstemms.items) {
              this.signatures.push(con);
            }
          }
        });
        console.log(this.signatures);
      }
    });
  }


}
