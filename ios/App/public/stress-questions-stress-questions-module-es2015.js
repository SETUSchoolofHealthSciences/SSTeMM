(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stress-questions-stress-questions-module"],{

/***/ "3sKt":
/*!***********************************************************!*\
  !*** ./src/app/stress-questions/stress-questions.page.ts ***!
  \***********************************************************/
/*! exports provided: StressQuestionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StressQuestionsPage", function() { return StressQuestionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_stress_questions_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./stress-questions.page.html */ "zWLX");
/* harmony import */ var _stress_questions_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stress-questions.page.scss */ "FVIf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_translation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/translation.service */ "ty2H");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_record_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/record.service */ "oq9T");









const TOKEN_KEY = 'domain-quest';
let StressQuestionsPage = class StressQuestionsPage {
    constructor(nav, route, record, alertController, translate, language) {
        this.nav = nav;
        this.route = route;
        this.record = record;
        this.alertController = alertController;
        this.translate = translate;
        this.language = language;
        this.questions = [];
        this.submitted = false;
        this.readData();
    }
    ngOnInit() {
    }
    readData() {
        const questionId = this.route.snapshot.paramMap.get('id');
        fetch('./assets/locale/question/' + this.language.currentLang + '.json').then(res => res.json())
            .then(json => {
            for (const con of json.domains) {
                if (questionId === con.id) {
                    this.title = con.domain;
                    for (const q of con.questions) {
                        this.questions.push(q);
                    }
                }
            }
        });
    }
    goBack() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.translate.StressQuestionsGoBack();
            const alert = yield this.alertController.create({
                header: this.translate.alertHeader,
                message: this.translate.alertMessage,
                buttons: [
                    {
                        text: this.translate.alertButtonTwo,
                        handler: () => {
                            console.log('...');
                        }
                    },
                    {
                        text: this.translate.alertButtonOne,
                        handler: () => {
                            this.nav.navigateRoot(['/tabs/stress-signature']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    save(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.record.scoreCard.push({ questionId: 1, questionValue: this.record.questionOne[this.record.questionOne.length - 1] });
            this.record.scoreCard.push({ questionId: 2, questionValue: this.record.questionTwo[this.record.questionTwo.length - 1] });
            this.record.scoreCard.push({ questionId: 3, questionValue: this.record.questionThree[this.record.questionThree.length - 1] });
            this.record.scoreCard.push({ questionId: 4, questionValue: this.record.questionFour[this.record.questionFour.length - 1] });
            this.record.scoreCard.push({ questionId: 5, questionValue: this.record.questionFive[this.record.questionFive.length - 1] });
            const totalScore = this.record.questionOne[this.record.questionOne.length - 1] +
                this.record.questionTwo[this.record.questionTwo.length - 1] + this.record.questionThree[this.record.questionThree.length - 1] +
                this.record.questionFour[this.record.questionFour.length - 1] + this.record.questionFive[this.record.questionFive.length - 1];
            this.record.totalScoreCard = {
                domain: this.title,
                scoreCard: this.record.scoreCard,
                totalScore
            };
            yield this.record.totalScores.push({ domain: this.title,
                scoreCard: this.record.scoreCard,
                totalScore });
            this.nav.navigateRoot(['/tabs/stress-signature']);
            /* await this.storageService.setLocalData(TOKEN_KEY, this.totalScoreCard).then(() => {
              this.go.navigate(['tabs/stress-signature']);
            }); */
        });
    }
    sliderValueChanged($event) {
        switch ($event.rowId) {
            case 1: {
                this.record.questionOne.push($event.value);
                break;
            }
            case 2: {
                this.record.questionTwo.push($event.value);
                break;
            }
            case 3: {
                this.record.questionThree.push($event.value);
                break;
            }
            case 4: {
                this.record.questionFour.push($event.value);
                break;
            }
            case 5: {
                this.record.questionFive.push($event.value);
                break;
            }
            default: {
                break;
            }
        }
    }
};
StressQuestionsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_record_service__WEBPACK_IMPORTED_MODULE_8__["RecordService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_translation_service__WEBPACK_IMPORTED_MODULE_6__["TranslationService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
];
StressQuestionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-stress-questions',
        template: _raw_loader_stress_questions_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_stress_questions_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StressQuestionsPage);



/***/ }),

/***/ "6nC6":
/*!*************************************************************!*\
  !*** ./src/app/stress-questions/stress-questions.module.ts ***!
  \*************************************************************/
/*! exports provided: StressQuestionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StressQuestionsPageModule", function() { return StressQuestionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _stress_questions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stress-questions-routing.module */ "uceC");
/* harmony import */ var _stress_questions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stress-questions.page */ "3sKt");
/* harmony import */ var _component_question_question_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/question/question.component */ "m/fz");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app.module */ "ZAI4");











