import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-resend-verification',
  templateUrl: './resend-verification.page.html',
  styleUrls: ['./resend-verification.page.scss'],
})
export class ResendVerificationPage implements OnInit {
  formGroupEmail: FormGroup;
  submitted = false;
  constructor(private translate: TranslationService,
              public fb: FormBuilder,
              private router: NavController,
              private auth: AuthenticationService) {
    this.formGroupEmail = fb.group(
      {
        emailControl: [
          '',
          [
            Validators.required,
            Validators.email
          ]
        ],
      });
   }

  ngOnInit() {
  }

  get forgotPasswordFormEmailControl() {
    return this.formGroupEmail.controls;
  }

  cancel() {
    this.router.navigateBack(['/login']);
  }

  submit(){
    this.submitted = true;
    this.auth.resendConfirmationCode(this.formGroupEmail.value.emailControl);
  }
}
