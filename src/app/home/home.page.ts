import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  signatures = [] as any[];

  constructor(private go: Router, private auth: AuthenticationService) {
    this.readData();
  }

  add(){
    this.go.navigate(['/stress-signature']);
  }

  logout(){
    this.auth.signOut();
  }

  readData() {
    fetch('./assets/data/stresssignatures.json').then(res => res.json())
      .then(json => {
        console.log('data ', json)
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

}
