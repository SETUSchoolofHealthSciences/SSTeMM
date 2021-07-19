(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "2c9M":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
    getEngine() {
        const win = window;
        return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
    },
    available() {
        return !!this.getEngine();
    },
    isCordova() {
        return !!window.TapticEngine;
    },
    isCapacitor() {
        const win = window;
        return !!win.Capacitor;
    },
    impact(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({ style });
    },
    notification(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({ style });
    },
    selection() {
        this.impact({ style: 'light' });
    },
    selectionStart() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionStart();
        }
        else {
            engine.gestureSelectionStart();
        }
    },
    selectionChanged() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    },
    selectionEnd() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionEnd();
        }
        else {
            engine.gestureSelectionEnd();
        }
    }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
    HapticEngine.impact(options);
};




/***/ }),

/***/ "6i10":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "7mbw":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/record/record.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div  class=\"record-card\">\n  <div class=\"record-content\">\n    <div class=\"score\">\n      <p>{{overallScore}}</p>\n    </div>\n    <h3><ion-icon name=\"calendar-outline\"></ion-icon> {{timestamp | date: 'dd/MM/yyyy HH:mm'}}</h3>\n    <div *ngFor=\"let domain of domain; let ind = index\">\n    <ion-badge class=\"domain\">{{domain}}</ion-badge>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "9E3G":
/*!******************************************************!*\
  !*** ./src/app/component/record/record.component.ts ***!
  \******************************************************/
/*! exports provided: RecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordComponent", function() { return RecordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_record_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./record.component.html */ "7mbw");
/* harmony import */ var _record_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./record.component.scss */ "WCpZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let RecordComponent = class RecordComponent {
    constructor() { }
    ngOnInit() {
    }
};
RecordComponent.ctorParameters = () => [];
RecordComponent.propDecorators = {
    timestamp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    overallScore: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    domain: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
RecordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-record',
        template: _raw_loader_record_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_record_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RecordComponent);



/***/ }),

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _appsync_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appsync.service */ "gB8k");
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../graphql/queries */ "xsdW");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication.service */ "ej43");
/* harmony import */ var _translation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./translation.service */ "ty2H");







