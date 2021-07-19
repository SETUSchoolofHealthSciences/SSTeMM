(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cognito-cognito-module"],{

/***/ "36nm":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cognito/cognito.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"dark-gb\" [fullscreen]=\"true\">\n  <div class=\"logoLogin\">\n    <div class=\"center\">\n      <ion-img src=\"assets/sstemm-login.png\" class=\"ion-align-self-end\"></ion-img>\n    </div>\n  </div>\n  <h3 style=\"color: white; text-align: center;\">Choose your country/Izberite svojo državo/Elige tu país</h3>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class=\"button\" (click)=\"selectCountry('ireland')\">\n          <ion-img class=\"flag\" src=\"assets/flag/ireland.png\"></ion-img>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div class=\"button\" (click)=\"selectCountry('slovenia')\">\n          <ion-img class=\"flag\" src=\"assets/flag/slovenia.png\"></ion-img>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div class=\"button\" (click)=\"selectCountry('spain')\">\n          <ion-img class=\"flag\" src=\"assets/flag/spain.png\"></ion-img>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <p class=\"disclaimer\"><strong>Disclaimer:</strong> Once a choice has been made, it cannot be reversed on this device.\n    This may result in having connectivity issues with the SSTeMM solution. Please ensure you choose the correct\n    country.</p>\n  <p class=\"disclaimer\"> <strong> Omejitev odgovornosti: </strong> Ko je izbira že sprejeta, je v tej napravi ni mogoče\n    razveljaviti.\n    To lahko povzroči težave s povezljivostjo z rešitvijo SSTeMM. Prepričajte se, da ste izbrali pravilno državo. </p>\n  <p class=\"disclaimer\"> <strong> Renuncia de responsabilidad: </strong> una vez que se ha hecho una elección, no se\n    puede revertir en este dispositivo.\n    Esto puede resultar en problemas de conectividad con la solución SSTeMM. Asegúrese de elegir el país correcto. </p>\n</ion-content>");

/***/ }),

/***/ "Lltx":
/*!***************************************************!*\
  !*** ./src/app/cognito/cognito-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CognitoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CognitoPageRoutingModule", function() { return CognitoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cognito_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cognito.page */ "rjgt");




const routes = [
    {
        path: '',
        component: _cognito_page__WEBPACK_IMPORTED_MODULE_3__["CognitoPage"]
    }
];
let CognitoPageRoutingModule = class CognitoPageRoutingModule {
};
CognitoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CognitoPageRoutingModule);



/***/ }),

/***/ "OshG":
/*!*******************************************!*\
  !*** ./src/app/cognito/cognito.module.ts ***!
  \*******************************************/
/*! exports provided: CognitoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CognitoPageModule", function() { return CognitoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cognito_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cognito-routing.module */ "Lltx");
/* harmony import */ var _cognito_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cognito.page */ "rjgt");







let CognitoPageModule = class CognitoPageModule {
};
CognitoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cognito_routing_module__WEBPACK_IMPORTED_MODULE_5__["CognitoPageRoutingModule"]
        ],
        declarations: [_cognito_page__WEBPACK_IMPORTED_MODULE_6__["CognitoPage"]]
    })
], CognitoPageModule);



/***/ }),

/***/ "hGbz":
/*!*******************************************!*\
  !*** ./src/app/cognito/cognito.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dark-gb {\n  --ion-background-color: #08415C !important;\n}\n\n.logoLogin {\n  margin-top: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.flag {\n  padding: 10px;\n}\n\n.button {\n  margin: 10px;\n}\n\n.disclaimer {\n  padding-left: 5px;\n  padding-right: 5px;\n  text-align: center;\n  font-size: small;\n  color: white;\n}\n\n.ios .center {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvZ25pdG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7QUFFSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUVJO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJjb2duaXRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXJrLWdie1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzA4NDE1QyAhaW1wb3J0YW50O1xyXG59XHJcbi5sb2dvTG9naW57XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsYWcge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5kaXNjbGFpbWVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4OyBcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgZm9udC1zaXplOiBzbWFsbDsgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pb3N7XHJcbiAgICAuY2VudGVye1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "rjgt":
/*!*****************************************!*\
  !*** ./src/app/cognito/cognito.page.ts ***!
  \*****************************************/
/*! exports provided: CognitoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CognitoPage", function() { return CognitoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cognito_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cognito.page.html */ "36nm");
/* harmony import */ var _cognito_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cognito.page.scss */ "hGbz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aws-amplify */ "AL3R");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! config */ "UIRo");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/storage.service */ "n90K");











const COUNTRY = 'country';
let CognitoPage = class CognitoPage {
    constructor(storage, route, router, translate, authenticationService) {
        this.storage = storage;
        this.route = route;
        this.router = router;
        this.translate = translate;
        this.authenticationService = authenticationService;
    }
    ngOnInit() {
    }
    selectCountry(country) {
        this.authenticationService.authenticationState.subscribe(state => {
            if (state) {
                this.router.navigate(['']);
            }
            else {
                this.router.navigate(['login']);
            }
        });
        this.storage.setLocalData(COUNTRY, country);
        switch (country) {
            case 'ireland': {
                aws_amplify__WEBPACK_IMPORTED_MODULE_7__["default"].configure({
                    Auth: {
                        mandatorySignIn: true,
                        region: config__WEBPACK_IMPORTED_MODULE_8__["awscognitoregion"],
                        userPoolId: config__WEBPACK_IMPORTED_MODULE_8__["awsuserpoolsidie"],
                        userPoolWebClientId: config__WEBPACK_IMPORTED_MODULE_8__["awsuserpoolswebclientidie"],
                        authenticationFlowType: 'USER_PASSWORD_AUTH'
                    }
                });
                this.storage.setLocalData('lang', 'en');
                this.translate.use('en');
                this.route.navigateRoot(['login']);
                break;
            }
            case 'slovenia': {
                aws_amplify__WEBPACK_IMPORTED_MODULE_7__["default"].configure({
                    Auth: {
                        mandatorySignIn: true,
                        region: config__WEBPACK_IMPORTED_MODULE_8__["awscognitoregion"],
                        userPoolId: config__WEBPACK_IMPORTED_MODULE_8__["awsuserpoolsidsi"],
                        userPoolWebClientId: config__WEBPACK_IMPORTED_MODULE_8__["awsuserpoolswebclientidsi"],
                        authenticationFlowType: 'USER_PASSWORD_AUTH'
                    }
                });
                this.storage.setLocalData('lang', 'si');
                this.translate.use('si');
                this.route.navigateBack(['login']);
                break;
            }
            case 'spain': {
                aws_amplify__WEBPACK_IMPORTED_MODULE_7__["default"].configure({
                    Auth: {
                        mandatorySignIn: true,
                        region: config__WEBPACK_IMPORTED_MODULE_8__["awscognitoregion"],
                        userPoolId: config__WEBPACK_IMPORTED_MODULE_8__["awsuserpoolsides"],
                        userPoolWebClientId: config__WEBPACK_IMPORTED_MODULE_8__["awsuserpoolswebclientides"],
                        authenticationFlowType: 'USER_PASSWORD_AUTH'
                    }
                });
                this.storage.setLocalData('lang', 'es');
                this.translate.use('es');
                this.route.navigateBack(['login']);
                break;
            }
            default: {
                this.route.navigateBack(['cognito']);
            }
        }
    }
};
CognitoPage.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] }
];
CognitoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cognito',
        template: _raw_loader_cognito_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cognito_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CognitoPage);



/***/ })

}]);
//# sourceMappingURL=cognito-cognito-module-es2015.js.map