import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { CustomvalidationService } from '../services/customvalidation.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  formGroup: FormGroup;
  submitted = false;
  constructor(public fb: FormBuilder,
              private auth: AuthenticationService,
              private customValidator: CustomvalidationService) {
    this.formGroup = fb.group(
      {
      emailControl: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      codeControl: [
        '',
        [
          Validators.required,
        ]
      ],
      passwordControl: [
        '',
        Validators.compose([
          Validators.required,
          this.customValidator.patternValidator(),
        ]),
      ],
      passwordAgainControl: ['', Validators.compose([Validators.required])],
    },
    {
      validator: this.customValidator.matchPassword(
        'passwordControl',
        'passwordAgainControl'
      ),
    });
   }

  ngOnInit() {
  }

  get forgotPasswordFormControl() {
    return this.formGroup.controls;
  }


  submit() {

  }

  cancel() {

  }

  submitCode() {

  }
}

