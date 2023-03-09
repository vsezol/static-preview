"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_app_pages_popover-demo_popover-demo_module_ts"],{

/***/ 80618:
/*!********************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/popover-demo/examples/basic-example/popover-layout-basic/popover-layout-basic.component.ts ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverLayoutBasicComponent": () => (/* binding */ PopoverLayoutBasicComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _popover_layout_basic_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover-layout-basic.component.html?ngResource */ 19044);
/* harmony import */ var _popover_layout_basic_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover-layout-basic.component.scss?ngResource */ 19603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bimeister/pupakit.overlays */ 39287);
var _a;





let PopoverLayoutBasicComponent = class PopoverLayoutBasicComponent extends _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.PopoverComponentBase {
    constructor(popoverRef) {
        super(popoverRef);
        this.popoverRef = popoverRef;
        this.title = this.data.title ?? '';
    }
    buttonClick() {
        this.data.buttonAction();
    }
};
PopoverLayoutBasicComponent.ctorParameters = () => [
    { type: _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.PopoverRef }
];
PopoverLayoutBasicComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'demo-popover-layout-basic',
        template: _popover_layout_basic_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewEncapsulation.Emulated,
        styles: [_popover_layout_basic_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [typeof (_a = typeof _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.PopoverRef !== "undefined" && _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.PopoverRef) === "function" ? _a : Object])
], PopoverLayoutBasicComponent);



/***/ }),

/***/ 42731:
/*!**********************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/popover-demo/examples/basic-example/popover-trigger-basic/popover-trigger-basic.component.ts ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverTriggerBasicComponent": () => (/* binding */ PopoverTriggerBasicComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _popover_trigger_basic_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover-trigger-basic.component.html?ngResource */ 68854);
/* harmony import */ var _popover_trigger_basic_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover-trigger-basic.component.scss?ngResource */ 38938);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bimeister/pupakit.overlays */ 39287);
/* harmony import */ var _popover_layout_basic_popover_layout_basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popover-layout-basic/popover-layout-basic.component */ 80618);
var _a, _b, _c;






let PopoverTriggerBasicComponent = class PopoverTriggerBasicComponent {
    constructor(popoversService, toastsService, injector) {
        this.popoversService = popoversService;
        this.toastsService = toastsService;
        this.injector = injector;
    }
    openPopover() {
        this.popoversService.open({
            component: _popover_layout_basic_popover_layout_basic_component__WEBPACK_IMPORTED_MODULE_3__.PopoverLayoutBasicComponent,
            anchor: this.popoverAnchorRef,
            data: {
                title: 'Title',
                buttonAction: () => this.toastsService.open({ data: { bodyText: 'Hello there!', type: 'info' } }),
            },
            injector: this.injector,
            hasBackdrop: false,
        });
    }
};
PopoverTriggerBasicComponent.ctorParameters = () => [
    { type: _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.PopoversService },
    { type: _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.ToastsService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector }
];
PopoverTriggerBasicComponent.propDecorators = {
    popoverAnchorRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['popoverAnchor',] }]
};
PopoverTriggerBasicComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'demo-popover-trigger-basic',
        template: _popover_trigger_basic_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewEncapsulation.Emulated,
        styles: [_popover_trigger_basic_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [typeof (_a = typeof _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.PopoversService !== "undefined" && _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.PopoversService) === "function" ? _a : Object, typeof (_b = typeof _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.ToastsService !== "undefined" && _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.ToastsService) === "function" ? _b : Object, typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector) === "function" ? _c : Object])
], PopoverTriggerBasicComponent);



/***/ }),

/***/ 13932:
/*!**************************************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/popover-demo/examples/coordinates-example/popover-layout-coordinates/popover-layout-coordinates.component.ts ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverLayoutCoordinatesComponent": () => (/* binding */ PopoverLayoutCoordinatesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _popover_layout_coordinates_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover-layout-coordinates.component.html?ngResource */ 65652);
/* harmony import */ var _popover_layout_coordinates_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover-layout-coordinates.component.scss?ngResource */ 97782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bimeister/pupakit.overlays */ 39287);
var _a;






