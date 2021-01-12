import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service'
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email ='';
  password = '';
  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  async login(){
    this.auth.signIn(this.email, this.password);
  }
}
