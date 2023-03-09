"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_app_pages_timer-demo_timer-demo_module_ts"],{

/***/ 10796:
/*!**************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/timer-demo/examples/basic-example/basic-example.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicExampleComponent": () => (/* binding */ BasicExampleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _basic_example_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-example.component.html?ngResource */ 96782);
/* harmony import */ var _basic_example_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-example.component.scss?ngResource */ 17789);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let BasicExampleComponent = class BasicExampleComponent {
};
BasicExampleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'demo-basic-example',
        template: _basic_example_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulation.Emulated,
        styles: [_basic_example_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BasicExampleComponent);



/***/ }),

/***/ 24797:
/*!*****************************************************************************!*\
  !*** ./projects/demo/src/app/pages/timer-demo/timer-demo-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerDemoRoutingModule": () => (/* binding */ TimerDemoRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _timer_demo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer-demo.component */ 75572);




const routes = [{ path: '', component: _timer_demo_component__WEBPACK_IMPORTED_MODULE_0__.TimerDemoComponent }];
let TimerDemoRoutingModule = class TimerDemoRoutingModule {
};
TimerDemoRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TimerDemoRoutingModule);



/***/ }),

/***/ 75572:
/*!************************************************************************!*\
  !*** ./projects/demo/src/app/pages/timer-demo/timer-demo.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerDemoComponent": () => (/* binding */ TimerDemoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _timer_demo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer-demo.component.html?ngResource */ 39782);
/* harmony import */ var _timer_demo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer-demo.component.scss?ngResource */ 62422);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);





const BASE_REQUEST_PATH = 'timer-demo/examples';
let TimerDemoComponent = class TimerDemoComponent {
    constructor() {
        this.secondsControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(10);
        this.basicExampleContent = {
            HTML: `${BASE_REQUEST_PATH}/basic-example/basic-example.component.html`,
        };
    }
};
TimerDemoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'demo-timer-demo',
        template: _timer_demo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_timer_demo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TimerDemoComponent);



/***/ }),

/***/ 93520:
/*!*********************************************************************!*\
  !*** ./projects/demo/src/app/pages/timer-demo/timer-demo.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerDemoModule": () => (/* binding */ TimerDemoModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 99052);
/* harmony import */ var _timer_demo_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer-demo-routing.module */ 24797);
/* harmony import */ var _timer_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer-demo.component */ 75572);
/* harmony import */ var _examples_basic_example_basic_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/basic-example/basic-example.component */ 10796);






let TimerDemoModule = class TimerDemoModule {
};
TimerDemoModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_timer_demo_component__WEBPACK_IMPORTED_MODULE_2__.TimerDemoComponent, _examples_basic_example_basic_example_component__WEBPACK_IMPORTED_MODULE_3__.BasicExampleComponent],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.DemoSharedModule, _timer_demo_routing_module__WEBPACK_IMPORTED_MODULE_1__.TimerDemoRoutingModule],
    })
], TimerDemoModule);



/***/ }),

/***/ 17789:
/*!***************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/timer-demo/examples/basic-example/basic-example.component.scss?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2ljLWV4YW1wbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQ0YiLCJmaWxlIjoiYmFzaWMtZXhhbXBsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAycmVtO1xufVxuIl19 */";

/***/ }),

/***/ 62422:
/*!*************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/timer-demo/timer-demo.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aW1lci1kZW1vLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 96782:
/*!***************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/timer-demo/examples/basic-example/basic-example.component.html?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = "<pupa-timer-round #timer [seconds]=\"15\"></pupa-timer-round>\n\n<pupa-button kind=\"secondary\" size=\"s\" (click)=\"timer.restart()\">Restart</pupa-button>\n";

/***/ }),

/***/ 39782:
/*!*************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/timer-demo/timer-demo.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<h1>Timer</h1>\n\n<demo-page>\n  <div *demoPageTab=\"'overview'\">\n    <pupa-info-block variant=\"warning\">\n      Maximum <pupa-code-inline>seconds</pupa-code-inline> property value is 999.\n    </pupa-info-block>\n\n    <h3 demoAnchor>Usage</h3>\n\n    <h3 demoAnchor>Basic usage</h3>\n    <pupa-code-container [content]=\"basicExampleContent\">\n      <demo-basic-example *pupaCodeContainerPreviewTemplate></demo-basic-example>\n    </pupa-code-container>\n  </div>\n\n  <div *demoPageTab=\"'api'\">\n    <demo-example-viewer>\n      <demo-example-viewer-content>\n        <pupa-timer-round [seconds]=\"secondsControl.value\"></pupa-timer-round>\n      </demo-example-viewer-content>\n\n      <demo-example-viewer-section-label>Properties</demo-example-viewer-section-label>\n      <demo-example-viewer-section>\n        <demo-example-viewer-property name=\"@Output() timeIsUp\" type=\"EventEmitter<void>\">\n          <ng-container *demoExampleViewerPropertyDescription> Emit when the timer expires. </ng-container>\n        </demo-example-viewer-property>\n\n        <demo-example-viewer-property name=\"@Input() seconds\" type=\"number\">\n          <ng-container *demoExampleViewerPropertyDescription> Timer seconds. Maximum value is 999.</ng-container>\n\n          <pupa-input-number [formControl]=\"secondsControl\"></pupa-input-number>\n        </demo-example-viewer-property>\n      </demo-example-viewer-section>\n\n      <demo-example-viewer-section-label>Methods</demo-example-viewer-section-label>\n      <demo-example-viewer-section>\n        <demo-example-viewer-property name=\"restart()\" type=\"void\">\n          <ng-container *demoExampleViewerPropertyDescription> Restarts the timer. </ng-container>\n        </demo-example-viewer-property>\n      </demo-example-viewer-section>\n    </demo-example-viewer>\n  </div>\n</demo-page>\n";

/***/ })

}]);
//# sourceMappingURL=projects_demo_src_app_pages_timer-demo_timer-demo_module_ts.js.map