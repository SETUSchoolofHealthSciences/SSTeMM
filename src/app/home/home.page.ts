import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private go: Router, private auth: AuthenticationService) {}

  add(){
    this.go.navigate(['/stress-signature']);
  }

  logout(){
    this.auth.signOut();
  }
}
