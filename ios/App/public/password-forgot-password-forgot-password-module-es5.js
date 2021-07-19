(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["password-forgot-password-forgot-password-module"], {
    /***/
    "Kd+h":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/password/forgot-password/forgot-password.page.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KdH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"dark-gb\">\n  <div class=\"logoLogin\">\n    <div class=\"center\">\n      <ion-img\n        src=\"assets/sstemm-login.png\"\n        class=\"ion-align-self-end\"\n      ></ion-img>\n    </div>\n  </div>\n  <div class=\"submitEmail\">\n  <h1 class=\"fpTitle\">{{ 'forgot.title' | translate }}</h1>\n    <form [formGroup]=\"formGroupEmail\" (ngSubmit)=\"submit()\">\n    <ion-input\n      class=\"input\"\n      formControlName=\"emailControl\"\n      required=\"true\"\n      type=\"email\"\n      placeholder=\"{{ 'input.email' | translate }}\"\n    >\n    </ion-input>\n    <span\n      class=\"text-danger\"\n      *ngIf=\"(forgotPasswordFormEmailControl.emailControl.touched || submitted) && forgotPasswordFormEmailControl.emailControl.errors?.required\"\n    >\n    {{ 'validation.emailRequired' | translate }}\n    </span>\n    <span\n      class=\"text-danger\"\n      *ngIf=\"forgotPasswordFormEmailControl.emailControl.touched && forgotPasswordFormEmailControl.emailControl.errors?.email\"\n    >\n    {{ 'validation.emailValid' | translate }}\n    </span>\n    <div class=\"fpButton\">\n      <ion-button class=\"buttonDetails\" expand=\"block\" type=\"submit\"\n        ><ion-icon class=\"icon\" name=\"add-circle-outline\"></ion-icon>{{ 'button.submit' | translate }}</ion-button>\n    </div>\n    <div class=\"fpButton\">\n      <ion-button class=\"buttonDetails\" expand=\"block\" (click)=\"giveCode()\"\n        ><ion-icon class=\"icon\" name=\"code-working-outline\"></ion-icon>{{ 'button.already' | translate }}</ion-button>\n    </div>\n    <div class=\"fpButton\">\n      <ion-button class=\"buttonDetails\" expand=\"block\" (click)=\"cancel()\"\n        ><ion-icon class=\"icon\" name=\"close-outline\"></ion-icon>{{ 'button.cancel' | translate }}</ion-button>\n    </div>\n    </form>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "MDlA":
    /*!********************************************************************!*\
      !*** ./src/app/password/forgot-password/forgot-password.page.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function MDlA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".dark-gb {\n  --ion-background-color: #08415C !important;\n}\n\n.logoLogin {\n  margin-top: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.input {\n  border: solid 1px #5ACAF9;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 30px;\n  margin-right: 30px;\n  width: auto;\n  border-radius: 5px;\n  --placeholder-color: #5ACAF9;\n  color: white;\n}\n\n.logoHeader {\n  background-color: #08415C;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  text-align: center;\n  padding-bottom: 10px;\n}\n\n.fpTitle {\n  color: #5ACAF9;\n  text-align: center;\n}\n\n.center {\n  width: 300px;\n}\n\n.fpButton {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  width: auto;\n}\n\n.buttonDetails {\n  font-weight: bold;\n  font-size: large;\n  color: #08415C;\n  width: 250px;\n  text-transform: none;\n}\n\n.text {\n  text-decoration: none;\n}\n\n.text-danger {\n  color: red;\n  padding: 8px;\n  background-color: #cbebfa;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 30px;\n  margin-right: 30px;\n  border-radius: 5px;\n}\n\n.icon {\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFFRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXJrLWdie1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwODQxNUMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvZ29Mb2dpbntcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uaW5wdXR7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzVBQ0FGOTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjNUFDQUY5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxvZ29IZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODQxNUM7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZnBUaXRsZXtcclxuICBjb2xvcjogICM1QUNBRjk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmNlbnRlcntcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5mcEJ1dHRvbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLmJ1dHRvbkRldGFpbHN7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBjb2xvcjogIzA4NDE1QztcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbi50ZXh0e1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnRleHQtZGFuZ2Vye1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmViZmE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "Qw6U":
    /*!******************************************************************!*\
      !*** ./src/app/password/forgot-password/forgot-password.page.ts ***!
      \******************************************************************/

    /*! exports provided: ForgotPasswordPage */

    /***/
    function Qw6U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function () {
        return ForgotPasswordPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./forgot-password.page.html */
      "Kd+h");
      /* harmony import */


      var _forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forgot-password.page.scss */
      "MDlA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/authentication.service */
      "ej43");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_translation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/translation.service */
      "ty2H");

      var ForgotPasswordPage = /*#__PURE__*/function () {
        function ForgotPasswordPage(fb, auth, router, alertController, translate) {
          _classCallCheck(this, ForgotPasswordPage);

          this.fb = fb;
          this.auth = auth;
          this.router = router;
          this.alertController = alertController;
          this.translate = translate;
          this.submitted = false;
          this.formGroupEmail = fb.group({
            emailControl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]]
          });
        }

        _createClass(ForgotPasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "submit",
          value: function submit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.translate.forgotPasswordTranslation();
                      this.submitted = true;

                      if (this.formGroupEmail.valid) {
                        this.auth.forgotPassword(this.formGroupEmail.value.emailControl).then(function (response) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                            var _this2 = this;

                            var alert;
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    this.auth.emailAddress = this.formGroupEmail.value.emailControl;
                                    _context.next = 3;
                                    return this.alertController.create({
                                      header: this.translate.alertHeader,
                                      message: this.translate.alertMessage + response.CodeDeliveryDetails.Destination,
                                      buttons: [{
                                        text: this.translate.alertButtonOne,
                                        role: 'button',
                                        handler: function handler() {
                                          _this2.router.navigate(['/forgot-password-code']);
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
                        })["catch"](function (error) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                            var alert;
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    _context2.next = 2;
                                    return this.alertController.create({
                                      header: this.translate.alertErrorHeader,
                                      message: error.message,
                                      buttons: [{
                                        text: this.translate.alertButtonTwo,
                                        handler: function handler() {
                                          console.log('...');
                                        }
                                      }]
                                    });

                                  case 2:
                                    alert = _context2.sent;
                                    _context2.next = 5;
                                    return alert.present();

                                  case 5:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2, this);
                          }));
                        });
                      }

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.router.navigate(['/login']);
          }
        }, {
          key: "giveCode",
          value: function giveCode() {
            this.router.navigate(['/forgot-password-code']);
          }
        }, {
          key: "forgotPasswordFormEmailControl",
          get: function get() {
            return this.formGroupEmail.controls;
          }
        }]);

        return ForgotPasswordPage;
      }();

      ForgotPasswordPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: src_app_services_translation_service__WEBPACK_IMPORTED_MODULE_8__["TranslationService"]
        }];
      };

      ForgotPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forgot-password',
        template: _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ForgotPasswordPage);
      /***/
    },

    /***/
    "VyKM":
    /*!****************************************************************************!*\
      !*** ./src/app/password/forgot-password/forgot-password-routing.module.ts ***!
      \****************************************************************************/

    /*! exports provided: ForgotPasswordPageRoutingModule */

    /***/
    function VyKM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageRoutingModule", function () {
        return ForgotPasswordPageRoutingModule;
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


      var _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forgot-password.page */
      "Qw6U");

      var routes = [{
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordPage"]
      }];

      var ForgotPasswordPageRoutingModule = function ForgotPasswordPageRoutingModule() {
        _classCallCheck(this, ForgotPasswordPageRoutingModule);
      };

      ForgotPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ForgotPasswordPageRoutingModule);
      /***/
    },

    /***/
    "Z05H":
    /*!********************************************************************!*\
      !*** ./src/app/password/forgot-password/forgot-password.module.ts ***!
      \********************************************************************/

    /*! exports provided: ForgotPasswordPageModule */

    /***/
    function Z05H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function () {
        return ForgotPasswordPageModule;
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


      var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forgot-password-routing.module */
      "VyKM");
      /* harmony import */


      var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forgot-password.page */
      "Qw6U");
      /* harmony import */


      var _directives_password_pattern_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../directives/password-pattern.directive */
      "N7e9");
      /* harmony import */


      var _directives_password_match_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../directives/password-match.directive */
      "rnVO");
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

      var ForgotPasswordPageModule = function ForgotPasswordPageModule() {
        _classCallCheck(this, ForgotPasswordPageModule);
      };

      ForgotPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
            useFactory: src_app_app_module__WEBPACK_IMPORTED_MODULE_10__["httpLoaderFactory"],
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]
          }
        })],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"], _directives_password_pattern_directive__WEBPACK_IMPORTED_MODULE_7__["PasswordPatternDirective"], _directives_password_match_directive__WEBPACK_IMPORTED_MODULE_8__["PasswordMatchDirective"]]
      })], ForgotPasswordPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=password-forgot-password-forgot-password-module-es5.js.map