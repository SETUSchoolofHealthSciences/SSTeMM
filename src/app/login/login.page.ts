import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string ='';
  password: string = '';
  constructor(private go: Router) { }

  ngOnInit() {
  }

  async login(){
    try {
      const user = await Auth.signIn(this.email.toString(), this.password.toString());
      console.log('Authentication performed for user=' + this.email + 'password=' + this.password + ' login result==' + user);
      const tokens = user.signInUserSession;
      if (tokens != null){
        console.log('User authenticated');
        this.go.navigate(['home']);
        alert('You are logged in successfully !');
      }
    } catch (error) {
      console.log('Login Error ', error);
      alert('User Authenication Failed');
    }
  }
}
