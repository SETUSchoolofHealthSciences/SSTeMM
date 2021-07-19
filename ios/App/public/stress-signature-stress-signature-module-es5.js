(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stress-signature-stress-signature-module"], {
    /***/
    "/A7a":
    /*!*************************************************************!*\
      !*** ./src/app/stress-signature/stress-signature.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function A7a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "dark-gb {\n  --ion-background-color: #08415C !important;\n}\n\nion-toolbar {\n  --background: #08415C;\n}\n\n.logoHeader {\n  background: #08415C;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  text-align: center;\n  padding-bottom: 10px;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: wrap;\n}\n\n.header h2 {\n  color: #08415C;\n  width: 90%;\n  text-align: center;\n}\n\n.bttn {\n  font-weight: bold;\n  font-size: large;\n  color: white;\n  text-transform: none;\n}\n\n.reflection {\n  display: block;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n}\n\n.reflection ion-textarea {\n  border: solid 1px #5ACAF9;\n  --placeholder-color: #838383;\n}\n\n.reflection ion-label {\n  color: #5ACAF9;\n  font-weight: bold;\n  font-size: x-large;\n}\n\n.domain {\n  padding-top: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 20px;\n  width: auto;\n}\n\n.choice {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 20px;\n  width: auto;\n  flex-flow: wrap;\n}\n\n.choice h2 {\n  color: #5ACAF9;\n  text-align: center;\n  width: 50%;\n}\n\n.buttonDetails {\n  --background:#08415C;\n  font-weight: bold;\n  font-size: large;\n  color: white;\n  width: 250px;\n  text-transform: none;\n}\n\nhr {\n  border: none;\n  height: 3px;\n  width: 70%;\n  /* Set the hr color */\n  color: #5ACAF9;\n  /* old IE */\n  background-color: #5ACAF9;\n  /* Modern Browsers */\n}\n\n.resources {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: auto;\n}\n\n.icon {\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0cmVzcy1zaWduYXR1cmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMENBQUE7QUFDRjs7QUFDQTtFQUNFLHFCQUFBO0FBRUY7O0FBQUE7RUFDRSxtQkFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUdKOztBQURFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBSUo7O0FBSEk7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBS047O0FBRkU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBS0o7O0FBSEU7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFNSjs7QUFMSTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7QUFPTjs7QUFMSTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBT047O0FBSEU7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBTUo7O0FBSkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFPRjs7QUFORTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFRSjs7QUFKQTtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFPSjs7QUFMQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUFnQixXQUFBO0VBQ2hCLHlCQUFBO0VBQTJCLG9CQUFBO0FBVTdCOztBQVBBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQVVGOztBQVBBO0VBQ0Usa0JBQUE7QUFVRiIsImZpbGUiOiJzdHJlc3Mtc2lnbmF0dXJlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRhcmstZ2J7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzA4NDE1QyAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi10b29sYmFye1xyXG4gIC0tYmFja2dyb3VuZDogIzA4NDE1QztcclxufVxyXG4ubG9nb0hlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogIzA4NDE1QztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC5oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgXHJcbiAgICBmbGV4LWZsb3c6IHdyYXA7XHJcbiAgICBoMntcclxuICAgICAgY29sb3I6ICMwODQxNUM7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgLmJ0dG57XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbiAgLnJlZmxlY3Rpb257XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBpb24tdGV4dGFyZWF7XHJcbiAgICAgIGJvcmRlcjogc29saWQgMXB4ICM1QUNBRjk7XHJcbiAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM4MzgzODM7XHJcbiAgICB9XHJcbiAgICBpb24tbGFiZWx7XHJcbiAgICAgIGNvbG9yOiAjNUFDQUY5O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOngtbGFyZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZG9tYWlue1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG4uY2hvaWNle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB3aWR0aDogYXV0bztcclxuICBmbGV4LWZsb3c6IHdyYXA7XHJcbiAgaDJ7XHJcbiAgICBjb2xvcjogIzVBQ0FGOTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG59XHJcblxyXG4uYnV0dG9uRGV0YWlsc3tcclxuICAgIC0tYmFja2dyb3VuZDojMDg0MTVDO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuaHIge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBoZWlnaHQ6IDNweDtcclxuICB3aWR0aDogNzAlO1xyXG4gIC8qIFNldCB0aGUgaHIgY29sb3IgKi9cclxuICBjb2xvcjogIzVBQ0FGOTsgLyogb2xkIElFICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVBQ0FGOTsgLyogTW9kZXJuIEJyb3dzZXJzICovXHJcbn1cclxuXHJcbi5yZXNvdXJjZXMge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLmljb24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "TOnH":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stress-signature/stress-signature.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TOnH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <div class=\"logoHeader\">\n      <img src=\"assets/sstemm-header.png\" width=\"150px\" />\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"header\">\n    <h2>{{ 'stressRecord.title' | translate }}</h2>\n  </div>\n  <div class=\"domain\" [hidden]=isDomainHidden>\n    <ion-button class=\"buttonDetails\" expand=\"block\" (click)=\"pickDomain()\">\n      <ion-icon class=\"icon\" name=\"albums-outline\"></ion-icon>{{ 'button.pickDomain' | translate }}</ion-button>\n  </div>\n  <div class=\"choice\" [hidden]=isChoiceHidden>\n    <h2>{{ 'button.pickDomain' | translate }}</h2>\n    <ion-button class=\"buttonDetails\" expand=\"block\" (click)=\"thoughts()\" [disabled]=\"thoughtDomain\">\n      <ion-icon class=\"icon\" name=\"chatbubble-outline\"></ion-icon>{{ 'button.thoughts' | translate }}</ion-button>\n    <ion-button class=\"buttonDetails\" expand=\"block\" (click)=\"feelings()\" [disabled]=\"feelingDomain\">\n      <ion-icon class=\"icon\" name=\"heart-half-outline\"></ion-icon>{{ 'button.feelings' | translate }}</ion-button>\n    <ion-button class=\"buttonDetails\" expand=\"block\" (click)=\"behaviours()\"[disabled]=\"behaviourDomain\">\n      <ion-icon class=\"icon\" name=\"happy-outline\"></ion-icon>{{ 'button.behaviours' | translate }}</ion-button>\n  </div>\n  <hr> \n  <div class=\"reflection\">\n    <ion-label position=\"floating\">{{ 'stressRecord.reflection' | translate }}</ion-label>\n    <ion-textarea rows=\"8\" [(ngModel)]=\"record.stressSignature.reflection\" placeholder=\"{{ 'input.reflection' | translate }}\"></ion-textarea>\n  </div>\n  <div class=\"resources\">\n    <ion-button class=\"buttonDetails\" expand=\"block\" (click)=\"resources()\" \n      ><ion-icon class=\"icon\" name=\"newspaper\"></ion-icon>{{ 'button.resources' | translate }}</ion-button\n    >\n  </div>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-sm=\"6\" size=\"6\" class=\"ion-text-center\">\n        <ion-button expand=\"block\" class=\"ion-text-wrap min-max-width bttn\" (click)=\"cancel()\">\n          <ion-icon class=\"icon\" name=\"close-outline\"></ion-icon>{{ 'button.cancel' | translate }}</ion-button>\n      </ion-col>\n\n      <ion-col size-sm=\"6\" size=\"6\" class=\"ion-text-center\">\n        <ion-button expand=\"block\" class=\"ion-text-wrap min-max-width bttn\" (click)=\"save()\">\n          <ion-icon  class=\"icon\" name=\"save\"></ion-icon>{{ 'button.save' | translate }}</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  </ion-content>";
      /***/
    },

    /***/
    "dJJ5":
    /*!***********************************************************!*\
      !*** ./src/app/stress-signature/stress-signature.page.ts ***!
      \***********************************************************/

    /*! exports provided: StressSignaturePage */

    /***/
    function dJJ5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StressSignaturePage", function () {
        return StressSignaturePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_stress_signature_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./stress-signature.page.html */
      "TOnH");
      /* harmony import */


      var _stress_signature_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./stress-signature.page.scss */
      "/A7a");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_translation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/translation.service */
      "ty2H");
      /* harmony import */


      var _services_record_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/record.service */
      "oq9T");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var StressSignaturePage = /*#__PURE__*/function () {
        function StressSignaturePage(nav, alertController, translate, record, language) {
          _classCallCheck(this, StressSignaturePage);

          this.nav = nav;
          this.alertController = alertController;
          this.translate = translate;
          this.record = record;
          this.language = language;
          this.thoughtDomain = false;
          this.feelingDomain = false;
          this.behaviourDomain = false;
          this.isDomainHidden = false;
          this.isChoiceHidden = true;
        }

        _createClass(StressSignaturePage, [{
          key: "pickDomain",
          value: function pickDomain() {
            this.isDomainHidden = true;
            this.isChoiceHidden = false;
          }
        }, {
          key: "thoughts",
          value: function thoughts() {
            this.nav.navigateBack(['/stress-questions/think']);
            this.isDomainHidden = false;
            this.isChoiceHidden = true;
          }
        }, {
          key: "feelings",
          value: function feelings() {
            this.nav.navigateBack(['/stress-questions/feel']);
            this.isDomainHidden = false;
            this.isChoiceHidden = true;
          }
        }, {
          key: "behaviours",
          value: function behaviours() {
            this.nav.navigateBack(['/stress-questions/do']);
            this.isDomainHidden = false;
            this.isChoiceHidden = true;
          }
        }, {
          key: "cancel",
          value: function cancel() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.translate.stressSignatureCancel();
                      _context.next = 3;
                      return this.alertController.create({
                        header: this.translate.alertHeader,
                        message: this.translate.alertMessage,
                        buttons: [{
                          text: this.translate.alertButtonTwo,
                          handler: function handler() {
                            console.log('...');
                          }
                        }, {
                          text: this.translate.alertButtonOne,
                          handler: function handler() {
                            _this.behaviourDomain = false;
                            _this.feelingDomain = false;
                            _this.thoughtDomain = false;
                            _this.record.totalScores = [];
                            _this.record.domains = [];
                            _this.record.totalScore = 0;
                            _this.record.stressSignature.reflection = null;

                            _this.nav.navigateBack(['/tabs/home']);
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
          }
        }, {
          key: "save",
          value: function save() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.translate.stressSignatureSave();

                      if (!(this.record.domains.length === 0 && !this.record.stressSignature.reflection)) {
                        _context2.next = 9;
                        break;
                      }

                      _context2.next = 4;
                      return this.alertController.create({
                        header: this.translate.alertHeader,
                        message: this.translate.alertMessage,
                        buttons: [{
                          text: this.translate.alertButtonOne,
                          handler: function handler() {
                            _this2.nav.navigateBack(['/tabs/home']);
                          }
                        }]
                      });

                    case 4:
                      alert = _context2.sent;
                      _context2.next = 7;
                      return alert.present();

                    case 7:
                      _context2.next = 14;
                      break;

                    case 9:
                      this.record.savedPressed = true;
                      this.record.saveRecord();
                      this.behaviourDomain = false;
                      this.feelingDomain = false;
                      this.thoughtDomain = false;

                    case 14:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "resources",
          value: function resources() {
            var lang = this.language.currentLang;

            if (lang === 'si') {
              lang = 'sl';
            }

            window.location.href = 'https://sstemm.eu/resources/?lang=' + lang;
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _iterator, _step, domain;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.record.savedPressed = false;
                      this.translate.DomainNames();
                      this.record.domains = [];

                      if (!(this.record.totalScores.length > 0)) {
                        _context3.next = 31;
                        break;
                      }

                      _iterator = _createForOfIteratorHelper(this.record.totalScores);
                      _context3.prev = 5;

                      _iterator.s();

                    case 7:
                      if ((_step = _iterator.n()).done) {
                        _context3.next = 23;
                        break;
                      }

                      domain = _step.value;
                      _context3.next = 11;
                      return this.record.domains.push(domain.domain);

                    case 11:
                      _context3.t0 = domain.domain;
                      _context3.next = _context3.t0 === this.translate.thoughts ? 14 : _context3.t0 === this.translate.feelings ? 16 : _context3.t0 === this.translate.behaviours ? 18 : 20;
                      break;

                    case 14:
                      this.thoughtDomain = true;
                      return _context3.abrupt("break", 21);

                    case 16:
                      this.feelingDomain = true;
                      return _context3.abrupt("break", 21);

                    case 18:
                      this.behaviourDomain = true;
                      return _context3.abrupt("break", 21);

                    case 20:
                      return _context3.abrupt("break", 21);

                    case 21:
                      _context3.next = 7;
                      break;

                    case 23:
                      _context3.next = 28;
                      break;

                    case 25:
                      _context3.prev = 25;
                      _context3.t1 = _context3["catch"](5);

                      _iterator.e(_context3.t1);

                    case 28:
                      _context3.prev = 28;

                      _iterator.f();

                      return _context3.finish(28);

                    case 31:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[5, 25, 28, 31]]);
            }));
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            if (!this.record.savedPressed) {
              this.behaviourDomain = false;
              this.feelingDomain = false;
              this.thoughtDomain = false;
              this.record.totalScores = [];
              this.record.totalScore = 0;
              this.record.domains = [];
              this.record.stressSignature.reflection = null;
              this.record.questionOne = [];
              this.record.questionTwo = [];
              this.record.questionThree = [];
              this.record.questionFour = [];
              this.record.questionFive = [];
              this.record.scoreCard = [];
              this.record.totalScoreCard = {};
            }
          }
        }]);

        return StressSignaturePage;
      }();

      StressSignaturePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _services_translation_service__WEBPACK_IMPORTED_MODULE_5__["TranslationService"]
        }, {
          type: _services_record_service__WEBPACK_IMPORTED_MODULE_6__["RecordService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }];
      };

      StressSignaturePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-stress-signature',
        template: _raw_loader_stress_signature_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_stress_signature_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], StressSignaturePage);
      /***/
    },

    /***/
    "tX4j":
    /*!*************************************************************!*\
      !*** ./src/app/stress-signature/stress-signature.module.ts ***!
      \*************************************************************/

    /*! exports provided: StressSignaturePageModule */

    /***/
    function tX4j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StressSignaturePageModule", function () {
        return StressSignaturePageModule;
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


      var _stress_signature_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./stress-signature.page */
      "dJJ5");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../app.module */
      "ZAI4");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var StressSignaturePageModule = function StressSignaturePageModule() {
        _classCallCheck(this, StressSignaturePageModule);
      };

      StressSignaturePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
            useFactory: _app_module__WEBPACK_IMPORTED_MODULE_8__["httpLoaderFactory"],
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
          }
        }), _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forChild([{
          path: '',
          component: _stress_signature_page__WEBPACK_IMPORTED_MODULE_5__["StressSignaturePage"]
        }])],
        declarations: [_stress_signature_page__WEBPACK_IMPORTED_MODULE_5__["StressSignaturePage"]]
      })], StressSignaturePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=stress-signature-stress-signature-module-es5.js.map