let PopoverLayoutCoordinatesComponent = class PopoverLayoutCoordinatesComponent extends _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.PopoverComponentBase {
    constructor(popoverRef) {
        super(popoverRef);
        this.popoverRef = popoverRef;
        this.fruits = this.data.fruits ?? [];
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl([]);
    }
};
PopoverLayoutCoordinatesComponent.ctorParameters = () => [
    { type: _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.PopoverRef }
];
PopoverLayoutCoordinatesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'demo-popover-layout-coordinates',
        template: _popover_layout_coordinates_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectionStrategy.OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewEncapsulation.Emulated,
        styles: [_popover_layout_coordinates_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [typeof (_a = typeof _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.PopoverRef !== "undefined" && _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.PopoverRef) === "function" ? _a : Object])
], PopoverLayoutCoordinatesComponent);



/***/ }),

/***/ 24162:
/*!****************************************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/popover-demo/examples/coordinates-example/popover-trigger-coordinates/popover-trigger-coordinates.component.ts ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverTriggerCoordinatesComponent": () => (/* binding */ PopoverTriggerCoordinatesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _popover_trigger_coordinates_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover-trigger-coordinates.component.html?ngResource */ 21829);
/* harmony import */ var _popover_trigger_coordinates_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover-trigger-coordinates.component.scss?ngResource */ 49275);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _bimeister_pupakit_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bimeister/pupakit.common */ 50919);
/* harmony import */ var _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bimeister/pupakit.overlays */ 39287);
/* harmony import */ var _popover_layout_coordinates_popover_layout_coordinates_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popover-layout-coordinates/popover-layout-coordinates.component */ 13932);
var _a, _b;








let PopoverTriggerCoordinatesComponent = class PopoverTriggerCoordinatesComponent {
    constructor(popoversService, injector) {
        this.popoversService = popoversService;
        this.injector = injector;
        this.xPos = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(100);
        this.yPos = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(100);
    }
    openPopover() {
        const coordinates = [Number(this.xPos.value), Number(this.yPos.value)];
        this.popoversService.open({
            component: _popover_layout_coordinates_popover_layout_coordinates_component__WEBPACK_IMPORTED_MODULE_4__.PopoverLayoutCoordinatesComponent,
            anchor: coordinates,
            data: { fruits: ['🍇', '🍉', '🍑'] },
            injector: this.injector,
            hasBackdrop: false,
        });
    }
};
PopoverTriggerCoordinatesComponent.ctorParameters = () => [
    { type: _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_3__.PopoversService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector }
];
PopoverTriggerCoordinatesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'demo-popover-trigger-coordinates',
        template: _popover_trigger_coordinates_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectionStrategy.OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewEncapsulation.Emulated,
        styles: [_popover_trigger_coordinates_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [typeof (_a = typeof _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_3__.PopoversService !== "undefined" && _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_3__.PopoversService) === "function" ? _a : Object, typeof (_b = typeof _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector) === "function" ? _b : Object])
], PopoverTriggerCoordinatesComponent);



/***/ }),

/***/ 35998:
/*!************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/popover-demo/examples/directive-example/directive-example.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectiveExampleComponent": () => (/* binding */ DirectiveExampleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _directive_example_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive-example.component.html?ngResource */ 21501);
/* harmony import */ var _directive_example_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directive-example.component.scss?ngResource */ 6891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let DirectiveExampleComponent = class DirectiveExampleComponent {
};
DirectiveExampleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'demo-directive-example',
        template: _directive_example_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulation.Emulated,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        styles: [_directive_example_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DirectiveExampleComponent);



/***/ }),

/***/ 28748:
/*!******************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/popover-demo/examples/other-example/drawer-layout-other/drawer-layout-other.component.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawerLayoutOtherComponent": () => (/* binding */ DrawerLayoutOtherComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _drawer_layout_other_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawer-layout-other.component.html?ngResource */ 34751);
/* harmony import */ var _drawer_layout_other_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawer-layout-other.component.scss?ngResource */ 20774);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let DrawerLayoutOtherComponent = class DrawerLayoutOtherComponent {
};
DrawerLayoutOtherComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'demo-drawer-layout-other',
        template: _drawer_layout_other_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        styles: [_drawer_layout_other_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DrawerLayoutOtherComponent);



/***/ }),

