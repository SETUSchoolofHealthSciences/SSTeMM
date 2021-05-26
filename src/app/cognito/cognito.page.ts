import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import Amplify from 'aws-amplify';
import { awscognitoregion, awsuserpoolsidie, awsuserpoolswebclientidie,
  awsuserpoolsidsi, awsuserpoolswebclientidsi, awsuserpoolsides, awsuserpoolswebclientides } from 'config';
import { StorageService } from '../services/storage.service';

const COUNTRY = 'country';
@Component({
  selector: 'app-cognito',
  templateUrl: './cognito.page.html',
  styleUrls: ['./cognito.page.scss'],
})
export class CognitoPage implements OnInit {

  constructor(private storage: StorageService,
              private route: NavController,
              private translate: TranslateService) { }

  ngOnInit() {
  }

  selectCountry(country: string){
    console.log('pressed', country);
    this.storage.setLocalData(COUNTRY, country);
    switch (country) {
      case 'ireland': {
        Amplify.configure({
          Auth: {
            mandatorySignIn: true,
            region: awscognitoregion,
            userPoolId: awsuserpoolsidie,
            userPoolWebClientId: awsuserpoolswebclientidie,
            authenticationFlowType: 'USER_PASSWORD_AUTH'
          }
        });
        this.storage.setLocalData('lang', 'en');
        this.translate.use('en');
        this.route.navigateBack(['login']);
        break;
      }
      case 'slovenia': {
        Amplify.configure({
          Auth: {
            mandatorySignIn: true,
            region: awscognitoregion,
            userPoolId: awsuserpoolsidsi,
            userPoolWebClientId: awsuserpoolswebclientidsi,
            authenticationFlowType: 'USER_PASSWORD_AUTH'
          }
        });
        this.storage.setLocalData('lang', 'si');
        this.translate.use('si');
        this.route.navigateBack(['login']);
        break;
      }
      case 'spain': {
        Amplify.configure({
          Auth: {
            mandatorySignIn: true,
            region: awscognitoregion,
            userPoolId: awsuserpoolsides,
            userPoolWebClientId: awsuserpoolswebclientides,
            authenticationFlowType: 'USER_PASSWORD_AUTH'
          }
        });
        this.storage.setLocalData('lang', 'es');
        this.translate.use('es');
        this.route.navigateBack(['login']);
        break;
      }
      default: {
        this.route.navigateBack(['cognito']);
      }
    }
  }
}
