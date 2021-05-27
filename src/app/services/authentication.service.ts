import { Injectable } from '@angular/core';
import { AlertController, NavController, Platform, ToastController } from '@ionic/angular';
import { Auth } from 'aws-amplify';
import { BehaviorSubject } from 'rxjs';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { StorageService } from './storage.service';
import { TranslationService } from './translation.service';

const TOKEN_KEY = 'auth-token';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  emailAddress: '';
  authenticationState = new BehaviorSubject(false);
  private user: any;
  constructor(private go: NavController,
              private plt: Platform,
              private storageService: StorageService,
              private toaster: ToastController,
              private alertController: AlertController,
              private translate: TranslationService) {
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

  async signIn(username: string, password: string) {
    this.translate.signTranslations();
    try {
      const user = await Auth.signIn(username.toString(), password.toString());
      const tokens = user.signInUserSession;
      if (tokens != null){
        this.go.navigateForward(['/tabs/home']);
        this.setLogin(tokens.idToken.jwtToken);
        const toast = this.toaster.create({
          message: this.translate.toastMessage,
          duration: 3000,
          position: 'top'
        });
        // tslint:disable-next-line: no-shadowed-variable
        toast.then(toast => toast.present());
      }
    } catch (error) {
      const alert = await this.alertController.create({
        header: this.translate.alertHeader,
        message: error.message,
        buttons: [
          {
            text: this.translate.alertButtonOne,
            handler: () => {
              console.log('pressed');
            }
          }
        ]
      });
      await alert.present();
    }
  }

  register(email: string, password: string, firstName: string,
           lastName: string, hospital?: string, college?: string, collegeYear?: number) {
    this.translate.RegisterTranslations();
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
          header: this.translate.alertHeader,
          message: this.translate.alertMessage,
          buttons: [
            {
              text: this.translate.alertButtonOne,
              handler: () => {
                this.go.navigateBack(['/login']);
              }
            }
          ]
        });
        await alert.present();

      }).catch(async error => {
        const alert = await this.alertController.create({
          header: this.translate.alertErrorHeader,
          message: error.message,
          buttons: [
            {
              text: this.translate.alertButtonOne,
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

  async resendConfirmationCode(username: string) {
    this.translate.resendTranslations();
    try {
      await Auth.resendSignUp(username);
      const alert = await this.alertController.create({
        header: this.translate.alertHeader,
        message: this.translate.alertMessage,
        buttons: [
          {
            text: this.translate.alertButtonOne,
            handler: () => {
              this.go.navigateBack(['/login']);
            }
          }
        ]
      });
      await alert.present();
    } catch (err) {
      const alert = await this.alertController.create({
        header: this.translate.alertErrorHeader,
        message: err.message,
        buttons: [
          {
            text: this.translate.alertButtonOne,
            handler: () => {
              console.log('pressed');
            }
          }
        ]
      });
      await alert.present();
    }
  }

   // can use code for verification
   async confirmSignUpWithCode(username: string, code: string) {
     this.translate.confirmSignUpWithCodeTranslation();
     try {
      await Auth.confirmSignUp(username, code);
      const toast = this.toaster.create({
        message: this.translate.toastMessage,
        duration: 3000,
        position: 'bottom'
      });
      // tslint:disable-next-line: no-shadowed-variable
      toast.then(toast => toast.present());
    } catch (error) {
      const alert = await this.alertController.create({
        header: this.translate.alertErrorHeader,
        message: error.message,
        buttons: [
          {
            text: this.translate.alertButtonOne,
            handler: () => {
              console.log('pressed');
            }
          }
        ]
      });
      await alert.present();
    }
  }

  async signOut() {
    this.translate.signoutTranslation();
    try {
      await Auth.signOut().then((response) => {
        const toast = this.toaster.create({
          message: this.translate.toastMessage,
          duration: 3000,
          position: 'top'
        });
        // tslint:disable-next-line: no-shadowed-variable
        toast.then(toast => toast.present());
        this.go.navigateBack(['login']);
        this.storageService.removeLocalData(TOKEN_KEY);
        this.authenticationState.next(false);
      });
    } catch (error) {
      const alert = await this.alertController.create({
        header: this.translate.alertErrorHeader,
        message: error.message,
        buttons: [
          {
            text: this.translate.alertButtonOne,
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

  async getCurrentUserAttributes(){
    this.user = await Auth.currentAuthenticatedUser();
    return this.user.attributes;
  }

  async updateUserAttributes(firstName: string, lastName: string, hospital?: string,
                             college?: string, collegeYear?: number){
    this.translate.UpdateProfile();
    Auth.updateUserAttributes(this.user, {
      given_name: firstName,
      family_name: lastName,
      'custom:hospital': hospital,
      'custom:college': college,
      'custom:collegeyear': collegeYear.toString()
    }).then(async response => {
      if (response === 'SUCCESS'){
        const alert = await this.alertController.create({
          header: this.translate.alertHeader,
          message: this.translate.alertMessage,
          buttons: [
            {
              text: this.translate.alertButtonOne,
              handler: () => {
                this.go.navigateBack(['/tabs/home']);
              }
            }
          ]
        });
        await alert.present();
      }
    }).catch(async error => {
      console.log(JSON.stringify(error));
      const alert = await this.alertController.create({
        header: this.translate.alertErrorHeader,
        message: this.translate.alertErrorMessage,
        buttons: [
          {
            text: this.translate.alertButtonOne,
            handler: () => {
              console.log('pressed');
            }
          }
        ]
      });
      await alert.present();
    });
  }
}
