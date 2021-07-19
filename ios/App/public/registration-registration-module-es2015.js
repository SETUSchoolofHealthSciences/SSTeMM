(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-registration-module"],{

/***/ "DNuw":
/*!*****************************************************!*\
  !*** ./src/app/registration/registration.module.ts ***!
  \*****************************************************/
/*! exports provided: RegistrationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function() { return RegistrationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration-routing.module */ "zF/k");
/* harmony import */ var _directives_password_pattern_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../directives/password-pattern.directive */ "N7e9");
/* harmony import */ var _directives_password_match_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../directives/password-match.directive */ "rnVO");
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./registration.page */ "hHzj");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app.module */ "ZAI4");












let RegistrationPageModule = class RegistrationPageModule {
};
RegistrationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrationPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                    useFactory: _app_module__WEBPACK_IMPORTED_MODULE_11__["httpLoaderFactory"],
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
                }
            })
        ],
        declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_8__["RegistrationPage"], _directives_password_pattern_directive__WEBPACK_IMPORTED_MODULE_6__["PasswordPatternDirective"], _directives_password_match_directive__WEBPACK_IMPORTED_MODULE_7__["PasswordMatchDirective"]]
    })
], RegistrationPageModule);



/***/ }),

/***/ "XDXw":
/*!*****************************************************!*\
  !*** ./src/app/registration/registration.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dark-gb {\n  --ion-background-color: #08415C !important;\n}\n\nion-toolbar {\n  --background: #08415C;\n}\n\n.logoHeader {\n  background-color: #08415C;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  text-align: center;\n  padding-bottom: 10px;\n}\n\n.input {\n  border: solid 1px #5ACAF9;\n  color: white;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 30px;\n  margin-right: 30px;\n  width: auto;\n  border-radius: 5px;\n  --placeholder-color: #5ACAF9;\n}\n\n.bttn {\n  font-weight: bold;\n  font-size: large;\n  color: #08415C;\n  text-transform: none;\n}\n\n.regTitle {\n  color: #5ACAF9;\n  text-align: center;\n}\n\n.container {\n  display: flex;\n  margin-right: 30px;\n  margin-left: 30px;\n  max-width: 500px;\n}\n\nion-label {\n  padding-left: 7px;\n  color: #ffffff !important;\n}\n\nion-checkbox {\n  --border-color: white !important;\n}\n\n.text-danger {\n  color: red;\n  padding: 8px;\n  background-color: #cbebfa;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 30px;\n  margin-right: 30px;\n  border-radius: 5px;\n}\n\n.icon {\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBQTtBQUNGOztBQUNBO0VBQ0UscUJBQUE7QUFFRjs7QUFBQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBR0o7O0FBREE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FBSUo7O0FBRkE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBS0o7O0FBSEE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFNSjs7QUFIQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFNSjs7QUFIRTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUFNSjs7QUFIRTtFQUNFLGdDQUFBO0FBTUo7O0FBSEU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFNSjs7QUFIQTtFQUNFLGtCQUFBO0FBTUYiLCJmaWxlIjoicmVnaXN0cmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXJrLWdie1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwODQxNUMgIWltcG9ydGFudDtcclxufVxyXG5pb24tdG9vbGJhcntcclxuICAtLWJhY2tncm91bmQ6ICMwODQxNUM7XHJcbn1cclxuLmxvZ29IZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4NDE1QztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4uaW5wdXR7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjNUFDQUY5O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzVBQ0FGOTtcclxufVxyXG4uYnR0bntcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGNvbG9yOiAjMDg0MTVDO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuLnJlZ1RpdGxle1xyXG4gICAgY29sb3I6ICAjNUFDQUY5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBpb24tY2hlY2tib3gge1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudGV4dC1kYW5nZXJ7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NiZWJmYTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufSJdfQ== */");

/***/ }),

/***/ "hHzj":
/*!***************************************************!*\
  !*** ./src/app/registration/registration.page.ts ***!
  \***************************************************/
/*! exports provided: RegistrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPage", function() { return RegistrationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registration.page.html */ "mE0+");
/* harmony import */ var _registration_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration.page.scss */ "XDXw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/customvalidation.service */ "N6gq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_translation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/translation.service */ "ty2H");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");











