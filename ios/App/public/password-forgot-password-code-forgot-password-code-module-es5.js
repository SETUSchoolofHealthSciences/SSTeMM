(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["password-forgot-password-code-forgot-password-code-module"], {
    /***/
    "0Ez/":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/password/forgot-password-code/forgot-password-code.page.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ez(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"dark-gb\">\n  <div class=\"logoLogin\">\n    <div class=\"center\">\n      <ion-img\n        src=\"assets/sstemm-login.png\"\n        class=\"ion-align-self-end\"\n      ></ion-img>\n    </div>\n  </div>\n  <div class=\"enterCode\">\n    <h1 class=\"fpcTitle\">{{ 'forgot.code' | translate }}</h1>\n    <form [formGroup]=\"formGroupCode\" (ngSubmit)=\"submitCode()\">\n    <div>\n      <ion-input\n      class=\"input\"\n      formControlName=\"emailControl\"\n      required=\"true\"\n      type=\"email\"\n      placeholder=\"{{ 'input.email' | translate }}\"\n      [(ngModel)]=\"auth.emailAddress\"\n    >\n    </ion-input>\n    <span\n      class=\"text-danger\"\n      *ngIf=\"(forgotPasswordFormCodeControl.emailControl.touched || submitted) && forgotPasswordFormCodeControl.emailControl.errors?.required\"\n    >\n    {{ 'validation.emailRequired' | translate }}\n    </span>\n    <span\n      class=\"text-danger\"\n      *ngIf=\"forgotPasswordFormCodeControl.emailControl.touched && forgotPasswordFormCodeControl.emailControl.errors?.email\"\n    >\n    {{ 'validation.emailValid' | translate }}\n    </span>\n      <ion-input\n        class=\"input\"\n        placeholder=\"{{ 'input.verify' | translate }}\"\n        formControlName=\"codeControl\"\n        type=\"number\"\n      ></ion-input>\n      <span\n        class=\"text-danger\"\n        *ngIf=\"(forgotPasswordFormCodeControl.codeControl.touched || submitted) && forgotPasswordFormCodeControl.codeControl.errors?.required\"\n      >\n      {{ 'validation.verify' | translate }}\n      </span>\n      <ion-input\n        class=\"input\"\n        placeholder=\"{{ 'input.password' | translate }}\"\n        formControlName=\"passwordControl\"\n        type=\"password\"\n      ></ion-input>\n      <span\n        class=\"text-danger\"\n        *ngIf=\"(forgotPasswordFormCodeControl.passwordControl.touched || submitted) && forgotPasswordFormCodeControl.passwordControl.errors?.required\"\n      >\n      {{ 'validation.passwordRequired' | translate }}\n      </span>\n      <span\n        class=\"text-danger\"\n        *ngIf=\"forgotPasswordFormCodeControl.passwordControl.touched && forgotPasswordFormCodeControl.passwordControl.errors?.invalidPassword\"\n      >\n      {{ 'validation.passwordRequirements' | translate }}\n      </span>\n    </div>\n    <div>\n      <ion-input\n        class=\"input\"\n        placeholder=\"{{ 'input.confirmPassword' | translate }}\"\n        formControlName=\"passwordAgainControl\"\n        type=\"password\"\n      ></ion-input>\n      <span\n        class=\"text-danger\"\n        *ngIf=\"(forgotPasswordFormCodeControl.passwordAgainControl.touched || submitted) && forgotPasswordFormCodeControl.passwordAgainControl.errors?.required\"\n      >\n      {{ 'validation.confirmPassword' | translate }}\n      </span>\n      <span\n        class=\"text-danger\"\n        *ngIf=\"forgotPasswordFormCodeControl.passwordAgainControl.touched && forgotPasswordFormCodeControl.passwordAgainControl.errors?.passwordMismatch\"\n      >\n      {{ 'validation.matchPasswords' | translate }}\n      </span>\n    </div>\n    <div class=\"fpButton\">\n      <ion-button class=\"buttonDetails\" expand=\"block\" type=\"submit\"\n        ><ion-icon class=\"icon\" name=\"add-circle-outline\"></ion-icon>{{ 'button.submit' | translate }}</ion-button>\n    </div>\n    <div class=\"fpButton\">\n      <ion-button class=\"buttonDetails\" expand=\"block\" (click)=\"cancel()\"\n        ><ion-icon class=\"icon\" name=\"close-outline\"></ion-icon>{{ 'button.cancel' | translate }}</ion-button>\n    </div>\n  </form>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "1R1N":
    /*!**************************************************************************************!*\
      !*** ./src/app/password/forgot-password-code/forgot-password-code-routing.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: ForgotPasswordCodePageRoutingModule */

    /***/
    function R1N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordCodePageRoutingModule", function () {
        return ForgotPasswordCodePageRoutingModule;
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


      var _forgot_password_code_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forgot-password-code.page */
      "ji58");

      var routes = [{
        path: '',
        component: _forgot_password_code_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordCodePage"]
      }];

      var ForgotPasswordCodePageRoutingModule = function ForgotPasswordCodePageRoutingModule() {
        _classCallCheck(this, ForgotPasswordCodePageRoutingModule);
      };

      ForgotPasswordCodePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ForgotPasswordCodePageRoutingModule);
      /***/
    },

    /***/
    "8/Ku":
    /*!******************************************************************************!*\
      !*** ./src/app/password/forgot-password-code/forgot-password-code.page.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function Ku(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".dark-gb {\n  --ion-background-color: #08415C !important;\n}\n\n.logoLogin {\n  margin-top: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.input {\n  border: solid 1px #5ACAF9;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 30px;\n  margin-right: 30px;\n  width: auto;\n  border-radius: 5px;\n  --placeholder-color: #5ACAF9;\n  color: white;\n}\n\n.logoHeader {\n  background-color: #08415C;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  text-align: center;\n  padding-bottom: 10px;\n}\n\n.fpcTitle {\n  color: #5ACAF9;\n  text-align: center;\n}\n\n.center {\n  width: 300px;\n}\n\n.fpButton {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  width: auto;\n}\n\n.buttonDetails {\n  font-weight: bold;\n  font-size: large;\n  color: #08415C;\n  width: 250px;\n  text-transform: none;\n}\n\n.text {\n  text-decoration: none;\n}\n\n.text-danger {\n  color: red;\n  padding: 8px;\n  background-color: #cbebfa;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 30px;\n  margin-right: 30px;\n  border-radius: 5px;\n}\n\n.icon {\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZvcmdvdC1wYXNzd29yZC1jb2RlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBQ0U7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQ0U7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUVKOztBQUNFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBRUo7O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVFO0VBQ0UscUJBQUE7QUFDSjs7QUFFRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7QUFDSiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQtY29kZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFyay1nYntcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwODQxNUMgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5sb2dvTG9naW57XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLmlucHV0e1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzVBQ0FGOTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM1QUNBRjk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dvSGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODQxNUM7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuZnBjVGl0bGV7XHJcbiAgICBjb2xvcjogICM1QUNBRjk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5jZW50ZXJ7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mcEJ1dHRvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b25EZXRhaWxze1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgY29sb3I6ICMwODQxNUM7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnRleHR7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0LWRhbmdlcntcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JlYmZhO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuXHJcbiAgLmljb24ge1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    "ji58":
    /*!****************************************************************************!*\
      !*** ./src/app/password/forgot-password-code/forgot-password-code.page.ts ***!
      \****************************************************************************/

    /*! exports provided: ForgotPasswordCodePage */

    /***/
    function ji58(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordCodePage", function () {
        return ForgotPasswordCodePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_forgot_password_code_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./forgot-password-code.page.html */
      "0Ez/");
      /* harmony import */


      var _forgot_password_code_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forgot-password-code.page.scss */
      "8/Ku");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_translation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/translation.service */
      "ty2H");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/authentication.service */
      "ej43");
      /* harmony import */


      var _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../services/customvalidation.service */
      "N6gq");

      var ForgotPasswordCodePage = /*#__PURE__*/function () {
        function ForgotPasswordCodePage(fb, auth, customValidator, toaster, alertController, router, translate) {
          _classCallCheck(this, ForgotPasswordCodePage);

          this.fb = fb;
          this.auth = auth;
          this.customValidator = customValidator;
          this.toaster = toaster;
          this.alertController = alertController;
          this.router = router;
          this.translate = translate;
          this.submitted = false;
          this.formGroupCode = fb.group({
            codeControl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            emailControl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            passwordControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.customValidator.patternValidator()])],
            passwordAgainControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])]
          }, {
            validator: this.customValidator.matchPassword('passwordControl', 'passwordAgainControl')
          });
        }

        _createClass(ForgotPasswordCodePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "submitCode",
          value: function submitCode() {
            var _this = this;

            this.submitted = true;
            this.translate.forgotPasswordCodeTranslation();

            if (this.formGroupCode.valid) {
              this.auth.submitCode(this.formGroupCode.value.emailControl, this.formGroupCode.value.codeControl.toString(), this.formGroupCode.value.passwordControl).then(function (response) {
                var toast = _this.toaster.create({
                  message: _this.translate.toastMessage,
                  duration: 3000,
                  position: 'top'
                }); // tslint:disable-next-line: no-shadowed-variable


                toast.then(function (toast) {
                  return toast.present();
                });

                _this.router.navigate(['login']);
              })["catch"](function (error) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  var alert;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          console.log('Error ', error);
                          _context.next = 3;
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

                        case 3:
                          alert = _context.sent;
                          _context.next = 6;
                          return alert.present();

                        case 6:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              });
            }
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.router.navigate(['/login']);
          }
        }, {
          key: "forgotPasswordFormCodeControl",
          get: function get() {
            return this.formGroupCode.controls;
          }
        }]);

        return ForgotPasswordCodePage;
      }();

      ForgotPasswordCodePage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]
        }, {
          type: _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_9__["CustomvalidationService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_services_translation_service__WEBPACK_IMPORTED_MODULE_7__["TranslationService"]
        }];
      };

      ForgotPasswordCodePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forgot-password-code',
        template: _raw_loader_forgot_password_code_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgot_password_code_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ForgotPasswordCodePage);
      /***/
    },

    /***/
    "lJVu":
    /*!******************************************************************************!*\
      !*** ./src/app/password/forgot-password-code/forgot-password-code.module.ts ***!
      \******************************************************************************/

    /*! exports provided: ForgotPasswordCodePageModule */

    /***/
    function lJVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordCodePageModule", function () {
        return ForgotPasswordCodePageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _forgot_password_code_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forgot-password-code-routing.module */
      "1R1N");
      /* harmony import */


      var _forgot_password_code_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forgot-password-code.page */
      "ji58");
      /* harmony import */


      var _directives_password_match_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../directives/password-match.directive */
      "rnVO");
      /* harmony import */


      var _directives_password_pattern_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../directives/password-pattern.directive */
      "N7e9");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var src_app_app_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ForgotPasswordCodePageModule = function ForgotPasswordCodePageModule() {
        _classCallCheck(this, ForgotPasswordCodePageModule);
      };

      ForgotPasswordCodePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _forgot_password_code_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordCodePageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
            useFactory: src_app_app_module__WEBPACK_IMPORTED_MODULE_10__["httpLoaderFactory"],
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]
          }
        })],
        declarations: [_forgot_password_code_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordCodePage"], _directives_password_pattern_directive__WEBPACK_IMPORTED_MODULE_8__["PasswordPatternDirective"], _directives_password_match_directive__WEBPACK_IMPORTED_MODULE_7__["PasswordMatchDirective"]]
      })], ForgotPasswordCodePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=password-forgot-password-code-forgot-password-code-module-es5.js.map