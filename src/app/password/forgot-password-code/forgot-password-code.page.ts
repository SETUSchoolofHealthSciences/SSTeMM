import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../../services/authentication.service';
import { CustomvalidationService } from '../../services/customvalidation.service';

@Component({
  selector: 'app-forgot-password-code',
  templateUrl: './forgot-password-code.page.html',
  styleUrls: ['./forgot-password-code.page.scss'],
})
export class ForgotPasswordCodePage implements OnInit {
  formGroupCode: FormGroup;
  submitted = false;
  constructor(
    public fb: FormBuilder,
    private auth: AuthenticationService,
    private customValidator: CustomvalidationService,
    private alertController: AlertController,
    private router: Router
  ) {
    this.formGroupCode = fb.group(
      {
        codeControl: ['', [Validators.required]],
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
      }
    );
  }

  ngOnInit() {}

  get forgotPasswordFormCodeControl() {
    return this.formGroupCode.controls;
  }

  submitCode() {

  }
  
  cancel() {
    this.router.navigate(['/login']);
  }
}
