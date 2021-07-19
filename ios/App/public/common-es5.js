(function () {
  function _templateObject3() {
    var data = _taggedTemplateLiteral(["\n  query ListSsTeMms(\n    $filter: TableSSTeMMFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listSSTeMMS(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        cognitoId\n        timeStamp\n        domain\n        scoreCard\n        totalScore\n        reflection\n      }\n      nextToken\n    }\n  }\n"]);

    _templateObject3 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2() {
    var data = _taggedTemplateLiteral(["\n  query GetSsTeMm($id: ID!, $timeStamp: AWSTimestamp!) {\n    getSSTeMM(id: $id, timeStamp: $timeStamp) {\n      id\n      cognitoId\n      timeStamp\n      domain\n      scoreCard\n      totalScore\n      reflection\n    }\n  }\n"]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _templateObject() {
    var data = _taggedTemplateLiteral(["\n  mutation CreateSsTeMm($input: CreateSSTeMMInput!) {\n    createSSTeMM(input: $input) {\n      id\n      cognitoId\n      timeStamp\n      domain\n      scoreCard\n      totalScore\n      reflection\n    }\n  }\n"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "2c9M":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function c9M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "6i10":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function i10(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
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
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "7mbw":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/record/record.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function mbw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div  class=\"record-card\">\n  <div class=\"record-content\">\n    <div class=\"score\">\n      <p>{{overallScore}}</p>\n    </div>\n    <h3><ion-icon name=\"calendar-outline\"></ion-icon> {{timestamp | date: 'dd/MM/yyyy HH:mm'}}</h3>\n    <div *ngFor=\"let domain of domain; let ind = index\">\n    <ion-badge class=\"domain\">{{domain}}</ion-badge>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "9E3G":
    /*!******************************************************!*\
      !*** ./src/app/component/record/record.component.ts ***!
      \******************************************************/

    /*! exports provided: RecordComponent */

    /***/
    function E3G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecordComponent", function () {
        return RecordComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_record_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./record.component.html */
      "7mbw");
      /* harmony import */


      var _record_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./record.component.scss */
      "WCpZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RecordComponent = /*#__PURE__*/function () {
        function RecordComponent() {
          _classCallCheck(this, RecordComponent);
        }

        _createClass(RecordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RecordComponent;
      }();

      RecordComponent.ctorParameters = function () {
        return [];
      };

      RecordComponent.propDecorators = {
        timestamp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        overallScore: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        domain: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      RecordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-record',
        template: _raw_loader_record_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_record_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RecordComponent);
      /***/
    },

    /***/
    "H+bZ":
    /*!*****************************************!*\
      !*** ./src/app/services/api.service.ts ***!
      \*****************************************/

    /*! exports provided: ApiService */

    /***/
    function HBZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
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


      var _appsync_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./appsync.service */
      "gB8k");
      /* harmony import */


      var _graphql_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../graphql/queries */
      "xsdW");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./authentication.service */
      "ej43");
      /* harmony import */


      var _translation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./translation.service */
      "ty2H");

      var ApiService = /*#__PURE__*/function () {
        function ApiService(appsync, route, auth, toaster, translate) {
          _classCallCheck(this, ApiService);

          this.appsync = appsync;
          this.route = route;
          this.auth = auth;
          this.toaster = toaster;
          this.translate = translate;
          this.homeSignatures = [];
          this.allSignatures = [];
          this.displayNoEntries = false;
        }

        _createClass(ApiService, [{
          key: "fetchData",
          value: function fetchData(loading) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var observables, _iterator, _step, con, toast;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.displayNoEntries = false;
                      this.allSignatures = [];
                      this.homeSignatures = [];
                      _context.next = 5;
                      return this.auth.checkToken();

                    case 5:
                      if (!this.auth.authenticationState) {
                        _context.next = 23;
                        break;
                      }

                      _context.next = 8;
                      return this.getItems(this.auth.currentToken);

                    case 8:
                      observables = _context.sent;

                      if (!(observables.data.listSSTeMMS.items.length === 5)) {
                        _context.next = 14;
                        break;
                      }

                      console.log('fiver');
                      _context.next = 13;
                      return this.getItems(this.auth.currentToken);

                    case 13:
                      observables = _context.sent;

                    case 14:
                      observables.data.listSSTeMMS.items.sort(function (a, b) {
                        return a.timeStamp < b.timeStamp ? 1 : -1;
                      });
                      console.log('length ', observables.data.listSSTeMMS.items.length);
                      _iterator = _createForOfIteratorHelper(observables.data.listSSTeMMS.items);

                      try {
                        for (_iterator.s(); !(_step = _iterator.n()).done;) {
                          con = _step.value;
                          this.allSignatures.push(con);
                        }
                      } catch (err) {
                        _iterator.e(err);
                      } finally {
                        _iterator.f();
                      }

                      this.slice();

                      if (this.allSignatures.length === 0) {
                        this.displayNoEntries = true;
                      }

                      loading.dismiss();
                      _context.next = 27;
                      break;

                    case 23:
                      this.translate.timeout();
                      toast = this.toaster.create({
                        message: this.translate.toastMessage,
                        duration: 3000,
                        position: 'top'
                      }); // tslint:disable-next-line: no-shadowed-variable

                      toast.then(function (toast) {
                        return toast.present();
                      });
                      this.route.navigateRoot(['login']);

                    case 27:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getItems",
          value: function getItems(token) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this = this;

              var results;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.appsync.initializeClient().then(function (client) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          var query;
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  query = _graphql_queries__WEBPACK_IMPORTED_MODULE_3__["listSsTeMms"];
                                  _context2.next = 3;
                                  return client.query({
                                    query: query,
                                    fetchPolicy: 'network-only',
                                    variables: {
                                      filter: {
                                        cognitoId: {
                                          eq: token.sub
                                        }
                                      },
                                      limit: 5000
                                    }
                                  });

                                case 3:
                                  results = _context2.sent;

                                case 4:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2);
                        }));
                      });

                    case 2:
                      return _context3.abrupt("return", results);

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "slice",
          value: function slice() {
            var size = 5;
            var sliced = this.allSignatures.slice(0, size);
            this.homeSignatures = sliced;
          }
        }]);

        return ApiService;
      }();

      ApiService.ctorParameters = function () {
        return [{
          type: _appsync_service__WEBPACK_IMPORTED_MODULE_2__["AppsyncService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _translation_service__WEBPACK_IMPORTED_MODULE_6__["TranslationService"]
        }];
      };

      ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ApiService);
      /***/
    },

    /***/
    "NqGI":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function NqGI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });

      var attachComponent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  if (!delegate) {
                    _context4.next = 2;
                    break;
                  }

                  return _context4.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context4.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context4.next = 11;
                    break;
                  }

                  _context4.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context4.abrupt("return", el);

                case 12:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "TGEI":
    /*!**********************************!*\
      !*** ./src/graphql/mutations.ts ***!
      \**********************************/

    /*! exports provided: createSsTeMm, updateSsTeMm, deleteSsTeMm */

    /***/
    function TGEI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createSsTeMm", function () {
        return createSsTeMm;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateSsTeMm", function () {
        return updateSsTeMm;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deleteSsTeMm", function () {
        return deleteSsTeMm;
      });
      /* harmony import */


      var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! graphql-tag */
      "lTCR");
      /* harmony import */


      var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
      /* tslint:disable */

      /* eslint-disable */
      // this is an auto generated file. This will be overwritten


      var createSsTeMm =
      /* GraphQL */
      graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject());
      var updateSsTeMm =
      /* GraphQL */
      "\n  mutation UpdateSsTeMm($input: UpdateSSTeMMInput!) {\n    updateSSTeMM(input: $input) {\n      id\n      cognitoId\n      timeStamp\n      domain\n      scoreCard\n      totalScore\n      reflection\n    }\n  }\n";
      var deleteSsTeMm =
      /* GraphQL */
      "\n  mutation DeleteSsTeMm($input: DeleteSSTeMMInput!) {\n    deleteSSTeMM(input: $input) {\n      id\n      cognitoId\n      timeStamp\n      domain\n      scoreCard\n      totalScore\n      reflection\n    }\n  }\n";
      /***/
    },

    /***/
    "U/uv":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function UUv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-92848855.js */
      "sxy2");
      /* harmony import */


      var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-eea61379.js */
      "ItpF");
      /* harmony import */


      var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-7b8ba70a.js */
      "2c9M");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
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
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "WCpZ":
    /*!********************************************************!*\
      !*** ./src/app/component/record/record.component.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function WCpZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".record-card {\n  margin: 10px;\n}\n\n.score {\n  text-align: center;\n  width: 50px;\n  height: 50px;\n  background-color: #5ACAF9;\n  color: #ffffff;\n  border-radius: 50px;\n  position: absolute;\n  right: 50px;\n  margin-top: 7px;\n}\n\n.record-content {\n  margin: 10px;\n  height: 100px;\n  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.6);\n  border-radius: 3px;\n  border: thin solid #ededed;\n  padding: 1em;\n  display: flex;\n  flex-flow: row wrap;\n}\n\n.record-content h3 {\n  flex-basis: 100%;\n  color: #08415C;\n}\n\n.domain {\n  color: #ffffff;\n  font-size: medium;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlY29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFFSjs7QUFBQTtFQUVJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUVKOztBQURJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBR1I7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUVKIiwiZmlsZSI6InJlY29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWNvcmQtY2FyZCB7XHJcbiAgICBtYXJnaW46IDEwcHhcclxufVxyXG4uc2NvcmV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDo1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVBQ0FGOTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogN3B4XHJcbn1cclxuLnJlY29yZC1jb250ZW50IHtcclxuICAgIFxyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDRweCByZ2JhKDAsMCwwLDAuNik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXI6IHRoaW4gc29saWQgI2VkZWRlZDtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBoM3tcclxuICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgICAgIGNvbG9yOiAjMDg0MTVDO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZG9tYWlue1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "oq9T":
    /*!********************************************!*\
      !*** ./src/app/services/record.service.ts ***!
      \********************************************/

    /*! exports provided: RecordService */

    /***/
    function oq9T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecordService", function () {
        return RecordService;
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


      var _appsync_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./appsync.service */
      "gB8k");
      /* harmony import */


      var src_graphql_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/graphql/mutations */
      "TGEI");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./authentication.service */
      "ej43");
      /* harmony import */


      var _translation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./translation.service */
      "ty2H");

      var RecordService = /*#__PURE__*/function () {
        function RecordService(auth, appsync, nav, translate, toaster) {
          _classCallCheck(this, RecordService);

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

        _createClass(RecordService, [{
          key: "saveRecord",
          value: function saveRecord() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this2 = this;

              var date, _iterator2, _step2, item, toast;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      date = +new Date();
                      _iterator2 = _createForOfIteratorHelper(this.totalScores);

                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                          item = _step2.value;
                          this.totalScore = this.totalScore + item.totalScore;
                        }
                      } catch (err) {
                        _iterator2.e(err);
                      } finally {
                        _iterator2.f();
                      }

                      _context6.next = 5;
                      return this.auth.checkToken();

                    case 5:
                      if (this.auth.authenticationState) {
                        this.appsync.initializeClient().then(function (client) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                            var data, mut, mutation;
                            return regeneratorRuntime.wrap(function _callee5$(_context5) {
                              while (1) {
                                switch (_context5.prev = _context5.next) {
                                  case 0:
                                    data = {
                                      cognitoId: this.auth.currentToken.sub,
                                      domain: this.domains,
                                      timeStamp: date,
                                      scoreCard: JSON.stringify(this.totalScores),
                                      totalScore: this.totalScore,
                                      reflection: this.stressSignature.reflection
                                    };
                                    mut = src_graphql_mutations__WEBPACK_IMPORTED_MODULE_3__["createSsTeMm"];
                                    _context5.next = 4;
                                    return client.mutate({
                                      mutation: mut,
                                      variables: {
                                        input: data
                                      }
                                    });

                                  case 4:
                                    mutation = _context5.sent;
                                    this.clearData();

                                  case 6:
                                  case "end":
                                    return _context5.stop();
                                }
                              }
                            }, _callee5, this);
                          }));
                        });
                        this.nav.navigateRoot(['/tabs/home']);
                      } else {
                        this.translate.timeout();
                        toast = this.toaster.create({
                          message: this.translate.toastMessage,
                          duration: 3000,
                          position: 'top'
                        }); // tslint:disable-next-line: no-shadowed-variable

                        toast.then(function (toast) {
                          return toast.present();
                        });
                        this.clearData();
                        this.nav.navigateRoot(['login']);
                      }

                    case 6:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "clearData",
          value: function clearData() {
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
        }]);

        return RecordService;
      }();

      RecordService.ctorParameters = function () {
        return [{
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
        }, {
          type: _appsync_service__WEBPACK_IMPORTED_MODULE_2__["AppsyncService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _translation_service__WEBPACK_IMPORTED_MODULE_6__["TranslationService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }];
      };

      RecordService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], RecordService);
      /***/
    },

    /***/
    "sPtc":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-5641d27f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function sPtc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context7.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context7.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context7.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context7.abrupt("return", false);

                case 6:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "xsdW":
    /*!********************************!*\
      !*** ./src/graphql/queries.ts ***!
      \********************************/

    /*! exports provided: getSsTeMm, listSsTeMms */

    /***/
    function xsdW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSsTeMm", function () {
        return getSsTeMm;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "listSsTeMms", function () {
        return listSsTeMms;
      });
      /* harmony import */


      var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! graphql-tag */
      "lTCR");
      /* harmony import */


      var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
      /* tslint:disable */

      /* eslint-disable */
      // this is an auto generated file. This will be overwritten


      var getSsTeMm =
      /* GraphQL */
      graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject2());
      var listSsTeMms =
      /* GraphQL */
      graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject3());
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map