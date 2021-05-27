import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './services/storage.service';
import Amplify from 'aws-amplify';
import { awscognitoregion, awsuserpoolsides, awsuserpoolsidie,
  awsuserpoolsidsi, awsuserpoolswebclientides, awsuserpoolswebclientidie, awsuserpoolswebclientidsi } from 'config';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
    private router: Router,
    public translate: TranslateService,
    private storageService: StorageService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.storageService.getLocalData('country').then(country => {
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
            this.authenticationService.authenticationState.subscribe(state => {
              if (state) {
                this.router.navigate(['']);
              } else {
                this.router.navigate(['login']);
              }
            });
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
            this.authenticationService.authenticationState.subscribe(state => {
              if (state) {
                this.router.navigate(['']);
              } else {
                this.router.navigate(['login']);
              }
            });
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
            this.authenticationService.authenticationState.subscribe(state => {
              if (state) {
                this.router.navigate(['']);
              } else {
                this.router.navigate(['login']);
              }
            });
            break;
          }
          default: {
            this.router.navigate(['cognito']);
          }
        }
      });
      this.storageService.getLocalData('lang').then((language) => {
        if (language === null || language === undefined) {
          this.translate.use('en');
        } else {
          this.translate.use(language);
        }
      });
    });
  }
}
