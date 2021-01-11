import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
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
  constructor(private go: Router, private plt: Platform, private storageService: StorageService) {
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
        console.log('User authenticated ', tokens.idToken.jwtToken);
        this.go.navigate(['home']);
        alert('You are logged in successfully !');
      }
    } catch (error) {
      console.log('Login Error ', error);
      this.authenticationState.next(false);
      alert('User Authenication Failed');
    }
  }

  register(email: string, password: string, firstName: string,
           lastName: string, hospital?: string, college?: string, collegeYear?: number) {
    try {
      const user = Auth.signUp({
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
      });
      console.log({ user });
      alert('User signup complete, please check verify your email');
      this.go.navigate(['/login']);
    } catch (error) {
      console.log('error signing up ', error);
    }
  }

  async resendConfirmationCode(username: string) {
    try {
      await Auth.resendSignUp(username);
      console.log('code resent successfully');
    } catch (err) {
      console.log('error resending code: ', err);
    }
  }

   // can use code for verification
   async confirmSignUpWithCode(username: string, code: string) {
    try {
      await Auth.confirmSignUp(username, code);
    } catch (error) {
        console.log('error confirming sign up', error);
    }
  }

  async signOut() {
    try {
      await Auth.signOut().then((response) => {
        console.log('Response ', response);
      });
      this.go.navigate(['login']);
      this.storageService.removeLocalData(TOKEN_KEY);
      this.authenticationState.next(false);
    } catch (error) {
      console.log('error signing out: ', error);
      this.authenticationState.next(true);
    }
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  private validateToken(token: any) {
    const decoded = jwt_decode<JwtPayload>(token);
    console.log('Token ', decoded);
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
}