/***/ 48926:
/*!********************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/popover-demo/examples/other-example/popover-layout-other/popover-layout-other.component.ts ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverLayoutOtherComponent": () => (/* binding */ PopoverLayoutOtherComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _popover_layout_other_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover-layout-other.component.html?ngResource */ 64828);
/* harmony import */ var _popover_layout_other_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover-layout-other.component.scss?ngResource */ 30776);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bimeister/pupakit.overlays */ 39287);
/* harmony import */ var _declarations_tokens_drawer_data_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../declarations/tokens/drawer-data.token */ 2037);
/* harmony import */ var _drawer_layout_other_drawer_layout_other_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../drawer-layout-other/drawer-layout-other.component */ 28748);
var _a, _b, _c;







let PopoverLayoutOtherComponent = class PopoverLayoutOtherComponent extends _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.PopoverComponentBase {
    constructor(popoverRef, drawersService, injector) {
        super(popoverRef);
        this.popoverRef = popoverRef;
        this.drawersService = drawersService;
        this.injector = injector;
    }
    openDrawer() {
        this.drawersService.open(_drawer_layout_other_drawer_layout_other_component__WEBPACK_IMPORTED_MODULE_4__.DrawerLayoutOtherComponent, {
            injector: this.injector,
            containerComponent: _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.DrawerContainerComponent,
            providers: [
                {
                    provide: _declarations_tokens_drawer_data_token__WEBPACK_IMPORTED_MODULE_3__.DRAWER_DATA_TOKEN,
                    useValue: [1, 2, 3, 4],
                },
            ],
        });
    }
};
PopoverLayoutOtherComponent.ctorParameters = () => [
    { type: _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.PopoverRef },
    { type: _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.DrawersService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector }
];
PopoverLayoutOtherComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'demo-popover-layout-other',
        template: _popover_layout_other_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectionStrategy.OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewEncapsulation.Emulated,
        styles: [_popover_layout_other_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [typeof (_a = typeof _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.PopoverRef !== "undefined" && _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.PopoverRef) === "function" ? _a : Object, typeof (_b = typeof _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.DrawersService !== "undefined" && _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.DrawersService) === "function" ? _b : Object, typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector) === "function" ? _c : Object])
], PopoverLayoutOtherComponent);



/***/ }),

/***/ 48079:
/*!**********************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/popover-demo/examples/other-example/popover-trigger-other/popover-trigger-other.component.ts ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverTriggerOtherComponent": () => (/* binding */ PopoverTriggerOtherComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _popover_trigger_other_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover-trigger-other.component.html?ngResource */ 13917);
/* harmony import */ var _popover_trigger_other_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover-trigger-other.component.scss?ngResource */ 63938);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bimeister/pupakit.overlays */ 39287);
/* harmony import */ var _popover_layout_other_popover_layout_other_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popover-layout-other/popover-layout-other.component */ 48926);
var _a, _b;






let PopoverTriggerOtherComponent = class PopoverTriggerOtherComponent {
    constructor(popoversService, injector) {
        this.popoversService = popoversService;
        this.injector = injector;
    }
    openPopover() {
        this.popoversService.open({
            component: _popover_layout_other_popover_layout_other_component__WEBPACK_IMPORTED_MODULE_3__.PopoverLayoutOtherComponent,
            anchor: this.popoverAnchorRef,
            data: {},
            injector: this.injector,
            hasBackdrop: false,
        });
    }
};
PopoverTriggerOtherComponent.ctorParameters = () => [
    { type: _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.PopoversService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector }
];
PopoverTriggerOtherComponent.propDecorators = {
    popoverAnchorRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['popoverAnchor',] }]
};
PopoverTriggerOtherComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'demo-popover-trigger-other',
        template: _popover_trigger_other_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewEncapsulation.Emulated,
        styles: [_popover_trigger_other_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [typeof (_a = typeof _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.PopoversService !== "undefined" && _bimeister_pupakit_overlays__WEBPACK_IMPORTED_MODULE_2__.PopoversService) === "function" ? _a : Object, typeof (_b = typeof _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector) === "function" ? _b : Object])
], PopoverTriggerOtherComponent);



/***/ }),

/***/ 61361:
/*!*********************************************************************************!*\
  !*** ./projects/demo/src/app/pages/popover-demo/popover-demo-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverDemoRoutingModule": () => (/* binding */ PopoverDemoRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _popover_demo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover-demo.component */ 85835);




const routes = [
    {
        path: '',
        component: _popover_demo_component__WEBPACK_IMPORTED_MODULE_0__.PopoverDemoComponent,
    },
];
let PopoverDemoRoutingModule = class PopoverDemoRoutingModule {
};
PopoverDemoRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PopoverDemoRoutingModule);



