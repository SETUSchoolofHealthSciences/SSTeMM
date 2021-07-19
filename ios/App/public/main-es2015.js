(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/Users/bob/Documents/dev/sstemm_app/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "N6gq":
/*!******************************************************!*\
  !*** ./src/app/services/customvalidation.service.ts ***!
  \******************************************************/
/*! exports provided: CustomvalidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomvalidationService", function() { return CustomvalidationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let CustomvalidationService = class CustomvalidationService {
    patternValidator() {
        return (control) => {
            if (!control.value) {
                return null;
            }
            const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
            const valid = regex.test(control.value);
            return valid ? null : { invalidPassword: true };
        };
    }
    matchPassword(password, confirmPassword) {
        return (formGroup) => {
            const passwordControl = formGroup.controls[password];
            const confirmPasswordControl = formGroup.controls[confirmPassword];
            if (!passwordControl || !confirmPasswordControl) {
                return null;
            }
            if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
                return null;
            }
            if (passwordControl.value !== confirmPasswordControl.value) {
                confirmPasswordControl.setErrors({ passwordMismatch: true });
            }
            else {
                confirmPasswordControl.setErrors(null);
            }
        };
    }
};
CustomvalidationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CustomvalidationService);



/***/ }),

/***/ "N7e9":
/*!**********************************************************!*\
  !*** ./src/app/directives/password-pattern.directive.ts ***!
  \**********************************************************/
/*! exports provided: PasswordPatternDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordPatternDirective", function() { return PasswordPatternDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/customvalidation.service */ "N6gq");
var PasswordPatternDirective_1;




let PasswordPatternDirective = PasswordPatternDirective_1 = class PasswordPatternDirective {
    constructor(customValidator) {
        this.customValidator = customValidator;
    }
    validate(control) {
        return this.customValidator.patternValidator()(control);
    }
};
PasswordPatternDirective.ctorParameters = () => [
    { type: _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_3__["CustomvalidationService"] }
];
PasswordPatternDirective = PasswordPatternDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appPasswordPattern]',
        providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: PasswordPatternDirective_1, multi: true }]
    })
], PasswordPatternDirective);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/authentication.service */ "ej43");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/storage.service */ "n90K");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! aws-amplify */ "AL3R");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! config */ "UIRo");













let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, authenticationService, router, translate, storageService) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.authenticationService = authenticationService;
        this.router = router;
        this.translate = translate;
        this.storageService = storageService;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.storageService.getLocalData('country').then(country => {
                switch (country) {
                    case 'ireland': {
                        aws_amplify__WEBPACK_IMPORTED_MODULE_11__["default"].configure({
                            Auth: {
                                mandatorySignIn: true,
                                region: config__WEBPACK_IMPORTED_MODULE_12__["awscognitoregion"],
                                userPoolId: config__WEBPACK_IMPORTED_MODULE_12__["awsuserpoolsidie"],
                                userPoolWebClientId: config__WEBPACK_IMPORTED_MODULE_12__["awsuserpoolswebclientidie"],
                                authenticationFlowType: 'USER_PASSWORD_AUTH'
                            }
                        });
                        this.authenticationService.authenticationState.subscribe(state => {
                            if (state) {
                                this.router.navigate(['']);
                            }
                            else {
                                this.router.navigate(['login']);
                            }
                        });
                        break;
                    }
                    case 'slovenia': {
                        aws_amplify__WEBPACK_IMPORTED_MODULE_11__["default"].configure({
                            Auth: {
                                mandatorySignIn: true,
                                region: config__WEBPACK_IMPORTED_MODULE_12__["awscognitoregion"],
                                userPoolId: config__WEBPACK_IMPORTED_MODULE_12__["awsuserpoolsidsi"],
                                userPoolWebClientId: config__WEBPACK_IMPORTED_MODULE_12__["awsuserpoolswebclientidsi"],
                                authenticationFlowType: 'USER_PASSWORD_AUTH'
                            }
                        });
                        this.authenticationService.authenticationState.subscribe(state => {
                            if (state) {
                                this.router.navigate(['']);
                            }
                            else {
                                this.router.navigate(['login']);
                            }
                        });
                        break;
                    }
                    case 'spain': {
                        aws_amplify__WEBPACK_IMPORTED_MODULE_11__["default"].configure({
                            Auth: {
                                mandatorySignIn: true,
                                region: config__WEBPACK_IMPORTED_MODULE_12__["awscognitoregion"],
                                userPoolId: config__WEBPACK_IMPORTED_MODULE_12__["awsuserpoolsides"],
                                userPoolWebClientId: config__WEBPACK_IMPORTED_MODULE_12__["awsuserpoolswebclientides"],
                                authenticationFlowType: 'USER_PASSWORD_AUTH'
                            }
                        });
                        this.authenticationService.authenticationState.subscribe(state => {
                            if (state) {
                                this.router.navigate(['']);
                            }
                            else {
                                this.router.navigate(['login']);
                            }
                        });
                        break;
                    }
                    default: {
                        this.router.navigate(['cognito']);
                    }
                }
            });
            this.storageService.getLocalData('lang').then((language) => {
                if (language === null || language === undefined) {
                    this.translate.use('en');
                }
                else {
                    this.translate.use(language);
                }
            });
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "UIRo":
/*!*******************!*\
  !*** ./config.ts ***!
  \*******************/
