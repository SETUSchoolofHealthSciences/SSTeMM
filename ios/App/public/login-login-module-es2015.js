(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "34Y5":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "V6Ie");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "r67e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/storage.service */ "n90K");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








let LoginPage = class LoginPage {
    constructor(fb, auth, storage, translate) {
        this.fb = fb;
        this.auth = auth;
        this.storage = storage;
        this.translate = translate;
        this.countryCodes = ['ie', 'es', 'si', 'de'];
        this.submitted = false;
        this.formGroup = fb.group({
            emailControl: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email
                ]
            ],
            passwordControl: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
                ])
            ],
        });
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
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
    changeSelectedCountryCode(value) {
        if (value === 'ie') {
            this.storage.setLocalData('lang', 'en');
            this.translate.use('en');
        }
        else {
            this.storage.setLocalData('lang', value);
            this.translate.use(value);
        }
        this.selectedCountryCode = value;
    }
    get loginFormControl() {
        return this.formGroup.controls;
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.submitted = true;
            if (this.formGroup.valid) {
                this.auth.signIn(this.formGroup.value.emailControl, this.formGroup.value.passwordControl);
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "V6Ie":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"dark-gb\" [fullscreen]=\"true\">\r\n  <div class=\"flag\" align=\"right\">\r\n  <ngx-flag-picker\r\n      class=\"picker\"\r\n      [showLabels]=\"false\"\r\n      [selectedCountryCode]=\"selectedCountryCode\"\r\n      [countryCodes]=\"countryCodes\"\r\n      (changedCountryCode)=\"changeSelectedCountryCode($event)\">\r\n    </ngx-flag-picker>\r\n  </div>\r\n  <div class=\"logoLogin\">\r\n    <div class=\"center\">\r\n      <ion-img\r\n        src=\"assets/sstemm-login.png\"\r\n        class=\"ion-align-self-end\"\r\n      ></ion-img>\r\n    </div>\r\n  </div>\r\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"login()\">\r\n    <div>\r\n      <ion-input\r\n        class=\"input\"\r\n        formControlName=\"emailControl\"\r\n        required=\"true\"\r\n        type=\"email\"\r\n        placeholder=\"{{ 'input.email' | translate }}\"\r\n      >\r\n      </ion-input>\r\n      <span\r\n        class=\"text-danger\"\r\n        *ngIf=\"(loginFormControl.emailControl.touched || submitted) && loginFormControl.emailControl.errors?.required\"\r\n      >\r\n      {{ 'validation.emailRequired' | translate }}\r\n      </span>\r\n      <span\r\n        class=\"text-danger\"\r\n        *ngIf=\"loginFormControl.emailControl.touched && loginFormControl.emailControl.errors?.email\"\r\n      >\r\n      {{ 'validation.emailValid' | translate }}\r\n      </span>\r\n    </div>\r\n    <div>\r\n      <ion-input\r\n        class=\"input\"\r\n        formControlName=\"passwordControl\"\r\n        required=\"true\"\r\n        type=\"password\"\r\n        placeholder=\"{{ 'input.password' | translate }}\"\r\n      >\r\n      </ion-input>\r\n      <span\r\n        class=\"text-danger\"\r\n        *ngIf=\"(loginFormControl.passwordControl.touched || submitted) && loginFormControl.passwordControl.errors?.required\"\r\n      >\r\n      {{ 'validation.passwordRequired' | translate }}\r\n      </span>\r\n    </div>\r\n\r\n    <div class=\"forgotPassword\">\r\n      <a class=\"text\" routerLink=\"/forgot-password\">{{ 'login.forgotPass' | translate }}</a>\r\n    </div>\r\n\r\n    <div class=\"loginButton\">\r\n      <ion-button class=\"buttonDetails\" expand=\"block\" type=\"submit\"\r\n        ><ion-icon class=\"icon\" name=\"log-in-outline\"></ion-icon>{{ 'button.login' | translate }}</ion-button\r\n      >\r\n    </div>\r\n  </form>\r\n  <div class=\"registration\">\r\n    <a class=\"text\" routerLink=\"/registration\">{{ 'login.new' | translate }}</a>\r\n  </div>\r\n  <div class=\"verification\">\r\n    <a class=\"text\" routerLink=\"/resend-verification\">{{ 'login.verification' | translate }}</a>\r\n  </div>\r\n  <div class=\"logoEU\">\r\n    <div class=\"image\">\r\n      <ion-img\r\n        src=\"assets/erasmus.png\"\r\n      ></ion-img>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "X3zk":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-routing.module */ "euwS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "34Y5");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/app.module */ "ZAI4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_flag_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-flag-picker */ "09Zs");











let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                    useFactory: src_app_app_module__WEBPACK_IMPORTED_MODULE_8__["httpLoaderFactory"],
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
                }
            }),
            ngx_flag_picker__WEBPACK_IMPORTED_MODULE_10__["NgxFlagPickerModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "euwS":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "34Y5");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "r67e":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dark-gb {\n  --ion-background-color: #08415C !important;\n}\n\n.flag {\n  font-size: xx-large;\n  padding: 10px;\n}\n\n.input {\n  border: solid 1px #5ACAF9;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 30px;\n  margin-right: 30px;\n  width: auto;\n  border-radius: 5px;\n  --placeholder-color: #5ACAF9;\n  color: white;\n}\n\n.logoLogin {\n  margin-top: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.center {\n  width: 300px;\n}\n\n.forgotPassword {\n  font-style: italic;\n  text-align: right;\n  margin-top: 10px;\n  margin-right: 30px;\n  margin-bottom: 20px;\n}\n\n.loginButton {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 40px;\n  width: auto;\n}\n\n.buttonDetails {\n  font-weight: bold;\n  font-size: large;\n  color: #08415C;\n  width: 250px;\n  text-transform: none;\n}\n\n.registration {\n  font-weight: bold;\n  font-size: large;\n  text-align: center;\n}\n\n.verification {\n  padding-top: 10px;\n  font-size: small;\n  text-align: center;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.text {\n  text-decoration: none;\n}\n\n.text-danger {\n  color: red;\n  padding: 8px;\n  background-color: #cbebfa;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 30px;\n  margin-right: 30px;\n  border-radius: 5px;\n}\n\n.logoEU {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 10px;\n}\n\n.logoEU .image {\n  width: 60%;\n}\n\n.ios .flag {\n  margin-top: 20px;\n}\n\n.icon {\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUFBO0VBQ0ksVUFBQTtBQUVKOztBQUdJO0VBQ0EsZ0JBQUE7QUFBSjs7QUFJQTtFQUNJLGtCQUFBO0FBREoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhcmstZ2J7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDg0MTVDICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGFne1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5pbnB1dHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICM1QUNBRjk7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjNUFDQUY5O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubG9nb0xvZ2lue1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jZW50ZXJ7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5mb3Jnb3RQYXNzd29yZHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5sb2dpbkJ1dHRvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4uYnV0dG9uRGV0YWlsc3tcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGNvbG9yOiAjMDg0MTVDO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbi5yZWdpc3RyYXRpb257XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi52ZXJpZmljYXRpb257XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnRleHR7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi50ZXh0LWRhbmdlcntcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JlYmZhO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ubG9nb0VVe1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbi5pbWFnZXtcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxufVxyXG5cclxuLmlvc3tcclxuICAgIC5mbGFne1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gIH1cclxuXHJcbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map