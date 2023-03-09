"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_app_pages_toasts-demo_toasts-demo_module_ts"],{

/***/ 79726:
/*!***************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/toasts-demo/examples/basic-example/basic-example.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicExampleComponent": () => (/* binding */ BasicExampleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _basic_example_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-example.component.html?ngResource */ 82659);
/* harmony import */ var _basic_example_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-example.component.scss?ngResource */ 5356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bimeister/pupakit.overlays */ 39287);
/* harmony import */ var _bimeister_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bimeister/utilities */ 58622);
var _a;






let BasicExampleComponent = class BasicExampleComponent {
    constructor(toastsService) {
        this.toastsService = toastsService;
    }
    openToast() {
        const openedToast = this.toastsService.open({
            data: {
                bodyText: 'Some body text!',
                actionText: 'Ok',
                type: 'info',
                autoCloseTimeMs: 8000,
                hasTimer: true,
            },
        });
        openedToast.closeTriggered$.pipe((0,_bimeister_utilities__WEBPACK_IMPORTED_MODULE_3__.filterTruthy)()).subscribe(() => console.log('Alert action triggered!'));
    }
};
BasicExampleComponent.ctorParameters = () => [
    { type: _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.ToastsService }
];
BasicExampleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'demo-basic-example',
        template: _basic_example_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectionStrategy.OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewEncapsulation.Emulated,
        styles: [_basic_example_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [typeof (_a = typeof _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.ToastsService !== "undefined" && _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.ToastsService) === "function" ? _a : Object])
], BasicExampleComponent);



/***/ }),

/***/ 87572:
/*!*****************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/toasts-demo/examples/template-rendering-example/template-rendering-example.component.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateRenderingExampleComponent": () => (/* binding */ TemplateRenderingExampleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _template_rendering_example_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template-rendering-example.component.html?ngResource */ 49229);
/* harmony import */ var _template_rendering_example_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template-rendering-example.component.scss?ngResource */ 51554);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bimeister/pupakit.overlays */ 39287);
/* harmony import */ var _bimeister_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bimeister/utilities */ 58622);
var _a;






let TemplateRenderingExampleComponent = class TemplateRenderingExampleComponent {
    constructor(toastsService) {
        this.toastsService = toastsService;
    }
    openToast() {
        const openedToast = this.toastsService.open({
            component: _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.ToastTemplateComponent,
            data: {
                templateRef: this.toastTemplateRef,
                templateContext: { $implicit: 'Pupa Lupa' },
            },
        });
        openedToast.closeTriggered$.pipe((0,_bimeister_utilities__WEBPACK_IMPORTED_MODULE_3__.filterTruthy)()).subscribe(() => console.log('Alert action triggered!'));
    }
};
TemplateRenderingExampleComponent.ctorParameters = () => [
    { type: _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.ToastsService }
];
TemplateRenderingExampleComponent.propDecorators = {
    toastTemplateRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['toastTemplate', { static: true },] }]
};
TemplateRenderingExampleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'demo-template-rendering-example',
        template: _template_rendering_example_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewEncapsulation.Emulated,
        styles: [_template_rendering_example_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [typeof (_a = typeof _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.ToastsService !== "undefined" && _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.ToastsService) === "function" ? _a : Object])
], TemplateRenderingExampleComponent);



/***/ }),

/***/ 2922:
/*!*******************************************************************************!*\
  !*** ./projects/demo/src/app/pages/toasts-demo/toasts-demo-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastsDemoRoutingModule": () => (/* binding */ ToastsDemoRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _toasts_demo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toasts-demo.component */ 84899);




const routes = [{ path: '', component: _toasts_demo_component__WEBPACK_IMPORTED_MODULE_0__.ToastsDemoComponent }];
let ToastsDemoRoutingModule = class ToastsDemoRoutingModule {
};
ToastsDemoRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ToastsDemoRoutingModule);



/***/ }),

/***/ 84899:
/*!**************************************************************************!*\
  !*** ./projects/demo/src/app/pages/toasts-demo/toasts-demo.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastsDemoComponent": () => (/* binding */ ToastsDemoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _toasts_demo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toasts-demo.component.html?ngResource */ 65664);
