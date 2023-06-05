(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _mazer_js_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mazer/js/app */ "./assets/mazer/js/app.js");
/* harmony import */ var _mazer_js_mazer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mazer/js/mazer */ "./assets/mazer/js/mazer.js");
/* harmony import */ var _mazer_static_js_components_dark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mazer/static/js/components/dark */ "./assets/mazer/static/js/components/dark.js");
/* harmony import */ var _mazer_static_js_components_dark__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mazer_static_js_components_dark__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var _mazer_static_js_components_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mazer/static/js/components/sidebar */ "./assets/mazer/static/js/components/sidebar.js");
/* harmony import */ var _mazer_static_js_initTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mazer/static/js/initTheme */ "./assets/mazer/static/js/initTheme.js");
/* harmony import */ var _mazer_static_js_initTheme__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mazer_static_js_initTheme__WEBPACK_IMPORTED_MODULE_7__);









/***/ }),

/***/ "./assets/mazer/js/app.js":
/*!********************************!*\
  !*** ./assets/mazer/js/app.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! feather-icons */ "./node_modules/feather-icons/dist/feather.js");
/* harmony import */ var feather_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(feather_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mazer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mazer */ "./assets/mazer/js/mazer.js");


// Feather icons are used on some pages
// Replace() replaces [data-feather] elements with icons

feather_icons__WEBPACK_IMPORTED_MODULE_2___default().replace();

// Mazer internal JS. Include this in your project to get
// the sidebar running.


/***/ }),

/***/ "./assets/mazer/js/mazer.js":
/*!**********************************!*\
  !*** ./assets/mazer/js/mazer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_js_components_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../static/js/components/sidebar */ "./assets/mazer/static/js/components/sidebar.js");
// Don't forget to load bootstrap js in your project
// Here, we load it in our app.js

window.bootstrap = (bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_0___default());

// We could import PerfectScrollbar directly in the sidebar module


/***/ }),

/***/ "./assets/mazer/static/js/components/dark.js":
/*!***************************************************!*\
  !*** ./assets/mazer/static/js/components/dark.js ***!
  \***************************************************/
/***/ (() => {

var THEME_KEY = "theme";
function toggleDarkTheme() {
  setTheme(document.documentElement.getAttribute("data-bs-theme") === 'dark' ? "light" : "dark");
}

/**
 * Set theme for mazer
 * @param {"dark"|"light"} theme
 * @param {boolean} persist 
 */
function setTheme(theme) {
  var persist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  document.body.classList.add(theme);
  document.documentElement.setAttribute('data-bs-theme', theme);
  if (persist) {
    localStorage.setItem(THEME_KEY, theme);
  }
}

/**
 * Init theme from setTheme()
 */
function initTheme() {
  //If the user manually set a theme, we'll load that
  var storedTheme = localStorage.getItem(THEME_KEY);
  if (storedTheme) {
    return setTheme(storedTheme);
  }
  //Detect if the user set his preferred color scheme to dark
  if (!window.matchMedia) {
    return;
  }

  //Media query to detect dark preference
  var mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  //Register change listener
  mediaQuery.addEventListener("change", function (e) {
    return setTheme(e.matches ? "dark" : "light", true);
  });
  return setTheme(mediaQuery.matches ? "dark" : "light", true);
}
window.addEventListener('DOMContentLoaded', function () {
  var toggler = document.getElementById("toggle-dark");
  var theme = localStorage.getItem(THEME_KEY);
  if (toggler) {
    toggler.checked = theme === "dark";
    toggler.addEventListener("input", function (e) {
      setTheme(e.target.checked ? "dark" : "light", true);
    });
  }
});
initTheme();

/***/ }),

/***/ "./assets/mazer/static/js/components/sidebar.js":
/*!******************************************************!*\
  !*** ./assets/mazer/static/js/components/sidebar.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _helper_isDesktop__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../helper/isDesktop */ "./assets/mazer/static/js/helper/isDesktop.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




























/**
 * Calculate nested children height in sidebar menu
* @param {HTMLElement} el 
*/
var calculateChildrenHeight = function calculateChildrenHeight(el) {
  var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var children = el.children;
  var height = 0;
  for (var i = 0; i < el.childElementCount; i++) {
    var child = children[i];
    height += child.querySelector('.submenu-link').clientHeight;

    // 2-level menu
    if (deep && child.classList.contains('has-sub')) {
      var subsubmenu = child.querySelector('.submenu');
      if (subsubmenu.classList.contains('submenu-open')) {
        var childrenHeight = ~~_toConsumableArray(subsubmenu.querySelectorAll('.submenu-link')).reduce(function (acc, curr) {
          return acc + curr.clientHeight;
        }, 0);
        height += childrenHeight;
      }
    }
  }
  el.style.setProperty('--submenu-height', height + 'px');
  return height;
};