/***/ }),

/***/ 85835:
/*!****************************************************************************!*\
  !*** ./projects/demo/src/app/pages/popover-demo/popover-demo.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverDemoComponent": () => (/* binding */ PopoverDemoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _popover_demo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover-demo.component.html?ngResource */ 11724);
/* harmony import */ var _popover_demo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover-demo.component.scss?ngResource */ 16446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




const BASE_REQUEST_PATH = 'popover-demo/examples';
let PopoverDemoComponent = class PopoverDemoComponent {
    constructor() {
        this.basicExampleContent = {
            'layout.component.html': `${BASE_REQUEST_PATH}/basic-example/popover-layout-basic/popover-layout-basic.component.html`,
            'layout.component.ts': `${BASE_REQUEST_PATH}/basic-example/popover-layout-basic/popover-layout-basic.component.ts`,
            'trigger.component.html': `${BASE_REQUEST_PATH}/basic-example/popover-trigger-basic/popover-trigger-basic.component.html`,
            'trigger.component.ts': `${BASE_REQUEST_PATH}/basic-example/popover-trigger-basic/popover-trigger-basic.component.ts`,
        };
        this.coordinatesExampleContent = {
            'layout.component.html': `${BASE_REQUEST_PATH}/coordinates-example/popover-layout-coordinates/popover-layout-coordinates.component.html`,
            'layout.component.ts': `${BASE_REQUEST_PATH}/coordinates-example/popover-layout-coordinates/popover-layout-coordinates.component.ts`,
            'trigger.component.html': `${BASE_REQUEST_PATH}/coordinates-example/popover-trigger-coordinates/popover-trigger-coordinates.component.html`,
            'trigger.component.ts': `${BASE_REQUEST_PATH}/coordinates-example/popover-trigger-coordinates/popover-trigger-coordinates.component.ts`,
        };
        this.directiveExampleContent = {
            HTML: `${BASE_REQUEST_PATH}/directive-example/directive-example.component.html`,
        };
        this.otherExampleContent = {
            'layout.component.html': `${BASE_REQUEST_PATH}/other-example/popover-layout-other/popover-layout-other.component.html`,
            'layout.component.ts': `${BASE_REQUEST_PATH}/other-example/popover-layout-other/popover-layout-other.component.ts`,
            'trigger.component.html': `${BASE_REQUEST_PATH}/other-example/popover-trigger-other/popover-trigger-other.component.html`,
            'trigger.component.ts': `${BASE_REQUEST_PATH}/other-example/popover-trigger-other/popover-trigger-other.component.ts`,
        };
    }
};
PopoverDemoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'demo-popover-demo',
        template: _popover_demo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulation.Emulated,
        styles: [_popover_demo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PopoverDemoComponent);



/***/ }),

/***/ 1050:
/*!*************************************************************************!*\
  !*** ./projects/demo/src/app/pages/popover-demo/popover-demo.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverDemoModule": () => (/* binding */ PopoverDemoModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 99052);
/* harmony import */ var _examples_basic_example_popover_layout_basic_popover_layout_basic_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./examples/basic-example/popover-layout-basic/popover-layout-basic.component */ 80618);
/* harmony import */ var _examples_basic_example_popover_trigger_basic_popover_trigger_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./examples/basic-example/popover-trigger-basic/popover-trigger-basic.component */ 42731);
/* harmony import */ var _examples_coordinates_example_popover_layout_coordinates_popover_layout_coordinates_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/coordinates-example/popover-layout-coordinates/popover-layout-coordinates.component */ 13932);
/* harmony import */ var _examples_coordinates_example_popover_trigger_coordinates_popover_trigger_coordinates_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/coordinates-example/popover-trigger-coordinates/popover-trigger-coordinates.component */ 24162);
/* harmony import */ var _examples_other_example_drawer_layout_other_drawer_layout_other_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/other-example/drawer-layout-other/drawer-layout-other.component */ 28748);
/* harmony import */ var _examples_other_example_popover_layout_other_popover_layout_other_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/other-example/popover-layout-other/popover-layout-other.component */ 48926);
/* harmony import */ var _examples_other_example_popover_trigger_other_popover_trigger_other_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/other-example/popover-trigger-other/popover-trigger-other.component */ 48079);
/* harmony import */ var _popover_demo_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./popover-demo-routing.module */ 61361);
/* harmony import */ var _popover_demo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./popover-demo.component */ 85835);
/* harmony import */ var _examples_directive_example_directive_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/directive-example/directive-example.component */ 35998);













