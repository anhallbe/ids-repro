(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/accordion-focus/accordion-focus.component.css":
/*!***************************************************************!*\
  !*** ./src/app/accordion-focus/accordion-focus.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY29yZGlvbi1mb2N1cy9hY2NvcmRpb24tZm9jdXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/accordion-focus/accordion-focus.component.html":
/*!****************************************************************!*\
  !*** ./src/app/accordion-focus/accordion-focus.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Accordion elements stay focused (iOS Safari)\n</p>\n\n<div soho-homepage>\n  <div soho-widget>\n    <div soho-widget-header>\n      <div soho-widget-title>\n        <h2>Widget</h2>\n      </div>\n    </div>\n    <div soho-widget-content>\n      <soho-accordion>\n        <soho-accordion-header>Accordion 1</soho-accordion-header>\n        <soho-accordion-pane>\n          <div class=\"accordion-content\">\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsum ut rem saepe voluptates quidem voluptas eveniet nisi eligendi at eum repudiandae voluptatem cupiditate facilis et temporibus, vitae rerum pariatur!</p>\n          </div>\n        </soho-accordion-pane>\n\n        <soho-accordion-header>Accordion 2</soho-accordion-header>\n        <soho-accordion-pane>\n          <div class=\"accordion-content\">\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsum ut rem saepe voluptates quidem voluptas eveniet nisi eligendi at eum repudiandae voluptatem cupiditate facilis et temporibus, vitae rerum pariatur!</p>\n          </div>\n        </soho-accordion-pane>\n\n        <soho-accordion-header>Accordion 3</soho-accordion-header>\n        <soho-accordion-pane>\n          <div class=\"accordion-content\">\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsum ut rem saepe voluptates quidem voluptas eveniet nisi eligendi at eum repudiandae voluptatem cupiditate facilis et temporibus, vitae rerum pariatur!</p>\n          </div>\n        </soho-accordion-pane>\n\n        <soho-accordion-header>Accordion 4</soho-accordion-header>\n        <soho-accordion-pane>\n          <div class=\"accordion-content\">\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsum ut rem saepe voluptates quidem voluptas eveniet nisi eligendi at eum repudiandae voluptatem cupiditate facilis et temporibus, vitae rerum pariatur!</p>\n          </div>\n        </soho-accordion-pane>\n\n        <soho-accordion-header>Accordion 5</soho-accordion-header>\n        <soho-accordion-pane>\n          <div class=\"accordion-content\">\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsum ut rem saepe voluptates quidem voluptas eveniet nisi eligendi at eum repudiandae voluptatem cupiditate facilis et temporibus, vitae rerum pariatur!</p>\n          </div>\n        </soho-accordion-pane>\n\n\n      </soho-accordion>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/accordion-focus/accordion-focus.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/accordion-focus/accordion-focus.component.ts ***!
  \**************************************************************/
/*! exports provided: AccordionFocusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionFocusComponent", function() { return AccordionFocusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AccordionFocusComponent = /** @class */ (function () {
    function AccordionFocusComponent() {
    }
    AccordionFocusComponent.prototype.ngOnInit = function () {
    };
    AccordionFocusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accordion-focus',
            template: __webpack_require__(/*! ./accordion-focus.component.html */ "./src/app/accordion-focus/accordion-focus.component.html"),
            styles: [__webpack_require__(/*! ./accordion-focus.component.css */ "./src/app/accordion-focus/accordion-focus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AccordionFocusComponent);
    return AccordionFocusComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ios_context_menu_ios_context_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ios-context-menu/ios-context-menu.component */ "./src/app/ios-context-menu/ios-context-menu.component.ts");
/* harmony import */ var _nested_busy_nested_busy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nested-busy/nested-busy.component */ "./src/app/nested-busy/nested-busy.component.ts");
/* harmony import */ var _accordion_focus_accordion_focus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accordion-focus/accordion-focus.component */ "./src/app/accordion-focus/accordion-focus.component.ts");






var routes = [
    { path: 'ios-context-menu', component: _ios_context_menu_ios_context_menu_component__WEBPACK_IMPORTED_MODULE_3__["IosContextMenuComponent"] },
    { path: 'nested-busy', component: _nested_busy_nested_busy_component__WEBPACK_IMPORTED_MODULE_4__["NestedBusyComponent"] },
    { path: 'accordion-focus', component: _accordion_focus_accordion_focus_component__WEBPACK_IMPORTED_MODULE_5__["AccordionFocusComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a[routerLink] {\r\n  margin: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFbcm91dGVyTGlua10ge1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<soho-icons></soho-icons>\r\n<soho-icons-empty></soho-icons-empty>\r\n\r\nIndex:\r\n<a routerLink=\"ios-context-menu\">iOS Context Menu</a>\r\n<a routerLink=\"nested-busy\">Nested Busy</a>\r\n<a routerLink=\"accordion-focus\">Accordion Focus</a>\r\n<hr>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ids_enterprise_ng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ids-enterprise-ng */ "./node_modules/ids-enterprise-ng/fesm5/ids-enterprise-ng.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ios_context_menu_ios_context_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ios-context-menu/ios-context-menu.component */ "./src/app/ios-context-menu/ios-context-menu.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _nested_busy_nested_busy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nested-busy/nested-busy.component */ "./src/app/nested-busy/nested-busy.component.ts");
/* harmony import */ var _accordion_focus_accordion_focus_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./accordion-focus/accordion-focus.component */ "./src/app/accordion-focus/accordion-focus.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _ios_context_menu_ios_context_menu_component__WEBPACK_IMPORTED_MODULE_5__["IosContextMenuComponent"],
                _nested_busy_nested_busy_component__WEBPACK_IMPORTED_MODULE_7__["NestedBusyComponent"],
                _accordion_focus_accordion_focus_component__WEBPACK_IMPORTED_MODULE_8__["AccordionFocusComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                ids_enterprise_ng__WEBPACK_IMPORTED_MODULE_3__["SohoComponentsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/ios-context-menu/ios-context-menu.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/ios-context-menu/ios-context-menu.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right-clickable {\r\n   height: 100%;\r\n   width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW9zLWNvbnRleHQtbWVudS9pb3MtY29udGV4dC1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxhQUFhO0dBQ2IsWUFBWTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvaW9zLWNvbnRleHQtbWVudS9pb3MtY29udGV4dC1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmlnaHQtY2xpY2thYmxlIHtcclxuICAgaGVpZ2h0OiAxMDAlO1xyXG4gICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/ios-context-menu/ios-context-menu.component.html":
/*!******************************************************************!*\
  !*** ./src/app/ios-context-menu/ios-context-menu.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  The widget below is not scrollable in iOS Safari. The items are not clickable. Because soho-context-menu\n</p>\n\n<div soho-homepage>\n  <div soho-widget>\n    <div soho-widget-header>\n      <div soho-widget-title>\n        <h2>Widget</h2>\n      </div>\n    </div>\n    <div soho-widget-content>\n      <div class=\"right-clickable\" soho-context-menu menu=\"menuId\">\n        <ul>\n          <li (click)=\"itemClicked('1')\"><h1>Click Me 1</h1></li>\n          <li (click)=\"itemClicked('2')\"><h1>Click Me 2</h1></li>\n          <li (click)=\"itemClicked('3')\"><h1>Click Me 3</h1></li>\n          <li (click)=\"itemClicked('4')\"><h1>Click Me 4</h1></li>\n          <li (click)=\"itemClicked('5')\"><h1>Click Me 5</h1></li>\n          <li (click)=\"itemClicked('6')\"><h1>Click Me 6</h1></li>\n          <li (click)=\"itemClicked('7')\"><h1>Click Me 7</h1></li>\n          <li (click)=\"itemClicked('8')\"><h1>Click Me 8</h1></li>\n          <li (click)=\"itemClicked('9')\"><h1>Click Me 9</h1></li>\n          <li (click)=\"itemClicked('10')\"><h1>Click Me 10</h1></li>\n          <li (click)=\"itemClicked('11')\"><h1>Click Me 11</h1></li>\n          <li (click)=\"itemClicked('12')\"><h1>Click Me 12</h1></li>\n          <li (click)=\"itemClicked('13')\"><h1>Click Me 13</h1></li>\n          <li (click)=\"itemClicked('14')\"><h1>Click Me 14</h1></li>\n          <li (click)=\"itemClicked('15')\"><h1>Click Me 15</h1></li>\n          <li (click)=\"itemClicked('16')\"><h1>Click Me 16</h1></li>\n          <li (click)=\"itemClicked('17')\"><h1>Click Me 17</h1></li>\n          <li (click)=\"itemClicked('18')\"><h1>Click Me 18</h1></li>\n          <li (click)=\"itemClicked('19')\"><h1>Click Me 19</h1></li>\n        </ul>\n      </div>\n      <ul soho-popupmenu id=\"menuId\">\n          <li soho-popupmenu-item><a>A</a></li>\n          <li soho-popupmenu-item><a>B</a></li>\n          <li soho-popupmenu-item><a>C</a></li>\n          <li soho-popupmenu-item><a>D</a></li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ios-context-menu/ios-context-menu.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/ios-context-menu/ios-context-menu.component.ts ***!
  \****************************************************************/
/*! exports provided: IosContextMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IosContextMenuComponent", function() { return IosContextMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ids_enterprise_ng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ids-enterprise-ng */ "./node_modules/ids-enterprise-ng/fesm5/ids-enterprise-ng.js");



var IosContextMenuComponent = /** @class */ (function () {
    function IosContextMenuComponent(toastService) {
        this.toastService = toastService;
        this.list = [
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4',
            'Item 5',
        ];
    }
    IosContextMenuComponent.prototype.itemClicked = function (item) {
        this.toastService.show({
            title: 'Item Clicked',
            message: item,
        });
    };
    IosContextMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ios-context-menu',
            template: __webpack_require__(/*! ./ios-context-menu.component.html */ "./src/app/ios-context-menu/ios-context-menu.component.html"),
            styles: [__webpack_require__(/*! ./ios-context-menu.component.css */ "./src/app/ios-context-menu/ios-context-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ids_enterprise_ng__WEBPACK_IMPORTED_MODULE_2__["SohoToastService"]])
    ], IosContextMenuComponent);
    return IosContextMenuComponent;
}());



/***/ }),

/***/ "./src/app/nested-busy/nested-busy.component.css":
/*!*******************************************************!*\
  !*** ./src/app/nested-busy/nested-busy.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\r\n  width: 100px;\r\n  height: 100px;\r\n  border: 1px solid black;\r\n  background-color: green;\r\n  margin: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmVzdGVkLWJ1c3kvbmVzdGVkLWJ1c3kuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLHdCQUF3QjtFQUN4QixZQUFZO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9uZXN0ZWQtYnVzeS9uZXN0ZWQtYnVzeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveCB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/nested-busy/nested-busy.component.html":
/*!********************************************************!*\
  !*** ./src/app/nested-busy/nested-busy.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div soho-busyindicator [activated]=\"busy1\" [blockUI]=\"true\" [displayDelay]=\"0\">\r\n  <div soho-busyindicator [activated]=\"busy2\" [blockUI]=\"true\" [displayDelay]=\"0\">\r\n    <div class=\"box\"></div>\r\n    <div class=\"box\"></div>\r\n    <div class=\"box\"></div>\r\n    <div class=\"box\"></div>\r\n    <div class=\"box\"></div>\r\n    <div class=\"box\"></div>\r\n    <div class=\"box\"></div>\r\n    <div class=\"box\"></div>\r\n    <div class=\"box\"></div>\r\n    <div class=\"box\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/nested-busy/nested-busy.component.ts":
/*!******************************************************!*\
  !*** ./src/app/nested-busy/nested-busy.component.ts ***!
  \******************************************************/
/*! exports provided: NestedBusyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NestedBusyComponent", function() { return NestedBusyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NestedBusyComponent = /** @class */ (function () {
    function NestedBusyComponent() {
    }
    NestedBusyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.busy2 = true;
        setTimeout(function () { return _this.busy2 = false; }, 100);
    };
    NestedBusyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nested-busy',
            template: __webpack_require__(/*! ./nested-busy.component.html */ "./src/app/nested-busy/nested-busy.component.html"),
            styles: [__webpack_require__(/*! ./nested-busy.component.css */ "./src/app/nested-busy/nested-busy.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NestedBusyComponent);
    return NestedBusyComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ids-repro\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map