let StressQuestionsPageModule = class StressQuestionsPageModule {
};
StressQuestionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _stress_questions_routing_module__WEBPACK_IMPORTED_MODULE_5__["StressQuestionsPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                    useFactory: _app_module__WEBPACK_IMPORTED_MODULE_10__["httpLoaderFactory"],
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
                }
            })
        ],
        declarations: [_stress_questions_page__WEBPACK_IMPORTED_MODULE_6__["StressQuestionsPage"], _component_question_question_component__WEBPACK_IMPORTED_MODULE_7__["QuestionComponent"]]
    })
], StressQuestionsPageModule);



/***/ }),

/***/ "FMY5":
/*!************************************************************!*\
  !*** ./src/app/component/question/question.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".question-card {\n  margin: 10px;\n}\n\n.question-content {\n  margin: 10px;\n  min-height: 100px;\n  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.6);\n  border-radius: 3px;\n  border: thin solid #ededed;\n  padding: 1em;\n  color: #08415C;\n  text-align: center;\n}\n\n.question-content ion-badge {\n  padding: 7px !important;\n  color: white;\n  font-size: large;\n}\n\n.question-content ion-range {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.questions {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n  margin-top: 0% !important;\n  margin-bottom: 0% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3F1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUVGOztBQURFO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFERTtFQUNFLDJCQUFBO0VBQ0EsOEJBQUE7QUFHSjs7QUFDQTtFQUNFLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FBRUYiLCJmaWxlIjoicXVlc3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXVlc3Rpb24tY2FyZCB7XHJcbiAgbWFyZ2luOiAxMHB4XHJcbn1cclxuLnF1ZXN0aW9uLWNvbnRlbnQge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICBib3gtc2hhZG93OiAwIDNweCA0cHggcmdiYSgwLDAsMCwwLjYpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3JkZXI6IHRoaW4gc29saWQgI2VkZWRlZDtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgY29sb3I6ICMwODQxNUM7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGlvbi1iYWRnZXtcclxuICAgIHBhZGRpbmc6IDdweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICB9XHJcbiAgaW9uLXJhbmdle1xyXG4gICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnF1ZXN0aW9ucyB7XHJcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAwJSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "FVIf":
/*!*************************************************************!*\
  !*** ./src/app/stress-questions/stress-questions.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dark-gb {\n  --ion-background-color: #08415C !important;\n}\n\nion-toolbar {\n  --background: #08415C;\n}\n\n.logoHeader {\n  background: #08415C;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  text-align: center;\n  padding-bottom: 10px;\n}\n\n.header {\n  color: #08415C;\n  text-align: center;\n}\n\n.bttn {\n  font-weight: bold;\n  font-size: large;\n  color: white;\n  text-transform: none;\n}\n\n.icon {\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0cmVzcy1xdWVzdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMENBQUE7QUFDRjs7QUFDQTtFQUNFLHFCQUFBO0FBRUY7O0FBQUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUdKOztBQURFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBSUo7O0FBREU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBSUo7O0FBREE7RUFDRSxrQkFBQTtBQUlGIiwiZmlsZSI6InN0cmVzcy1xdWVzdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhcmstZ2J7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzA4NDE1QyAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi10b29sYmFye1xyXG4gIC0tYmFja2dyb3VuZDogIzA4NDE1QztcclxufVxyXG4ubG9nb0hlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDg0MTVDO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgLmhlYWRlcntcclxuICAgIGNvbG9yOiAgIzA4NDE1QztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICB9XHJcbiAgLmJ0dG57XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufSJdfQ== */");