let RegistrationPage = class RegistrationPage {
    constructor(fb, go, auth, customValidator, alertController, translate, language) {
        this.fb = fb;
        this.go = go;
        this.auth = auth;
        this.customValidator = customValidator;
        this.alertController = alertController;
        this.translate = translate;
        this.language = language;
        this.submitted = false;
        this.si = false;
        this.formGroup = fb.group({
            firstNameControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])],
            lastNameControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])],
            collegeControl: [''],
            collegeYearControl: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].max(5)],
            ],
            collegeYearControlSi: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].max(3)],
            ],
            hospitalControl: [''],
            emailControl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]],
            passwordControl: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                    this.customValidator.patternValidator(),
                ]),
            ],
            passwordAgainControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])],
            checkBoxControl: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].requiredTrue],
        }, {
            validator: this.customValidator.matchPassword('passwordControl', 'passwordAgainControl'),
        });
    }
    ngOnInit() {
        if (this.language.currentLang === 'si') {
            this.si = true;
        }
        else {
            this.si = false;
        }
    }
    get RegistrationFormControl() {
        return this.formGroup.controls;
    }
    register() {
        let year = 1;
        if (this.si) {
            year = this.formGroup.value.collegeYearControlSi;
        }
        else {
            year = this.formGroup.value.collegeYearControl;
        }
        this.submitted = true;
        if (this.formGroup.valid) {
            this.auth.register(this.formGroup.value.emailControl, this.formGroup.value.passwordControl, this.formGroup.value.firstNameControl, this.formGroup.value.lastNameControl, this.formGroup.value.hospitalControl, this.formGroup.value.collegeControl, year);
        }
    }
    cancel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.translate.regLeavePageTranslations();
            const alert = yield this.alertController.create({
                header: this.translate.alertHeader,
                message: this.translate.alertMessage,
                buttons: [
                    {
                        text: this.translate.alertButtonTwo,
                        handler: () => {
                            console.log('...');
                        },
                    },
                    {
                        text: this.translate.alertButtonOne,
                        handler: () => {
                            this.go.navigate(['login']);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
};
RegistrationPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_7__["CustomvalidationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_translation_service__WEBPACK_IMPORTED_MODULE_9__["TranslationService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] }
];
RegistrationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-registration',
        template: _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registration_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegistrationPage);



/***/ }),

