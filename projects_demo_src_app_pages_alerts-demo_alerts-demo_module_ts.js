"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_app_pages_alerts-demo_alerts-demo_module_ts"],{

/***/ 31633:
/*!*******************************************************************************!*\
  !*** ./projects/demo/src/app/pages/alerts-demo/alerts-demo-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertsDemoRoutingModule": () => (/* binding */ AlertsDemoRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _alerts_demo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alerts-demo.component */ 77942);




const routes = [{ path: '', component: _alerts_demo_component__WEBPACK_IMPORTED_MODULE_0__.AlertsDemoComponent }];
let AlertsDemoRoutingModule = class AlertsDemoRoutingModule {
};
AlertsDemoRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AlertsDemoRoutingModule);



/***/ }),

/***/ 77942:
/*!**************************************************************************!*\
  !*** ./projects/demo/src/app/pages/alerts-demo/alerts-demo.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertsDemoComponent": () => (/* binding */ AlertsDemoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _alerts_demo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alerts-demo.component.html?ngResource */ 10188);
/* harmony import */ var _alerts_demo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alerts-demo.component.scss?ngResource */ 42333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




const BASE_REQUEST_PATH = 'alerts-demo/examples';
let AlertsDemoComponent = class AlertsDemoComponent {
    constructor() {
        this.alertsToolbarExampleContent = {
            HTML: `${BASE_REQUEST_PATH}/alerts-toolbar-example/alerts-toolbar-example.component.html`,
            SCSS: `${BASE_REQUEST_PATH}/alerts-toolbar-example/alerts-toolbar-example.component.scss`,
            TS: `${BASE_REQUEST_PATH}/alerts-toolbar-example/alerts-toolbar-example.component.ts`,
        };
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
    }
};
AlertsDemoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'demo-alerts-demo',
        template: _alerts_demo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_alerts_demo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AlertsDemoComponent);



/***/ }),

/***/ 50386:
/*!***********************************************************************!*\
  !*** ./projects/demo/src/app/pages/alerts-demo/alerts-demo.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertsDemoModule": () => (/* binding */ AlertsDemoModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 99052);
/* harmony import */ var _alerts_demo_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alerts-demo-routing.module */ 31633);
/* harmony import */ var _alerts_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alerts-demo.component */ 77942);
/* harmony import */ var _examples_alerts_toolbar_example_alerts_toolbar_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/alerts-toolbar-example/alerts-toolbar-example.component */ 79598);
/* harmony import */ var _examples_basic_additional_settings_example_basic_additional_settings_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/basic-additional-settings-example/basic-additional-settings-example.component */ 66988);
/* harmony import */ var _examples_basic_example_basic_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/basic-example/basic-example.component */ 589);
/* harmony import */ var _examples_template_rendering_example_template_rendering_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/template-rendering-example/template-rendering-example.component */ 38106);









let AlertsDemoModule = class AlertsDemoModule {
};
AlertsDemoModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [
            _alerts_demo_component__WEBPACK_IMPORTED_MODULE_2__.AlertsDemoComponent,
            _examples_basic_example_basic_example_component__WEBPACK_IMPORTED_MODULE_5__.BasicExampleComponent,
            _examples_basic_additional_settings_example_basic_additional_settings_example_component__WEBPACK_IMPORTED_MODULE_4__.BasicAdditionalSettingsExampleComponent,
            _examples_alerts_toolbar_example_alerts_toolbar_example_component__WEBPACK_IMPORTED_MODULE_3__.AlertsToolbarExampleComponent,
            _examples_template_rendering_example_template_rendering_example_component__WEBPACK_IMPORTED_MODULE_6__.TemplateRenderingExampleComponent,
        ],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.DemoSharedModule, _alerts_demo_routing_module__WEBPACK_IMPORTED_MODULE_1__.AlertsDemoRoutingModule],
    })
], AlertsDemoModule);



/***/ }),

