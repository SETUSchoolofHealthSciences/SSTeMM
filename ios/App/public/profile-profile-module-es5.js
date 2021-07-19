(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
    /***/
    "cRhG":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.module.ts ***!
      \*******************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function cRhG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./profile-routing.module */
      "v+7O");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile.page */
      "ncJE");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _app_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../app.module */
      "ZAI4");

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProfilePageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
            useFactory: _app_module__WEBPACK_IMPORTED_MODULE_9__["httpLoaderFactory"],
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]
          }
        })],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_5__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "ncJE":
    /*!*****************************************!*\
      !*** ./src/app/profile/profile.page.ts ***!
      \*****************************************/

    /*! exports provided: ProfilePage */

    /***/
    function ncJE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile.page.html */
      "tXh8");
      /* harmony import */


      var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile.page.scss */
      "zxxS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/authentication.service */
      "ej43");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(fb, auth, language) {
          _classCallCheck(this, ProfilePage);

          this.fb = fb;
          this.auth = auth;
          this.language = language;
          this.submitted = false;
          this.si = false;
          this.formGroup = fb.group({
            firstNameControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            lastNameControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            collegeControl: [''],
            collegeYearControl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(5)]],
            collegeYearControlSi: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(3)]],
            hospitalControl: ['']
          });
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.language.currentLang === 'si') {
              this.si = true;
            } else {
              this.si = false;
            }
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getUserAttributes();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {}
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {}
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.formGroup.reset();
          }
        }, {
          key: "getUserAttributes",
          value: function getUserAttributes() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.auth.getCurrentUserAttributes();

                    case 2:
                      this.user = _context.sent;
                      this.formGroup.patchValue({
                        firstNameControl: this.user.given_name
                      });
                      this.formGroup.patchValue({
                        lastNameControl: this.user.family_name
                      });

                      if (typeof this.user['custom:hospital'] !== 'undefined') {
                        this.formGroup.patchValue({
                          hospitalControl: this.user['custom:hospital']
                        });
                      }

                      if (typeof this.user['custom:college'] !== 'undefined') {
                        this.formGroup.patchValue({
                          collegeControl: this.user['custom:college']
                        });
                      }

                      if (typeof this.user['custom:collegeyear'] !== 'undefined') {
                        if (this.si) {
                          this.formGroup.patchValue({
                            collegeYearControlSi: this.user['custom:collegeyear']
                          });
                        } else {
                          this.formGroup.patchValue({
                            collegeYearControl: this.user['custom:collegeyear']
                          });
                        }
                      }

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "update",
          value: function update() {
            var year;

            if (this.si) {
              year = this.formGroup.value.collegeYearControlSi;
            } else {
              year = this.formGroup.value.collegeYearControl;
            }

            this.submitted = true;

            if (this.formGroup.valid) {
              this.auth.updateUserAttributes(this.formGroup.value.firstNameControl, this.formGroup.value.lastNameControl, this.formGroup.value.hospitalControl, this.formGroup.value.collegeControl, year);
            }
          }
        }, {
          key: "UpdateFormControl",
          get: function get() {
            return this.formGroup.controls;
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProfilePage);
      /***/
    },

    /***/
    "tXh8":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function tXh8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <div class=\"logoHeader\">\n      <img src=\"assets/sstemm-header.png\" width=\"150px\" />\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"dark-gb\">\n  <h1 class=\"regTitle\">{{ 'update.title' | translate }}</h1>\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"update()\">\n    <ion-label class=\"label\">{{ 'input.firstName' | translate }}</ion-label>\n    <div>\n      <ion-input\n        class=\"input\"\n        placeholder=\"{{ 'input.firstName' | translate }}\"\n        formControlName=\"firstNameControl\"\n        type=\"text\"\n      ></ion-input>\n      <span\n        class=\"text-danger\"\n        *ngIf=\"(UpdateFormControl.firstNameControl.touched || submitted) && UpdateFormControl.firstNameControl.errors?.required\"\n      >\n      {{ 'validation.firstRequired' | translate }}\n      </span>\n    </div>\n    <ion-label class=\"label\">{{ 'input.lastName' | translate }}</ion-label>\n    <div>\n      <ion-input\n        class=\"input\"\n        placeholder=\"{{ 'input.lastName' | translate }}\"\n        formControlName=\"lastNameControl\"\n        type=\"text\"\n      ></ion-input>\n      <span\n        class=\"text-danger\"\n        *ngIf=\"(UpdateFormControl.lastNameControl.touched || submitted) && UpdateFormControl.lastNameControl.errors?.required\"\n      >\n      {{ 'validation.lastRequired' | translate }}\n      </span>\n    </div>\n    <ion-label class=\"label\">{{ 'input.college' | translate }}</ion-label>\n    <div>\n      <ion-input\n        class=\"input\"\n        placeholder=\"{{ 'input.college' | translate }}\"\n        formControlName=\"collegeControl\"\n        type=\"text\"\n      ></ion-input>\n    </div>\n    <ion-label class=\"label\">{{ 'input.collegeYear' | translate }}</ion-label>\n    <div *ngIf=\"si; else all\">\n      <ion-input\n        class=\"input\"\n        placeholder=\"{{ 'input.collegeYear' | translate }}\"\n        formControlName=\"collegeYearControlSi\"\n        type=\"number\"\n      ></ion-input>\n      <span\n        class=\"text-danger\"\n        *ngIf=\"(UpdateFormControl.collegeYearControlSi.touched || submitted) && (UpdateFormControl.collegeYearControlSi.errors?.max || UpdateFormControl.collegeYearControlSi.errors?.min)\"\n      >\n      {{ 'validation.collegeYear' | translate }}\n      </span>\n    </div>\n    <ng-template #all>\n      <ion-input\n        class=\"input\"\n        placeholder=\"{{ 'input.collegeYear' | translate }}\"\n        formControlName=\"collegeYearControl\"\n        type=\"number\"\n      ></ion-input>\n      <span\n        class=\"text-danger\"\n        *ngIf=\"(UpdateFormControl.collegeYearControl.touched || submitted) && (UpdateFormControl.collegeYearControl.errors?.max || UpdateFormControl.collegeYearControl.errors?.min)\"\n      >\n      {{ 'validation.collegeYear' | translate }}\n      </span>\n    </ng-template>\n    <ion-label class=\"label\">{{ 'input.hospital' | translate }}</ion-label>\n    <div>\n      <ion-input\n        class=\"input\"\n        placeholder=\"{{ 'input.hospital' | translate }}\"\n        formControlName=\"hospitalControl\"\n        type=\"text\"\n      ></ion-input>\n    </div>\n    <div class=\"updateButton\">\n      <ion-button class=\"buttonDetails\" expand=\"block\" type=\"submit\">\n        <ion-icon class=\"icon\" name=\"save\"></ion-icon>{{ 'update.button' | translate }}</ion-button>\n    </div>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "v+7O":
    /*!***************************************************!*\
      !*** ./src/app/profile/profile-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function v7O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "ncJE");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    },

    /***/
    "zxxS":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function zxxS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: #08415C;\n}\n\n.logoHeader {\n  background-color: #08415C;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  text-align: center;\n  padding-bottom: 10px;\n}\n\n.input {\n  border: solid 1px #08415C;\n  color: #838383;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 30px;\n  margin-right: 30px;\n  width: auto;\n  border-radius: 5px;\n  --placeholder-color: #08415C;\n}\n\n.label {\n  margin-left: 30px;\n  color: #08415C;\n  font-weight: bold;\n}\n\n.bttn {\n  font-weight: bold;\n  font-size: large;\n  color: #08415C;\n  text-transform: none;\n}\n\n.regTitle {\n  color: #08415C;\n  text-align: center;\n}\n\n.container {\n  display: flex;\n  margin-right: 30px;\n  margin-left: 30px;\n  max-width: 500px;\n}\n\n.text-danger {\n  color: red;\n  padding: 8px;\n  background-color: #cbebfa;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 30px;\n  margin-right: 30px;\n  border-radius: 5px;\n}\n\n.updateButton {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 20px;\n  width: auto;\n}\n\n.buttonDetails {\n  font-weight: bold;\n  font-size: large;\n  color: white;\n  width: 250px;\n  text-transform: none;\n}\n\n.icon {\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0UscUJBQUE7QUFDSjs7QUFDRTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBRU47O0FBQUU7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FBR047O0FBQUU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUdKOztBQURFO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUlOOztBQUZFO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBS047O0FBRkU7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBS047O0FBRkk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFLTjs7QUFGRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBS0o7O0FBRkE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUtKOztBQUZBO0VBQ0Usa0JBQUE7QUFLRiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwODQxNUM7XHJcbiAgfVxyXG4gIC5sb2dvSGVhZGVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA4NDE1QztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgLmlucHV0e1xyXG4gICAgICBib3JkZXI6IHNvbGlkIDFweCAjMDg0MTVDO1xyXG4gICAgICBjb2xvcjogIzgzODM4MztcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzA4NDE1QztcclxuICB9XHJcblxyXG4gIC5sYWJlbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIGNvbG9yOiAjMDg0MTVDO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5idHRue1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgY29sb3I6ICMwODQxNUM7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxuICAucmVnVGl0bGV7XHJcbiAgICAgIGNvbG9yOiAgIzA4NDE1QztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gIH1cclxuICAuY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRleHQtZGFuZ2Vye1xyXG4gICAgICBjb2xvcjogcmVkO1xyXG4gICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjYmViZmE7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG5cclxuICAudXBkYXRlQnV0dG9ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5idXR0b25EZXRhaWxze1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=profile-profile-module-es5.js.map