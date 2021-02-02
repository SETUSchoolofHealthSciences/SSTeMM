import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { CreateSstemmInput } from '../../API';
import { AppsyncService } from '../services/appsync.service';
import { StorageService } from '../services/storage.service';
import { createSstemm } from '../../graphql/mutations';

const TOKEN_KEY = 'auth-token';

@Component({
  selector: 'app-stress-signature',
  templateUrl: './stress-signature.page.html',
  styleUrls: ['./stress-signature.page.scss'],
})
export class StressSignaturePage implements OnInit {
  stressSignature = {} as CreateSstemmInput;
  public isDomainHidden = false;
  public isChoiceHidden = true;

  constructor(private go: Router,
              private appsync: AppsyncService,
              private storageService: StorageService) { }

  ngOnInit() {
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
    this.go.navigate(['/home']);
  }

  save(){
    this.storageService.getLocalData(TOKEN_KEY).then((res) => {
      if (res !== null) {
        const decoded = jwt_decode<JwtPayload>(res);
        this.appsync.initializeClient().then(async client => {
          const data: CreateSstemmInput = {
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
