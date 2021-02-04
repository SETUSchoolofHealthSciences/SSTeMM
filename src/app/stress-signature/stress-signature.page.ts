import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { CreateSstemmInput } from '../../API';
import { AppsyncService } from '../services/appsync.service';
import { StorageService } from '../services/storage.service';
import { createSstemm } from '../../graphql/mutations';
import { StressSignature } from '../model/StressSignature';
import { TotalScore } from '../interface/stress-signature';

const TOKEN_KEY_ONE = 'auth-token';
const TOKEN_KEY_TWO = 'domain-quest';
@Component({
  selector: 'app-stress-signature',
  templateUrl: './stress-signature.page.html',
  styleUrls: ['./stress-signature.page.scss'],
})
export class StressSignaturePage implements OnInit {
  stressSignature = {} as StressSignature;
  testInterface = [] as TotalScore[];
  public isDomainHidden = false;
  public isChoiceHidden = true;

  constructor(private go: Router,
              private appsync: AppsyncService,
              private storageService: StorageService) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.storageService.getLocalData(TOKEN_KEY_TWO).then((res) => {
      this.testInterface.push(res);
      console.log('REturn value ', res);
    });
  }

  pickDomain(){
    this.isDomainHidden = true;
    this.isChoiceHidden = false;
  }

  thoughts(){
    this.go.navigate(['/stress-questions/think']);
    this.isDomainHidden = false;
    this.isChoiceHidden = true;
  }

  feelings(){
    this.go.navigate(['/stress-questions/feel']);
    this.isDomainHidden = false;
    this.isChoiceHidden = true;
  }

  behaviours(){
    this.go.navigate(['/stress-questions/do']);
    this.isDomainHidden = false;
    this.isChoiceHidden = true;
  }

  cancel(){
    // this.go.navigate(['/home']);
    console.log(this.testInterface)
  }

  save(){
    this.storageService.getLocalData(TOKEN_KEY_ONE).then((res) => {
      if (res !== null) {
        const decoded = jwt_decode<JwtPayload>(res);
        this.appsync.initializeClient().then(async client => {
          const data: StressSignature = {
            cognitoId: decoded.sub,
            domain: JSON.stringify(['thoughts', 'feelings']),
            timestamp: new Date().toISOString(),
            score: 65,
            reflection: this.stressSignature.reflection
          };
          const mut = createSstemm;
          const mutation = client.mutate({
            mutation: mut,
            variables: {
              input: data
            }
          });
          console.log('DATA ', mutation);
        });
    }});
    this.go.navigate(['/home']);
  }
}