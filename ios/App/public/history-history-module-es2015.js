(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-history-module"],{

/***/ "9u+z":
/*!*******************************************!*\
  !*** ./src/app/history/history.module.ts ***!
  \*******************************************/
/*! exports provided: HistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history-routing.module */ "nQSQ");
/* harmony import */ var _component_record_record_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/record/record.component */ "9E3G");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./history.page */ "Z2Lo");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app.module */ "ZAI4");











let HistoryPageModule = class HistoryPageModule {
};
HistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _history_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistoryPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                    useFactory: _app_module__WEBPACK_IMPORTED_MODULE_10__["httpLoaderFactory"],
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                }
            }),
        ],
        declarations: [_history_page__WEBPACK_IMPORTED_MODULE_7__["HistoryPage"], _component_record_record_component__WEBPACK_IMPORTED_MODULE_6__["RecordComponent"]]
    })
], HistoryPageModule);



/***/ }),

/***/ "M4g1":
/*!*******************************************!*\
  !*** ./src/app/history/history.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dark-gb {\n  --ion-background-color: #08415C !important;\n}\n\nion-toolbar {\n  --background: #08415C;\n}\n\n.logoHeader {\n  background: #08415C;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  padding-bottom: 10px;\n  text-align: center;\n}\n\n.header {\n  color: #08415C;\n  text-align: center;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.records {\n  display: block;\n  align-items: center;\n  justify-content: center;\n}\n\n.noentries {\n  text-align: center;\n}\n\n.dropdown {\n  display: block;\n  margin-left: 20px;\n  margin-right: 20px;\n  align-items: center;\n  justify-content: center;\n}\n\n/* ion-icon{\n  font-size: 128px !important;\n}\n\n.sc-ion-buttons-md-s ion-icon[slot=icon-only]{\n  // font-size: 128px !important;\n}# */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQUE7QUFDSjs7QUFDRTtFQUNFLHFCQUFBO0FBRUo7O0FBQUU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUlKOztBQUZFO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFLSjs7QUFGRTtFQUNFLGtCQUFBO0FBS0o7O0FBRkU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFLSjs7QUFIRTs7Ozs7O0lBQUEiLCJmaWxlIjoiaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFyay1nYntcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwODQxNUMgIWltcG9ydGFudDtcclxuICB9XHJcbiAgaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwODQxNUM7XHJcbiAgfVxyXG4gIC5sb2dvSGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwODQxNUM7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIH1cclxuICAuaGVhZGVye1xyXG4gICAgY29sb3I6ICAjMDg0MTVDO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICB9XHJcbiAgLnJlY29yZHN7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgIFxyXG4gIH1cclxuICBcclxuICAubm9lbnRyaWVzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5kcm9wZG93biB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAvKiBpb24taWNvbntcclxuICAgIGZvbnQtc2l6ZTogMTI4cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnNjLWlvbi1idXR0b25zLW1kLXMgaW9uLWljb25bc2xvdD1pY29uLW9ubHlde1xyXG4gICAgLy8gZm9udC1zaXplOiAxMjhweCAhaW1wb3J0YW50O1xyXG4gIH0jICovIl19 */");

/***/ }),

/***/ "Z2Lo":
/*!*****************************************!*\
  !*** ./src/app/history/history.page.ts ***!
  \*****************************************/
/*! exports provided: HistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPage", function() { return HistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_history_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./history.page.html */ "kofg");
/* harmony import */ var _history_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history.page.scss */ "M4g1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _details_details_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../details/details.page */ "vgIa");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api.service */ "H+bZ");







let HistoryPage = class HistoryPage {
    constructor(api, modalController) {
        this.api = api;
        this.modalController = modalController;
        this.filters = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.filter = 'wk';
    }
    changeFilter() {
        switch (this.filter) {
            case 'wk': {
                this.filters = [];
                const date = new Date();
                date.setDate(date.getDate() - 7);
                for (const item of this.api.allSignatures) {
                    if (item.timeStamp >= date.getTime()) {
                        this.filters.push(item);
                    }
                }
                break;
            }
            case 'mm': {
                this.filters = [];
                const date = new Date();
                date.setDate(date.getDate() - 28);
                for (const item of this.api.allSignatures) {
                    if (item.timeStamp >= date.getTime()) {
                        this.filters.push(item);
                    }
                }
                break;
            }
            case 'year': {
                this.filters = [];
                const date = new Date();
                date.setDate(date.getDate() - 365);
                for (const item of this.api.allSignatures) {
                    if (item.timeStamp >= date.getTime()) {
                        this.filters.push(item);
                    }
                }
                break;
            }
            case 'all': {
                this.filters = this.api.allSignatures;
                break;
            }
            default: {
                this.filters = this.api.allSignatures;
            }
        }
    }
    openModal(details) {
        this.modalController.create({
            component: _details_details_page__WEBPACK_IMPORTED_MODULE_5__["DetailsPage"],
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
HistoryPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
HistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-history',
        template: _raw_loader_history_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_history_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HistoryPage);



/***/ }),

/***/ "kofg":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <div class=\"logoHeader\">\n      <img src=\"assets/sstemm-header.png\" width=\"150px\" />\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <h1 class=\"header\">{{ 'history.title' | translate }}</h1>\n  <ion-list class=\"dropdown\">\n    <ion-item>\n      <ion-label>{{ 'history.dropdown' | translate }}</ion-label>\n      <ion-select [(ngModel)]=\"filter\"  okText=\"{{ 'history.ok' | translate }}\" cancelText=\"{{ 'history.cancel' | translate }}\" (ionChange)='changeFilter()'>\n        <ion-select-option value=\"all\">{{ 'history.all' | translate }}</ion-select-option>\n        <ion-select-option value=\"wk\">{{ 'history.wk' | translate }}</ion-select-option>\n        <ion-select-option value=\"mm\">{{ 'history.mm' | translate }}</ion-select-option>\n        <ion-select-option value=\"yy\">{{ 'history.yy' | translate }}</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <h3 class=\"noentries\" *ngIf=\"api.displayNoEntries\">{{ 'home.none' | translate }}</h3>\n  <div class=records>\n  <app-record *ngFor=\"let entry of filters\" overallScore={{entry.totalScore}} timestamp={{entry.timeStamp}}\n  [domain]=\"entry.domain\" (click)=\"openModal(entry)\">\n  </app-record>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "nQSQ":
/*!***************************************************!*\
  !*** ./src/app/history/history-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HistoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageRoutingModule", function() { return HistoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history.page */ "Z2Lo");




const routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_3__["HistoryPage"]
    }
];
let HistoryPageRoutingModule = class HistoryPageRoutingModule {
};
HistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HistoryPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=history-history-module-es2015.js.map