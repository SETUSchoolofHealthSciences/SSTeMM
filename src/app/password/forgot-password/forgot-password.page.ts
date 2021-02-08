import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  formGroupEmail: FormGroup;
  submitted = false;
  constructor(public fb: FormBuilder,
              private auth: AuthenticationService,
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
        this.auth.emailAddress = this.formGroupEmail.value.emailControl;
        const alert = await this.alertController.create({
          header: 'Verification Code',
          message:
            'A verification code has been sent to ' + response.CodeDeliveryDetails.Destination ,
          buttons: [
            {
              text: 'Ok',
              role: 'button',
              handler: () => {
                this.router.navigate(['/forgot-password-code']);
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
    console.log('scanlop ', this.auth.emailAddress);
  }

  cancel() {
    this.router.navigate(['/login']);
  }

  giveCode(){
    this.router.navigate(['/forgot-password-code']);
  }
}