let ApiService = class ApiService {
    constructor(appsync, route, auth, toaster, translate) {
        this.appsync = appsync;
        this.route = route;
        this.auth = auth;
        this.toaster = toaster;
        this.translate = translate;
        this.homeSignatures = [];
        this.allSignatures = [];
        this.displayNoEntries = false;
    }
    fetchData(loading) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.displayNoEntries = false;
            this.allSignatures = [];
            this.homeSignatures = [];
            let observables;
            yield this.auth.checkToken();
            if (this.auth.authenticationState) {
                observables = yield this.getItems(this.auth.currentToken);
                if (observables.data.listSSTeMMS.items.length === 5) {
                    console.log('fiver');
                    observables = yield this.getItems(this.auth.currentToken);
                }
                observables.data.listSSTeMMS.items.sort((a, b) => a.timeStamp < b.timeStamp ? 1 : -1);
                console.log('length ', observables.data.listSSTeMMS.items.length);
                for (const con of observables.data.listSSTeMMS.items) {
                    this.allSignatures.push(con);
                }
                this.slice();
                if (this.allSignatures.length === 0) {
                    this.displayNoEntries = true;
                }
                loading.dismiss();
            }
            else {
                this.translate.timeout();
                const toast = this.toaster.create({
                    message: this.translate.toastMessage,
                    duration: 3000,
                    position: 'top'
                });
                // tslint:disable-next-line: no-shadowed-variable
                toast.then(toast => toast.present());
                this.route.navigateRoot(['login']);
            }
        });
    }
    getItems(token) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let results;
            yield this.appsync.initializeClient().then((client) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const query = _graphql_queries__WEBPACK_IMPORTED_MODULE_3__["listSsTeMms"];
                results = yield client.query({
                    query,
                    fetchPolicy: 'network-only',
                    variables: {
                        filter: { cognitoId: { eq: token.sub } },
                        limit: 5000
                    }
                });
            }));
            return results;
        });
    }
    slice() {
        const size = 5;
        const sliced = this.allSignatures.slice(0, size);
        this.homeSignatures = sliced;
    }
};
ApiService.ctorParameters = () => [
    { type: _appsync_service__WEBPACK_IMPORTED_MODULE_2__["AppsyncService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _translation_service__WEBPACK_IMPORTED_MODULE_6__["TranslationService"] }
];
ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "NqGI":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "TGEI":
/*!**********************************!*\
  !*** ./src/graphql/mutations.ts ***!
  \**********************************/
/*! exports provided: createSsTeMm, updateSsTeMm, deleteSsTeMm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSsTeMm", function() { return createSsTeMm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSsTeMm", function() { return updateSsTeMm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSsTeMm", function() { return deleteSsTeMm; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "lTCR");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

const createSsTeMm = /* GraphQL */ graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
  mutation CreateSsTeMm($input: CreateSSTeMMInput!) {
    createSSTeMM(input: $input) {
      id
      cognitoId
      timeStamp
      domain
      scoreCard
      totalScore
      reflection
    }
  }
`;
const updateSsTeMm = /* GraphQL */ `
  mutation UpdateSsTeMm($input: UpdateSSTeMMInput!) {
    updateSSTeMM(input: $input) {
      id
      cognitoId
      timeStamp
      domain
      scoreCard
      totalScore
      reflection
    }
  }
`;
const deleteSsTeMm = /* GraphQL */ `
  mutation DeleteSsTeMm($input: DeleteSSTeMMInput!) {
    deleteSSTeMM(input: $input) {
      id
      cognitoId
      timeStamp
      domain
      scoreCard
      totalScore
      reflection
    }
  }
`;


/***/ }),

/***/ "U/uv":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-92848855.js */ "sxy2");
/* harmony import */ var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-eea61379.js */ "ItpF");
/* harmony import */ var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-7b8ba70a.js */ "2c9M");




const createButtonActiveGesture = (el, isButton) => {
    let currentTouchedButton;
    let initialTouchedButton;
    const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
        if (typeof document === 'undefined') {
            return;
        }
        const target = document.elementFromPoint(x, y);
        if (!target || !isButton(target)) {
            clearActiveButton();
            return;
        }
        if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
        }
    };
    const setActiveButton = (button, hapticFeedbackFn) => {
        currentTouchedButton = button;
        if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
        hapticFeedbackFn();
    };
    const clearActiveButton = (dispatchClick = false) => {
        if (!currentTouchedButton) {
            return;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
        /**
         * Clicking on one button, but releasing on another button
         * does not dispatch a click event in browsers, so we
         * need to do it manually here. Some browsers will
         * dispatch a click if clicking on one button, dragging over
         * another button, and releasing on the original button. In that
         * case, we need to make sure we do not cause a double click there.
         */
        if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
        }
        currentTouchedButton = undefined;
    };
    return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
        el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
        onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
        onEnd: () => {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
        }
    });
};




/***/ }),

/***/ "WCpZ":
/*!********************************************************!*\
  !*** ./src/app/component/record/record.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".record-card {\n  margin: 10px;\n}\n\n.score {\n  text-align: center;\n  width: 50px;\n  height: 50px;\n  background-color: #5ACAF9;\n  color: #ffffff;\n  border-radius: 50px;\n  position: absolute;\n  right: 50px;\n  margin-top: 7px;\n}\n\n.record-content {\n  margin: 10px;\n  height: 100px;\n  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.6);\n  border-radius: 3px;\n  border: thin solid #ededed;\n  padding: 1em;\n  display: flex;\n  flex-flow: row wrap;\n}\n\n.record-content h3 {\n  flex-basis: 100%;\n  color: #08415C;\n}\n\n.domain {\n  color: #ffffff;\n  font-size: medium;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlY29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFFSjs7QUFBQTtFQUVJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUVKOztBQURJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBR1I7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUVKIiwiZmlsZSI6InJlY29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWNvcmQtY2FyZCB7XHJcbiAgICBtYXJnaW46IDEwcHhcclxufVxyXG4uc2NvcmV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDo1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVBQ0FGOTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogN3B4XHJcbn1cclxuLnJlY29yZC1jb250ZW50IHtcclxuICAgIFxyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDRweCByZ2JhKDAsMCwwLDAuNik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXI6IHRoaW4gc29saWQgI2VkZWRlZDtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBoM3tcclxuICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgICAgIGNvbG9yOiAjMDg0MTVDO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZG9tYWlue1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "oq9T":
/*!********************************************!*\
  !*** ./src/app/services/record.service.ts ***!
  \********************************************/
/*! exports provided: RecordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordService", function() { return RecordService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _appsync_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appsync.service */ "gB8k");
/* harmony import */ var src_graphql_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/graphql/mutations */ "TGEI");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication.service */ "ej43");
/* harmony import */ var _translation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./translation.service */ "ty2H");







let RecordService = class RecordService {
    constructor(auth, appsync, nav, translate, toaster) {
        this.auth = auth;
        this.appsync = appsync;
        this.nav = nav;
        this.translate = translate;
        this.toaster = toaster;
        this.stressSignature = {};
        this.totalScores = [];
        this.totalScore = 0;
        this.domains = [];
        this.savedPressed = false;
        this.questionOne = [];
        this.questionTwo = [];
        this.questionThree = [];
        this.questionFour = [];
        this.questionFive = [];
        this.scoreCard = [];
        this.totalScoreCard = {};
    }
    saveRecord() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const date = +new Date();
            for (const item of this.totalScores) {
                this.totalScore = this.totalScore + item.totalScore;
            }
            yield this.auth.checkToken();
            if (this.auth.authenticationState) {
                this.appsync.initializeClient().then((client) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    const data = {
                        cognitoId: this.auth.currentToken.sub,
                        domain: this.domains,
                        timeStamp: date,
                        scoreCard: JSON.stringify(this.totalScores),
                        totalScore: this.totalScore,
                        reflection: this.stressSignature.reflection,
                    };
                    const mut = src_graphql_mutations__WEBPACK_IMPORTED_MODULE_3__["createSsTeMm"];
                    const mutation = yield client.mutate({
                        mutation: mut,
                        variables: {
                            input: data,
                        },
                    });
                    this.clearData();
                }));
                this.nav.navigateRoot(['/tabs/home']);
            }
            else {
                this.translate.timeout();
                const toast = this.toaster.create({
                    message: this.translate.toastMessage,
                    duration: 3000,
                    position: 'top'
                });
                // tslint:disable-next-line: no-shadowed-variable
                toast.then(toast => toast.present());
                this.clearData();
                this.nav.navigateRoot(['login']);
            }
        });
    }
    clearData() {
        this.totalScore = 0;
        this.domains = [];
        this.totalScores = [];
        this.stressSignature.reflection = null;
        this.savedPressed = false;
        this.questionOne = [];
        this.questionTwo = [];
        this.questionThree = [];
        this.questionFour = [];
        this.questionFive = [];
        this.scoreCard = [];
        this.totalScoreCard = {};
    }
};
RecordService.ctorParameters = () => [
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _appsync_service__WEBPACK_IMPORTED_MODULE_2__["AppsyncService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _translation_service__WEBPACK_IMPORTED_MODULE_6__["TranslationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
RecordService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], RecordService);



/***/ }),

/***/ "sPtc":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-5641d27f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
    return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction, animation);
        }
    }
    return false;
};




/***/ }),

/***/ "xsdW":
/*!********************************!*\
  !*** ./src/graphql/queries.ts ***!
  \********************************/
/*! exports provided: getSsTeMm, listSsTeMms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSsTeMm", function() { return getSsTeMm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listSsTeMms", function() { return listSsTeMms; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "lTCR");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

const getSsTeMm = /* GraphQL */ graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
  query GetSsTeMm($id: ID!, $timeStamp: AWSTimestamp!) {
    getSSTeMM(id: $id, timeStamp: $timeStamp) {
      id
      cognitoId
      timeStamp
      domain
      scoreCard
      totalScore
      reflection
    }
  }
`;
const listSsTeMms = /* GraphQL */ graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
  query ListSsTeMms(
    $filter: TableSSTeMMFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSSTeMMS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cognitoId
        timeStamp
        domain
        scoreCard
        totalScore
        reflection
      }
      nextToken
    }
  }
`;


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map