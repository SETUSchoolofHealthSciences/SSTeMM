import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../services/storage.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  selectedCountryCode: string;
  countryCodes = ['ie', 'es', 'si', 'de'];

  formGroup: FormGroup;
  submitted = false;
  constructor(public fb: FormBuilder,
              private auth: AuthenticationService,
              private storage: StorageService,
              private translate: TranslateService) {
    this.formGroup = fb.group({
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
          Validators.required
        ])
      ],
    });
  }

  ngOnInit() {

  }

  ionViewDidEnter(){
    const data = this.translate.currentLang;
    switch (data) {
        case 'en': {
          this.selectedCountryCode = 'ie';
          this.translate.use(data);
          break;
        }
        case 'es': {
          this.selectedCountryCode = data;
          this.translate.use(data);
          break;
        }
        case 'si': {
          this.selectedCountryCode = data;
          this.translate.use(data);
          break;
        }
        case 'de': {
          this.selectedCountryCode = data;
          this.translate.use(data);
          break;
        }
        default: {
          this.selectedCountryCode = 'ie';
          this.translate.use('en');
        }
      }
  }

  changeSelectedCountryCode(value: string): void {
    if (value === 'ie') {
      this.storage.setLocalData('lang', 'en');
      this.translate.use('en');
    } else {
      this.storage.setLocalData('lang', value);
      this.translate.use(value);
    }
    this.selectedCountryCode = value;
  }

  get loginFormControl() {
    return this.formGroup.controls;
  }

  async login() {
    this.submitted = true;
    if (this.formGroup.valid) {
      this.auth.signIn(this.formGroup.value.emailControl, this.formGroup.value.passwordControl);
    }
  }

  help(){
    let lang = this.translate.currentLang;
    if ( lang === 'si' ){
      lang = 'sl';
    }
    if ( lang === 'de' ){
      lang = 'en';
    }
    window.location.href = 'https://sstemm.eu/sstemm-user-guide/?lang=' + lang;
  }
}
