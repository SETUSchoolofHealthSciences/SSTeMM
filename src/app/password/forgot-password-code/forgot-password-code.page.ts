import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { TranslationService } from 'src/app/services/translation.service';
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
    public auth: AuthenticationService,
    private customValidator: CustomvalidationService,
    private toaster: ToastController,
    private alertController: AlertController,
    private router: Router,
    private translate: TranslationService
  ) {
    this.formGroupCode = fb.group(
      {
        codeControl: ['', [Validators.required]],
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

  ngOnInit() {

  }

  get forgotPasswordFormCodeControl() {
    return this.formGroupCode.controls;
  }

  submitCode() {
    this.submitted = true;
    this.translate.forgotPasswordCodeTranslation();
    if (this.formGroupCode.valid) {
      this.auth
        .submitCode(
          this.formGroupCode.value.emailControl,
          this.formGroupCode.value.codeControl.toString(),
          this.formGroupCode.value.passwordControl
        )
        .then((response) => {
          const toast = this.toaster.create({
            message: this.translate.toastMessage,
            duration: 3000,
            position: 'top'
          });
          // tslint:disable-next-line: no-shadowed-variable
          toast.then(toast => toast.present());
          this.router.navigate(['login']);
        })
        .catch(async (error) => {
          console.log('Error ', error);
          const alert = await this.alertController.create({
            header: this.translate.alertErrorHeader,
            message: error.message,
            buttons: [
              {
                text: this.translate.alertButtonOne,
                handler: () => {
                  console.log('pressed');
                }
              }
            ]
          });
          await alert.present();
        });
    }
  }

  cancel() {
    this.router.navigate(['/login']);
  }
}
