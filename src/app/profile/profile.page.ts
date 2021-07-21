import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  formGroup: FormGroup;
  submitted = false;
  si = false;
  user: any;
  constructor(public fb: FormBuilder,
              private auth: AuthenticationService,
              private language: TranslateService) {
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
      }
    );
   }

  ngOnInit() {
    if (this.language.currentLang === 'si') {
      this.si = true;
    } else {
      this.si = false;
    }
  }

  get UpdateFormControl() {
    return this.formGroup.controls;
  }

  ionViewWillEnter(){
    this.getUserAttributes();
  }

  ionViewDidEnter(){
  }

  ionViewWillLeave(){
  }

  ionViewDidLeave(){
    this.formGroup.reset();
  }

  async getUserAttributes(){
    this.user = await this.auth.getCurrentUserAttributes();
    this.formGroup.patchValue({
      firstNameControl: this.user.given_name
    });
    this.formGroup.patchValue({
      lastNameControl: this.user.family_name
    });
    if (typeof this.user['custom:hospital'] !== 'undefined') {
      this.formGroup.patchValue({
        hospitalControl: this.user['custom:hospital']
      });
    }
    if (typeof this.user['custom:college'] !== 'undefined') {
      this.formGroup.patchValue({
        collegeControl: this.user['custom:college']
      });
    }
    if (typeof this.user['custom:collegeyear'] !== 'undefined') {
      if (this.si){
        this.formGroup.patchValue({
          collegeYearControlSi: this.user['custom:collegeyear']
        });
      } else {
        this.formGroup.patchValue({
          collegeYearControl: this.user['custom:collegeyear']
        });
      }
    }
  }

  update(){
    let year;
    if (this.si) {
      year = this.formGroup.value.collegeYearControlSi;
    } else {
      year = this.formGroup.value.collegeYearControl;
    }
    this.submitted = true;
    if (this.formGroup.valid) {
      this.auth.updateUserAttributes(
        this.formGroup.value.firstNameControl,
        this.formGroup.value.lastNameControl,
        this.formGroup.value.hospitalControl,
        this.formGroup.value.collegeControl,
        year
      );
    }
  }
}