const COMPONENTS = [
    _popover_demo_component__WEBPACK_IMPORTED_MODULE_9__.PopoverDemoComponent,
    _examples_basic_example_popover_layout_basic_popover_layout_basic_component__WEBPACK_IMPORTED_MODULE_1__.PopoverLayoutBasicComponent,
    _examples_basic_example_popover_trigger_basic_popover_trigger_basic_component__WEBPACK_IMPORTED_MODULE_2__.PopoverTriggerBasicComponent,
    _examples_coordinates_example_popover_layout_coordinates_popover_layout_coordinates_component__WEBPACK_IMPORTED_MODULE_3__.PopoverLayoutCoordinatesComponent,
    _examples_coordinates_example_popover_trigger_coordinates_popover_trigger_coordinates_component__WEBPACK_IMPORTED_MODULE_4__.PopoverTriggerCoordinatesComponent,
    _examples_other_example_popover_layout_other_popover_layout_other_component__WEBPACK_IMPORTED_MODULE_6__.PopoverLayoutOtherComponent,
    _examples_other_example_popover_trigger_other_popover_trigger_other_component__WEBPACK_IMPORTED_MODULE_7__.PopoverTriggerOtherComponent,
    _examples_other_example_drawer_layout_other_drawer_layout_other_component__WEBPACK_IMPORTED_MODULE_5__.DrawerLayoutOtherComponent,
    _examples_directive_example_directive_example_component__WEBPACK_IMPORTED_MODULE_10__.DirectiveExampleComponent,
];
let PopoverDemoModule = class PopoverDemoModule {
};
PopoverDemoModule = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
        declarations: [...COMPONENTS],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.DemoSharedModule, _popover_demo_routing_module__WEBPACK_IMPORTED_MODULE_8__.PopoverDemoRoutingModule],
    })
], PopoverDemoModule);



/***/ }),

/***/ 19603:
/*!*********************************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/popover-demo/examples/basic-example/popover-layout-basic/popover-layout-basic.component.scss?ngResource ***!
  \*********************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3BvdmVyLWxheW91dC1iYXNpYy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 38938:
/*!***********************************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/popover-demo/examples/basic-example/popover-trigger-basic/popover-trigger-basic.component.scss?ngResource ***!
  \***********************************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".anchor {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcG92ZXItdHJpZ2dlci1iYXNpYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0YiLCJmaWxlIjoicG9wb3Zlci10cmlnZ2VyLWJhc2ljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFuY2hvciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiJdfQ== */";

/***/ }),

/***/ 97782:
/*!***************************************************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/popover-demo/examples/coordinates-example/popover-layout-coordinates/popover-layout-coordinates.component.scss?ngResource ***!
  \***************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3BvdmVyLWxheW91dC1jb29yZGluYXRlcy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 49275:
/*!*****************************************************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/popover-demo/examples/coordinates-example/popover-trigger-coordinates/popover-trigger-coordinates.component.scss?ngResource ***!
  \*****************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  max-width: 30rem;\n  gap: 4rem;\n}\n\n.label {\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcG92ZXItdHJpZ2dlci1jb29yZGluYXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUNBO0VBQ0UsbUJBQUE7QUFFRiIsImZpbGUiOiJwb3BvdmVyLXRyaWdnZXItY29vcmRpbmF0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogMzByZW07XG4gIGdhcDogNHJlbTtcbn1cbi5sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4iXX0= */";

/***/ }),

/***/ 6891:
/*!*************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/popover-demo/examples/directive-example/directive-example.component.scss?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXJlY3RpdmUtZXhhbXBsZS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 20774:
/*!*******************************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/popover-demo/examples/other-example/drawer-layout-other/drawer-layout-other.component.scss?ngResource ***!
  \*******************************************************************************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  display: block;\n  width: 512px;\n  height: 100%;\n}\n\n.drawer__title-container {\n  display: flex;\n  gap: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyYXdlci1sYXlvdXQtb3RoZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFHRTtFQUNFLGFBQUE7RUFDQSxRQUFBO0FBQUoiLCJmaWxlIjoiZHJhd2VyLWxheW91dC1vdGhlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA1MTJweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZHJhd2VyIHtcbiAgJl9fdGl0bGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogOHB4O1xuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 30776:
/*!*********************************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/popover-demo/examples/other-example/popover-layout-other/popover-layout-other.component.scss?ngResource ***!
  \*********************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3BvdmVyLWxheW91dC1vdGhlci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 63938:
/*!***********************************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/popover-demo/examples/other-example/popover-trigger-other/popover-trigger-other.component.scss?ngResource ***!
  \***********************************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".anchor {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcG92ZXItdHJpZ2dlci1vdGhlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0YiLCJmaWxlIjoicG9wb3Zlci10cmlnZ2VyLW90aGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFuY2hvciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiJdfQ== */";