/* harmony import */ var _toasts_demo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toasts-demo.component.scss?ngResource */ 63927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




const BASE_REQUEST_PATH = 'toasts-demo/examples';
let ToastsDemoComponent = class ToastsDemoComponent {
    constructor() {
        this.basicExampleContent = {
            HTML: `${BASE_REQUEST_PATH}/basic-example/basic-example.component.html`,
            TS: `${BASE_REQUEST_PATH}/basic-example/basic-example.component.ts`,
        };
        this.basicAdditionalSettingsExampleContent = {
            HTML: `${BASE_REQUEST_PATH}/basic-additional-settings-example/basic-additional-settings-example.component.html`,
            TS: `${BASE_REQUEST_PATH}/basic-additional-settings-example/basic-additional-settings-example.component.ts`,
        };
        this.templateRenderingExampleContent = {
            HTML: `${BASE_REQUEST_PATH}/template-rendering-example/template-rendering-example.component.html`,
            TS: `${BASE_REQUEST_PATH}/template-rendering-example/template-rendering-example.component.ts`,
        };
        this.changeThemeExampleContent = {
            HTML: `${BASE_REQUEST_PATH}/change-theme-example/change-theme-example.component.html`,
            TS: `${BASE_REQUEST_PATH}/change-theme-example/change-theme-example.component.ts`,
        };
    }
};
ToastsDemoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'demo-toasts-demo',
        template: _toasts_demo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_toasts_demo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ToastsDemoComponent);



/***/ }),

/***/ 76217:
/*!***********************************************************************!*\
  !*** ./projects/demo/src/app/pages/toasts-demo/toasts-demo.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastsDemoModule": () => (/* binding */ ToastsDemoModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 99052);
/* harmony import */ var _examples_basic_example_basic_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./examples/basic-example/basic-example.component */ 79726);
/* harmony import */ var _examples_template_rendering_example_template_rendering_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./examples/template-rendering-example/template-rendering-example.component */ 87572);
/* harmony import */ var _toasts_demo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toasts-demo-routing.module */ 2922);
/* harmony import */ var _toasts_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toasts-demo.component */ 84899);







let ToastsDemoModule = class ToastsDemoModule {
};
ToastsDemoModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_toasts_demo_component__WEBPACK_IMPORTED_MODULE_4__.ToastsDemoComponent, _examples_basic_example_basic_example_component__WEBPACK_IMPORTED_MODULE_1__.BasicExampleComponent, _examples_template_rendering_example_template_rendering_example_component__WEBPACK_IMPORTED_MODULE_2__.TemplateRenderingExampleComponent],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.DemoSharedModule, _toasts_demo_routing_module__WEBPACK_IMPORTED_MODULE_3__.ToastsDemoRoutingModule],
    })
], ToastsDemoModule);



/***/ }),

/***/ 5356:
/*!****************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/toasts-demo/examples/basic-example/basic-example.component.scss?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy1leGFtcGxlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 51554:
/*!******************************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/toasts-demo/examples/template-rendering-example/template-rendering-example.component.scss?ngResource ***!
  \******************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZW1wbGF0ZS1yZW5kZXJpbmctZXhhbXBsZS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 63927:
/*!***************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/toasts-demo/toasts-demo.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2FzdHMtZGVtby5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 82659:
/*!****************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/toasts-demo/examples/basic-example/basic-example.component.html?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = "<pupa-button (click)=\"openToast()\">Open Toast</pupa-button>\n";

/***/ }),

/***/ 49229:
/*!******************************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/toasts-demo/examples/template-rendering-example/template-rendering-example.component.html?ngResource ***!
  \******************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<pupa-button (click)=\"openToast()\">Open Toast</pupa-button>\n\n<ng-template #toastTemplate let-text let-toastRef=\"toastRef\">\n  <pupa-toast-layout type=\"success\">\n    <span\n      >Hello, <span [pupaTooltip]=\"text\">{{ text }}</span\n      >!</span\n    >\n    <button pupaLink (click)=\"toastRef.close(true)\">Some action</button>\n  </pupa-toast-layout>\n</ng-template>\n";

/***/ }),

