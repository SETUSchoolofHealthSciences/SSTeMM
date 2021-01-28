import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Auth } from 'aws-amplify';
import { listSstemms } from '../../graphql/queries';
import { AppsyncService } from '../services/appsync.service';
import gql from 'graphql-tag';
import { observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  signatures = [] as any[];

  constructor(private go: Router, private auth: AuthenticationService, private appsync: AppsyncService) {
    this.readData();
    this.fetchData();
  }
  ngOnInit(): void {
    Auth.currentSession().then(session => {
      this.logInfoToConsole(session);
    });
  }

  add(){
    this.go.navigate(['/stress-signature']);
  }

  logout(){
    this.auth.signOut();
  }

  fetchData(){
    this.appsync.initializeClient().then(client => {
      console.log('CLIENT ', client);
      // tslint:disable-next-line: no-shadowed-variable
      const query = listSstemms;
      const observable = client.query({
        query,
        variables: {
          filter: {cognitoId: {eq: '08ea6725-6c74-4390-8cd5-bcf28ff806a9'}}
        }
      });
      console.log('OBSERVE ', observable);

    });
  }

  readData() {
    fetch('./assets/data/stresssignatures.json').then(res => res.json())
      .then(json => {
        console.log('data ', json);
        for (const con of json.entries) {
          this.signatures.push(con);
        }
        if (this.signatures.length === 0) {
          for (const con of json.entries) {
            this.signatures.push(con);
          }
        }
        // this.notifications = json.features;
        console.log(this.signatures);
      });
  }

  logInfoToConsole(session) {
    console.log(session);
    console.log(`ID Token: <${session.idToken.jwtToken}>`);
    console.log(`Access Token: <${session.accessToken.jwtToken}>`);
    console.log('Decoded ID Token:');
    console.log(JSON.stringify(session.idToken.payload, null, 2));
    console.log('Decoded Acess Token:');
    console.log(JSON.stringify(session.accessToken.payload, null, 2));
  }

}
