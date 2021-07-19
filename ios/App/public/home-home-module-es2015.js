(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <div class=\"logoHeader\">\r\n      <img src=\"assets/sstemm-header.png\" width=\"150px\" />\r\n    </div>\r\n    <ion-buttons class=\"signout-button\"  slot=\"secondary\">\r\n      <ion-button (click)=\"logout()\">\r\n        <ion-icon class=\"logout\" slot=\"icon-only\" name=\"log-out\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <h1 class=\"header\">{{ 'home.title' | translate }}</h1>\r\n  <h3 class=\"noentries\" *ngIf=\"api.displayNoEntries\">{{ 'home.none' | translate }}</h3>\r\n  <div class=records>\r\n  <app-record *ngFor=\"let entry of api.homeSignatures\" overallScore={{entry.totalScore}} timestamp={{entry.timeStamp}}\r\n  [domain]=\"entry.domain\" (click)=\"openModal(entry)\">\r\n  </app-record>\r\n  </div>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\r\n    <ion-fab-button class=\"add-button\" (click)=\"resources()\">\r\n    <ion-icon name=\"newspaper\"></ion-icon>\r\n    <ion-text >{{ 'button.resources' | translate }}</ion-text>\r\n    </ion-fab-button> \r\n    </ion-fab>\r\n</ion-content>\r\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _component_record_record_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/record/record.component */ "9E3G");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app.module */ "ZAI4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");











let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                    useFactory: _app_module__WEBPACK_IMPORTED_MODULE_9__["httpLoaderFactory"],
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                }
            }),
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forChild([{ path: '', component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"] }])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"], _component_record_record_component__WEBPACK_IMPORTED_MODULE_6__["RecordComponent"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dark-gb {\n  --ion-background-color: #08415C !important;\n}\n\nion-toolbar {\n  --background: #08415C;\n}\n\n.logoHeader {\n  background: #08415C;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  padding-bottom: 10px;\n  text-align: center;\n}\n\n.header {\n  color: #08415C;\n  text-align: center;\n}\n\n.records {\n  display: block;\n  align-items: center;\n  justify-content: center;\n}\n\n.add-button {\n  margin-left: -50px;\n  width: 150px;\n  height: 40px;\n  --border-radius: 20px;\n}\n\n.add-button ion-icon {\n  color: white;\n  padding: 5px;\n}\n\n.add-button ion-text {\n  color: white;\n  font-size: x-large;\n  font-family: Roboto-Light;\n  padding-right: 10px;\n}\n\n.signout-button ion-button {\n  padding: 0 !important;\n  --padding-end: 0 !important;\n  --padding-start: 0 !important;\n  --padding-top: 0 !important;\n  --padding-bottom:0 !important;\n}\n\n.logout {\n  color: #5ACAF9;\n  font-size: xx-large !important;\n}\n\n.noentries {\n  text-align: center;\n}\n\n/* ion-icon{\n  font-size: 128px !important;\n}\n\n.sc-ion-buttons-md-s ion-icon[slot=icon-only]{\n  // font-size: 128px !important;\n}# */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMENBQUE7QUFDRjs7QUFDQTtFQUNFLHFCQUFBO0FBRUY7O0FBQUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBSUY7O0FBREE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUlGOztBQURBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBSUY7O0FBSEU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUtKOztBQUhFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUtKOztBQUFFO0VBQ0UscUJBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtBQUdKOztBQUNBO0VBQ0UsY0FBQTtFQUNBLDhCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtBQUVGOztBQUFBOzs7Ozs7SUFBQSIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXJrLWdie1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwODQxNUMgIWltcG9ydGFudDtcclxufVxyXG5pb24tdG9vbGJhcntcclxuICAtLWJhY2tncm91bmQ6ICMwODQxNUM7XHJcbn1cclxuLmxvZ29IZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwODQxNUM7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgY29sb3I6ICAjMDg0MTVDO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuLnJlY29yZHN7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgIFxyXG59XHJcblxyXG4uYWRkLWJ1dHRvbntcclxuICBtYXJnaW4tbGVmdDogLTUwcHg7XHJcbiAgd2lkdGg6IDE1MHB4OyBcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGlvbi1pY29ue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuICBpb24tdGV4dHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8tTGlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnNpZ25vdXQtYnV0dG9uIHtcclxuICBpb24tYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDAgIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTowICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9nb3V0IHtcclxuICBjb2xvcjogIzVBQ0FGOTtcclxuICBmb250LXNpemU6IHh4LWxhcmdlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ub2VudHJpZXMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4vKiBpb24taWNvbntcclxuICBmb250LXNpemU6IDEyOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1tZC1zIGlvbi1pY29uW3Nsb3Q9aWNvbi1vbmx5XXtcclxuICAvLyBmb250LXNpemU6IDEyOHB4ICFpbXBvcnRhbnQ7XHJcbn0jICovIl19 */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api.service */ "H+bZ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _details_details_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../details/details.page */ "vgIa");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









let HomePage = class HomePage {
    constructor(auth, api, loadingController, modalController, language) {
        this.auth = auth;
        this.api = api;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.language = language;
    }
    ngOnInit() {
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...',
                translucent: true,
                duration: 3000
            });
            return yield loading.present();
        });
    }
    ionViewDidEnter() {
        this.presentLoading();
        this.api.fetchData(this.loadingController);
    }
    resources() {
        let lang = this.language.currentLang;
        if (lang === 'si') {
            lang = 'sl';
        }
        window.location.href = 'https://sstemm.eu/resources/?lang=' + lang;
    }
    logout() {
        this.auth.signOut();
    }
    openModal(details) {
        this.modalController.create({
            component: _details_details_page__WEBPACK_IMPORTED_MODULE_7__["DetailsPage"],
            componentProps: {
                timestamp: details.timeStamp,
                overallScore: details.totalScore,
                domain: JSON.parse(details.scoreCard),
                reflection: details.reflection
            }
        }).then((modalElement) => {
            modalElement.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map