/***/ "mE0+":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <div class=\"logoHeader\">\n      <img src=\"assets/sstemm-header.png\" width=\"150px\" />\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"dark-gb\">\n  <h1 class=\"regTitle\">{{ 'reg.title' | translate }}</h1>\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"register()\">\n    <div>\n      <ion-input\n        class=\"input\"\n        placeholder=\"{{ 'input.firstName' | translate }}\"\n        formControlName=\"firstNameControl\"\n        type=\"text\"\n      ></ion-input>\n      <span\n        class=\"text-danger\"\n        *ngIf=\"(RegistrationFormControl.firstNameControl.touched || submitted) && RegistrationFormControl.firstNameControl.errors?.required\"\n      >\n      {{ 'validation.firstRequired' | translate }}\n      </span>\n    </div>\n    <div>\n      <ion-input\n        class=\"input\"\n        placeholder=\"{{ 'input.lastName' | translate }}\"\n        formControlName=\"lastNameControl\"\n        type=\"text\"\n      ></ion-input>\n      <span\n        class=\"text-danger\"\n        *ngIf=\"(RegistrationFormControl.lastNameControl.touched || submitted) && RegistrationFormControl.lastNameControl.errors?.required\"\n      >\n      {{ 'validation.lastRequired' | translate }}\n      </span>\n    </div>\n    <div>\n      <ion-input\n        class=\"input\"\n        placeholder=\"{{ 'input.college' | translate }}\"\n        formControlName=\"collegeControl\"\n        type=\"text\"\n      ></ion-input>\n    </div>\n    <div *ngIf=\"si; else all\">\n      <ion-input\n        class=\"input\"\n        placeholder=\"{{ 'input.collegeYear' | translate }}\"\n        formControlName=\"collegeYearControlSi\"\n        type=\"number\"\n      ></ion-input>\n      <span\n        class=\"text-danger\"\n        *ngIf=\"(RegistrationFormControl.collegeYearControlSi.touched || submitted) && (RegistrationFormControl.collegeYearControlSi.errors?.max || RegistrationFormControl.collegeYearControlSi.errors?.min)\"\n      >\n      {{ 'validation.collegeYear' | translate }}\n      </span>\n    </div>\n    <ng-template #all>\n      <ion-input\n        class=\"input\"\n        placeholder=\"{{ 'input.collegeYear' | translate }}\"\n        formControlName=\"collegeYearControl\"\n        type=\"number\"\n      ></ion-input>\n      <span\n        class=\"text-danger\"\n        *ngIf=\"(RegistrationFormControl.collegeYearControl.touched || submitted) && (RegistrationFormControl.collegeYearControl.errors?.max || RegistrationFormControl.collegeYearControl.errors?.min)\"\n      >\n      {{ 'validation.collegeYear' | translate }}\n      </span>\n    </ng-template>\n    <div>\n      <ion-input\n        class=\"input\"\n        placeholder=\"{{ 'input.hospital' | translate }}\"\n        formControlName=\"hospitalControl\"\n        type=\"text\"\n      ></ion-input>\n    </div>\n    <div>\n      <ion-input\n        class=\"input\"\n        placeholder=\"{{ 'input.email' | translate }}\"\n        formControlName=\"emailControl\"\n        type=\"email\"\n      ></ion-input>\n      <span\n        class=\"text-danger\"\n        *ngIf=\"(RegistrationFormControl.emailControl.touched || submitted) && RegistrationFormControl.emailControl.errors?.required\"\n      >\n      {{ 'validation.emailRequired' | translate }}\n      </span>\n      <span\n        class=\"text-danger\"\n        *ngIf=\"RegistrationFormControl.emailControl.touched && RegistrationFormControl.emailControl.errors?.email\"\n      >\n      {{ 'validation.emailValid' | translate }}\n      </span>\n    </div>\n    <div>\n      <ion-input\n        class=\"input\"\n        placeholder=\"{{ 'input.password' | translate }}\"\n        formControlName=\"passwordControl\"\n        type=\"password\"\n      ></ion-input>\n      <span\n        class=\"text-danger\"\n        *ngIf=\"(RegistrationFormControl.passwordControl.touched || submitted) && RegistrationFormControl.passwordControl.errors?.required\"\n      >\n      {{ 'validation.passwordRequired' | translate }}\n      </span>\n      <span\n        class=\"text-danger\"\n        *ngIf=\"RegistrationFormControl.passwordControl.touched && RegistrationFormControl.passwordControl.errors?.invalidPassword\"\n      >\n      {{ 'validation.passwordRequirements' | translate }}\n      </span>\n    </div>\n    <div>\n      <ion-input\n        class=\"input\"\n        placeholder=\"{{ 'input.confirmPassword' | translate }}\"\n        formControlName=\"passwordAgainControl\"\n        type=\"password\"\n      ></ion-input>\n      <span\n        class=\"text-danger\"\n        *ngIf=\"(RegistrationFormControl.passwordAgainControl.touched || submitted)&& RegistrationFormControl.passwordAgainControl.errors?.required\"\n      >\n      {{ 'validation.confirmPassword' | translate }}\n      </span>\n      <span\n        class=\"text-danger\"\n        *ngIf=\"RegistrationFormControl.passwordAgainControl.touched && RegistrationFormControl.passwordAgainControl.errors?.passwordMismatch\"\n      >\n      {{ 'validation.matchPasswords' | translate }}\n      </span>\n    </div>\n    <div>\n      <ion-item class=\"container\" lines=\"none\">\n        <ion-checkbox\n          color=\"primary\"\n          formControlName=\"checkBoxControl\"\n        ></ion-checkbox>\n        <ion-label class=\"ion-text-wrap\" for=\"checkBoxControl\"\n          >{{ 'input.termsStart' | translate }}<a routerLink=\"/terms\">{{ 'input.termsLink' | translate }}</a> {{ 'input.termsEnd' | translate }}</ion-label\n        >\n      </ion-item>\n      <span\n        class=\"text-danger\"\n        *ngIf=\"submitted && RegistrationFormControl.checkBoxControl.errors\"\n      >\n      {{ 'validation.terms' | translate }}\n      </span>\n    </div>\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" size=\"6\" class=\"ion-text-center\">\n          <ion-button\n            expand=\"block\"\n            class=\"ion-text-wrap min-max-width bttn\"\n            (click)=\"cancel()\"\n            ><ion-icon class=\"icon\" name=\"close-outline\"></ion-icon>{{ 'button.cancel' | translate }}</ion-button\n          >\n        </ion-col>\n\n        <ion-col size-sm=\"6\" size=\"6\" class=\"ion-text-center\">\n          <ion-button\n            expand=\"block\"\n            class=\"ion-text-wrap min-max-width bttn\"\n            type=\"submit\"\n            ><ion-icon class=\"icon\" name=\"person-add-outline\"></ion-icon>{{ 'button.register' | translate }}</ion-button\n          >\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "zF/k":
/*!*************************************************************!*\
  !*** ./src/app/registration/registration-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RegistrationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageRoutingModule", function() { return RegistrationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration.page */ "hHzj");




const routes = [
    {
        path: '',
        component: _registration_page__WEBPACK_IMPORTED_MODULE_3__["RegistrationPage"]
    }
];
let RegistrationPageRoutingModule = class RegistrationPageRoutingModule {
};
RegistrationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistrationPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=registration-registration-module-es2015.js.map