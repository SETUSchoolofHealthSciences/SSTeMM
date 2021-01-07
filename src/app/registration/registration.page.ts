import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  firstName: string = '';
  lastName: string = '';
  college: string = '';
  collegeYear: number = 1;
  hospital: string = '';
  email: string = '';
  password: string = '';
  passwordAgain: string = '';
  constructor(private go: Router) {}

  ngOnInit() {
  }

  register(){
   try {
     const user = Auth.signUp({
      username: this.email,
      password: this. password,
      attributes: {
        email: this.email,
        given_name: this.firstName,
        family_name: this.lastName,
        'custom:hospital': this.hospital,
        'custom:college': this.college,
        'custom:collegeyear':this.collegeYear.toString()
      }
    });
    console.log({ user });
    alert('User signup complete, please check verify your email');
    this.go.navigate(['/login']);
  } catch (error){
    console.log('error signing up ', error);
  }
  }}
