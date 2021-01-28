import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Auth } from 'aws-amplify';
import { listSstemms } from '../../graphql/queries';
import { AppsyncService } from '../services/appsync.service';
import gql from 'graphql-tag';
import { observable } from 'rxjs';
import { StorageService } from '../services/storage.service';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { decode } from 'punycode';

const TOKEN_KEY = 'auth-token';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  signatures = [] as any[];

  constructor(private go: Router,
              private auth: AuthenticationService,
              private appsync: AppsyncService,
              private storageService: StorageService) {
                // this.readData();
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
            variables: {
              filter: {cognitoId: {eq: decoded.sub}}
            }
          });
          for (const con of  observables.data.listSstemms.items) {
            this.signatures.push(con);
          }
        });
    }});
  }

  // read local file
  readData() {
    fetch('./assets/data/stresssignatures.json').then(res => res.json())
      .then(json => {
        for (const con of json.entries) {
          this.signatures.push(con);
        }
        if (this.signatures.length === 0) {
          for (const con of json.entries) {
            this.signatures.push(con);
          }
        }
      });
  }
}