/***/ 66988:
/*!*******************************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/alerts-demo/examples/basic-additional-settings-example/basic-additional-settings-example.component.ts ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicAdditionalSettingsExampleComponent": () => (/* binding */ BasicAdditionalSettingsExampleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _basic_additional_settings_example_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-additional-settings-example.component.html?ngResource */ 78271);
/* harmony import */ var _basic_additional_settings_example_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-additional-settings-example.component.scss?ngResource */ 89238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bimeister/pupakit.overlays */ 39287);
var _a;





let BasicAdditionalSettingsExampleComponent = class BasicAdditionalSettingsExampleComponent {
    constructor(alertsService) {
        this.alertsService = alertsService;
    }
    openAlert() {
        const openedAlert = this.alertsService.open({
            data: {
                bodyText: 'Some body text!',
                type: 'info',
                title: 'Some title',
                hasCloseButton: true,
                closeAction: () => openedAlert.close(),
                buttons: [
                    {
                        text: 'Button 1',
                        kind: 'border',
                        action: () => openedAlert.close(),
                    },
                    {
                        text: 'Button 2',
                        kind: 'secondary',
                        action: () => openedAlert.close(),
                    },
                ],
            },
        });
    }
};
BasicAdditionalSettingsExampleComponent.ctorParameters = () => [
    { type: _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.AlertsService }
];
BasicAdditionalSettingsExampleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'demo-basic-additional-settings-example',
        template: _basic_additional_settings_example_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewEncapsulation.Emulated,
        styles: [_basic_additional_settings_example_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [typeof (_a = typeof _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.AlertsService !== "undefined" && _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.AlertsService) === "function" ? _a : Object])
], BasicAdditionalSettingsExampleComponent);



/***/ }),

/***/ 589:
/*!***************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/alerts-demo/examples/basic-example/basic-example.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicExampleComponent": () => (/* binding */ BasicExampleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _basic_example_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-example.component.html?ngResource */ 33438);
/* harmony import */ var _basic_example_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-example.component.scss?ngResource */ 52278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bimeister/pupakit.overlays */ 39287);
var _a;





let BasicExampleComponent = class BasicExampleComponent {
    constructor(alertsService) {
        this.alertsService = alertsService;
    }
    openAlert() {
        const openedAlert = this.alertsService.open({
            data: {
                bodyText: 'Some body text!',
                type: 'info',
                hasCloseButton: true,
                closeAction: () => openedAlert.close(),
                autoCloseTimeMs: 3000,
            },
        });
    }
};
BasicExampleComponent.ctorParameters = () => [
    { type: _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.AlertsService }
];
BasicExampleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'demo-basic-example',
        template: _basic_example_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewEncapsulation.Emulated,
        styles: [_basic_example_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [typeof (_a = typeof _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.AlertsService !== "undefined" && _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.AlertsService) === "function" ? _a : Object])
], BasicExampleComponent);



/***/ }),

/***/ 38106:
/*!*****************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/alerts-demo/examples/template-rendering-example/template-rendering-example.component.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateRenderingExampleComponent": () => (/* binding */ TemplateRenderingExampleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _template_rendering_example_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template-rendering-example.component.html?ngResource */ 13489);
/* harmony import */ var _template_rendering_example_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template-rendering-example.component.scss?ngResource */ 322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bimeister/pupakit.overlays */ 39287);
var _a;





let TemplateRenderingExampleComponent = class TemplateRenderingExampleComponent {
    constructor(alertsService) {
        this.alertsService = alertsService;
    }
    openAlert() {
        this.alertsService.open({
            component: _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.AlertTemplateComponent,
            data: {
                templateRef: this.alertTemplateRef,
                templateContext: { $implicit: 'Pupa Lupa' },
            },
        });
    }
};
TemplateRenderingExampleComponent.ctorParameters = () => [
    { type: _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.AlertsService }
];
TemplateRenderingExampleComponent.propDecorators = {
    alertTemplateRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['alertTemplate', { static: true },] }]
};
TemplateRenderingExampleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'demo-template-rendering-example',
        template: _template_rendering_example_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulation.Emulated,
        styles: [_template_rendering_example_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [typeof (_a = typeof _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.AlertsService !== "undefined" && _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.AlertsService) === "function" ? _a : Object])
], TemplateRenderingExampleComponent);