/*! exports provided: awsprojectregion, awscognitoregion, awsuserpoolsidie, awsuserpoolswebclientidie, awsuserpoolsides, awsuserpoolswebclientides, awsuserpoolsidsi, awsuserpoolswebclientidsi, oauth, awsappsyncgraphqlEndpoint, awsappsyncregion, awsappsyncauthenticationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "awsprojectregion", function() { return awsprojectregion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "awscognitoregion", function() { return awscognitoregion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "awsuserpoolsidie", function() { return awsuserpoolsidie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "awsuserpoolswebclientidie", function() { return awsuserpoolswebclientidie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "awsuserpoolsides", function() { return awsuserpoolsides; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "awsuserpoolswebclientides", function() { return awsuserpoolswebclientides; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "awsuserpoolsidsi", function() { return awsuserpoolsidsi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "awsuserpoolswebclientidsi", function() { return awsuserpoolswebclientidsi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oauth", function() { return oauth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "awsappsyncgraphqlEndpoint", function() { return awsappsyncgraphqlEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "awsappsyncregion", function() { return awsappsyncregion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "awsappsyncauthenticationType", function() { return awsappsyncauthenticationType; });
const awsprojectregion = 'eu-west-1';
const awscognitoregion = 'eu-west-1';
const awsuserpoolsidie = 'eu-west-1_dSJfazWPw';
const awsuserpoolswebclientidie = '2hss4se424llruhcc82hg1rpd3';
const awsuserpoolsides = 'eu-west-1_YtTf3SULZ';
const awsuserpoolswebclientides = '5b6cose9shl4rblu290h48mo0s';
const awsuserpoolsidsi = 'eu-west-1_XuqjzFZ2n';
const awsuserpoolswebclientidsi = 'ebvmg6rudtlqvlmmqisnjs8o4';
const oauth = {};
const awsappsyncgraphqlEndpoint = 'https://2ozgxv2zv5f3paooqvud5gualy.appsync-api.eu-west-1.amazonaws.com/graphql';
const awsappsyncregion = 'eu-west-1';
const awsappsyncauthenticationType = 'AMAZON_COGNITO_USER_POOLS';


/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");



let AuthGuard = class AuthGuard {
    constructor(auth) {
        this.auth = auth;
    }
    canActivate() {
        return this.auth.isAuthenticated();
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: httpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpLoaderFactory", function() { return httpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _directives_password_match_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/password-match.directive */ "rnVO");
/* harmony import */ var _directives_password_pattern_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/password-pattern.directive */ "N7e9");
/* harmony import */ var aws_amplify_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! aws-amplify-angular */ "YD7i");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_flag_picker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-flag-picker */ "09Zs");


















function httpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__["TranslateHttpLoader"](http, './assets/locale/', '.json');
}
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _directives_password_match_directive__WEBPACK_IMPORTED_MODULE_11__["PasswordMatchDirective"], _directives_password_pattern_directive__WEBPACK_IMPORTED_MODULE_12__["PasswordPatternDirective"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["IonicStorageModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            aws_amplify_angular__WEBPACK_IMPORTED_MODULE_13__["AmplifyAngularModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"].forRoot({
                defaultLanguage: 'en',
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateLoader"],
                    useFactory: (httpLoaderFactory),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"]]
                }
            }),
            ngx_flag_picker__WEBPACK_IMPORTED_MODULE_17__["NgxFlagPickerModule"]
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
                useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
            },
            aws_amplify_angular__WEBPACK_IMPORTED_MODULE_13__["AmplifyService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "ej43":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aws-amplify */ "AL3R");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ "EjJx");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storage.service */ "n90K");
/* harmony import */ var _translation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./translation.service */ "ty2H");








const TOKEN_KEY = 'auth-token';
let AuthenticationService = class AuthenticationService {
    constructor(go, plt, storageService, toaster, alertController, translate) {
        this.go = go;
        this.plt = plt;
        this.storageService = storageService;
        this.toaster = toaster;
        this.alertController = alertController;
        this.translate = translate;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.plt.ready().then(() => {
            this.checkToken();
        });
    }
    checkToken() {
        this.storageService.getLocalData(TOKEN_KEY).then((res) => {
            if (res === null) {
                this.authenticationState.next(false);
            }
            else {
                this.validateToken(res);
            }
        });
    }
    signIn(username, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.translate.signTranslations();
            try {
                const user = yield aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].signIn(username.toString(), password.toString());
                const tokens = user.signInUserSession;
                if (tokens != null) {
                    this.go.navigateForward(['/tabs/home']);
                    this.setLogin(tokens.idToken.jwtToken);
                    const toast = this.toaster.create({
                        message: this.translate.toastMessage,
                        duration: 3000,
                        position: 'top'
                    });
                    // tslint:disable-next-line: no-shadowed-variable
                    toast.then(toast => toast.present());
                }
            }
            catch (error) {
                const alert = yield this.alertController.create({
                    header: this.translate.alertHeader,
                    message: error.message,
                    buttons: [
                        {
                            text: this.translate.alertButtonOne,
                            handler: () => {
                                console.log('...');
                            }
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
    register(email, password, firstName, lastName, hospital, college, collegeYear) {
        this.translate.RegisterTranslations();
        try {
            aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].signUp({
                username: email,
                password,
                attributes: {
                    email,
                    given_name: firstName,
                    family_name: lastName,
                    'custom:hospital': hospital,
                    'custom:college': college,
                    'custom:collegeyear': collegeYear.toString(),
                },
                validationData: []
            }).then((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.emailAddress = email;
                const alert = yield this.alertController.create({
                    header: this.translate.alertHeader,
                    message: this.translate.alertMessage,
                    buttons: [
                        {
                            text: this.translate.alertButtonOne,
                            handler: () => {
                                this.go.navigateBack(['/reg-code']);
                            }
                        }
                    ]
                });
                yield alert.present();
            })).catch((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const alert = yield this.alertController.create({
                    header: this.translate.alertErrorHeader,
                    message: error.message,
                    buttons: [
                        {
                            text: this.translate.alertButtonOne,
                            handler: () => {
                                console.log('...');
                            }
                        }
                    ]
                });
                yield alert.present();
            }));
        }
        catch (error) {
            console.log('error signing up ', error);
        }
    }
    resendConfirmationCode(username) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.translate.resendTranslations();
            try {
                yield aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].resendSignUp(username);
                this.emailAddress = username;
                const alert = yield this.alertController.create({
                    header: this.translate.alertHeader,
                    message: this.translate.alertMessage,
                    buttons: [
                        {
                            text: this.translate.alertButtonOne,
                            handler: () => {
                                this.go.navigateBack(['/reg-code']);
                            }
                        }
                    ]
                });
                yield alert.present();
            }
            catch (err) {
                const alert = yield this.alertController.create({
                    header: this.translate.alertErrorHeader,
                    message: err.message,
                    buttons: [
                        {
                            text: this.translate.alertButtonOne,
                            handler: () => {
                                console.log('...');
                            }
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
    // can use code for verification
    confirmSignUpWithCode(username, code) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.translate.confirmSignUpWithCodeTranslation();
            try {
                yield aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].confirmSignUp(username, code).then((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    const alert = yield this.alertController.create({
                        header: this.translate.alertHeader,
                        message: this.translate.alertMessage,
                        buttons: [
                            {
                                text: this.translate.alertButtonOne,
                                handler: () => {
                                    this.go.navigateBack(['/login']);
                                }
                            }
                        ]
                    });
                    yield alert.present();
                }));
            }
            catch (error) {
                const alert = yield this.alertController.create({
                    header: this.translate.alertErrorHeader,
                    message: error.message,
                    buttons: [
                        {
                            text: this.translate.alertButtonOne,
                            handler: () => {
                                console.log('...');
                            }
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
    signOut() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.translate.signoutTranslation();
            try {
                yield aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].signOut().then((response) => {
                    const toast = this.toaster.create({
                        message: this.translate.toastMessage,
                        duration: 3000,
                        position: 'top'
                    });
                    // tslint:disable-next-line: no-shadowed-variable
                    toast.then(toast => toast.present());
                    this.go.navigateBack(['login']);
                    this.storageService.removeLocalData(TOKEN_KEY);
                    this.authenticationState.next(false);
                });
            }
            catch (error) {
                const alert = yield this.alertController.create({
                    header: this.translate.alertErrorHeader,
                    message: error.message,
                    buttons: [
                        {
                            text: this.translate.alertButtonOne,
                            handler: () => {
                                console.log('...');
                            }
                        }
                    ]
                });
                yield alert.present();
                this.authenticationState.next(true);
            }
        });
    }
    isAuthenticated() {
        return this.authenticationState.value;
    }
    validateToken(token) {
        const decoded = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_5__["default"])(token);
        if (Date.now() < decoded.exp * 1000) {
            this.authenticationState.next(true);
            this.currentToken = decoded;
        }
        else {
            this.authenticationState.next(false);
        }
    }
    setLogin(token) {
        return this.storageService.setLocalData(TOKEN_KEY, token).then(() => {
            this.validateToken(token);
        });
    }
    forgotPassword(email) {
        return aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].forgotPassword(email);
    }
    submitCode(email, code, password) {
        return aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].forgotPasswordSubmit(email, code, password);
    }
    getCurrentUserAttributes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = yield aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser();
            return this.user.attributes;
        });
    }
    updateUserAttributes(firstName, lastName, hospital, college, collegeYear) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.translate.UpdateProfile();
            aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].updateUserAttributes(this.user, {
                given_name: firstName,
                family_name: lastName,
                'custom:hospital': hospital,
                'custom:college': college,
                'custom:collegeyear': collegeYear.toString()
            }).then((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (response === 'SUCCESS') {
                    const alert = yield this.alertController.create({
                        header: this.translate.alertHeader,
                        message: this.translate.alertMessage,
                        buttons: [
                            {
                                text: this.translate.alertButtonOne,
                                handler: () => {
                                    this.go.navigateBack(['/tabs/home']);
                                }
                            }
                        ]
                    });
                    yield alert.present();
                }
            })).catch((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(JSON.stringify(error));
                const alert = yield this.alertController.create({
                    header: this.translate.alertErrorHeader,
                    message: this.translate.alertErrorMessage,
                    buttons: [
                        {
                            text: this.translate.alertButtonOne,
                            handler: () => {
                                console.log('...');
                            }
                        }
                    ]
                });
                yield alert.present();
            }));
        });
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _translation_service__WEBPACK_IMPORTED_MODULE_7__["TranslationService"] }
];
AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], AuthenticationService);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "n90K":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "e8h1");



