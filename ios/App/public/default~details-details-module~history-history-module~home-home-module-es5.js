(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~details-details-module~history-history-module~home-home-module"], {
    /***/
    "tDqb":
    /*!*******************************************!*\
      !*** ./src/app/details/details.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function tDqb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: #08415C;\n}\n\n.logoHeader {\n  background: #08415C;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  padding-bottom: 10px;\n  text-align: center;\n}\n\n.header {\n  color: #08415C;\n  text-align: center;\n}\n\n.maincontent {\n  margin: 30px 20px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n.maincontent .date {\n  flex: 1 1;\n}\n\n.maincontent .score {\n  flex: 1 1;\n  text-align: center;\n}\n\n.maincontent .score .circle {\n  font-size: 45px;\n  width: 150px;\n  height: 150px;\n  background-color: #5ACAF9;\n  color: #ffffff;\n  border-radius: 75px;\n}\n\n.domain {\n  margin: 30px 20px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n.domain .scores {\n  text-align: center;\n  flex: 1 0 0;\n  border: 2px solid #5ACAF9;\n}\n\n.domain .scores .domaintitle {\n  color: #5ACAF9;\n  font-size: larger;\n  font-weight: bold;\n}\n\n.domain .scores .domainscore {\n  color: #08415C;\n  font-size: large;\n}\n\n.domainheader {\n  margin-left: 20px;\n  color: #08415C;\n}\n\n.reflection {\n  margin-left: 20px;\n  margin-right: 20px;\n  text-align: justify;\n}\n\n.add-button {\n  margin-bottom: 50px;\n  margin-left: -50px;\n  width: 150px;\n  height: 40px;\n  --border-radius: 20px;\n}\n\n.add-button ion-icon {\n  color: white;\n  padding: 10px;\n}\n\n.add-button ion-text {\n  color: white;\n  font-size: x-large;\n  font-family: Roboto-Light;\n  padding-right: 10px;\n}\n\n.icon {\n  padding-right: 5px;\n  color: #08415C;\n}\n\n.iconbutton {\n  padding-right: 5px;\n}\n\n.circle {\n  background-color: #5ACAF9;\n  color: #ffffff;\n  width: 150px;\n  height: 150px;\n  border-radius: 1000px;\n  margin: 0.5em;\n  margin-right: 30px;\n}\n\n.aligner {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  text-align: center;\n  font-size: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2RldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFJQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQURKOztBQUVJO0VBQ0ksU0FBQTtBQUFSOztBQUVJO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0FBQVI7O0FBQ1E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUNaOztBQUlBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBREo7O0FBRUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUFSOztBQUNRO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFDWjs7QUFDUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQUNaOztBQUlBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBREo7O0FBSUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBREo7O0FBRUk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUFOOztBQUVJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUFOOztBQUlFO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBRE47O0FBSUU7RUFDRSxrQkFBQTtBQURKOztBQUlFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBREoiLCJmaWxlIjoiZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogIzA4NDE1QztcclxufVxyXG5cclxuLmxvZ29IZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzA4NDE1QztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcbiAgICBjb2xvcjogICMwODQxNUM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcclxufVxyXG5cclxuXHJcblxyXG4ubWFpbmNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAzMHB4IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC5kYXRlIHtcclxuICAgICAgICBmbGV4OiAxIDE7XHJcbiAgICB9XHJcbiAgICAuc2NvcmV7XHJcbiAgICAgICAgZmxleDogMSAxO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAuY2lyY2xlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgICAgICAgICB3aWR0aDoxNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjE1MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUFDQUY5O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNzVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kb21haW4ge1xyXG4gICAgbWFyZ2luOiAzMHB4IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC5zY29yZXMge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmbGV4OiAxIDAgMDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNUFDQUY5O1xyXG4gICAgICAgIC5kb21haW50aXRsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNUFDQUY5O1xyXG4gICAgICAgICAgICBmb250LXNpemU6bGFyZ2VyO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRvbWFpbnNjb3JlIHtcclxuICAgICAgICAgICAgY29sb3I6IzA4NDE1QztcclxuICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kb21haW5oZWFkZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzA4NDE1QztcclxufVxyXG5cclxuLnJlZmxlY3Rpb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5OztcclxufVxyXG5cclxuLmFkZC1idXR0b257XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4OyBcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGlvbi1pY29ue1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBpb24tdGV4dHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8tTGlnaHQ7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaWNvbiB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgY29sb3I6ICMwODQxNUM7XHJcbiAgfVxyXG5cclxuICAuaWNvbmJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG5cclxuICAuY2lyY2xlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1QUNBRjk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAwcHg7IFxyXG4gICAgbWFyZ2luOiAwLjVlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxuLmFsaWduZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICB9Il19 */";
      /***/
    },

    /***/
    "vgIa":
    /*!*****************************************!*\
      !*** ./src/app/details/details.page.ts ***!
      \*****************************************/

    /*! exports provided: DetailsPage */

    /***/
    function vgIa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsPage", function () {
        return DetailsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./details.page.html */
      "z71o");
      /* harmony import */


      var _details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./details.page.scss */
      "tDqb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var DetailsPage = /*#__PURE__*/function () {
        function DetailsPage(modalController, translate, language) {
          _classCallCheck(this, DetailsPage);

          this.modalController = modalController;
          this.translate = translate;
          this.language = language;
        }

        _createClass(DetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalController.dismiss();
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
        }]);

        return DetailsPage;
      }();

      DetailsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }];
      };

      DetailsPage.propDecorators = {
        timestamp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        overallScore: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        domain: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        reflection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      DetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-details',
        template: _raw_loader_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DetailsPage);
      /***/
    },

    /***/
    "z71o":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function z71o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon name=\"close\" style=\"color: white;\"></ion-icon>\n        <ion-label style=\"color: white;\">{{ 'details.close' | translate }}</ion-label>\n      </ion-button>\n    </ion-buttons>\n    <div class=\"logoHeader\">\n      <img src=\"assets/sstemm-header.png\" width=\"150px\" />\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1 class=\"header\">{{ 'details.title' | translate }}</h1>\n  <div class=\"maincontent\">\n    <div class=\"date\">\n      <h3 class=\"icon\" ><ion-icon class=\"icon\" name=\"calendar-outline\"></ion-icon> {{timestamp | date: 'dd/MM/yyyy'}}</h3>\n      <h3 class=\"icon\" ><ion-icon class=\"icon\" name=\"time-outline\"></ion-icon>{{timestamp | date: 'HH:mm'}}</h3>\n    </div>\n    <div class=\"circle\">\n      <div class=\"aligner\">\n        <p>{{overallScore}}</p>\n      </div>\n    </div>\n  </div>\n  <h2 class=\"domainheader\">{{ 'details.domains' | translate }}</h2>\n  <div>\n  <div *ngIf=\"domain.length > 0; else elseBlock1\" class=\"domain\" >\n    <div class=\"scores\" *ngFor=\"let domain of domain; let ind = index\">\n          <p class=\"domaintitle\">{{domain.domain}}</p>\n          <p class=\"domainscore\">{{domain.totalScore}}</p>\n        </div>\n  </div>\n  <ng-template #elseBlock1>\n    <div class=\"icon-container\">\n      <div class=\"reflection\">\n        <p>{{ 'details.nodomain' | translate }}</p>\n      </div>\n    </div>\n  </ng-template>\n  </div>\n  <h2 class=\"domainheader\">{{ 'details.reflection' | translate }}</h2>\n  <div>\n  <div *ngIf=\"reflection; else elseBlock2\" class=\"reflection\">\n    <p>{{reflection}}</p>\n  </div>\n  <ng-template #elseBlock2>\n    <div class=\"icon-container\">\n      <div class=\"reflection\">\n        <p>{{ 'details.noreflection' | translate }}</p>\n      </div>\n    </div>\n  </ng-template>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n    <ion-fab-button class=\"add-button\" (click)=\"resources()\">\n    <ion-icon class=\"iconbutton\" name=\"newspaper\"></ion-icon>\n    <ion-text >{{ 'button.resources' | translate }}</ion-text>\n    </ion-fab-button> \n    </ion-fab>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~details-details-module~history-history-module~home-home-module-es5.js.map