/***/ }),

/***/ 16446:
/*!*****************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/popover-demo/popover-demo.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3BvdmVyLWRlbW8uY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 19044:
/*!*********************************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/popover-demo/examples/basic-example/popover-layout-basic/popover-layout-basic.component.html?ngResource ***!
  \*********************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<pupa-popover-layout>\n  <pupa-popover-layout-header>\n    <pupa-popover-layout-title>Mobile only title</pupa-popover-layout-title>\n    <pupa-popover-layout-close-button>\n      <pupa-button-icon kind=\"secondary\" icon=\"app-cross\" size=\"s\"></pupa-button-icon>\n    </pupa-popover-layout-close-button>\n  </pupa-popover-layout-header>\n  <pupa-popover-layout-body>{{ title }}</pupa-popover-layout-body>\n  <pupa-popover-layout-footer>\n    <pupa-popover-layout-action value=\"submit\">\n      <pupa-button (click)=\"buttonClick()\" size=\"s\">Submit</pupa-button>\n    </pupa-popover-layout-action>\n    <pupa-popover-layout-action value=\"close\">\n      <pupa-button kind=\"secondary\" size=\"s\">Cancel</pupa-button>\n    </pupa-popover-layout-action>\n  </pupa-popover-layout-footer>\n</pupa-popover-layout>\n";

/***/ }),

/***/ 68854:
/*!***********************************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/popover-demo/examples/basic-example/popover-trigger-basic/popover-trigger-basic.component.html?ngResource ***!
  \***********************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div #popoverAnchor class=\"anchor\">\n  <pupa-button (click)=\"openPopover()\">Open Popover</pupa-button>\n</div>\n";

/***/ }),

/***/ 65652:
/*!***************************************************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/popover-demo/examples/coordinates-example/popover-layout-coordinates/popover-layout-coordinates.component.html?ngResource ***!
  \***************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<pupa-popover-layout>\n  <pupa-popover-layout-header>\n    <pupa-popover-layout-close-button>\n      <pupa-button-icon kind=\"secondary\" icon=\"app-cross\" size=\"s\"></pupa-button-icon>\n    </pupa-popover-layout-close-button>\n  </pupa-popover-layout-header>\n  <pupa-popover-layout-body>\n    Choose your fruit!\n    <pupa-select class=\"select\" [isMultiSelectionEnabled]=\"false\" [formControl]=\"control\">\n      <pupa-select-trigger>\n        {{ control.value }}\n      </pupa-select-trigger>\n      <pupa-select-dropdown>\n        <pupa-select-options-container>\n          <pupa-select-option *ngFor=\"let fruit of fruits\" [value]=\"fruit\">{{ fruit }}</pupa-select-option>\n        </pupa-select-options-container>\n      </pupa-select-dropdown>\n    </pupa-select>\n  </pupa-popover-layout-body>\n</pupa-popover-layout>\n";

/***/ }),

/***/ 21829:
/*!*****************************************************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/popover-demo/examples/coordinates-example/popover-trigger-coordinates/popover-trigger-coordinates.component.html?ngResource ***!
  \*****************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div>\n  <pupa-label class=\"label\">x</pupa-label>\n  <pupa-input-number [formControl]=\"xPos\"></pupa-input-number>\n</div>\n<div>\n  <pupa-label class=\"label\">y</pupa-label>\n  <pupa-input-number [formControl]=\"yPos\"></pupa-input-number>\n</div>\n<pupa-button (click)=\"openPopover()\">Open Popover</pupa-button>\n";

/***/ }),

