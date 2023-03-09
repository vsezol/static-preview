"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_app_pages_form-layout-demo_form-layout-demo_module_ts"],{

/***/ 72810:
/*!******************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/form-layout-demo/examples/base-example/base-example.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseExampleComponent": () => (/* binding */ BaseExampleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _base_example_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-example.component.html?ngResource */ 72333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



let BaseExampleComponent = class BaseExampleComponent {
};
BaseExampleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'demo-base-example',
        template: _base_example_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.Emulated,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
    })
], BaseExampleComponent);



/***/ }),

/***/ 66086:
/*!*****************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/form-layout-demo/form-layout-demo-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormLayoutDemoRoutingModule": () => (/* binding */ FormLayoutDemoRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _form_layout_demo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-layout-demo.component */ 21191);




const routes = [
    {
        path: '',
        component: _form_layout_demo_component__WEBPACK_IMPORTED_MODULE_0__.FormLayoutDemoComponent,
    },
];
let FormLayoutDemoRoutingModule = class FormLayoutDemoRoutingModule {
};
FormLayoutDemoRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FormLayoutDemoRoutingModule);



/***/ }),

/***/ 21191:
/*!************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/form-layout-demo/form-layout-demo.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormLayoutDemoComponent": () => (/* binding */ FormLayoutDemoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _form_layout_demo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-layout-demo.component.html?ngResource */ 52625);
/* harmony import */ var _form_layout_demo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-layout-demo.component.scss?ngResource */ 77222);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




const BASE_EXAMPLES_URL = 'form-layout-demo/examples';
let FormLayoutDemoComponent = class FormLayoutDemoComponent {
    constructor() {
        this.baseExampleContent = {
            HTML: `${BASE_EXAMPLES_URL}/base-example/base-example.component.html`,
        };
    }
};
FormLayoutDemoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'demo-form-layout-demo',
        template: _form_layout_demo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulation.Emulated,
        styles: [_form_layout_demo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FormLayoutDemoComponent);



/***/ }),

/***/ 37301:
/*!*********************************************************************************!*\
  !*** ./projects/demo/src/app/pages/form-layout-demo/form-layout-demo.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormLayoutDemoModule": () => (/* binding */ FormLayoutDemoModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 99052);
/* harmony import */ var _form_layout_demo_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-layout-demo-routing.module */ 66086);
/* harmony import */ var _form_layout_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-layout-demo.component */ 21191);
/* harmony import */ var _examples_base_example_base_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/base-example/base-example.component */ 72810);






let FormLayoutDemoModule = class FormLayoutDemoModule {
};
FormLayoutDemoModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_form_layout_demo_component__WEBPACK_IMPORTED_MODULE_2__.FormLayoutDemoComponent, _examples_base_example_base_example_component__WEBPACK_IMPORTED_MODULE_3__.BaseExampleComponent],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.DemoSharedModule, _form_layout_demo_routing_module__WEBPACK_IMPORTED_MODULE_1__.FormLayoutDemoRoutingModule],
    })
], FormLayoutDemoModule);



/***/ }),

/***/ 77222:
/*!*************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/form-layout-demo/form-layout-demo.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWxheW91dC1kZW1vLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 72333:
/*!*******************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/form-layout-demo/examples/base-example/base-example.component.html?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = "<pupa-form-layout>\n  <pupa-form-element>\n    <pupa-label>Element 1</pupa-label>\n    <pupa-input-text></pupa-input-text>\n  </pupa-form-element>\n\n  <pupa-form-element>\n    <pupa-label>Element 2</pupa-label>\n    <pupa-input-text></pupa-input-text>\n  </pupa-form-element>\n\n  <pupa-form-elements-group>\n    <pupa-form-element>\n      <pupa-label>Element 3</pupa-label>\n      <pupa-input-text></pupa-input-text>\n    </pupa-form-element>\n\n    <pupa-form-element>\n      <pupa-label>Element 4</pupa-label>\n      <pupa-input-text></pupa-input-text>\n    </pupa-form-element>\n  </pupa-form-elements-group>\n\n  <pupa-form-elements-group>\n    <pupa-form-element>\n      <pupa-label>Element 5</pupa-label>\n      <pupa-input-text></pupa-input-text>\n    </pupa-form-element>\n\n    <pupa-form-element>\n      <pupa-label>Element 6</pupa-label>\n      <pupa-input-text></pupa-input-text>\n    </pupa-form-element>\n\n    <pupa-form-element>\n      <pupa-label>Element 7</pupa-label>\n      <pupa-input-text></pupa-input-text>\n    </pupa-form-element>\n  </pupa-form-elements-group>\n</pupa-form-layout>\n";

/***/ }),

/***/ 52625:
/*!*************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/form-layout-demo/form-layout-demo.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "<h1>Form Layout</h1>\n\n<demo-example-viewer>\n  <pupa-tabs-container>\n    <pupa-tabs>\n      <pupa-tabs-item name=\"Description and Examples\">Description and Examples</pupa-tabs-item>\n    </pupa-tabs>\n\n    <pupa-tabs-content>\n      <demo-example-viewer-section *pupaTabsItemContentTemplate=\"'Description and Examples'\">\n        <h3 demoAnchor>Base example</h3>\n        <pupa-code-container [content]=\"baseExampleContent\">\n          <demo-base-example *pupaCodeContainerPreviewTemplate></demo-base-example>\n        </pupa-code-container>\n      </demo-example-viewer-section>\n    </pupa-tabs-content>\n  </pupa-tabs-container>\n</demo-example-viewer>\n";

/***/ })

}]);
//# sourceMappingURL=projects_demo_src_app_pages_form-layout-demo_form-layout-demo_module_ts.js.map