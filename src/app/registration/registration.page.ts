import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';
import { Router } from '@angular/router';
import { TranslationService } from '../services/translation.service';
import { threadId } from 'worker_threads';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  formGroup: FormGroup;
  submitted = false;
  constructor(
    public fb: FormBuilder,
    private go: Router,
    private auth: AuthenticationService,
    private customValidator: CustomvalidationService,
    private alertController: AlertController,
    private translate: TranslationService
  ) {
    this.formGroup = fb.group(
      {
        firstNameControl: ['', Validators.compose([Validators.required])],
        lastNameControl: ['', Validators.compose([Validators.required])],
        collegeControl: [''],
        collegeYearControl: [
          '',
          [Validators.maxLength(1), Validators.min(1), Validators.max(5)],
        ],
        hospitalControl: [''],
        emailControl: ['', [Validators.required, Validators.email]],
        passwordControl: [
          '',
          Validators.compose([
            Validators.required,
            this.customValidator.patternValidator(),
          ]),
        ],
        passwordAgainControl: ['', Validators.compose([Validators.required])],
        checkBoxControl: [false, Validators.requiredTrue],
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

  get RegistrationFormControl() {
    return this.formGroup.controls;
  }

  register() {
    this.submitted = true;
    if (this.formGroup.valid) {
      this.auth.register(
        this.formGroup.value.emailControl,
        this.formGroup.value.passwordControl,
        this.formGroup.value.firstNameControl,
        this.formGroup.value.lastNameControl,
        this.formGroup.value.hospitalControl,
        this.formGroup.value.collegeControl,
        this.formGroup.value.collegeYearControl
      );
    }
  }

  async cancel() {
    this.translate.regLeavePageTranslations();
    const alert = await this.alertController.create({
      header: this.translate.alertHeader,
      message: this.translate.alertMessage,
      buttons: [
        {
          text: this.translate.alertButtonTwo,
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: this.translate.alertButtonOne,
          handler: () => {
            this.go.navigate(['login']);
          }
        }
      ]
    });
    await alert.present();
  }
}