/***/ }),

/***/ 42333:
/*!***************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/alerts-demo/alerts-demo.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGVydHMtZGVtby5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 89238:
/*!********************************************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/alerts-demo/examples/basic-additional-settings-example/basic-additional-settings-example.component.scss?ngResource ***!
  \********************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy1hZGRpdGlvbmFsLXNldHRpbmdzLWV4YW1wbGUuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 52278:
/*!****************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/alerts-demo/examples/basic-example/basic-example.component.scss?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy1leGFtcGxlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 322:
/*!******************************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/alerts-demo/examples/template-rendering-example/template-rendering-example.component.scss?ngResource ***!
  \******************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZW1wbGF0ZS1yZW5kZXJpbmctZXhhbXBsZS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 10188:
/*!***************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/alerts-demo/alerts-demo.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<h1>Alerts</h1>\n\n<demo-page>\n  <div *demoPageTab=\"'overview'\">\n    <h2 demoAnchor>Usage</h2>\n\n    <h3 demoAnchor>Basic usage</h3>\n    <pupa-code-container [content]=\"basicExampleContent\">\n      <demo-basic-example *pupaCodeContainerPreviewTemplate></demo-basic-example>\n    </pupa-code-container>\n\n    <h3 demoAnchor>Basic usage with additional settings</h3>\n    <pupa-code-container [content]=\"basicAdditionalSettingsExampleContent\">\n      <demo-basic-additional-settings-example\n        *pupaCodeContainerPreviewTemplate\n      ></demo-basic-additional-settings-example>\n    </pupa-code-container>\n\n    <h3 demoAnchor>Template rendering</h3>\n    <pupa-code-container [content]=\"templateRenderingExampleContent\">\n      <demo-template-rendering-example *pupaCodeContainerPreviewTemplate></demo-template-rendering-example>\n    </pupa-code-container>\n\n    <h2 demoAnchor>Customization</h2>\n\n    <h3 demoAnchor>Custom component rendering</h3>\n    <p>\n      Also you can render your own component. Extend it from\n      <pupa-code-inline>AlertComponentBase</pupa-code-inline> and pass to the\n      <pupa-code-inline>open</pupa-code-inline> method. Alert data type and return data type will be calculated\n      automatically.\n    </p>\n\n    <h3 demoAnchor>Animations for your own component</h3>\n    <p>\n      You can use default animation or set your own animation. Use\n      <pupa-code-inline>AlertComponentBase.animations</pupa-code-inline> or write animation like in the example.\n    </p>\n    <pupa-code filePath=\"alerts-demo/examples/animation.example.txt\"> </pupa-code>\n    <p>and use animation in html</p>\n    <pupa-code filePath=\"alerts-demo/examples/animation-usage.example.txt\"> </pupa-code>\n  </div>\n\n  <div *demoPageTab=\"'api'\">\n    <demo-example-viewer>\n      <demo-example-viewer-section-label>AlertModuleConfig</demo-example-viewer-section-label>\n      <demo-example-viewer-section>\n        <demo-example-viewer-property name=\"toolbarComponent\" type=\"ComponentType<unknown> | null\">\n          <ng-container *demoExampleViewerPropertyDescription>\n            This component is displayed on top of all alerts.\n          </ng-container>\n        </demo-example-viewer-property>\n      </demo-example-viewer-section>\n\n      <demo-example-viewer-section-label>AlertsService</demo-example-viewer-section-label>\n      <demo-example-viewer-section>\n        <demo-example-viewer-property name=\"alertsCount$\" type=\"number\">\n          <ng-container *demoExampleViewerPropertyDescription> Count of opened alerts. </ng-container>\n        </demo-example-viewer-property>\n\n        <demo-example-viewer-property\n          name=\"open<TComponent>(config: AlertConfig<TComponent, TData>)\"\n          type=\"OpenedAlert<TReturn>\"\n        >\n          <ng-container *demoExampleViewerPropertyDescription>\n            TData and TReturn are automatically calculated from the passed component.\n          </ng-container>\n        </demo-example-viewer-property>\n\n        <demo-example-viewer-property name=\"setTheme(theme: Theme)\" type=\"void\">\n          <ng-container *demoExampleViewerPropertyDescription> Method for switch alerts theme. </ng-container>\n        </demo-example-viewer-property>\n\n        <demo-example-viewer-property name=\"closeAll()\" type=\"void\">\n          <ng-container *demoExampleViewerPropertyDescription> Closes all alerts. </ng-container>\n        </demo-example-viewer-property>\n      </demo-example-viewer-section>\n\n      <demo-example-viewer-section-label>AlertConfig&#60;TComponent, TData&#62;</demo-example-viewer-section-label>\n      <demo-example-viewer-section>\n        <demo-example-viewer-property name=\"component?\" type=\"ComponentType<TComponent>\">\n          <ng-container *demoExampleViewerPropertyDescription> Component to render as alert. </ng-container>\n        </demo-example-viewer-property>\n\n        <demo-example-viewer-property name=\"data\" type=\"TData\">\n          <ng-container *demoExampleViewerPropertyDescription> Params for opened component. </ng-container>\n        </demo-example-viewer-property>\n\n        <demo-example-viewer-property name=\"injector?\" type=\"Injector\">\n          <ng-container *demoExampleViewerPropertyDescription>\n            Injector for accessing component to outer data.\n          </ng-container>\n        </demo-example-viewer-property>\n      </demo-example-viewer-section>\n    </demo-example-viewer>\n  </div>\n\n  <div *demoPageTab=\"'setup'\">\n    <ol>\n      <li>\n        <p>\n          Import <pupa-code-inline>AlertModule</pupa-code-inline> with config to your module. Pass\n          <pupa-code-inline>toolbarComponent</pupa-code-inline> to display UI above all alerts.\n        </p>\n        <pupa-code filePath=\"alerts-demo/examples/module-import.example.txt\"> </pupa-code>\n\n        <pupa-code-container [content]=\"alertsToolbarExampleContent\" [isPreviewExist]=\"false\"></pupa-code-container>\n      </li>\n\n      <li>\n        <p>Set default theme in root component</p>\n        <pupa-code filePath=\"alerts-demo/examples/default-theme.example.txt\"> </pupa-code>\n      </li>\n    </ol>\n  </div>\n</demo-page>\n";

/***/ }),

