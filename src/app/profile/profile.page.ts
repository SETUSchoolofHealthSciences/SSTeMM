import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from '../services/authentication.service';
import { CustomvalidationService } from '../services/customvalidation.service';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  formGroup: FormGroup;
  submitted = false;
  si = false;
  constructor(public fb: FormBuilder,
              private go: Router,
              private auth: AuthenticationService,
              private customValidator: CustomvalidationService,
              private alertController: AlertController,
              private translate: TranslationService,
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
    console.log('scanlop profile did enter');
  }

  ionViewDidEnter(){
    console.log('scanlop profile did enter');
  }

  ionViewWillLeave(){
    console.log('scanlop profile will leave');
  }

  ionViewDidLeave(){
    console.log('scanlop profile did leave');
  }
}
