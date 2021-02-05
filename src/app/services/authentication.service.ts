import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, ToastController } from '@ionic/angular';
import { Auth } from 'aws-amplify';
import { BehaviorSubject } from 'rxjs';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { StorageService } from './storage.service';

const TOKEN_KEY = 'auth-token';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  authenticationState = new BehaviorSubject(false);
  constructor(private go: Router,
              private plt: Platform,
              private storageService: StorageService,
              private toaster: ToastController) {
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
          position: 'bottom'
        });
        // tslint:disable-next-line: no-shadowed-variable
        toast.then(toast => toast.present());
        this.go.navigate(['home']);
      }
    } catch (error) {
      console.log('Login Error ', error);
      this.authenticationState.next(false);
      const toast = this.toaster.create({
        message: error.message,
        duration: 3000,
        position: 'bottom'
      });
      // tslint:disable-next-line: no-shadowed-variable
      toast.then(toast => toast.present());
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
      }).then(data => {
         const toast = this.toaster.create({
          message: 'Check emails, to verify account!',
          duration: 3000,
          position: 'bottom'
        });
        // tslint:disable-next-line: no-shadowed-variable
         toast.then(toast => toast.present());
         this.go.navigate(['/login']);
      }).catch(error => {
        const toast = this.toaster.create({
          message: error.message,
          duration: 3000,
          position: 'bottom'
        });
        // tslint:disable-next-line: no-shadowed-variable
        toast.then(toast => toast.present());
      });
    } catch (error) {
      console.log('error signing up ', error);
    }
  }

  async resendConfirmationCode(username: string) {
    try {
      await Auth.resendSignUp(username);
      console.log('code resent successfully');
      const toast = this.toaster.create({
        message: 'Please check emails for new code.',
        duration: 3000,
        position: 'bottom'
      });
      // tslint:disable-next-line: no-shadowed-variable
      toast.then(toast => toast.present());
    } catch (err) {
      console.log('error resending code: ', err);
      const toast = this.toaster.create({
        message: 'No account found with ' + username,
        duration: 3000,
        position: 'bottom'
      });
      // tslint:disable-next-line: no-shadowed-variable
      toast.then(toast => toast.present());
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
        console.log('error confirming sign up', error);
        const toast = this.toaster.create({
          message: 'Your details did not match, try again',
          duration: 3000,
          position: 'bottom'
        });
        // tslint:disable-next-line: no-shadowed-variable
        toast.then(toast => toast.present());
    }
  }

  async signOut() {
    try {
      await Auth.signOut().then((response) => {
        console.log('Response ', response);
      });
      const toast = this.toaster.create({
        message: 'You are signed out successfully!',
        duration: 3000,
        position: 'bottom'
      });
      // tslint:disable-next-line: no-shadowed-variable
      toast.then(toast => toast.present());
      this.go.navigate(['login']);
      this.storageService.removeLocalData(TOKEN_KEY);
      this.authenticationState.next(false);
    } catch (error) {
      const toast = this.toaster.create({
        message: 'Please try again to sign out!',
        duration: 3000,
        position: 'bottom'
      });
      // tslint:disable-next-line: no-shadowed-variable
      toast.then(toast => toast.present());
      console.log('error signing out: ', error);
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
}