/***/ 78271:
/*!********************************************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/alerts-demo/examples/basic-additional-settings-example/basic-additional-settings-example.component.html?ngResource ***!
  \********************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<pupa-button (click)=\"openAlert()\">Open Alert</pupa-button>\n";

/***/ }),

/***/ 33438:
/*!****************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/alerts-demo/examples/basic-example/basic-example.component.html?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = "<pupa-button (click)=\"openAlert()\">Open Alert</pupa-button>\n";

/***/ }),

/***/ 13489:
/*!******************************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/alerts-demo/examples/template-rendering-example/template-rendering-example.component.html?ngResource ***!
  \******************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<pupa-button (click)=\"openAlert()\">Open Alert</pupa-button>\n\n<ng-template #alertTemplate let-name let-alertRef=\"alertRef\">\n  <pupa-alert-layout type=\"success\">\n    <pupa-alert-layout-header>\n      Some Title!\n      <pupa-alert-layout-close-button (click)=\"alertRef.close()\"></pupa-alert-layout-close-button>\n    </pupa-alert-layout-header>\n\n    <pupa-alert-layout-body>\n      <div>\n        Hello, <span [pupaTooltip]=\"name\"> {{ name }} </span>\n      </div>\n    </pupa-alert-layout-body>\n\n    <pupa-alert-layout-footer>\n      <pupa-button size=\"s\" kind=\"border\" (click)=\"alertRef.close()\">Ok!</pupa-button>\n    </pupa-alert-layout-footer>\n  </pupa-alert-layout>\n</ng-template>\n";

/***/ })

}]);
//# sourceMappingURL=projects_demo_src_app_pages_alerts-demo_alerts-demo_module_ts.js.map