/***/ 21501:
/*!*************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/popover-demo/examples/directive-example/directive-example.component.html?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<pupa-button [pupaPopover]=\"popover\">Open Popover</pupa-button>\n\n<ng-template #popover let-popoverRef=\"popoverRef\">\n  <pupa-popover-layout-header> Header </pupa-popover-layout-header>\n\n  <pupa-popover-layout-body> Body </pupa-popover-layout-body>\n\n  <pupa-popover-layout-footer>\n    <pupa-button size=\"s\" (click)=\"popoverRef.close()\">Close</pupa-button>\n  </pupa-popover-layout-footer>\n</ng-template>\n";

/***/ }),

/***/ 34751:
/*!*******************************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/popover-demo/examples/other-example/drawer-layout-other/drawer-layout-other.component.html?ngResource ***!
  \*******************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<pupa-drawer-layout>\n  <pupa-drawer-layout-header>\n    <pupa-drawer-layout-header-row type=\"top\">\n      <pupa-drawer-layout-header-content type=\"left\">\n        <pupa-drawer-close-button visibleOn=\"mobile\"></pupa-drawer-close-button>\n      </pupa-drawer-layout-header-content>\n\n      <pupa-drawer-layout-header-content type=\"right\">\n        <pupa-drawer-button-icon icon=\"app-time\"></pupa-drawer-button-icon>\n        <pupa-drawer-button-icon icon=\"app-link\" pupaTooltip=\"Копировать ссылку\"></pupa-drawer-button-icon>\n\n        <pupa-drawer-expand-button></pupa-drawer-expand-button>\n\n        <pupa-drawer-button-icon icon=\"app-more\"></pupa-drawer-button-icon>\n        <pupa-drawer-close-button visibleOn=\"desktop\"></pupa-drawer-close-button>\n      </pupa-drawer-layout-header-content>\n    </pupa-drawer-layout-header-row>\n\n    <pupa-drawer-layout-header-row>\n      <pupa-drawer-title> Title </pupa-drawer-title>\n\n      <pupa-drawer-layout-header-content>\n        <pupa-button>Button</pupa-button>\n        <pupa-button>Button</pupa-button>\n      </pupa-drawer-layout-header-content>\n    </pupa-drawer-layout-header-row>\n  </pupa-drawer-layout-header>\n\n  <pupa-drawer-layout-body>\n    <pupa-tabs-container>\n      <pupa-tabs>\n        <pupa-tabs-item name=\"tab1\"> Tab 1</pupa-tabs-item>\n        <pupa-tabs-item name=\"tab2\"> Tab 2</pupa-tabs-item>\n      </pupa-tabs>\n\n      <pupa-drawer-layout-separator locatedIn=\"body\"></pupa-drawer-layout-separator>\n\n      <pupa-tabs-content>\n        <div *pupaTabsItemContentTemplate=\"'tab1'\">\n          <p>Tab 1 content</p>\n          <div><input /></div>\n        </div>\n        <div *pupaTabsItemContentTemplate=\"'tab2'\">Tab 2 content</div>\n      </pupa-tabs-content>\n    </pupa-tabs-container>\n  </pupa-drawer-layout-body>\n\n  <pupa-drawer-layout-footer>\n    <pupa-drawer-layout-action value=\"van\">\n      <pupa-button kind=\"secondary\">Action</pupa-button>\n    </pupa-drawer-layout-action>\n\n    <pupa-drawer-layout-action value=\"boy next\">\n      <pupa-button>Action</pupa-button>\n    </pupa-drawer-layout-action>\n  </pupa-drawer-layout-footer>\n</pupa-drawer-layout>\n";

/***/ }),

/***/ 64828:
/*!*********************************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/popover-demo/examples/other-example/popover-layout-other/popover-layout-other.component.html?ngResource ***!
  \*********************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<pupa-popover-layout>\n  <pupa-popover-layout-header>\n    <pupa-popover-layout-close-button>\n      <pupa-button-icon kind=\"secondary\" icon=\"app-cross\" size=\"s\"></pupa-button-icon>\n    </pupa-popover-layout-close-button>\n  </pupa-popover-layout-header>\n  <pupa-popover-layout-body>\n    <pupa-button (click)=\"openDrawer()\">Open Drawer</pupa-button>\n  </pupa-popover-layout-body>\n</pupa-popover-layout>\n";

/***/ }),

/***/ 13917:
/*!***********************************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/popover-demo/examples/other-example/popover-trigger-other/popover-trigger-other.component.html?ngResource ***!
  \***********************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div #popoverAnchor class=\"anchor\">\n  <pupa-button (click)=\"openPopover()\">Open Popover</pupa-button>\n</div>\n";

/***/ }),

