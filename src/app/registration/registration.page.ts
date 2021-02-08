import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Location } from '@angular/common';
import { CustomvalidationService } from '../services/customvalidation.service';
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
    private location: Location,
    private auth: AuthenticationService,
    private customValidator: CustomvalidationService,
    private alertController: AlertController
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
    const alert = await this.alertController.create({
      header: 'Leave this page?',
      message: 'Are you sure you want to leave this page? Your registration will not be saved.',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.location.back();
          }
        }
      ]
    });
    await alert.present();
  }
}
