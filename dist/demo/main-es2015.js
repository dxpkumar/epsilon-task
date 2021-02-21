(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/praveenkumarp/Desktop/Epsilon/task/src/main.ts */"zUnb");


/***/ }),

/***/ "1VHI":
/*!************************************!*\
  !*** ./src/app/hello.component.ts ***!
  \************************************/
/*! exports provided: HelloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloComponent", function() { return HelloComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let HelloComponent = class HelloComponent {
};
HelloComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
HelloComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'hello',
        template: `<h1>Hello {{name}}!</h1>`,
        styles: ["h1 { font-family: Lato; }"]
    })
], HelloComponent);



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  font-family: Lato;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xufSJdfQ== */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config.service */ "wxHw");





let AppComponent = class AppComponent {
    constructor(configService) {
        this.configService = configService;
        this.name = 'Angular ' + _angular_core__WEBPACK_IMPORTED_MODULE_3__["VERSION"].major;
        this.ascSort = true;
    }
    ngOnInit() {
        //this.getTableData();
        this.getDataLocal();
    }
    getTableDataFromServer() {
        this.configService.getData().subscribe((res) => {
            console.log('table data from server', res);
        });
    }
    getDataLocal() {
        this.tableData = this.configService.getLocalData();
        console.log('Table data from local', this.tableData);
    }
    sortToggle() {
        this.sortColumn();
    }
    sortColumn() {
        this.ascSort = !this.ascSort;
        if (this.ascSort) {
            this.tableData.sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            }); // For ascending sort
        }
        else {
            this.tableData.sort((a, b) => {
                if (b.name < a.name) {
                    return -1;
                }
                if (b.name > a.name) {
                    return 1;
                }
                return 0;
            }); // For descending sort
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'my-app',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\t<!-- <hello name=\"{{ name }}\"></hello> -->\n\t<br>\n\t<p class=\"text-center\"><u>EPSILON-TASK</u></p>\n</div>\n\n<div class=\"container\">\n\t<div class=\"card\">\n\t\t<div class=\"card-header\">Photo Card</div>\n\t\t<div class=\"card-body\">\n\t\t\t<div class=\"wrapper\">\n\t\t\t\t<div class=\"card-photo\">\n\t\t\t\t\t<img src=\"https://images.unsplash.com/photo-1513904178077-6c5730ddd446?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80\" alt=\"Avatar\" style=\"width:100%\">\n\t\t\t\t\t<div class=\"container-photo\">\n\t\t\t\t\t\t<h4>Beach Day</h4>\n\t\t\t\t\t\t<p class=\"full-caps\">RUFUS THE DOG</p>\n\t\t\t\t\t\t<p class=\"grey-text\">Modified by 02/28/19 by bfrost</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<br/>\n\t<br/>\n\t<div class=\"card\">\n\t\t<div class=\"card-header\">Form</div>\n\t\t<div class=\"card-body custom-form\">\n\t\t\t<form>\n\t\t\t\t<label for=\"name\">Name</label><br>\n\t\t\t\t<input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Enter Name\"><br>\n\t\t\t\t<label for=\"email\">Email</label><br>\n\t\t\t\t<input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Enter Email\"><br>\n\t\t\t\t<label for=\"phoneno\">Phone Number</label><br>\n\t\t\t\t<input type=\"text\" id=\"phoneno\" name=\"phoneno\" placeholder=\"Enter Phone Number\"><br>\n\t\t\t\t<label for=\"password\">Password</label><br>\n\t\t\t\t<input type=\"password\" id=\"password\" name=\"password\" placeholder=\"Enter Password\"><br>\n\t\t\t\t<label for=\"password\">Confirm Password</label><br>\n\t\t\t\t<input type=\"password\" id=\"cpassword\" name=\"cpassword\" placeholder=\"Confirm Password\" class=\"mg-bottom-30\"><br>\n\t\t\t\t<input type=\"button\" value=\"Save\"/>\n      </form>\n\t\t</div>\n\t</div>\n\t<br>\n\t<br>\n\n\t<div class=\"card\">\n\t\t<div class=\"card-header\">Table</div>\n\t\t<div class=\"card-body\">\n\t\t\t<table class=\"\">\n\t\t\t\t<thead>\n\t\t\t\t\t<th (click)=\"sortColumn()\">Product\n\t\t\t\t\t\tName<span style=\"float:right\"><i [ngClass]=\"ascSort ? 'fa fa-sort-desc' : 'fa fa-sort-asc'\"></i></span>\n\t\t\t\t\t</th>\n\t\t\t\t\t<th class=\"header-disabled\">Price<span class=\"fa-disabled\" style=\"float:right; color:#000\"><i class=\"fa fa-sort-desc\"></i></span>\n\t\t\t\t\t</th>\n\t\t\t\t\t<th class=\"header-disabled\">Category<span class=\"fa-disabled\" style=\"float:right\"><i class=\"fa fa-sort-desc\"></i></span>\n\t\t\t\t\t</th>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr *ngFor=\"let row of tableData\">\n\t\t\t\t\t\t<td>{{row.name}}</td>\n\t\t\t\t\t\t<td>{{row.price}}</td>\n\t\t\t\t\t\t<td>{{row.category}}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n\t<br>\n\t<br>\n</div>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _hello_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hello.component */ "1VHI");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config.service */ "wxHw");








let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _hello_component__WEBPACK_IMPORTED_MODULE_6__["HelloComponent"]],
        providers: [_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "hN/g":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone */ "pDpN");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/
// import 'core-js/es6/reflect';
// import 'core-js/es7/reflect';
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.


/***/ }),

/***/ "wxHw":
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



let ConfigService = class ConfigService {
    constructor(http) {
        this.http = http;
        this.url = "http://usweb.dotomi.com/resources/swfs/cookies.json";
        this.serverData = [
            { "name": "Chocolate Chip", "price": "$2.49", "category": "Standard" }, { "name": "Sugar", "price": "$1.79", "category": "Standard" }, { "name": "Snickerdoodle", "price": "$2.49", "category": "Standard" }, { "name": "Oatmeal Raisin", "price": "$2.99", "category": "Standard" }, { "name": "Peanut Butter", "price": "$2.99", "category": "Standard" }, { "name": "White Chocolate Macadamia", "price": "$3.99", "category": "Premium" }, { "name": "Red Velvet", "price": "$3.49", "category": "Premium" },
            { "name": "Black and White", "price": "$3.49", "category": "Premium" }, { "name": "Triple Chocolate", "price": "$3.99", "category": "Premium" }, { "name": "White Chocolate Coconut Divine", "price": "$5.99", "category": "Signature" },
            { "name": "Dark Chocolate Pistachio Sea Salt", "price": "$5.49", "category": "Signature" },
            { "name": "Brown Butter Bourbon Spice", "price": "$5.49", "category": "Signature" },
            { "name": "Bacon Chocolate Chip", "price": "$5.99", "category": "Signature" }
        ];
    }
    getData() {
        return this.http.get("url");
    }
    getLocalData() {
        return this.serverData;
    }
};
ConfigService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ConfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ConfigService);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ "hN/g");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");



Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherwise, log the boot error
}).catch(err => console.error(err));


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map