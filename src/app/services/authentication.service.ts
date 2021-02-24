import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { Auth } from 'aws-amplify';
import { BehaviorSubject } from 'rxjs';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { StorageService } from './storage.service';
import { TranslateService } from '@ngx-translate/core';

const TOKEN_KEY = 'auth-token';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private toastMessage: string;
  private alertHeader: string;
  private alertMessage: string;
  private alertButton: string;
  private alertErrorHeader: string;
  emailAddress: '';
  authenticationState = new BehaviorSubject(false);
  constructor(private go: Router,
              private plt: Platform,
              private storageService: StorageService,
              private toaster: ToastController,
              private alertController: AlertController,
              private translate: TranslateService) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  checkToken() {
    this.storageService.getLocalData(TOKEN_KEY).then((res) => {
      if (res === null) {
        this.authenticationState.next(false);
      } else {
        this.validateToken(res);
      }
    });
  }

  private signTranslations(){
    this.translate.get('toasts.successLogin').subscribe(
      value => {
        this.toastMessage = value;
      }
    );
    this.translate.get('alerts.authErrorHeader').subscribe(
      value => {
        this.alertHeader = value;
      }
    );
    this.translate.get('alerts.buttonOk').subscribe(
      value => {
        this.alertButton = value;
      }
    );
  }

  async signIn(username: string, password: string) {
    this.signTranslations();
    try {
      const user = await Auth.signIn(username.toString(), password.toString());
      const tokens = user.signInUserSession;
      if (tokens != null){
        this.setLogin(tokens.idToken.jwtToken);
        const toast = this.toaster.create({
          message: this.toastMessage,
          duration: 3000,
          position: 'top'
        });
        // tslint:disable-next-line: no-shadowed-variable
        toast.then(toast => toast.present());
        this.go.navigate(['home']);
      }
    } catch (error) {
      const alert = await this.alertController.create({
        header: this.alertHeader,
        message: error.message,
        buttons: [
          {
            text: this.alertButton,
            handler: () => {
              console.log('pressed');
            }
          }
        ]
      });
      await alert.present();
    }
  }

  private RegisterTranslations(){
    this.translate.get('alerts.emailVerHeader').subscribe(
      value => {
        this.alertHeader = value;
      }
    );
    this.translate.get('alerts.email.VerMessage').subscribe(
      value => {
        this.alertMessage = value;
      }
    );
    this.translate.get('alerts.errorHeader').subscribe(
      value => {
        this.alertErrorHeader = value;
      }
    );
    this.translate.get('alerts.buttonOk').subscribe(
      value => {
        this.alertButton = value;
      }
    );
  }
  register(email: string, password: string, firstName: string,
           lastName: string, hospital?: string, college?: string, collegeYear?: number) {
    this.RegisterTranslations();
    try {
      Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
          given_name: firstName,
          family_name: lastName,
          'custom:hospital': hospital,
          'custom:college': college,
          'custom:collegeyear': collegeYear.toString(),
        },
        validationData: []
      }).then(async data => {
        const alert = await this.alertController.create({
          header: this.alertHeader,
          message: this.alertMessage,
          buttons: [
            {
              text: this.alertButton,
              handler: () => {
                this.go.navigate(['/login']);
              }
            }
          ]
        });
        await alert.present();

      }).catch(async error => {
        const alert = await this.alertController.create({
          header: this.alertErrorHeader,
          message: error.message,
          buttons: [
            {
              text: this.alertButton,
              handler: () => {
                console.log('pressed');
              }
            }
          ]
        });
        await alert.present();
      });
    } catch (error) {
      console.log('error signing up ', error);
    }
  }

  private resendTranslations() {
    this.translate.get('alerts.emailVerHeader').subscribe(
      value => {
        this.alertHeader = value;
      }
    );
    this.translate.get('alerts.emailCode').subscribe(
      value => {
        this.alertMessage = value;
      }
    );
    this.translate.get('alerts.errorHeader').subscribe(
      value => {
        this.alertErrorHeader = value;
      }
    );
    this.translate.get('alerts.buttonOk').subscribe(
      value => {
        this.alertButton = value;
      }
    );
  }
  async resendConfirmationCode(username: string) {
    this.resendTranslations();
    try {
      await Auth.resendSignUp(username);
      const alert = await this.alertController.create({
        header: this.alertHeader,
        message: this.alertMessage,
        buttons: [
          {
            text: this.alertButton,
            handler: () => {
              console.log('pressed');
            }
          }
        ]
      });
      await alert.present();
    } catch (err) {
      const alert = await this.alertController.create({
        header: this.alertErrorHeader,
        message: err.message,
        buttons: [
          {
            text: this.alertButton,
            handler: () => {
              console.log('pressed');
            }
          }
        ]
      });
      await alert.present();
    }
  }

  private confirmSignUpWithCodeTranslation() {
    this.translate.get('toasts.verifySuccess').subscribe(
      value => {
        this.toastMessage = value;
      }
    );
    this.translate.get('alerts.errorHeader').subscribe(
      value => {
        this.alertErrorHeader = value;
      }
    );
    this.translate.get('alerts.buttonOk').subscribe(
      value => {
        this.alertButton = value;
      }
    );
  }
   // can use code for verification
   async confirmSignUpWithCode(username: string, code: string) {
     this.confirmSignUpWithCodeTranslation();
     try {
      await Auth.confirmSignUp(username, code);
      const toast = this.toaster.create({
        message: this.toastMessage,
        duration: 3000,
        position: 'bottom'
      });
      // tslint:disable-next-line: no-shadowed-variable
      toast.then(toast => toast.present());
    } catch (error) {
      const alert = await this.alertController.create({
        header: this.alertErrorHeader,
        message: error.message,
        buttons: [
          {
            text: this.alertButton,
            handler: () => {
              console.log('pressed');
            }
          }
        ]
      });
      await alert.present();
    }
  }

  private signoutTranslation() {
    this.translate.get('toasts.logoutSuccess').subscribe(
      value => {
        this.toastMessage = value;
      }
    );
    this.translate.get('alerts.errorHeader').subscribe(
      value => {
        this.alertErrorHeader = value;
      }
    );
    this.translate.get('alerts.buttonOk').subscribe(
      value => {
        this.alertButton = value;
      }
    );
  }
  async signOut() {
    this.signoutTranslation();
    try {
      await Auth.signOut().then((response) => {
        const toast = this.toaster.create({
          message: this.toastMessage,
          duration: 3000,
          position: 'top'
        });
        // tslint:disable-next-line: no-shadowed-variable
        toast.then(toast => toast.present());
        this.go.navigate(['login']);
        this.storageService.removeLocalData(TOKEN_KEY);
        this.authenticationState.next(false);
      });
    } catch (error) {
      const alert = await this.alertController.create({
        header: this.alertErrorHeader,
        message: error.message,
        buttons: [
          {
            text: this.alertButton,
            handler: () => {
              console.log('pressed');
            }
          }
        ]
      });
      await alert.present();
      this.authenticationState.next(true);
    }
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  private validateToken(token: any) {
    const decoded = jwt_decode<JwtPayload>(token);
    if (Date.now() < decoded.exp * 1000) {
      this.authenticationState.next(true);
    } else {
      this.authenticationState.next(false);
    }
  }

  private setLogin(token: string){
    return this.storageService.setLocalData(TOKEN_KEY, token).then(() => {
      this.validateToken(token);
    });
  }

  forgotPassword(email: string) {
    return Auth.forgotPassword(email);
  }

  submitCode(email: string, code: string, password: string) {
    return Auth.forgotPasswordSubmit(email, code, password);
  }
}
