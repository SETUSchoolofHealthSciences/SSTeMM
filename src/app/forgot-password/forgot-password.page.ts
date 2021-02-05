import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { CustomvalidationService } from '../services/customvalidation.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  formGroupEmail: FormGroup;
  formGroupCode: FormGroup;
  submitted = false;
  constructor(public fb: FormBuilder,
              private auth: AuthenticationService,
              private customValidator: CustomvalidationService,
              private router: Router,
              private alertController: AlertController) {
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

  async submit() {
    this.submitted = true;
    if (this.formGroupEmail.valid) {
      this.auth.forgotPassword(this.formGroupEmail.value.emailControl).then(async response => {
        const alert = await this.alertController.create({
          header: 'Verification Code',
          message:
            'A verification code has been sent to ' + response.CodeDeliveryDetails.Destination ,
          buttons: [
            {
              text: 'Ok',
              role: 'button',
              handler: () => {
                this.router.navigate(['/forgot-password-code'])
              },
            },
          ],
        });
        await alert.present();
      }).catch(async error => {
         const alert = await this.alertController.create({
           header: 'User Not Found',
           message:
             error.message,
           buttons: [
             {
               text: 'Try Again',
               handler: () => {
                 console.log('...');
               },
             },
           ],
         });
         await alert.present();
      });
    }
  }

  cancel() {
    this.router.navigate(['/login']);
  }

  giveCode(){
    this.router.navigate(['/forgot-password-code']);
  }
}
