import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Auth } from "aws-amplify";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  constructor(private go: Router) {}

  async signIn(username: string, password: string) {
    try {
      const user = await Auth.signIn(username.toString(), password.toString());
      console.log('Authentication performed for user=' + username + 'password=' + password + ' login result==' + user);
      const tokens = user.signInUserSession;
      if (tokens != null){
        console.log('User authenticated ', tokens);
        this.go.navigate(['home']);
        alert('You are logged in successfully !');
      }
    } catch (error) {
      console.log('Login Error ', error);
      alert('User Authenication Failed');
    }
  }

  register(email: string, password: string, firstName: string,
    lastName: string, hospital?: string, college?: string, collegeYear?: number) {
    try {
      const user = Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email: email,
          given_name: firstName,
          family_name: lastName,
          "custom:hospital": hospital,
          "custom:college": college,
          "custom:collegeyear": collegeYear.toString(),
        },
      });
      console.log({ user });
      alert("User signup complete, please check verify your email");
      this.go.navigate(["/login"]);
    } catch (error) {
      console.log("error signing up ", error);
    }
  }

  async resendConfirmationCode(username: string) {
    try {
      await Auth.resendSignUp(username);
      console.log("code resent successfully");
    } catch (err) {
      console.log("error resending code: ", err);
    }
  }

   // can use code for verification
   async confirmSignUpWithCode(username: string, code:string) {
    try {
      await Auth.confirmSignUp(username, code);
    } catch (error) {
        console.log('error confirming sign up', error);
    }
  }

  async signOut() {
    try {
      const response = await Auth.signOut();
      console.log('response ', response);
      this.go.navigate(["login"]);
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }
}