/**
 * a Sidebar component
 * @param  {HTMLElement} el - sidebar element
 * @param  {object} options={} - options
 */
var Sidebar = /*#__PURE__*/function () {
  function Sidebar(el) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, Sidebar);
    this.sidebarEL = el instanceof HTMLElement ? el : document.querySelector(el);
    this.options = options;
    this.init();
  }

  /**
   * initialize the sidebar
   */
  _createClass(Sidebar, [{
    key: "init",
    value: function init() {
      var _this = this;
      // add event listener to sidebar
      document.querySelectorAll(".burger-btn").forEach(function (el) {
        return el.addEventListener("click", _this.toggle.bind(_this));
      });
      document.querySelectorAll(".sidebar-hide").forEach(function (el) {
        return el.addEventListener("click", _this.toggle.bind(_this));
      });
      window.addEventListener("resize", this.onResize.bind(this));
      var toggleSubmenu = function toggleSubmenu(el) {
        if (el.classList.contains("submenu-open")) {
          el.classList.remove('submenu-open');
          el.classList.add('submenu-closed');
        } else {
          el.classList.remove("submenu-closed");
          el.classList.add("submenu-open");
        }
      };
      var sidebarItems = document.querySelectorAll(".sidebar-item.has-sub");
      var _loop = function _loop() {
        var sidebarItem = sidebarItems[i];
        sidebarItems[i].querySelector(".sidebar-link").addEventListener("click", function (e) {
          e.preventDefault();
          var submenu = sidebarItem.querySelector(".submenu");
          toggleSubmenu(submenu);
        });

        // If submenu has submenu
        var submenuItems = sidebarItem.querySelectorAll('.submenu-item.has-sub');
        submenuItems.forEach(function (item) {
          item.addEventListener('click', function () {
            var submenuLevelTwo = item.querySelector('.submenu');
            toggleSubmenu(submenuLevelTwo);

            // Pass second .submenu
            var height = calculateChildrenHeight(item.parentElement, true);
          });
        });
      };
      for (var i = 0; i < sidebarItems.length; i++) {
        _loop();
      }

      // Perfect Scrollbar Init
      if (typeof PerfectScrollbar == "function") {
        var container = document.querySelector(".sidebar-wrapper");
        var ps = new PerfectScrollbar(container, {
          wheelPropagation: false
        });
      }

      // Scroll into active sidebar
      setTimeout(function () {
        _this.forceElementVisibility(document.querySelector(".sidebar-item.active"));
      }, 300);
    }

    /**
     * On Sidebar Rezise Event
     */
  }, {
    key: "onResize",
    value: function onResize() {
      if ((0,_helper_isDesktop__WEBPACK_IMPORTED_MODULE_26__["default"])(window)) {
        this.sidebarEL.classList.add("active");
      } else {
        this.sidebarEL.classList.remove("active");
      }

      // reset
      this.deleteBackdrop();
      this.toggleOverflowBody(true);
    }

    /**
     * Toggle Sidebar
     */
  }, {
    key: "toggle",
    value: function toggle() {
      var sidebarState = this.sidebarEL.classList.contains("active");
      if (sidebarState) {
        this.hide();
      } else {
        this.show();
      }
    }

    /**
     * Show Sidebar
     */
  }, {
    key: "show",
    value: function show() {
      this.sidebarEL.classList.add("active");
      this.sidebarEL.classList.remove("inactive");
      this.createBackdrop();
      this.toggleOverflowBody();
    }

    /**
     * Hide Sidebar
     */
  }, {
    key: "hide",
    value: function hide() {
      this.sidebarEL.classList.remove("active");
      this.sidebarEL.classList.add("inactive");
      this.deleteBackdrop();
      this.toggleOverflowBody();
    }

    /**
     * Create Sidebar Backdrop
     */
  }, {
    key: "createBackdrop",
    value: function createBackdrop() {
      if ((0,_helper_isDesktop__WEBPACK_IMPORTED_MODULE_26__["default"])(window)) return;
      this.deleteBackdrop();
      var backdrop = document.createElement("div");
      backdrop.classList.add("sidebar-backdrop");
      backdrop.addEventListener("click", this.hide.bind(this));
      document.body.appendChild(backdrop);
    }

    /**
     * Delete Sidebar Backdrop
     */
  }, {
    key: "deleteBackdrop",
    value: function deleteBackdrop() {
      var backdrop = document.querySelector(".sidebar-backdrop");
      if (backdrop) {
        backdrop.remove();
      }
    }

    /**
     * Toggle Overflow Body
     */
  }, {
    key: "toggleOverflowBody",
    value: function toggleOverflowBody(active) {
      if ((0,_helper_isDesktop__WEBPACK_IMPORTED_MODULE_26__["default"])(window)) return;
      var sidebarState = this.sidebarEL.classList.contains("active");
      var body = document.querySelector("body");
      if (typeof active == "undefined") {
        body.style.overflowY = sidebarState ? "hidden" : "auto";
      } else {
        body.style.overflowY = active ? "auto" : "hidden";
      }
    }
  }, {
    key: "isElementInViewport",
    value: function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    }
  }, {
    key: "forceElementVisibility",
    value: function forceElementVisibility(el) {
      if (!this.isElementInViewport(el)) {
        el.scrollIntoView(false);
      }
    }
  }]);
  return Sidebar;
}();
var sidebarEl = document.getElementById("sidebar");
/**
   * On First Load
   */
