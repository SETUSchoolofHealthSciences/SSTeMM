import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  selectedCountryCode = 'ie';
  countryCodes = ['ie', 'es', 'si'];

  formGroup: FormGroup;
  submitted = false;
  constructor(public fb: FormBuilder, private auth: AuthenticationService) {
    this.formGroup = fb.group({
      emailControl: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      passwordControl: [
        '',
        Validators.compose([
          Validators.required
        ])
      ],
    });
  }

  ngOnInit() {}

  changeSelectedCountryCode(value: string): void {
    this.selectedCountryCode = value;
  }

  get loginFormControl() {
    return this.formGroup.controls;
  }

  async login() {
    this.submitted = true;
    if (this.formGroup.valid) {
      this.auth.signIn(this.formGroup.value.emailControl, this.formGroup.value.passwordControl);
    }
  }
}