/***/ }),

/***/ "jkt3":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/question/question.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"question-card\">\n  <div class=\"question-content\">\n    <p class=\"questions\">{{ question }}</p>\n    <ion-range\n      id=\"slider\"\n      min=\"0\"\n      max=\"10\"\n      step=\"1\"\n      color=\"primary\"\n      (ionChange)=\"sliderValueChange($event)\"\n      [(ngModel)]=\"value\"\n    >\n      <h3 slot=\"start\" size=\"large\">0</h3>\n      <h3 slot=\"end\" size=\"large\">10</h3>\n    </ion-range>\n    <ion-badge class=\"badge\">{{ 'stressRecord.score' | translate }}: {{value}}</ion-badge>\n  </div>\n</div>\n");

/***/ }),

/***/ "m/fz":
/*!**********************************************************!*\
  !*** ./src/app/component/question/question.component.ts ***!
  \**********************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_question_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./question.component.html */ "jkt3");
/* harmony import */ var _question_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question.component.scss */ "FMY5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let QuestionComponent = class QuestionComponent {
    constructor() {
        this.sliderValueChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
        this.value = 0;
    }
    sliderValueChange($event) {
        this.sliderValueChanged.emit({ rowId: this.rowId, value: $event.detail.value });
    }
};
QuestionComponent.ctorParameters = () => [];
QuestionComponent.propDecorators = {
    question: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    rowId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    sliderValueChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
QuestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-question',
        template: _raw_loader_question_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_question_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], QuestionComponent);



/***/ }),

/***/ "uceC":
/*!*********************************************************************!*\
  !*** ./src/app/stress-questions/stress-questions-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: StressQuestionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StressQuestionsPageRoutingModule", function() { return StressQuestionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _stress_questions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stress-questions.page */ "3sKt");




const routes = [
    {
        path: '',
        component: _stress_questions_page__WEBPACK_IMPORTED_MODULE_3__["StressQuestionsPage"]
    }
];
let StressQuestionsPageRoutingModule = class StressQuestionsPageRoutingModule {
};
StressQuestionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StressQuestionsPageRoutingModule);



/***/ }),

/***/ "zWLX":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stress-questions/stress-questions.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/stress-signature\" style=\"color: white;\"></ion-back-button>\n    </ion-buttons>\n    <div class=\"logoHeader\">\n      <img src=\"assets/sstemm-header.png\" width=\"150px\" />\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <h1 class=\"header\">{{title}}</h1>\n  <form #myForm=\"ngForm\" class=\"questions\" (ngSubmit)=\"save(myForm)\" >\n  <app-question *ngFor=\"let question of questions\" (sliderValueChanged)=\"sliderValueChanged($event)\"\n    [question]=\"question.question\" [rowId]=\"question.id\" [value]=\"\">\n  </app-question>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-sm=\"6\" size=\"6\" class=\"ion-text-center\">\n        <ion-button expand=\"block\" class=\"ion-text-wrap min-max-width bttn\" (click)=\"goBack()\">\n          <ion-icon class=\"icon\" name=\"arrow-back-outline\"></ion-icon>{{ 'button.back' | translate }}</ion-button>\n      </ion-col>\n\n      <ion-col size-sm=\"6\" size=\"6\" class=\"ion-text-center\">\n        <ion-button expand=\"block\" class=\"ion-text-wrap min-max-width bttn\" type=\"submit\">\n          <ion-icon  class=\"icon\" name=\"save\"></ion-icon>{{ 'button.save' | translate }}</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</form>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=stress-questions-stress-questions-module-es2015.js.map