var onFirstLoad = function onFirstLoad(sidebarEL) {
  if (!sidebarEl) return;
  if ((0,_helper_isDesktop__WEBPACK_IMPORTED_MODULE_26__["default"])(window)) {
    sidebarEL.classList.add("active");
    sidebarEL.classList.add('sidebar-desktop');
  }

  // Get submenus size
  var submenus = document.querySelectorAll(".sidebar-item.has-sub .submenu");
  var _loop2 = function _loop2() {
    var submenu = submenus[i];
    var sidebarItem = submenu.parentElement;
    var height = submenu.clientHeight;
    if (sidebarItem.classList.contains('active')) submenu.classList.add('submenu-open');else submenu.classList.add('submenu-closed');
    setTimeout(function () {
      var height = calculateChildrenHeight(submenu, true);
    }, 50);
  };
  for (var i = 0; i < submenus.length; i++) {
    _loop2();
  }
};
if (document.readyState !== 'loading') {
  onFirstLoad(sidebarEl);
} else {
  window.addEventListener('DOMContentLoaded', function () {
    return onFirstLoad(sidebarEl);
  });
}
/**
 * Create Sidebar Wrapper
 */
if (sidebarEl) {
  window.sidebar = new Sidebar(sidebarEl);
}

/***/ }),

/***/ "./assets/mazer/static/js/helper/isDesktop.js":
/*!****************************************************!*\
  !*** ./assets/mazer/static/js/helper/isDesktop.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (window) {
  return window.innerWidth > 1200;
});

/***/ }),

/***/ "./assets/mazer/static/js/initTheme.js":
/*!*********************************************!*\
  !*** ./assets/mazer/static/js/initTheme.js ***!
  \*********************************************/
