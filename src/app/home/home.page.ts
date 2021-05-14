import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { StressSignatue } from '../interface/stress-signature';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private go: Router,
              private auth: AuthenticationService,
              private api: ApiService) {}

  ngOnInit(): void {
  }

  ionViewDidEnter(){
    this.api.displayNoEntries = false;
    this.api.allSignatures = [] as StressSignatue[];
    this.api.homeSignatures = [] as StressSignatue[];
    this.api.fetchData();
  }

  add(){
    this.go.navigate(['tabs/stress-signature']);
  }

  logout(){
    this.auth.signOut();
  }
}
