(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["password-resend-verification-resend-verification-module"], {
    /***/
    "/ufx":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/password/resend-verification/resend-verification.page.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ufx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"dark-gb\">\n  <div class=\"logoLogin\">\n    <div class=\"center\">\n      <ion-img\n        src=\"assets/sstemm-login.png\"\n        class=\"ion-align-self-end\"\n      ></ion-img>\n    </div>\n  </div>\n  <div class=\"submitEmail\">\n  <h1 class=\"fpTitle\">{{ 'verification.title' | translate }}</h1>\n    <form [formGroup]=\"formGroupEmail\" (ngSubmit)=\"submit()\">\n    <ion-input\n      class=\"input\"\n      formControlName=\"emailControl\"\n      required=\"true\"\n      type=\"email\"\n      placeholder=\"{{ 'input.email' | translate }}\"\n    >\n    </ion-input>\n    <span\n      class=\"text-danger\"\n      *ngIf=\"(forgotPasswordFormEmailControl.emailControl.touched || submitted) && forgotPasswordFormEmailControl.emailControl.errors?.required\"\n    >\n    {{ 'validation.emailRequired' | translate }}\n    </span>\n    <span\n      class=\"text-danger\"\n      *ngIf=\"forgotPasswordFormEmailControl.emailControl.touched && forgotPasswordFormEmailControl.emailControl.errors?.email\"\n    >\n    {{ 'validation.emailValid' | translate }}\n    </span>\n    <div class=\"fpButton\">\n      <ion-button class=\"buttonDetails\" expand=\"block\" type=\"submit\"\n        ><ion-icon class=\"icon\" name=\"add-circle-outline\"></ion-icon>{{ 'button.submit' | translate }}</ion-button>\n    </div>\n    <div class=\"fpButton\">\n      <ion-button class=\"buttonDetails\" expand=\"block\" (click)=\"giveCode()\"\n        ><ion-icon class=\"icon\" name=\"code-working-outline\"></ion-icon>{{ 'button.already' | translate }}</ion-button>\n    </div>\n    <div class=\"fpButton\">\n      <ion-button class=\"buttonDetails\" expand=\"block\" (click)=\"cancel()\"\n        ><ion-icon class=\"icon\" name=\"close-outline\"></ion-icon>{{ 'button.cancel' | translate }}</ion-button>\n    </div>\n    </form>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "EGrt":
    /*!****************************************************************************!*\
      !*** ./src/app/password/resend-verification/resend-verification.module.ts ***!
      \****************************************************************************/

    /*! exports provided: ResendVerificationPageModule */

    /***/
    function EGrt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResendVerificationPageModule", function () {
        return ResendVerificationPageModule;
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


      var _resend_verification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./resend-verification-routing.module */
      "QNDT");
      /* harmony import */


      var _resend_verification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./resend-verification.page */
      "zufv");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var src_app_app_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/app.module */
      "ZAI4");

      var ResendVerificationPageModule = function ResendVerificationPageModule() {
        _classCallCheck(this, ResendVerificationPageModule);
      };

      ResendVerificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _resend_verification_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResendVerificationPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
            useFactory: src_app_app_module__WEBPACK_IMPORTED_MODULE_9__["httpLoaderFactory"],
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
          }
        })],
        declarations: [_resend_verification_page__WEBPACK_IMPORTED_MODULE_6__["ResendVerificationPage"]]
      })], ResendVerificationPageModule);
      /***/
    },

    /***/
    "QNDT":
    /*!************************************************************************************!*\
      !*** ./src/app/password/resend-verification/resend-verification-routing.module.ts ***!
      \************************************************************************************/

    /*! exports provided: ResendVerificationPageRoutingModule */

    /***/
    function QNDT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResendVerificationPageRoutingModule", function () {
        return ResendVerificationPageRoutingModule;
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


      var _resend_verification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./resend-verification.page */
      "zufv");

      var routes = [{
        path: '',
        component: _resend_verification_page__WEBPACK_IMPORTED_MODULE_3__["ResendVerificationPage"]
      }];

      var ResendVerificationPageRoutingModule = function ResendVerificationPageRoutingModule() {
        _classCallCheck(this, ResendVerificationPageRoutingModule);
      };

      ResendVerificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ResendVerificationPageRoutingModule);
      /***/
    },

    /***/
    "j2m9":
    /*!****************************************************************************!*\
      !*** ./src/app/password/resend-verification/resend-verification.page.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function j2m9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".dark-gb {\n  --ion-background-color: #08415C !important;\n}\n\n.logoLogin {\n  margin-top: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.input {\n  border: solid 1px #5ACAF9;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 30px;\n  margin-right: 30px;\n  width: auto;\n  border-radius: 5px;\n  --placeholder-color: #5ACAF9;\n  color: white;\n}\n\n.logoHeader {\n  background-color: #08415C;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  text-align: center;\n  padding-bottom: 10px;\n}\n\n.fpTitle {\n  color: #5ACAF9;\n  text-align: center;\n}\n\n.center {\n  width: 300px;\n}\n\n.fpButton {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  width: auto;\n}\n\n.buttonDetails {\n  font-weight: bold;\n  font-size: large;\n  color: #08415C;\n  width: 250px;\n  text-transform: none;\n}\n\n.text {\n  text-decoration: none;\n}\n\n.text-danger {\n  color: red;\n  padding: 8px;\n  background-color: #cbebfa;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 30px;\n  margin-right: 30px;\n  border-radius: 5px;\n}\n\n.icon {\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Jlc2VuZC12ZXJpZmljYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQUE7QUFDSjs7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFDRTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFDRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBRUo7O0FBQ0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFFRTtFQUNFLFlBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUU7RUFDRSxxQkFBQTtBQUNKOztBQUVFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtBQUNKIiwiZmlsZSI6InJlc2VuZC12ZXJpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhcmstZ2J7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDg0MTVDICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dvTG9naW57XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLmlucHV0e1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzVBQ0FGOTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM1QUNBRjk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dvSGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODQxNUM7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuZnBUaXRsZXtcclxuICAgIGNvbG9yOiAgIzVBQ0FGOTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmNlbnRlcntcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmZwQnV0dG9ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbkRldGFpbHN7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBjb2xvcjogIzA4NDE1QztcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxuICBcclxuICAudGV4dHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnRleHQtZGFuZ2Vye1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYmViZmE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuaWNvbiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "zufv":
    /*!**************************************************************************!*\
      !*** ./src/app/password/resend-verification/resend-verification.page.ts ***!
      \**************************************************************************/

    /*! exports provided: ResendVerificationPage */

    /***/
    function zufv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResendVerificationPage", function () {
        return ResendVerificationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_resend_verification_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./resend-verification.page.html */
      "/ufx");
      /* harmony import */


      var _resend_verification_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./resend-verification.page.scss */
      "j2m9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "ej43");
      /* harmony import */


      var src_app_services_translation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/translation.service */
      "ty2H");

      var ResendVerificationPage = /*#__PURE__*/function () {
        function ResendVerificationPage(translate, fb, router, auth) {
          _classCallCheck(this, ResendVerificationPage);

          this.translate = translate;
          this.fb = fb;
          this.router = router;
          this.auth = auth;
          this.submitted = false;
          this.formGroupEmail = fb.group({
            emailControl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]]
          });
        }

        _createClass(ResendVerificationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "cancel",
          value: function cancel() {
            this.router.navigateBack(['/login']);
          }
        }, {
          key: "submit",
          value: function submit() {
            this.submitted = true;
            this.auth.resendConfirmationCode(this.formGroupEmail.value.emailControl);
          }
        }, {
          key: "giveCode",
          value: function giveCode() {
            this.router.navigateBack(['/reg-code']);
          }
        }, {
          key: "forgotPasswordFormEmailControl",
          get: function get() {
            return this.formGroupEmail.controls;
          }
        }]);

        return ResendVerificationPage;
      }();

      ResendVerificationPage.ctorParameters = function () {
        return [{
          type: src_app_services_translation_service__WEBPACK_IMPORTED_MODULE_7__["TranslationService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
        }];
      };

      ResendVerificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-resend-verification',
        template: _raw_loader_resend_verification_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_resend_verification_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ResendVerificationPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=password-resend-verification-resend-verification-module-es5.js.map