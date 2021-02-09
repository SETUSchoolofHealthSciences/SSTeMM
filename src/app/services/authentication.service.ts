import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { Auth } from 'aws-amplify';
import { BehaviorSubject } from 'rxjs';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { StorageService } from './storage.service';

const TOKEN_KEY = 'auth-token';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  emailAddress: '';
  authenticationState = new BehaviorSubject(false);
  constructor(private go: Router,
              private plt: Platform,
              private storageService: StorageService,
              private toaster: ToastController,
              private alertController: AlertController) {
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
    try {
      const user = await Auth.signIn(username.toString(), password.toString());
      const tokens = user.signInUserSession;
      if (tokens != null){
        this.setLogin(tokens.idToken.jwtToken);
        const toast = this.toaster.create({
          message: 'You are logged in successfully!',
          duration: 3000,
          position: 'top'
        });
        // tslint:disable-next-line: no-shadowed-variable
        toast.then(toast => toast.present());
        this.go.navigate(['home']);
      }
    } catch (error) {
      const alert = await this.alertController.create({
        header: 'Authenication Error',
        message: error.message,
        buttons: [
          {
            text: 'Ok',
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
          header: 'Email Verification',
          message: 'Please check your emails to verify your account.',
          buttons: [
            {
              text: 'Ok',
              handler: () => {
                this.go.navigate(['/login']);
              }
            }
          ]
        });
        await alert.present();

      }).catch(async error => {
        const alert = await this.alertController.create({
          header: 'Authenication Error',
          message: error.message,
          buttons: [
            {
              text: 'Ok',
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
    try {
      await Auth.resendSignUp(username);
      const alert = await this.alertController.create({
        header: 'Email Verification',
        message: 'Please check emails for new code.',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              console.log('pressed');
            }
          }
        ]
      });
      await alert.present();
    } catch (err) {
      const alert = await this.alertController.create({
        header: 'Authenication Error',
        message: err.message,
        buttons: [
          {
            text: 'Ok',
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
    try {
      await Auth.confirmSignUp(username, code);
      const toast = this.toaster.create({
        message: 'Your account is now verified.',
        duration: 3000,
        position: 'bottom'
      });
      // tslint:disable-next-line: no-shadowed-variable
      toast.then(toast => toast.present());
    } catch (error) {
      const alert = await this.alertController.create({
        header: 'Authenication Error',
        message: error.message,
        buttons: [
          {
            text: 'Ok',
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
    try {
      await Auth.signOut().then((response) => {
        const toast = this.toaster.create({
          message: 'You are signed out successfully!',
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
        header: 'Authenication Error',
        message: error.message,
        buttons: [
          {
            text: 'Ok',
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