const API_STORAGE_KEY = 'sstemm-key';
let StorageService = class StorageService {
    constructor(storage) {
        this.storage = storage;
    }
    getLocalData(key) {
        return this.storage.get(`${API_STORAGE_KEY}-${key}`);
    }
    setLocalData(key, data) {
        return this.storage.set(`${API_STORAGE_KEY}-${key}`, data);
    }
    removeLocalData(key) {
        this.storage.remove(`${API_STORAGE_KEY}-${key}`);
    }
};
StorageService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ "rnVO":
/*!********************************************************!*\
  !*** ./src/app/directives/password-match.directive.ts ***!
  \********************************************************/
/*! exports provided: PasswordMatchDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordMatchDirective", function() { return PasswordMatchDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/customvalidation.service */ "N6gq");
var PasswordMatchDirective_1;




let PasswordMatchDirective = PasswordMatchDirective_1 = class PasswordMatchDirective {
    constructor(customValidator) {
        this.customValidator = customValidator;
        // tslint:disable-next-line: no-input-rename
        this.MatchPassword = [];
    }
    validate(formGroup) {
        return this.customValidator.matchPassword(this.MatchPassword[0], this.MatchPassword[1])(formGroup);
    }
};
PasswordMatchDirective.ctorParameters = () => [
    { type: _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_3__["CustomvalidationService"] }
];
PasswordMatchDirective.propDecorators = {
    MatchPassword: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['appMatchPassword',] }]
};
PasswordMatchDirective = PasswordMatchDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appPasswordMatch]',
        providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: PasswordMatchDirective_1, multi: true }]
    })
], PasswordMatchDirective);



