import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TranslationService } from 'src/app/services/translation.service';

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
              private alertController: AlertController,
              private translate: TranslationService) {
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
    this.translate.forgotPasswordTranslation();
    this.submitted = true;
    if (this.formGroupEmail.valid) {
      this.auth.forgotPassword(this.formGroupEmail.value.emailControl).then(async response => {
        this.auth.emailAddress = this.formGroupEmail.value.emailControl;
        const alert = await this.alertController.create({
          header: this.translate.alertHeader,
          message:
          this.translate.alertMessage + response.CodeDeliveryDetails.Destination ,
          buttons: [
            {
              text: this.translate.alertButtonOne,
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
           header: this.translate.alertErrorHeader,
           message:
             error.message,
           buttons: [
             {
               text: this.translate.alertButtonTwo,
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
