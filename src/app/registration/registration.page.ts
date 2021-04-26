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
import { StorageService } from '../services/storage.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  formGroup: FormGroup;
  submitted = false;
  si = false;
  constructor(
    public fb: FormBuilder,
    private go: Router,
    private auth: AuthenticationService,
    private customValidator: CustomvalidationService,
    private alertController: AlertController,
    private translate: TranslationService,
    private storage: StorageService
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
        collegeYearControlSi: [
          '',
          [Validators.maxLength(1), Validators.min(1), Validators.max(3)],
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

  ngOnInit() {
    this.storage.getLocalData('lang').then(data => {
      console.log('lang ', data);
      if (data === 'si') {
        this.si = true;
      } else {
        this.si = false;
      }
    });
  }

  get RegistrationFormControl() {
    return this.formGroup.controls;
  }

  register() {
    let year = 1;
    if (this.si) {
      year = this.formGroup.value.collegeYearControlSi;
    } else {
      year = this.formGroup.value.collegeYearControl;
    }
    this.submitted = true;
    if (this.formGroup.valid) {
      this.auth.register(
        this.formGroup.value.emailControl,
        this.formGroup.value.passwordControl,
        this.formGroup.value.firstNameControl,
        this.formGroup.value.lastNameControl,
        this.formGroup.value.hospitalControl,
        this.formGroup.value.collegeControl,
        year
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