/***/ }),

/***/ "ty2H":
/*!*************************************************!*\
  !*** ./src/app/services/translation.service.ts ***!
  \*************************************************/
/*! exports provided: TranslationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationService", function() { return TranslationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



let TranslationService = class TranslationService {
    constructor(translate) {
        this.translate = translate;
    }
    resendTranslations() {
        this.translate.get('alerts.emailVerHeader').subscribe(value => {
            this.alertHeader = value;
        });
        this.translate.get('alerts.emailCode').subscribe(value => {
            this.alertMessage = value;
        });
        this.translate.get('alerts.errorHeader').subscribe(value => {
            this.alertErrorHeader = value;
        });
        this.translate.get('alerts.buttonOk').subscribe(value => {
            this.alertButtonOne = value;
        });
    }
    confirmSignUpWithCodeTranslation() {
        this.translate.get('alerts.successHeader').subscribe(value => {
            this.alertHeader = value;
        });
        this.translate.get('alerts.successMessage').subscribe(value => {
            this.alertMessage = value;
        });
        this.translate.get('alerts.errorHeader').subscribe(value => {
            this.alertErrorHeader = value;
        });
        this.translate.get('alerts.buttonOk').subscribe(value => {
            this.alertButtonOne = value;
        });
    }
    signoutTranslation() {
        this.translate.get('toasts.logoutSuccess').subscribe(value => {
            this.toastMessage = value;
        });
        this.translate.get('alerts.errorHeader').subscribe(value => {
            this.alertErrorHeader = value;
        });
        this.translate.get('alerts.buttonOk').subscribe(value => {
            this.alertButtonOne = value;
        });
    }
    RegisterTranslations() {
        this.translate.get('alerts.emailVerHeader').subscribe(value => {
            this.alertHeader = value;
        });
        this.translate.get('alerts.emailVerMessage').subscribe(value => {
            this.alertMessage = value;
        });
        this.translate.get('alerts.errorHeader').subscribe(value => {
            this.alertErrorHeader = value;
        });
        this.translate.get('alerts.buttonOk').subscribe(value => {
            this.alertButtonOne = value;
        });
    }
    signTranslations() {
        this.translate.get('toasts.successLogin').subscribe(value => {
            this.toastMessage = value;
        });
        this.translate.get('alerts.errorHeader').subscribe(value => {
            this.alertHeader = value;
        });
        this.translate.get('alerts.buttonOk').subscribe(value => {
            this.alertButtonOne = value;
        });
    }
    regLeavePageTranslations() {
        this.translate.get('alerts.leavePageHeader').subscribe(value => {
            this.alertHeader = value;
        });
        this.translate.get('alerts.regLeavePageMessage').subscribe(value => {
            this.alertMessage = value;
        });
        this.translate.get('alerts.buttonYes').subscribe(value => {
            this.alertButtonOne = value;
        });
        this.translate.get('alerts.buttonNo').subscribe(value => {
            this.alertButtonTwo = value;
        });
    }
    forgotPasswordTranslation() {
        this.translate.get('alerts.forgotPasswordHeader').subscribe(value => {
            this.alertHeader = value;
        });
        this.translate.get('alerts.forgotPasswordMessage').subscribe(value => {
            this.alertMessage = value;
        });
        this.translate.get('alerts.buttonOk').subscribe(value => {
            this.alertButtonOne = value;
        });
        this.translate.get('alerts.buttonTry').subscribe(value => {
            this.alertButtonTwo = value;
        });
        this.translate.get('alerts.forgotPassworderrorHeader').subscribe(value => {
            this.alertErrorHeader = value;
        });
    }
    forgotPasswordCodeTranslation() {
        this.translate.get('toasts.passwordChangeSuccess').subscribe(value => {
            this.toastMessage = value;
        });
        this.translate.get('alerts.errorHeader').subscribe(value => {
            this.alertErrorHeader = value;
        });
        this.translate.get('alerts.buttonOk').subscribe(value => {
            this.alertButtonOne = value;
        });
    }
    stressSignatureCancel() {
        this.translate.get('alerts.leavePageHeader').subscribe(value => {
            this.alertHeader = value;
        });
        this.translate.get('alerts.stressLeaveMessage').subscribe(value => {
            this.alertMessage = value;
        });
        this.translate.get('alerts.buttonYes').subscribe(value => {
            this.alertButtonOne = value;
        });
        this.translate.get('alerts.buttonNo').subscribe(value => {
            this.alertButtonTwo = value;
        });
    }
    stressSignatureSave() {
        this.translate.get('alerts.stressSaveHeader').subscribe(value => {
            this.alertHeader = value;
        });
        this.translate.get('alerts.stressSaveMessage').subscribe(value => {
            this.alertMessage = value;
        });
        this.translate.get('alerts.buttonOk').subscribe(value => {
            this.alertButtonOne = value;
        });
    }
    StressQuestionsGoBack() {
        this.translate.get('alerts.leavePageHeader').subscribe(value => {
            this.alertHeader = value;
        });
        this.translate.get('alerts.stressQuestionsMessage').subscribe(value => {
            this.alertMessage = value;
        });
        this.translate.get('alerts.buttonYes').subscribe(value => {
            this.alertButtonOne = value;
        });
        this.translate.get('alerts.buttonNo').subscribe(value => {
            this.alertButtonTwo = value;
        });
    }
    DomainNames() {
        this.translate.get('button.thoughts').subscribe(value => {
            this.thoughts = value;
        });
        this.translate.get('button.feelings').subscribe(value => {
            this.feelings = value;
        });
        this.translate.get('button.behaviours').subscribe(value => {
            this.behaviours = value;
        });
    }
    UpdateProfile() {
        this.translate.get('alerts.updateProfileSuccessHeader').subscribe(value => {
            this.alertHeader = value;
        });
        this.translate.get('alerts.updateProfileSuccessMessage').subscribe(value => {
            this.alertMessage = value;
        });
        this.translate.get('alerts.buttonOk').subscribe(value => {
            this.alertButtonOne = value;
        });
        this.translate.get('alerts.updateProfileErrorHeader').subscribe(value => {
            this.alertErrorHeader = value;
        });
        this.translate.get('alerts.updateProfileErrorMessage').subscribe(value => {
            this.alertErrorMessage = value;
        });
    }
    timeout() {
        this.translate.get('toasts.expire').subscribe(value => {
            this.toastMessage = value;
        });
    }
};
TranslationService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
TranslationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TranslationService);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");




const routes = [
    {
        path: '',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "hO9l")).then(m => m.TabsPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(m => m.LoginPageModule)
    },
    {
        path: 'registration',
        loadChildren: () => __webpack_require__.e(/*! import() | registration-registration-module */ "registration-registration-module").then(__webpack_require__.bind(null, /*! ./registration/registration.module */ "DNuw")).then(m => m.RegistrationPageModule)
    },
    {
        path: 'stress-questions/:id',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | stress-questions-stress-questions-module */[__webpack_require__.e("default~history-history-module~home-home-module~stress-questions-stress-questions-module~stress-sign~204cde42"), __webpack_require__.e("common"), __webpack_require__.e("stress-questions-stress-questions-module")]).then(__webpack_require__.bind(null, /*! ./stress-questions/stress-questions.module */ "6nC6")).then(m => m.StressQuestionsPageModule)
    },
    {
        path: 'forgot-password',
        loadChildren: () => __webpack_require__.e(/*! import() | password-forgot-password-forgot-password-module */ "password-forgot-password-forgot-password-module").then(__webpack_require__.bind(null, /*! ./password/forgot-password/forgot-password.module */ "Z05H")).then(m => m.ForgotPasswordPageModule)
    },
    {
        path: 'forgot-password-code',
        loadChildren: () => __webpack_require__.e(/*! import() | password-forgot-password-code-forgot-password-code-module */ "password-forgot-password-code-forgot-password-code-module").then(__webpack_require__.bind(null, /*! ./password/forgot-password-code/forgot-password-code.module */ "lJVu")).then(m => m.ForgotPasswordCodePageModule)
    },
    {
        path: 'terms',
        loadChildren: () => __webpack_require__.e(/*! import() | terms-terms-module */ "terms-terms-module").then(__webpack_require__.bind(null, /*! ./terms/terms.module */ "eNqe")).then(m => m.TermsPageModule)
    },
    {
        path: 'resend-verification',
        loadChildren: () => __webpack_require__.e(/*! import() | password-resend-verification-resend-verification-module */ "password-resend-verification-resend-verification-module").then(__webpack_require__.bind(null, /*! ./password/resend-verification/resend-verification.module */ "EGrt")).then(m => m.ResendVerificationPageModule)
    },
    {
        path: 'cognito',
        loadChildren: () => __webpack_require__.e(/*! import() | cognito-cognito-module */ "cognito-cognito-module").then(__webpack_require__.bind(null, /*! ./cognito/cognito.module */ "OshG")).then(m => m.CognitoPageModule)
    },
    {
        path: 'details',
        loadChildren: () => Promise.all(/*! import() | details-details-module */[__webpack_require__.e("default~details-details-module~history-history-module~home-home-module"), __webpack_require__.e("details-details-module")]).then(__webpack_require__.bind(null, /*! ./details/details.module */ "QR/W")).then(m => m.DetailsPageModule)
    },
    {
        path: 'reg-code',
        loadChildren: () => __webpack_require__.e(/*! import() | reg-code-reg-code-module */ "reg-code-reg-code-module").then(__webpack_require__.bind(null, /*! ./reg-code/reg-code.module */ "41Fk")).then(m => m.RegCodePageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map