/***/ 65664:
/*!***************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/toasts-demo/toasts-demo.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<h1>Toasts</h1>\n\n<demo-page>\n  <div *demoPageTab=\"'overview'\">\n    <h2 demoAnchor>Usage</h2>\n\n    <h3 demoAnchor>Basic usage</h3>\n    <pupa-code-container [content]=\"basicExampleContent\">\n      <demo-basic-example *pupaCodeContainerPreviewTemplate></demo-basic-example>\n    </pupa-code-container>\n\n    <h3 demoAnchor>Template rendering</h3>\n    <pupa-code-container [content]=\"templateRenderingExampleContent\">\n      <demo-template-rendering-example *pupaCodeContainerPreviewTemplate></demo-template-rendering-example>\n    </pupa-code-container>\n\n    <h2 demoAnchor>Customization</h2>\n\n    <h3 demoAnchor>Custom component rendering</h3>\n    <p>\n      Also you can render your own component. Extend it from\n      <pupa-code-inline>ToastComponentBase</pupa-code-inline> and pass to the\n      <pupa-code-inline>open</pupa-code-inline> method. Toast data type and return data type will be calculated\n      automatically.\n    </p>\n\n    <h3 demoAnchor>Animations for your own component</h3>\n    <p>\n      You can use default animation or set your own animation. Use\n      <pupa-code-inline>ToastComponentBase.animations</pupa-code-inline> or write animation like in the example.\n    </p>\n    <pupa-code filePath=\"toasts-demo/examples/animation.example.txt\"> </pupa-code>\n    <p>and use animation in html</p>\n    <pupa-code filePath=\"toasts-demo/examples/animation-usage.example.txt\"> </pupa-code>\n  </div>\n\n  <div *demoPageTab=\"'api'\">\n    <demo-example-viewer>\n      <demo-example-viewer-section-label>ToastsService</demo-example-viewer-section-label>\n      <demo-example-viewer-section>\n        <demo-example-viewer-property\n          name=\"open<TComponent>(config: ToastConfig<TComponent, TData>)\"\n          type=\"OpenedToast<TReturn>\"\n        >\n          <ng-container *demoExampleViewerPropertyDescription>\n            TData and TReturn are automatically calculated from the passed component.\n          </ng-container>\n        </demo-example-viewer-property>\n\n        <demo-example-viewer-property name=\"setTheme(theme: Theme)\" type=\"void\">\n          <ng-container *demoExampleViewerPropertyDescription> Method for switch toasts theme. </ng-container>\n        </demo-example-viewer-property>\n      </demo-example-viewer-section>\n\n      <demo-example-viewer-section-label>ToastConfig&#60;TComponent, TData&#62;</demo-example-viewer-section-label>\n      <demo-example-viewer-section>\n        <demo-example-viewer-property name=\"component?\" type=\"ComponentType<C>\">\n          <ng-container *demoExampleViewerPropertyDescription> Component to render as toast. </ng-container>\n        </demo-example-viewer-property>\n\n        <demo-example-viewer-property name=\"data\" type=\"TData\">\n          <ng-container *demoExampleViewerPropertyDescription> Params for opened component. </ng-container>\n        </demo-example-viewer-property>\n\n        <demo-example-viewer-property name=\"injector?\" type=\"Injector\">\n          <ng-container *demoExampleViewerPropertyDescription>\n            Injector for accessing component to outer data.\n          </ng-container>\n        </demo-example-viewer-property>\n      </demo-example-viewer-section>\n    </demo-example-viewer>\n  </div>\n\n  <div *demoPageTab=\"'setup'\">\n    <p>Set default theme in root component</p>\n    <pupa-code filePath=\"toasts-demo/examples/default-theme.example.txt\"> </pupa-code>\n  </div>\n</demo-page>\n";

/***/ })

}]);
//# sourceMappingURL=projects_demo_src_app_pages_toasts-demo_toasts-demo_module_ts.js.map