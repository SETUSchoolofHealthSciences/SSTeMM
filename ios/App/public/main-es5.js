(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /mnt/c/Users/bob/Documents/dev/sstemm_app/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "N6gq":
    /*!******************************************************!*\
      !*** ./src/app/services/customvalidation.service.ts ***!
      \******************************************************/

    /*! exports provided: CustomvalidationService */

    /***/
    function N6gq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomvalidationService", function () {
        return CustomvalidationService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CustomvalidationService = /*#__PURE__*/function () {
        function CustomvalidationService() {
          _classCallCheck(this, CustomvalidationService);
        }

        _createClass(CustomvalidationService, [{
          key: "patternValidator",
          value: function patternValidator() {
            return function (control) {
              if (!control.value) {
                return null;
              }

              var regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
              var valid = regex.test(control.value);
              return valid ? null : {
                invalidPassword: true
              };
            };
          }
        }, {
          key: "matchPassword",
          value: function matchPassword(password, confirmPassword) {
            return function (formGroup) {
              var passwordControl = formGroup.controls[password];
              var confirmPasswordControl = formGroup.controls[confirmPassword];

              if (!passwordControl || !confirmPasswordControl) {
                return null;
              }

              if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
                return null;
              }

              if (passwordControl.value !== confirmPasswordControl.value) {
                confirmPasswordControl.setErrors({
                  passwordMismatch: true
                });
              } else {
                confirmPasswordControl.setErrors(null);
              }
            };
          }
        }]);

        return CustomvalidationService;
      }();

      CustomvalidationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CustomvalidationService);
      /***/
    },

    /***/
    "N7e9":
    /*!**********************************************************!*\
      !*** ./src/app/directives/password-pattern.directive.ts ***!
      \**********************************************************/

    /*! exports provided: PasswordPatternDirective */

    /***/
    function N7e9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordPatternDirective", function () {
        return PasswordPatternDirective;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/customvalidation.service */
      "N6gq");

      var PasswordPatternDirective_1;

      var PasswordPatternDirective = PasswordPatternDirective_1 = /*#__PURE__*/function () {
        function PasswordPatternDirective(customValidator) {
          _classCallCheck(this, PasswordPatternDirective);

          this.customValidator = customValidator;
        }

        _createClass(PasswordPatternDirective, [{
          key: "validate",
          value: function validate(control) {
            return this.customValidator.patternValidator()(control);
          }
        }]);

        return PasswordPatternDirective;
      }();

      PasswordPatternDirective.ctorParameters = function () {
        return [{
          type: _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_3__["CustomvalidationService"]
        }];
      };

      PasswordPatternDirective = PasswordPatternDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appPasswordPattern]',
        providers: [{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
          useExisting: PasswordPatternDirective_1,
          multi: true
        }]
      })], PasswordPatternDirective);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/authentication.service */
      "ej43");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./services/storage.service */
      "n90K");
      /* harmony import */


      var aws_amplify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! aws-amplify */
      "AL3R");
      /* harmony import */


      var config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! config */
      "UIRo");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, authenticationService, router, translate, storageService) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.authenticationService = authenticationService;
          this.router = router;
          this.translate = translate;
          this.storageService = storageService;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.splashScreen.hide();

              _this.storageService.getLocalData('country').then(function (country) {
                switch (country) {
                  case 'ireland':
                    {
                      aws_amplify__WEBPACK_IMPORTED_MODULE_11__["default"].configure({
                        Auth: {
                          mandatorySignIn: true,
                          region: config__WEBPACK_IMPORTED_MODULE_12__["awscognitoregion"],
                          userPoolId: config__WEBPACK_IMPORTED_MODULE_12__["awsuserpoolsidie"],
                          userPoolWebClientId: config__WEBPACK_IMPORTED_MODULE_12__["awsuserpoolswebclientidie"],
                          authenticationFlowType: 'USER_PASSWORD_AUTH'
                        }
                      });

                      _this.authenticationService.authenticationState.subscribe(function (state) {
                        if (state) {
                          _this.router.navigate(['']);
                        } else {
                          _this.router.navigate(['login']);
                        }
                      });

                      break;
                    }

                  case 'slovenia':
                    {
                      aws_amplify__WEBPACK_IMPORTED_MODULE_11__["default"].configure({
                        Auth: {
                          mandatorySignIn: true,
                          region: config__WEBPACK_IMPORTED_MODULE_12__["awscognitoregion"],
                          userPoolId: config__WEBPACK_IMPORTED_MODULE_12__["awsuserpoolsidsi"],
                          userPoolWebClientId: config__WEBPACK_IMPORTED_MODULE_12__["awsuserpoolswebclientidsi"],
                          authenticationFlowType: 'USER_PASSWORD_AUTH'
                        }
                      });

                      _this.authenticationService.authenticationState.subscribe(function (state) {
                        if (state) {
                          _this.router.navigate(['']);
                        } else {
                          _this.router.navigate(['login']);
                        }
                      });

                      break;
                    }

                  case 'spain':
                    {
                      aws_amplify__WEBPACK_IMPORTED_MODULE_11__["default"].configure({
                        Auth: {
                          mandatorySignIn: true,
                          region: config__WEBPACK_IMPORTED_MODULE_12__["awscognitoregion"],
                          userPoolId: config__WEBPACK_IMPORTED_MODULE_12__["awsuserpoolsides"],
                          userPoolWebClientId: config__WEBPACK_IMPORTED_MODULE_12__["awsuserpoolswebclientides"],
                          authenticationFlowType: 'USER_PASSWORD_AUTH'
                        }
                      });

                      _this.authenticationService.authenticationState.subscribe(function (state) {
                        if (state) {
                          _this.router.navigate(['']);
                        } else {
                          _this.router.navigate(['login']);
                        }
                      });

                      break;
                    }

                  default:
                    {
                      _this.router.navigate(['cognito']);
                    }
                }
              });

              _this.storageService.getLocalData('lang').then(function (language) {
                if (language === null || language === undefined) {
                  _this.translate.use('en');
                } else {
                  _this.translate.use(language);
                }
              });
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
        }, {
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "UIRo":
    /*!*******************!*\
      !*** ./config.ts ***!
      \*******************/

    /*! exports provided: awsprojectregion, awscognitoregion, awsuserpoolsidie, awsuserpoolswebclientidie, awsuserpoolsides, awsuserpoolswebclientides, awsuserpoolsidsi, awsuserpoolswebclientidsi, oauth, awsappsyncgraphqlEndpoint, awsappsyncregion, awsappsyncauthenticationType */

    /***/
    function UIRo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "awsprojectregion", function () {
        return awsprojectregion;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "awscognitoregion", function () {
        return awscognitoregion;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "awsuserpoolsidie", function () {
        return awsuserpoolsidie;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "awsuserpoolswebclientidie", function () {
        return awsuserpoolswebclientidie;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "awsuserpoolsides", function () {
        return awsuserpoolsides;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "awsuserpoolswebclientides", function () {
        return awsuserpoolswebclientides;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "awsuserpoolsidsi", function () {
        return awsuserpoolsidsi;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "awsuserpoolswebclientidsi", function () {
        return awsuserpoolswebclientidsi;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "oauth", function () {
        return oauth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "awsappsyncgraphqlEndpoint", function () {
        return awsappsyncgraphqlEndpoint;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "awsappsyncregion", function () {
        return awsappsyncregion;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "awsappsyncauthenticationType", function () {
        return awsappsyncauthenticationType;
      });

      var awsprojectregion = 'eu-west-1';
      var awscognitoregion = 'eu-west-1';
      var awsuserpoolsidie = 'eu-west-1_dSJfazWPw';
      var awsuserpoolswebclientidie = '2hss4se424llruhcc82hg1rpd3';
      var awsuserpoolsides = 'eu-west-1_YtTf3SULZ';
      var awsuserpoolswebclientides = '5b6cose9shl4rblu290h48mo0s';
      var awsuserpoolsidsi = 'eu-west-1_XuqjzFZ2n';
      var awsuserpoolswebclientidsi = 'ebvmg6rudtlqvlmmqisnjs8o4';
      var oauth = {};
      var awsappsyncgraphqlEndpoint = 'https://2ozgxv2zv5f3paooqvud5gualy.appsync-api.eu-west-1.amazonaws.com/graphql';
      var awsappsyncregion = 'eu-west-1';
      var awsappsyncauthenticationType = 'AMAZON_COGNITO_USER_POOLS';
      /***/
    },

    /***/
    "UTcu":
    /*!**************************************!*\
      !*** ./src/app/guards/auth.guard.ts ***!
      \**************************************/

    /*! exports provided: AuthGuard */

    /***/
    function UTcu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/authentication.service */
      "ej43");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(auth) {
          _classCallCheck(this, AuthGuard);

          this.auth = auth;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate() {
            return this.auth.isAuthenticated();
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthGuard);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: httpLoaderFactory, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "httpLoaderFactory", function () {
        return httpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _directives_password_match_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./directives/password-match.directive */
      "rnVO");
      /* harmony import */


      var _directives_password_pattern_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./directives/password-pattern.directive */
      "N7e9");
      /* harmony import */


      var aws_amplify_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! aws-amplify-angular */
      "YD7i");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "mqiu");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var ngx_flag_picker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ngx-flag-picker */
      "09Zs");

      function httpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__["TranslateHttpLoader"](http, './assets/locale/', '.json');
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _directives_password_match_directive__WEBPACK_IMPORTED_MODULE_11__["PasswordMatchDirective"], _directives_password_pattern_directive__WEBPACK_IMPORTED_MODULE_12__["PasswordPatternDirective"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["IonicStorageModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], aws_amplify_angular__WEBPACK_IMPORTED_MODULE_13__["AmplifyAngularModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"].forRoot({
          defaultLanguage: 'en',
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateLoader"],
            useFactory: httpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"]]
          }
        }), ngx_flag_picker__WEBPACK_IMPORTED_MODULE_17__["NgxFlagPickerModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, aws_amplify_angular__WEBPACK_IMPORTED_MODULE_13__["AmplifyService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "ej43":
    /*!****************************************************!*\
      !*** ./src/app/services/authentication.service.ts ***!
      \****************************************************/

    /*! exports provided: AuthenticationService */

    /***/
    function ej43(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return AuthenticationService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var aws_amplify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! aws-amplify */
      "AL3R");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! jwt-decode */
      "EjJx");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./storage.service */
      "n90K");
      /* harmony import */


      var _translation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./translation.service */
      "ty2H");

      var TOKEN_KEY = 'auth-token';

      var AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService(go, plt, storageService, toaster, alertController, translate) {
          var _this2 = this;

          _classCallCheck(this, AuthenticationService);

          this.go = go;
          this.plt = plt;
          this.storageService = storageService;
          this.toaster = toaster;
          this.alertController = alertController;
          this.translate = translate;
          this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
          this.plt.ready().then(function () {
            _this2.checkToken();
          });
        }

        _createClass(AuthenticationService, [{
          key: "checkToken",
          value: function checkToken() {
            var _this3 = this;

            this.storageService.getLocalData(TOKEN_KEY).then(function (res) {
              if (res === null) {
                _this3.authenticationState.next(false);
              } else {
                _this3.validateToken(res);
              }
            });
          }
        }, {
          key: "signIn",
          value: function signIn(username, password) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var user, tokens, toast, alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.translate.signTranslations();
                      _context.prev = 1;
                      _context.next = 4;
                      return aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].signIn(username.toString(), password.toString());

                    case 4:
                      user = _context.sent;
                      tokens = user.signInUserSession;

                      if (tokens != null) {
                        this.go.navigateForward(['/tabs/home']);
                        this.setLogin(tokens.idToken.jwtToken);
                        toast = this.toaster.create({
                          message: this.translate.toastMessage,
                          duration: 3000,
                          position: 'top'
                        }); // tslint:disable-next-line: no-shadowed-variable

                        toast.then(function (toast) {
                          return toast.present();
                        });
                      }

                      _context.next = 16;
                      break;

                    case 9:
                      _context.prev = 9;
                      _context.t0 = _context["catch"](1);
                      _context.next = 13;
                      return this.alertController.create({
                        header: this.translate.alertHeader,
                        message: _context.t0.message,
                        buttons: [{
                          text: this.translate.alertButtonOne,
                          handler: function handler() {
                            console.log('...');
                          }
                        }]
                      });

                    case 13:
                      alert = _context.sent;
                      _context.next = 16;
                      return alert.present();

                    case 16:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[1, 9]]);
            }));
          }
        }, {
          key: "register",
          value: function register(email, password, firstName, lastName, hospital, college, collegeYear) {
            var _this4 = this;

            this.translate.RegisterTranslations();

            try {
              aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].signUp({
                username: email,
                password: password,
                attributes: {
                  email: email,
                  given_name: firstName,
                  family_name: lastName,
                  'custom:hospital': hospital,
                  'custom:college': college,
                  'custom:collegeyear': collegeYear.toString()
                },
                validationData: []
              }).then(function (data) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  var _this5 = this;

                  var alert;
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          this.emailAddress = email;
                          _context2.next = 3;
                          return this.alertController.create({
                            header: this.translate.alertHeader,
                            message: this.translate.alertMessage,
                            buttons: [{
                              text: this.translate.alertButtonOne,
                              handler: function handler() {
                                _this5.go.navigateBack(['/reg-code']);
                              }
                            }]
                          });

                        case 3:
                          alert = _context2.sent;
                          _context2.next = 6;
                          return alert.present();

                        case 6:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this);
                }));
              })["catch"](function (error) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                  var alert;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return this.alertController.create({
                            header: this.translate.alertErrorHeader,
                            message: error.message,
                            buttons: [{
                              text: this.translate.alertButtonOne,
                              handler: function handler() {
                                console.log('...');
                              }
                            }]
                          });

                        case 2:
                          alert = _context3.sent;
                          _context3.next = 5;
                          return alert.present();

                        case 5:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3, this);
                }));
              });
            } catch (error) {
              console.log('error signing up ', error);
            }
          }
        }, {
          key: "resendConfirmationCode",
          value: function resendConfirmationCode(username) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this6 = this;

              var alert, _alert;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.translate.resendTranslations();
                      _context4.prev = 1;
                      _context4.next = 4;
                      return aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].resendSignUp(username);

                    case 4:
                      this.emailAddress = username;
                      _context4.next = 7;
                      return this.alertController.create({
                        header: this.translate.alertHeader,
                        message: this.translate.alertMessage,
                        buttons: [{
                          text: this.translate.alertButtonOne,
                          handler: function handler() {
                            _this6.go.navigateBack(['/reg-code']);
                          }
                        }]
                      });

                    case 7:
                      alert = _context4.sent;
                      _context4.next = 10;
                      return alert.present();

                    case 10:
                      _context4.next = 19;
                      break;

                    case 12:
                      _context4.prev = 12;
                      _context4.t0 = _context4["catch"](1);
                      _context4.next = 16;
                      return this.alertController.create({
                        header: this.translate.alertErrorHeader,
                        message: _context4.t0.message,
                        buttons: [{
                          text: this.translate.alertButtonOne,
                          handler: function handler() {
                            console.log('...');
                          }
                        }]
                      });

                    case 16:
                      _alert = _context4.sent;
                      _context4.next = 19;
                      return _alert.present();

                    case 19:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[1, 12]]);
            }));
          } // can use code for verification

        }, {
          key: "confirmSignUpWithCode",
          value: function confirmSignUpWithCode(username, code) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this7 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.translate.confirmSignUpWithCodeTranslation();
                      _context6.prev = 1;
                      _context6.next = 4;
                      return aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].confirmSignUp(username, code).then(function (response) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                          var _this8 = this;

                          var alert;
                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  _context5.next = 2;
                                  return this.alertController.create({
                                    header: this.translate.alertHeader,
                                    message: this.translate.alertMessage,
                                    buttons: [{
                                      text: this.translate.alertButtonOne,
                                      handler: function handler() {
                                        _this8.go.navigateBack(['/login']);
                                      }
                                    }]
                                  });

                                case 2:
                                  alert = _context5.sent;
                                  _context5.next = 5;
                                  return alert.present();

                                case 5:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5, this);
                        }));
                      });

                    case 4:
                      _context6.next = 13;
                      break;

                    case 6:
                      _context6.prev = 6;
                      _context6.t0 = _context6["catch"](1);
                      _context6.next = 10;
                      return this.alertController.create({
                        header: this.translate.alertErrorHeader,
                        message: _context6.t0.message,
                        buttons: [{
                          text: this.translate.alertButtonOne,
                          handler: function handler() {
                            console.log('...');
                          }
                        }]
                      });

                    case 10:
                      alert = _context6.sent;
                      _context6.next = 13;
                      return alert.present();

                    case 13:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this, [[1, 6]]);
            }));
          }
        }, {
          key: "signOut",
          value: function signOut() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this9 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this.translate.signoutTranslation();
                      _context7.prev = 1;
                      _context7.next = 4;
                      return aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].signOut().then(function (response) {
                        var toast = _this9.toaster.create({
                          message: _this9.translate.toastMessage,
                          duration: 3000,
                          position: 'top'
                        }); // tslint:disable-next-line: no-shadowed-variable


                        toast.then(function (toast) {
                          return toast.present();
                        });

                        _this9.go.navigateBack(['login']);

                        _this9.storageService.removeLocalData(TOKEN_KEY);

                        _this9.authenticationState.next(false);
                      });

                    case 4:
                      _context7.next = 14;
                      break;

                    case 6:
                      _context7.prev = 6;
                      _context7.t0 = _context7["catch"](1);
                      _context7.next = 10;
                      return this.alertController.create({
                        header: this.translate.alertErrorHeader,
                        message: _context7.t0.message,
                        buttons: [{
                          text: this.translate.alertButtonOne,
                          handler: function handler() {
                            console.log('...');
                          }
                        }]
                      });

                    case 10:
                      alert = _context7.sent;
                      _context7.next = 13;
                      return alert.present();

                    case 13:
                      this.authenticationState.next(true);

                    case 14:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this, [[1, 6]]);
            }));
          }
        }, {
          key: "isAuthenticated",
          value: function isAuthenticated() {
            return this.authenticationState.value;
          }
        }, {
          key: "validateToken",
          value: function validateToken(token) {
            var decoded = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_5__["default"])(token);

            if (Date.now() < decoded.exp * 1000) {
              this.authenticationState.next(true);
              this.currentToken = decoded;
            } else {
              this.authenticationState.next(false);
            }
          }
        }, {
          key: "setLogin",
          value: function setLogin(token) {
            var _this10 = this;

            return this.storageService.setLocalData(TOKEN_KEY, token).then(function () {
              _this10.validateToken(token);
            });
          }
        }, {
          key: "forgotPassword",
          value: function forgotPassword(email) {
            return aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].forgotPassword(email);
          }
        }, {
          key: "submitCode",
          value: function submitCode(email, code, password) {
            return aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].forgotPasswordSubmit(email, code, password);
          }
        }, {
          key: "getCurrentUserAttributes",
          value: function getCurrentUserAttributes() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser();

                    case 2:
                      this.user = _context8.sent;
                      return _context8.abrupt("return", this.user.attributes);

                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "updateUserAttributes",
          value: function updateUserAttributes(firstName, lastName, hospital, college, collegeYear) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var _this11 = this;

              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      this.translate.UpdateProfile();
                      aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].updateUserAttributes(this.user, {
                        given_name: firstName,
                        family_name: lastName,
                        'custom:hospital': hospital,
                        'custom:college': college,
                        'custom:collegeyear': collegeYear.toString()
                      }).then(function (response) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                          var _this12 = this;

                          var alert;
                          return regeneratorRuntime.wrap(function _callee9$(_context9) {
                            while (1) {
                              switch (_context9.prev = _context9.next) {
                                case 0:
                                  if (!(response === 'SUCCESS')) {
                                    _context9.next = 6;
                                    break;
                                  }

                                  _context9.next = 3;
                                  return this.alertController.create({
                                    header: this.translate.alertHeader,
                                    message: this.translate.alertMessage,
                                    buttons: [{
                                      text: this.translate.alertButtonOne,
                                      handler: function handler() {
                                        _this12.go.navigateBack(['/tabs/home']);
                                      }
                                    }]
                                  });

                                case 3:
                                  alert = _context9.sent;
                                  _context9.next = 6;
                                  return alert.present();

                                case 6:
                                case "end":
                                  return _context9.stop();
                              }
                            }
                          }, _callee9, this);
                        }));
                      })["catch"](function (error) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                          var alert;
                          return regeneratorRuntime.wrap(function _callee10$(_context10) {
                            while (1) {
                              switch (_context10.prev = _context10.next) {
                                case 0:
                                  console.log(JSON.stringify(error));
                                  _context10.next = 3;
                                  return this.alertController.create({
                                    header: this.translate.alertErrorHeader,
                                    message: this.translate.alertErrorMessage,
                                    buttons: [{
                                      text: this.translate.alertButtonOne,
                                      handler: function handler() {
                                        console.log('...');
                                      }
                                    }]
                                  });

                                case 3:
                                  alert = _context10.sent;
                                  _context10.next = 6;
                                  return alert.present();

                                case 6:
                                case "end":
                                  return _context10.stop();
                              }
                            }
                          }, _callee10, this);
                        }));
                      });

                    case 2:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }]);

        return AuthenticationService;
      }();

      AuthenticationService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _translation_service__WEBPACK_IMPORTED_MODULE_7__["TranslationService"]
        }];
      };

      AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthenticationService);
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "n90K":
    /*!*********************************************!*\
      !*** ./src/app/services/storage.service.ts ***!
      \*********************************************/

    /*! exports provided: StorageService */

    /***/
    function n90K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return StorageService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");

      var API_STORAGE_KEY = 'sstemm-key';

      var StorageService = /*#__PURE__*/function () {
        function StorageService(storage) {
          _classCallCheck(this, StorageService);

          this.storage = storage;
        }

        _createClass(StorageService, [{
          key: "getLocalData",
          value: function getLocalData(key) {
            return this.storage.get("".concat(API_STORAGE_KEY, "-").concat(key));
          }
        }, {
          key: "setLocalData",
          value: function setLocalData(key, data) {
            return this.storage.set("".concat(API_STORAGE_KEY, "-").concat(key), data);
          }
        }, {
          key: "removeLocalData",
          value: function removeLocalData(key) {
            this.storage.remove("".concat(API_STORAGE_KEY, "-").concat(key));
          }
        }]);

        return StorageService;
      }();

      StorageService.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
        }];
      };

      StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], StorageService);
      /***/
    },

    /***/
    "rnVO":
    /*!********************************************************!*\
      !*** ./src/app/directives/password-match.directive.ts ***!
      \********************************************************/

    /*! exports provided: PasswordMatchDirective */

    /***/
    function rnVO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordMatchDirective", function () {
        return PasswordMatchDirective;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/customvalidation.service */
      "N6gq");

      var PasswordMatchDirective_1;

      var PasswordMatchDirective = PasswordMatchDirective_1 = /*#__PURE__*/function () {
        function PasswordMatchDirective(customValidator) {
          _classCallCheck(this, PasswordMatchDirective);

          this.customValidator = customValidator; // tslint:disable-next-line: no-input-rename

          this.MatchPassword = [];
        }

        _createClass(PasswordMatchDirective, [{
          key: "validate",
          value: function validate(formGroup) {
            return this.customValidator.matchPassword(this.MatchPassword[0], this.MatchPassword[1])(formGroup);
          }
        }]);

        return PasswordMatchDirective;
      }();

      PasswordMatchDirective.ctorParameters = function () {
        return [{
          type: _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_3__["CustomvalidationService"]
        }];
      };

      PasswordMatchDirective.propDecorators = {
        MatchPassword: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['appMatchPassword']
        }]
      };
      PasswordMatchDirective = PasswordMatchDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appPasswordMatch]',
        providers: [{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
          useExisting: PasswordMatchDirective_1,
          multi: true
        }]
      })], PasswordMatchDirective);
      /***/
    },

    /***/
    "ty2H":
    /*!*************************************************!*\
      !*** ./src/app/services/translation.service.ts ***!
      \*************************************************/

    /*! exports provided: TranslationService */

    /***/
    function ty2H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TranslationService", function () {
        return TranslationService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var TranslationService = /*#__PURE__*/function () {
        function TranslationService(translate) {
          _classCallCheck(this, TranslationService);

          this.translate = translate;
        }

        _createClass(TranslationService, [{
          key: "resendTranslations",
          value: function resendTranslations() {
            var _this13 = this;

            this.translate.get('alerts.emailVerHeader').subscribe(function (value) {
              _this13.alertHeader = value;
            });
            this.translate.get('alerts.emailCode').subscribe(function (value) {
              _this13.alertMessage = value;
            });
            this.translate.get('alerts.errorHeader').subscribe(function (value) {
              _this13.alertErrorHeader = value;
            });
            this.translate.get('alerts.buttonOk').subscribe(function (value) {
              _this13.alertButtonOne = value;
            });
          }
        }, {
          key: "confirmSignUpWithCodeTranslation",
          value: function confirmSignUpWithCodeTranslation() {
            var _this14 = this;

            this.translate.get('alerts.successHeader').subscribe(function (value) {
              _this14.alertHeader = value;
            });
            this.translate.get('alerts.successMessage').subscribe(function (value) {
              _this14.alertMessage = value;
            });
            this.translate.get('alerts.errorHeader').subscribe(function (value) {
              _this14.alertErrorHeader = value;
            });
            this.translate.get('alerts.buttonOk').subscribe(function (value) {
              _this14.alertButtonOne = value;
            });
          }
        }, {
          key: "signoutTranslation",
          value: function signoutTranslation() {
            var _this15 = this;

            this.translate.get('toasts.logoutSuccess').subscribe(function (value) {
              _this15.toastMessage = value;
            });
            this.translate.get('alerts.errorHeader').subscribe(function (value) {
              _this15.alertErrorHeader = value;
            });
            this.translate.get('alerts.buttonOk').subscribe(function (value) {
              _this15.alertButtonOne = value;
            });
          }
        }, {
          key: "RegisterTranslations",
          value: function RegisterTranslations() {
            var _this16 = this;

            this.translate.get('alerts.emailVerHeader').subscribe(function (value) {
              _this16.alertHeader = value;
            });
            this.translate.get('alerts.emailVerMessage').subscribe(function (value) {
              _this16.alertMessage = value;
            });
            this.translate.get('alerts.errorHeader').subscribe(function (value) {
              _this16.alertErrorHeader = value;
            });
            this.translate.get('alerts.buttonOk').subscribe(function (value) {
              _this16.alertButtonOne = value;
            });
          }
        }, {
          key: "signTranslations",
          value: function signTranslations() {
            var _this17 = this;

            this.translate.get('toasts.successLogin').subscribe(function (value) {
              _this17.toastMessage = value;
            });
            this.translate.get('alerts.errorHeader').subscribe(function (value) {
              _this17.alertHeader = value;
            });
            this.translate.get('alerts.buttonOk').subscribe(function (value) {
              _this17.alertButtonOne = value;
            });
          }
        }, {
          key: "regLeavePageTranslations",
          value: function regLeavePageTranslations() {
            var _this18 = this;

            this.translate.get('alerts.leavePageHeader').subscribe(function (value) {
              _this18.alertHeader = value;
            });
            this.translate.get('alerts.regLeavePageMessage').subscribe(function (value) {
              _this18.alertMessage = value;
            });
            this.translate.get('alerts.buttonYes').subscribe(function (value) {
              _this18.alertButtonOne = value;
            });
            this.translate.get('alerts.buttonNo').subscribe(function (value) {
              _this18.alertButtonTwo = value;
            });
          }
        }, {
          key: "forgotPasswordTranslation",
          value: function forgotPasswordTranslation() {
            var _this19 = this;

            this.translate.get('alerts.forgotPasswordHeader').subscribe(function (value) {
              _this19.alertHeader = value;
            });
            this.translate.get('alerts.forgotPasswordMessage').subscribe(function (value) {
              _this19.alertMessage = value;
            });
            this.translate.get('alerts.buttonOk').subscribe(function (value) {
              _this19.alertButtonOne = value;
            });
            this.translate.get('alerts.buttonTry').subscribe(function (value) {
              _this19.alertButtonTwo = value;
            });
            this.translate.get('alerts.forgotPassworderrorHeader').subscribe(function (value) {
              _this19.alertErrorHeader = value;
            });
          }
        }, {
          key: "forgotPasswordCodeTranslation",
          value: function forgotPasswordCodeTranslation() {
            var _this20 = this;

            this.translate.get('toasts.passwordChangeSuccess').subscribe(function (value) {
              _this20.toastMessage = value;
            });
            this.translate.get('alerts.errorHeader').subscribe(function (value) {
              _this20.alertErrorHeader = value;
            });
            this.translate.get('alerts.buttonOk').subscribe(function (value) {
              _this20.alertButtonOne = value;
            });
          }
        }, {
          key: "stressSignatureCancel",
          value: function stressSignatureCancel() {
            var _this21 = this;

            this.translate.get('alerts.leavePageHeader').subscribe(function (value) {
              _this21.alertHeader = value;
            });
            this.translate.get('alerts.stressLeaveMessage').subscribe(function (value) {
              _this21.alertMessage = value;
            });
            this.translate.get('alerts.buttonYes').subscribe(function (value) {
              _this21.alertButtonOne = value;
            });
            this.translate.get('alerts.buttonNo').subscribe(function (value) {
              _this21.alertButtonTwo = value;
            });
          }
        }, {
          key: "stressSignatureSave",
          value: function stressSignatureSave() {
            var _this22 = this;

            this.translate.get('alerts.stressSaveHeader').subscribe(function (value) {
              _this22.alertHeader = value;
            });
            this.translate.get('alerts.stressSaveMessage').subscribe(function (value) {
              _this22.alertMessage = value;
            });
            this.translate.get('alerts.buttonOk').subscribe(function (value) {
              _this22.alertButtonOne = value;
            });
          }
        }, {
          key: "StressQuestionsGoBack",
          value: function StressQuestionsGoBack() {
            var _this23 = this;

            this.translate.get('alerts.leavePageHeader').subscribe(function (value) {
              _this23.alertHeader = value;
            });
            this.translate.get('alerts.stressQuestionsMessage').subscribe(function (value) {
              _this23.alertMessage = value;
            });
            this.translate.get('alerts.buttonYes').subscribe(function (value) {
              _this23.alertButtonOne = value;
            });
            this.translate.get('alerts.buttonNo').subscribe(function (value) {
              _this23.alertButtonTwo = value;
            });
          }
        }, {
          key: "DomainNames",
          value: function DomainNames() {
            var _this24 = this;

            this.translate.get('button.thoughts').subscribe(function (value) {
              _this24.thoughts = value;
            });
            this.translate.get('button.feelings').subscribe(function (value) {
              _this24.feelings = value;
            });
            this.translate.get('button.behaviours').subscribe(function (value) {
              _this24.behaviours = value;
            });
          }
        }, {
          key: "UpdateProfile",
          value: function UpdateProfile() {
            var _this25 = this;

            this.translate.get('alerts.updateProfileSuccessHeader').subscribe(function (value) {
              _this25.alertHeader = value;
            });
            this.translate.get('alerts.updateProfileSuccessMessage').subscribe(function (value) {
              _this25.alertMessage = value;
            });
            this.translate.get('alerts.buttonOk').subscribe(function (value) {
              _this25.alertButtonOne = value;
            });
            this.translate.get('alerts.updateProfileErrorHeader').subscribe(function (value) {
              _this25.alertErrorHeader = value;
            });
            this.translate.get('alerts.updateProfileErrorMessage').subscribe(function (value) {
              _this25.alertErrorMessage = value;
            });
          }
        }, {
          key: "timeout",
          value: function timeout() {
            var _this26 = this;

            this.translate.get('toasts.expire').subscribe(function (value) {
              _this26.toastMessage = value;
            });
          }
        }]);

        return TranslationService;
      }();

      TranslationService.ctorParameters = function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }];
      };

      TranslationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], TranslationService);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./guards/auth.guard */
      "UTcu");

      var routes = [{
        path: '',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tabs-tabs-module */
          "tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./tabs/tabs.module */
          "hO9l")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | login-login-module */
          "login-login-module").then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "X3zk")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'registration',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | registration-registration-module */
          "registration-registration-module").then(__webpack_require__.bind(null,
          /*! ./registration/registration.module */
          "DNuw")).then(function (m) {
            return m.RegistrationPageModule;
          });
        }
      }, {
        path: 'stress-questions/:id',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | stress-questions-stress-questions-module */
          [__webpack_require__.e("default~history-history-module~home-home-module~stress-questions-stress-questions-module~stress-sign~204cde42"), __webpack_require__.e("common"), __webpack_require__.e("stress-questions-stress-questions-module")]).then(__webpack_require__.bind(null,
          /*! ./stress-questions/stress-questions.module */
          "6nC6")).then(function (m) {
            return m.StressQuestionsPageModule;
          });
        }
      }, {
        path: 'forgot-password',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | password-forgot-password-forgot-password-module */
          "password-forgot-password-forgot-password-module").then(__webpack_require__.bind(null,
          /*! ./password/forgot-password/forgot-password.module */
          "Z05H")).then(function (m) {
            return m.ForgotPasswordPageModule;
          });
        }
      }, {
        path: 'forgot-password-code',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | password-forgot-password-code-forgot-password-code-module */
          "password-forgot-password-code-forgot-password-code-module").then(__webpack_require__.bind(null,
          /*! ./password/forgot-password-code/forgot-password-code.module */
          "lJVu")).then(function (m) {
            return m.ForgotPasswordCodePageModule;
          });
        }
      }, {
        path: 'terms',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | terms-terms-module */
          "terms-terms-module").then(__webpack_require__.bind(null,
          /*! ./terms/terms.module */
          "eNqe")).then(function (m) {
            return m.TermsPageModule;
          });
        }
      }, {
        path: 'resend-verification',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | password-resend-verification-resend-verification-module */
          "password-resend-verification-resend-verification-module").then(__webpack_require__.bind(null,
          /*! ./password/resend-verification/resend-verification.module */
          "EGrt")).then(function (m) {
            return m.ResendVerificationPageModule;
          });
        }
      }, {
        path: 'cognito',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | cognito-cognito-module */
          "cognito-cognito-module").then(__webpack_require__.bind(null,
          /*! ./cognito/cognito.module */
          "OshG")).then(function (m) {
            return m.CognitoPageModule;
          });
        }
      }, {
        path: 'details',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | details-details-module */
          [__webpack_require__.e("default~details-details-module~history-history-module~home-home-module"), __webpack_require__.e("details-details-module")]).then(__webpack_require__.bind(null,
          /*! ./details/details.module */
          "QR/W")).then(function (m) {
            return m.DetailsPageModule;
          });
        }
      }, {
        path: 'reg-code',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | reg-code-reg-code-module */
          "reg-code-reg-code-module").then(__webpack_require__.bind(null,
          /*! ./reg-code/reg-code.module */
          "41Fk")).then(function (m) {
            return m.RegCodePageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map