/***/ 11724:
/*!*****************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/popover-demo/popover-demo.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "<h1>Popover</h1>\n\n<demo-page>\n  <div *demoPageTab=\"'overview'\">\n    <h3 demoAnchor>Usage</h3>\n    <pupa-info-block>\n      The code of all examples below consists of two parts:\n      <ul>\n        <li><pupa-code-inline>layout.component</pupa-code-inline> - component that is the content of popover.</li>\n        <li>\n          <pupa-code-inline>trigger.component</pupa-code-inline> - component that demonstrates the opening of popover.\n        </li>\n      </ul>\n    </pupa-info-block>\n    <pupa-info-block variant=\"warning\">\n      Layout component must implement <pupa-code-inline>PopoverComponentBase</pupa-code-inline>.\n    </pupa-info-block>\n    <h3 demoAnchor>Basic example</h3>\n    <pupa-info-block> <pupa-code-inline>pupa-popover-layout-footer</pupa-code-inline> is optional. </pupa-info-block>\n\n    <pupa-code-container [content]=\"basicExampleContent\">\n      <demo-popover-trigger-basic *pupaCodeContainerPreviewTemplate> </demo-popover-trigger-basic>\n    </pupa-code-container>\n\n    <h3 demoAnchor>Coordinates</h3>\n    <pupa-code-container [content]=\"coordinatesExampleContent\">\n      <demo-popover-trigger-coordinates *pupaCodeContainerPreviewTemplate> </demo-popover-trigger-coordinates>\n    </pupa-code-container>\n\n    <h3 demoAnchor>Directive</h3>\n    <pupa-code-container [content]=\"directiveExampleContent\">\n      <demo-directive-example *pupaCodeContainerPreviewTemplate> </demo-directive-example>\n    </pupa-code-container>\n\n    <h3 demoAnchor>Drawer case</h3>\n    <pupa-code-container [content]=\"otherExampleContent\">\n      <demo-popover-trigger-other *pupaCodeContainerPreviewTemplate> </demo-popover-trigger-other>\n    </pupa-code-container>\n  </div>\n  <div *demoPageTab=\"'api'\">\n    <demo-example-viewer>\n      <demo-example-viewer-section-label>PopoversService</demo-example-viewer-section-label>\n      <demo-example-viewer-section>\n        <demo-example-viewer-property\n          name=\"open<TComponent>(config: PopoverConfig<TComponent, TData>)\"\n          type=\"OpenedPopover<TReturn>\"\n        >\n          <ng-container *demoExampleViewerPropertyDescription>\n            TData and TReturn are automatically calculated from the passed component.\n          </ng-container>\n        </demo-example-viewer-property>\n      </demo-example-viewer-section>\n\n      <demo-example-viewer-section-label>PopoverConfig&#60;TComponent, TData&#62;</demo-example-viewer-section-label>\n      <demo-example-viewer-section>\n        <demo-example-viewer-property name=\"component\" type=\"ComponentType<C>\">\n          <ng-container *demoExampleViewerPropertyDescription> Component to render as popover content. </ng-container>\n        </demo-example-viewer-property>\n\n        <demo-example-viewer-property name=\"data\" type=\"TData\">\n          <ng-container *demoExampleViewerPropertyDescription> Params for opened component. </ng-container>\n        </demo-example-viewer-property>\n\n        <demo-example-viewer-property name=\"anchor\" type=\"ElementRef<HTMLElement> | Position\">\n          <ng-container *demoExampleViewerPropertyDescription> Location to render popover.</ng-container>\n        </demo-example-viewer-property>\n\n        <demo-example-viewer-property name=\"injector?\" type=\"Injector\">\n          <ng-container *demoExampleViewerPropertyDescription>\n            Injector for accessing component to outer data.\n          </ng-container>\n        </demo-example-viewer-property>\n\n        <demo-example-viewer-property name=\"hasBackdrop\" type=\"boolean\">\n          <ng-container *demoExampleViewerPropertyDescription> Render with backdrop.</ng-container>\n        </demo-example-viewer-property>\n      </demo-example-viewer-section>\n    </demo-example-viewer>\n  </div>\n</demo-page>\n";

/***/ })

}]);
//# sourceMappingURL=projects_demo_src_app_pages_popover-demo_popover-demo_module_ts.js.map