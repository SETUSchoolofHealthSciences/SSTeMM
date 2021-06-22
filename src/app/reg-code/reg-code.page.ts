import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-reg-code',
  templateUrl: './reg-code.page.html',
  styleUrls: ['./reg-code.page.scss'],
})
export class RegCodePage implements OnInit {

  formGroupCode: FormGroup;
  submitted = false;
  constructor(
    public fb: FormBuilder,
    public auth: AuthenticationService,
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
        ]
      }
    );
  }

  ngOnInit() {

  }

  get regCode() {
    return this.formGroupCode.controls;
  }

  submitCode() {
    this.submitted = true;
    this.translate.forgotPasswordCodeTranslation();
    if (this.formGroupCode.valid) {
      this.auth
        .confirmSignUpWithCode(
          this.formGroupCode.value.emailControl,
          this.formGroupCode.value.codeControl.toString(),
        )
    }
  }

  cancel() {
    this.router.navigate(['/login']);
  }
}