/***/ (() => {

var body = document.body;
var theme = localStorage.getItem('theme');
if (theme) document.documentElement.setAttribute('data-bs-theme', theme);

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-3718b8"], () => (__webpack_exec__("./assets/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU1KLEtBQUssR0FBR1EsWUFBWSxDQUFDSSxPQUFPLENBQUMsT0FBTyxDQUFDO0FBRTNDLElBQUlaLEtBQUssRUFDUEgsUUFBUSxDQUFDQyxlQUFlLENBQUNTLFlBQVksQ0FBQyxlQUFlLEVBQUVQLEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7O0FDSi9EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tYXplci9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21hemVyL2pzL21hemVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tYXplci9zdGF0aWMvanMvY29tcG9uZW50cy9kYXJrLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tYXplci9zdGF0aWMvanMvY29tcG9uZW50cy9zaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tYXplci9zdGF0aWMvanMvaGVscGVyL2lzRGVza3RvcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWF6ZXIvc3RhdGljL2pzL2luaXRUaGVtZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzPzhmNTkiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImltcG9ydCAnLi4vc3R5bGVzL2FwcC5zY3NzJztcblxuaW1wb3J0ICcuLi9ib290c3RyYXAnO1xuXG5pbXBvcnQgJy4uL21hemVyL2pzL2FwcCc7XG5cbmltcG9ydCAnLi4vbWF6ZXIvanMvbWF6ZXInO1xuXG5pbXBvcnQgJy4uL21hemVyL3N0YXRpYy9qcy9jb21wb25lbnRzL2RhcmsnO1xuXG5pbXBvcnQgJ3BlcmZlY3Qtc2Nyb2xsYmFyJztcblxuaW1wb3J0ICcuLi9tYXplci9zdGF0aWMvanMvY29tcG9uZW50cy9zaWRlYmFyJztcblxuaW1wb3J0ICcuLi9tYXplci9zdGF0aWMvanMvaW5pdFRoZW1lJzsiLCIvLyBGZWF0aGVyIGljb25zIGFyZSB1c2VkIG9uIHNvbWUgcGFnZXNcclxuLy8gUmVwbGFjZSgpIHJlcGxhY2VzIFtkYXRhLWZlYXRoZXJdIGVsZW1lbnRzIHdpdGggaWNvbnNcclxuaW1wb3J0IGZlYXRoZXJJY29ucyBmcm9tIFwiZmVhdGhlci1pY29uc1wiXHJcbmZlYXRoZXJJY29ucy5yZXBsYWNlKClcclxuXHJcbi8vIE1hemVyIGludGVybmFsIEpTLiBJbmNsdWRlIHRoaXMgaW4geW91ciBwcm9qZWN0IHRvIGdldFxyXG4vLyB0aGUgc2lkZWJhciBydW5uaW5nLlxyXG5pbXBvcnQgXCIuL21hemVyXCIgXHJcbiIsIi8vIERvbid0IGZvcmdldCB0byBsb2FkIGJvb3RzdHJhcCBqcyBpbiB5b3VyIHByb2plY3Rcbi8vIEhlcmUsIHdlIGxvYWQgaXQgaW4gb3VyIGFwcC5qc1xuaW1wb3J0IGJvb3RzdHJhcEJ1bmRsZSBmcm9tIFwiYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLmJ1bmRsZVwiXG53aW5kb3cuYm9vdHN0cmFwID0gYm9vdHN0cmFwQnVuZGxlXG5cbi8vIFdlIGNvdWxkIGltcG9ydCBQZXJmZWN0U2Nyb2xsYmFyIGRpcmVjdGx5IGluIHRoZSBzaWRlYmFyIG1vZHVsZVxuaW1wb3J0IFwiLi8uLi9zdGF0aWMvanMvY29tcG9uZW50cy9zaWRlYmFyXCJcblxuIiwiXG5jb25zdCBUSEVNRV9LRVkgPSBcInRoZW1lXCJcblxuZnVuY3Rpb24gdG9nZ2xlRGFya1RoZW1lKCkge1xuICBzZXRUaGVtZShcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1icy10aGVtZVwiKSA9PT0gJ2RhcmsnXG4gICAgICA/IFwibGlnaHRcIlxuICAgICAgOiBcImRhcmtcIlxuICApXG59XG5cbi8qKlxuICogU2V0IHRoZW1lIGZvciBtYXplclxuICogQHBhcmFtIHtcImRhcmtcInxcImxpZ2h0XCJ9IHRoZW1lXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHBlcnNpc3QgXG4gKi9cbmZ1bmN0aW9uIHNldFRoZW1lKHRoZW1lLCBwZXJzaXN0ID0gZmFsc2UpIHtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHRoZW1lKVxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRoZW1lJywgdGhlbWUpXG4gIFxuICBpZiAocGVyc2lzdCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFRIRU1FX0tFWSwgdGhlbWUpXG4gIH1cbn1cblxuLyoqXG4gKiBJbml0IHRoZW1lIGZyb20gc2V0VGhlbWUoKVxuICovXG5mdW5jdGlvbiBpbml0VGhlbWUoKSB7XG4gIC8vSWYgdGhlIHVzZXIgbWFudWFsbHkgc2V0IGEgdGhlbWUsIHdlJ2xsIGxvYWQgdGhhdFxuICBjb25zdCBzdG9yZWRUaGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFRIRU1FX0tFWSlcbiAgaWYgKHN0b3JlZFRoZW1lKSB7XG4gICAgcmV0dXJuIHNldFRoZW1lKHN0b3JlZFRoZW1lKVxuICB9XG4gIC8vRGV0ZWN0IGlmIHRoZSB1c2VyIHNldCBoaXMgcHJlZmVycmVkIGNvbG9yIHNjaGVtZSB0byBkYXJrXG4gIGlmICghd2luZG93Lm1hdGNoTWVkaWEpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vTWVkaWEgcXVlcnkgdG8gZGV0ZWN0IGRhcmsgcHJlZmVyZW5jZVxuICBjb25zdCBtZWRpYVF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpXG5cbiAgLy9SZWdpc3RlciBjaGFuZ2UgbGlzdGVuZXJcbiAgbWVkaWFRdWVyeS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PlxuICAgIHNldFRoZW1lKGUubWF0Y2hlcyA/IFwiZGFya1wiIDogXCJsaWdodFwiLCB0cnVlKVxuICApXG4gIHJldHVybiBzZXRUaGVtZShtZWRpYVF1ZXJ5Lm1hdGNoZXMgPyBcImRhcmtcIiA6IFwibGlnaHRcIiwgdHJ1ZSlcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IHRvZ2dsZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZS1kYXJrXCIpXG4gIGNvbnN0IHRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oVEhFTUVfS0VZKVxuXG4gIGlmKHRvZ2dsZXIpIHtcbiAgICB0b2dnbGVyLmNoZWNrZWQgPSB0aGVtZSA9PT0gXCJkYXJrXCJcbiAgICBcbiAgICB0b2dnbGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgICAgc2V0VGhlbWUoZS50YXJnZXQuY2hlY2tlZCA/IFwiZGFya1wiIDogXCJsaWdodFwiLCB0cnVlKVxuICAgIH0pXG4gIH1cblxufSk7XG5cbmluaXRUaGVtZSgpXG5cbiIsImltcG9ydCBpc0Rlc2t0b3AgZnJvbSAnLi4vaGVscGVyL2lzRGVza3RvcCdcblxuXG4vKipcbiAqIENhbGN1bGF0ZSBuZXN0ZWQgY2hpbGRyZW4gaGVpZ2h0IGluIHNpZGViYXIgbWVudVxuKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCBcbiovXG5jb25zdCBjYWxjdWxhdGVDaGlsZHJlbkhlaWdodCA9IChlbCwgZGVlcCA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IGNoaWxkcmVuID0gZWwuY2hpbGRyZW5cbiAgXG4gIGxldCBoZWlnaHQgPSAwXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBlbC5jaGlsZEVsZW1lbnRDb3VudDsgaSsrKSB7XG4gICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltpXVxuICAgIGhlaWdodCArPSBjaGlsZC5xdWVyeVNlbGVjdG9yKCcuc3VibWVudS1saW5rJykuY2xpZW50SGVpZ2h0XG5cbiAgICAvLyAyLWxldmVsIG1lbnVcbiAgICBpZihkZWVwICYmIGNoaWxkLmNsYXNzTGlzdC5jb250YWlucygnaGFzLXN1YicpKSB7XG4gICAgICBjb25zdCBzdWJzdWJtZW51ID0gY2hpbGQucXVlcnlTZWxlY3RvcignLnN1Ym1lbnUnKVxuXG4gICAgICBpZihzdWJzdWJtZW51LmNsYXNzTGlzdC5jb250YWlucygnc3VibWVudS1vcGVuJykpIHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW5IZWlnaHQgPSAgfn5bLi4uc3Vic3VibWVudS5xdWVyeVNlbGVjdG9yQWxsKCcuc3VibWVudS1saW5rJyldLnJlZHVjZSgoYWNjLGN1cnIpID0+IGFjYyArIGN1cnIuY2xpZW50SGVpZ2h0LDApXG4gICAgICAgIGhlaWdodCArPSBjaGlsZHJlbkhlaWdodFxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgfVxuICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zdWJtZW51LWhlaWdodCcsIGhlaWdodCArICdweCcpXG4gIHJldHVybiBoZWlnaHRcbn1cblxuLyoqXG4gKiBhIFNpZGViYXIgY29tcG9uZW50XG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWwgLSBzaWRlYmFyIGVsZW1lbnRcbiAqIEBwYXJhbSAge29iamVjdH0gb3B0aW9ucz17fSAtIG9wdGlvbnNcbiAqL1xuY2xhc3MgU2lkZWJhciB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLnNpZGViYXJFTCA9IGVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBlbCA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogaW5pdGlhbGl6ZSB0aGUgc2lkZWJhclxuICAgKi9cbiAgaW5pdCgpIHtcbiAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gc2lkZWJhclxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5idXJnZXItYnRuXCIpXG4gICAgICAuZm9yRWFjaCgoZWwpID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpKSlcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkZWJhci1oaWRlXCIpXG4gICAgICAuZm9yRWFjaCgoZWwpID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpKSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpXG5cbiAgICBcbiAgICBjb25zdCB0b2dnbGVTdWJtZW51ID0gKGVsKSA9PiB7XG4gICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3VibWVudS1vcGVuXCIpKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3N1Ym1lbnUtb3BlbicpXG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ3N1Ym1lbnUtY2xvc2VkJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJzdWJtZW51LWNsb3NlZFwiKVxuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKFwic3VibWVudS1vcGVuXCIpXG4gICAgICB9IFxuICAgIH1cblxuICAgIFxuXG5cbiAgICBsZXQgc2lkZWJhckl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlYmFyLWl0ZW0uaGFzLXN1YlwiKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lkZWJhckl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2lkZWJhckl0ZW0gPSBzaWRlYmFySXRlbXNbaV1cbiAgICAgIFxuICAgICAgc2lkZWJhckl0ZW1zW2ldXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItbGlua1wiKVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgbGV0IHN1Ym1lbnUgPSBzaWRlYmFySXRlbS5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1lbnVcIilcbiAgICAgICAgICB0b2dnbGVTdWJtZW51KHN1Ym1lbnUpXG4gICAgICAgIH0pXG4gICAgICBcbiAgICAgIFxuICAgICAgLy8gSWYgc3VibWVudSBoYXMgc3VibWVudVxuICAgICAgY29uc3Qgc3VibWVudUl0ZW1zID0gc2lkZWJhckl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnLnN1Ym1lbnUtaXRlbS5oYXMtc3ViJykgXG4gICAgICBzdWJtZW51SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBjb25zdCBzdWJtZW51TGV2ZWxUd28gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5zdWJtZW51JylcbiAgICAgICAgICB0b2dnbGVTdWJtZW51KHN1Ym1lbnVMZXZlbFR3bylcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBQYXNzIHNlY29uZCAuc3VibWVudVxuICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGNhbGN1bGF0ZUNoaWxkcmVuSGVpZ2h0KGl0ZW0ucGFyZW50RWxlbWVudCwgdHJ1ZSlcblxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBQZXJmZWN0IFNjcm9sbGJhciBJbml0XG4gICAgaWYgKHR5cGVvZiBQZXJmZWN0U2Nyb2xsYmFyID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLXdyYXBwZXJcIilcbiAgICAgIGNvbnN0IHBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoY29udGFpbmVyLCB7XG4gICAgICAgIHdoZWVsUHJvcGFnYXRpb246IGZhbHNlLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBTY3JvbGwgaW50byBhY3RpdmUgc2lkZWJhclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5mb3JjZUVsZW1lbnRWaXNpYmlsaXR5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci1pdGVtLmFjdGl2ZVwiKSlcbiAgICB9LCAzMDApXG5cbiAgfVxuXG4gIFxuXG4gIFxuXG4gIC8qKlxuICAgKiBPbiBTaWRlYmFyIFJlemlzZSBFdmVudFxuICAgKi9cbiAgb25SZXNpemUoKSB7XG4gICAgaWYgKGlzRGVza3RvcCh3aW5kb3cpKSB7XG4gICAgICB0aGlzLnNpZGViYXJFTC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2lkZWJhckVMLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICB9XG5cbiAgICAvLyByZXNldFxuICAgIHRoaXMuZGVsZXRlQmFja2Ryb3AoKVxuICAgIHRoaXMudG9nZ2xlT3ZlcmZsb3dCb2R5KHRydWUpXG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIFNpZGViYXJcbiAgICovXG4gIHRvZ2dsZSgpIHtcbiAgICBjb25zdCBzaWRlYmFyU3RhdGUgPSB0aGlzLnNpZGViYXJFTC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIilcbiAgICBpZiAoc2lkZWJhclN0YXRlKSB7XG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3coKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IFNpZGViYXJcbiAgICovXG4gIHNob3coKSB7XG4gICAgdGhpcy5zaWRlYmFyRUwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIHRoaXMuc2lkZWJhckVMLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKVxuICAgIHRoaXMuY3JlYXRlQmFja2Ryb3AoKVxuICAgIHRoaXMudG9nZ2xlT3ZlcmZsb3dCb2R5KClcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIFNpZGViYXJcbiAgICovXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5zaWRlYmFyRUwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIHRoaXMuc2lkZWJhckVMLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKVxuICAgIHRoaXMuZGVsZXRlQmFja2Ryb3AoKVxuICAgIHRoaXMudG9nZ2xlT3ZlcmZsb3dCb2R5KClcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgU2lkZWJhciBCYWNrZHJvcFxuICAgKi9cbiAgY3JlYXRlQmFja2Ryb3AoKSB7XG4gICAgaWYgKGlzRGVza3RvcCh3aW5kb3cpKSByZXR1cm5cbiAgICB0aGlzLmRlbGV0ZUJhY2tkcm9wKClcbiAgICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1iYWNrZHJvcFwiKVxuICAgIGJhY2tkcm9wLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhpZGUuYmluZCh0aGlzKSlcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJhY2tkcm9wKVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBTaWRlYmFyIEJhY2tkcm9wXG4gICAqL1xuICBkZWxldGVCYWNrZHJvcCgpIHtcbiAgICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci1iYWNrZHJvcFwiKVxuICAgIGlmIChiYWNrZHJvcCkge1xuICAgICAgYmFja2Ryb3AucmVtb3ZlKClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIE92ZXJmbG93IEJvZHlcbiAgICovXG4gIHRvZ2dsZU92ZXJmbG93Qm9keShhY3RpdmUpIHtcbiAgICBpZihpc0Rlc2t0b3Aod2luZG93KSkgcmV0dXJuO1xuICAgIGNvbnN0IHNpZGViYXJTdGF0ZSA9IHRoaXMuc2lkZWJhckVMLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKVxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxuICAgIGlmICh0eXBlb2YgYWN0aXZlID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3dZID0gc2lkZWJhclN0YXRlID8gXCJoaWRkZW5cIiA6IFwiYXV0b1wiXG4gICAgfSBlbHNlIHtcbiAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3dZID0gYWN0aXZlID8gXCJhdXRvXCIgOiBcImhpZGRlblwiXG4gICAgfVxuICB9XG5cbiAgaXNFbGVtZW50SW5WaWV3cG9ydChlbCkge1xuICAgIHZhciByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIHJldHVybiAoXG4gICAgICByZWN0LnRvcCA+PSAwICYmXG4gICAgICByZWN0LmxlZnQgPj0gMCAmJlxuICAgICAgcmVjdC5ib3R0b20gPD1cbiAgICAgICAgKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAmJlxuICAgICAgcmVjdC5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKVxuICAgIClcbiAgfVxuXG4gIGZvcmNlRWxlbWVudFZpc2liaWxpdHkoZWwpIHtcbiAgICBpZiAoIXRoaXMuaXNFbGVtZW50SW5WaWV3cG9ydChlbCkpIHtcbiAgICAgIGVsLnNjcm9sbEludG9WaWV3KGZhbHNlKVxuICAgIH1cbiAgfVxufVxuXG5cblxubGV0IHNpZGViYXJFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclwiKVxuLyoqXG4gICAqIE9uIEZpcnN0IExvYWRcbiAgICovXG5jb25zdCBvbkZpcnN0TG9hZCA9IChzaWRlYmFyRUwpID0+IHtcbiAgaWYoIXNpZGViYXJFbCkgcmV0dXJuXG4gIGlmIChpc0Rlc2t0b3Aod2luZG93KSkge1xuICAgIHNpZGViYXJFTC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgc2lkZWJhckVMLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItZGVza3RvcCcpXG4gIH1cblxuICAvLyBHZXQgc3VibWVudXMgc2l6ZVxuICBsZXQgc3VibWVudXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZGViYXItaXRlbS5oYXMtc3ViIC5zdWJtZW51XCIpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3VibWVudXMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgc3VibWVudSA9IHN1Ym1lbnVzW2ldXG4gICAgY29uc3Qgc2lkZWJhckl0ZW0gPSBzdWJtZW51LnBhcmVudEVsZW1lbnRcbiAgICBjb25zdCBoZWlnaHQgPSBzdWJtZW51LmNsaWVudEhlaWdodFxuICAgIFxuICAgIGlmKHNpZGViYXJJdGVtLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHN1Ym1lbnUuY2xhc3NMaXN0LmFkZCgnc3VibWVudS1vcGVuJylcbiAgICBlbHNlIHN1Ym1lbnUuY2xhc3NMaXN0LmFkZCgnc3VibWVudS1jbG9zZWQnKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgaGVpZ2h0ID0gY2FsY3VsYXRlQ2hpbGRyZW5IZWlnaHQoc3VibWVudSwgdHJ1ZSlcbiAgICB9LCA1MCk7XG4gIH1cbn1cblxuaWYoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2xvYWRpbmcnKSB7XG4gIG9uRmlyc3RMb2FkKHNpZGViYXJFbClcbn1cbmVsc2Uge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IG9uRmlyc3RMb2FkKHNpZGViYXJFbCkpXG59XG4vKipcbiAqIENyZWF0ZSBTaWRlYmFyIFdyYXBwZXJcbiAqL1xuaWYgKHNpZGViYXJFbCkge1xuICB3aW5kb3cuc2lkZWJhciA9IG5ldyBTaWRlYmFyKHNpZGViYXJFbClcbn1cbiIsImV4cG9ydCBkZWZhdWx0ICh3aW5kb3cpID0+IHdpbmRvdy5pbm5lcldpZHRoID4gMTIwMDtcbiIsImNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuY29uc3QgdGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKVxuXG5pZiAodGhlbWUpIFxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRoZW1lJywgdGhlbWUpXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIl9kZWZhdWx0IiwiX0NvbnRyb2xsZXIiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlZmF1bHQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJmZWF0aGVySWNvbnMiLCJyZXBsYWNlIiwiYm9vdHN0cmFwQnVuZGxlIiwid2luZG93IiwiYm9vdHN0cmFwIiwiVEhFTUVfS0VZIiwidG9nZ2xlRGFya1RoZW1lIiwic2V0VGhlbWUiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImdldEF0dHJpYnV0ZSIsInRoZW1lIiwicGVyc2lzdCIsImxlbmd0aCIsInVuZGVmaW5lZCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiaW5pdFRoZW1lIiwic3RvcmVkVGhlbWUiLCJnZXRJdGVtIiwibWF0Y2hNZWRpYSIsIm1lZGlhUXVlcnkiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIm1hdGNoZXMiLCJ0b2dnbGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGVja2VkIiwidGFyZ2V0IiwiaXNEZXNrdG9wIiwiY2FsY3VsYXRlQ2hpbGRyZW5IZWlnaHQiLCJlbCIsImRlZXAiLCJjaGlsZHJlbiIsImhlaWdodCIsImkiLCJjaGlsZEVsZW1lbnRDb3VudCIsImNoaWxkIiwicXVlcnlTZWxlY3RvciIsImNsaWVudEhlaWdodCIsImNvbnRhaW5zIiwic3Vic3VibWVudSIsImNoaWxkcmVuSGVpZ2h0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwicXVlcnlTZWxlY3RvckFsbCIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiU2lkZWJhciIsIm9wdGlvbnMiLCJzaWRlYmFyRUwiLCJIVE1MRWxlbWVudCIsImluaXQiLCJfdGhpcyIsImZvckVhY2giLCJ0b2dnbGUiLCJiaW5kIiwib25SZXNpemUiLCJ0b2dnbGVTdWJtZW51IiwicmVtb3ZlIiwic2lkZWJhckl0ZW1zIiwiX2xvb3AiLCJzaWRlYmFySXRlbSIsInByZXZlbnREZWZhdWx0Iiwic3VibWVudSIsInN1Ym1lbnVJdGVtcyIsIml0ZW0iLCJzdWJtZW51TGV2ZWxUd28iLCJwYXJlbnRFbGVtZW50IiwiUGVyZmVjdFNjcm9sbGJhciIsImNvbnRhaW5lciIsInBzIiwid2hlZWxQcm9wYWdhdGlvbiIsInNldFRpbWVvdXQiLCJmb3JjZUVsZW1lbnRWaXNpYmlsaXR5IiwiZGVsZXRlQmFja2Ryb3AiLCJ0b2dnbGVPdmVyZmxvd0JvZHkiLCJzaWRlYmFyU3RhdGUiLCJoaWRlIiwic2hvdyIsImNyZWF0ZUJhY2tkcm9wIiwiYmFja2Ryb3AiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJhY3RpdmUiLCJvdmVyZmxvd1kiLCJpc0VsZW1lbnRJblZpZXdwb3J0IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJpbm5lckhlaWdodCIsInJpZ2h0IiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwic2Nyb2xsSW50b1ZpZXciLCJzaWRlYmFyRWwiLCJvbkZpcnN0TG9hZCIsInN1Ym1lbnVzIiwiX2xvb3AyIiwicmVhZHlTdGF0ZSIsInNpZGViYXIiXSwic291cmNlUm9vdCI6IiJ9