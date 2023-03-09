"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["projects_demo_src_app_pages_link-demo_link-demo_module_ts"],{

/***/ 6754:
/*!*************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/link-demo/examples/basic-example/basic-example.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicExampleComponent": () => (/* binding */ BasicExampleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _basic_example_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-example.component.html?ngResource */ 53400);
/* harmony import */ var _basic_example_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-example.component.scss?ngResource */ 21131);
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

/***/ 43390:
/*!*******************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/link-demo/examples/button-as-link-example/button-as-link-example.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonAsLinkExampleComponent": () => (/* binding */ ButtonAsLinkExampleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _button_as_link_example_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-as-link-example.component.html?ngResource */ 67930);
/* harmony import */ var _button_as_link_example_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button-as-link-example.component.scss?ngResource */ 6387);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let ButtonAsLinkExampleComponent = class ButtonAsLinkExampleComponent {
};
ButtonAsLinkExampleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'demo-button-as-link-example',
        template: _button_as_link_example_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulation.Emulated,
        styles: [_button_as_link_example_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ButtonAsLinkExampleComponent);



/***/ }),

/***/ 5370:
/*!***************************************************************************!*\
  !*** ./projects/demo/src/app/pages/link-demo/link-demo-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkDemoRoutingModule": () => (/* binding */ LinkDemoRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _link_demo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./link-demo.component */ 41);




const routes = [{ path: '', component: _link_demo_component__WEBPACK_IMPORTED_MODULE_0__.LinkDemoComponent }];
let LinkDemoRoutingModule = class LinkDemoRoutingModule {
};
LinkDemoRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LinkDemoRoutingModule);



/***/ }),

/***/ 41:
/*!**********************************************************************!*\
  !*** ./projects/demo/src/app/pages/link-demo/link-demo.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkDemoComponent": () => (/* binding */ LinkDemoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _link_demo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./link-demo.component.html?ngResource */ 13020);
/* harmony import */ var _link_demo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link-demo.component.scss?ngResource */ 39853);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




const BASE_REQUEST_PATH = 'link-demo/examples';
let LinkDemoComponent = class LinkDemoComponent {
    constructor() {
        this.basicExampleContent = {
            HTML: `${BASE_REQUEST_PATH}/basic-example/basic-example.component.html`,
        };
        this.buttonAsLinkExampleContent = {
            HTML: `${BASE_REQUEST_PATH}/button-as-link-example/button-as-link-example.component.html`,
        };
    }
};
LinkDemoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'demo-link-demo',
        template: _link_demo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_link_demo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LinkDemoComponent);



/***/ }),

/***/ 91235:
/*!*******************************************************************!*\
  !*** ./projects/demo/src/app/pages/link-demo/link-demo.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkDemoModule": () => (/* binding */ LinkDemoModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 99052);
/* harmony import */ var _link_demo_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link-demo-routing.module */ 5370);
/* harmony import */ var _link_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link-demo.component */ 41);
/* harmony import */ var _examples_basic_example_basic_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/basic-example/basic-example.component */ 6754);
/* harmony import */ var _examples_button_as_link_example_button_as_link_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/button-as-link-example/button-as-link-example.component */ 43390);








let LinkDemoModule = class LinkDemoModule {
};
LinkDemoModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_link_demo_component__WEBPACK_IMPORTED_MODULE_2__.LinkDemoComponent, _examples_basic_example_basic_example_component__WEBPACK_IMPORTED_MODULE_3__.BasicExampleComponent, _examples_button_as_link_example_button_as_link_example_component__WEBPACK_IMPORTED_MODULE_4__.ButtonAsLinkExampleComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.DemoSharedModule, _link_demo_routing_module__WEBPACK_IMPORTED_MODULE_1__.LinkDemoRoutingModule],
    })
], LinkDemoModule);



/***/ }),

/***/ 21131:
/*!**************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/link-demo/examples/basic-example/basic-example.component.scss?ngResource ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = "/** @file Automatically generated by create-adaptive-variables.script.ts */ /** @file Automatically generated by create-semantic-colors-map.script.ts. Edit semantic-colors-config.json */ /** @file Automatically generated by create-colors-map.script.ts. Edit colors-config.json*/ /** @file Automatically generated by create-alpha-colors-map.script.ts. Edit alpha-colors-config.json*/ /**\n * @deprecated\n */ /**\n * @deprecated\n */ .mark {\n  font-family: \"NotoSans\", sans-serif;\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 16px;\n} .small {\n  font-family: \"NotoSans\", sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 21px;\n} .medium {\n  font-size: 17px;\n  line-height: 24px;\n  font-family: \"NotoSans\", sans-serif;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9zcmMvc3R5bGVzL3ZhcmlhYmxlcy9hZGFwdGl2ZS52YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9zcmMvc3R5bGVzL21peGlucy9zY3JvbGxiYXItc21hbGwubWl4aW4uc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9zcmMvc3R5bGVzL21peGlucy9zY3JvbGxiYXIubWl4aW4uc2NzcyIsImJhc2ljLWV4YW1wbGUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vc3JjL3N0eWxlcy9taXhpbnMvZm9udC9mb250LXR5cGUtcmVndWxhci5taXhpbi5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL3NyYy9zdHlsZXMvbWl4aW5zL2ZvbnQvZm9udC1zaXplLXhzLm1peGluLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vc3JjL3N0eWxlcy9taXhpbnMvZm9udC9mb250LXNpemUtbS5taXhpbi5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL3NyYy9zdHlsZXMvbWl4aW5zL2ZvbnQvZm9udC1zaXplLWwubWl4aW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRUFBQSxFQUFBLDZHQUFBLEVBQUEsMEZBQUEsRUFBQSxzR0FBQSxFQ0dBOztFQUFBLEVDQUE7O0VBQUEsRUNEQTtFQ0VJLG1DQUFBO0VBRUYsZ0JBQUE7RUNIQSxlQUFBO0VBQ0EsaUJBQUE7QUZRRixFQU5BO0VDRkksbUNBQUE7RUFFRixnQkFBQTtFRUhBLGVBQUE7RUFDQSxpQkFBQTtBSGVGLEVBVEE7RUlQRSxlQUFBO0VBQ0EsaUJBQUE7RUhBRSxtQ0FBQTtFQUVGLGdCQUFBO0FEb0JGIiwiZmlsZSI6ImJhc2ljLWV4YW1wbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGZpbGUgQXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgY3JlYXRlLWFkYXB0aXZlLXZhcmlhYmxlcy5zY3JpcHQudHMgKi9cblxuJHhzQnJlYWtQb2ludDogMzIwO1xuJHNtQnJlYWtQb2ludDogNzY4O1xuJG1kQnJlYWtQb2ludDogMTAyNTtcbiRsZ0JyZWFrUG9pbnQ6IDEyODA7XG4keGxnQnJlYWtQb2ludDogMTQ0MDtcbiR4bEJyZWFrUG9pbnQ6IDE5MjA7XG4keHhsQnJlYWtQb2ludDogMjU2MDtcblxuJHhzQ29sdW1uc0NvdW50OiA0O1xuJHNtQ29sdW1uc0NvdW50OiA4O1xuJG1kQ29sdW1uc0NvdW50OiAxMjtcbiRsZ0NvbHVtbnNDb3VudDogMTI7XG4keGxnQ29sdW1uc0NvdW50OiAxNjtcbiR4bENvbHVtbnNDb3VudDogMTY7XG4keHhsQ29sdW1uc0NvdW50OiAxNjtcblxuJHhzR3V0dGVyOiA4O1xuJHNtR3V0dGVyOiAxNjtcbiRtZEd1dHRlcjogMTY7XG4kbGdHdXR0ZXI6IDE2O1xuJHhsZ0d1dHRlcjogMTY7XG4keGxHdXR0ZXI6IDE2O1xuJHh4bEd1dHRlcjogMTY7XG5cbiR4c09mZnNldDogMTI7XG4kc21PZmZzZXQ6IDE2O1xuJG1kT2Zmc2V0OiAxNjtcbiRsZ09mZnNldDogMjQ7XG4keGxnT2Zmc2V0OiAyNDtcbiR4bE9mZnNldDogMjQ7XG4keHhsT2Zmc2V0OiAyNDtcbiIsIkB1c2UgJy4vLi4vZnVuY3Rpb25zL2NvbG9yLmZ1bmN0aW9uJyBhcyAqO1xuQHVzZSAnLi8uLi9taXhpbnMvaG9zdC1zZWxlY3Rvci1kYXJrLXRoZW1lLm1peGluJyBhcyAqO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbkBtaXhpbiBzY3JvbGxiYXItc21hbGwge1xuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgIGJvcmRlcjogNC41cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMS41cHg7XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKG5ldXRyYWwtNiwgYWxwaGEtNjApO1xuXG4gICAgQGluY2x1ZGUgaG9zdC1zZWxlY3Rvci1kYXJrLXRoZW1lIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKG5ldXRyYWwtNjAwLCBhbHBoYS00MCk7XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICcuLy4uL2Z1bmN0aW9ucy9jb2xvci5mdW5jdGlvbicgYXMgKjtcbkB1c2UgJy4vLi4vbWl4aW5zL2hvc3Qtc2VsZWN0b3ItZGFyay10aGVtZS5taXhpbicgYXMgKjtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5AbWl4aW4gc2Nyb2xsYmFyIHtcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAyLjVweDtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IobmV1dHJhbC02LCBhbHBoYS02MCk7XG5cbiAgICBAaW5jbHVkZSBob3N0LXNlbGVjdG9yLWRhcmstdGhlbWUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IobmV1dHJhbC02MDAsIGFscGhhLTQwKTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ21peGlucycgYXMgKjtcblxuLm1hcmsge1xuICBAaW5jbHVkZSBmb250LXByZXNldC1jYXB0aW9uLXhzO1xufVxuXG4uc21hbGwge1xuICBAaW5jbHVkZSBmb250LXByZXNldC1ib2R5LW07XG59XG5cbi5tZWRpdW0ge1xuICBAaW5jbHVkZSBmb250LXNpemUtbDtcbiAgQGluY2x1ZGUgZm9udC10eXBlLXJlZ3VsYXI7XG59XG4iLCJAbWl4aW4gZm9udC10eXBlLXJlZ3VsYXIoJGNvbmRlbnNlZDogZmFsc2UpIHtcbiAgQGlmICRjb25kZW5zZWQge1xuICAgIGZvbnQtZmFtaWx5OiAnTm90b1NhbnNEaXNwbGF5LUNvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIH0gQGVsc2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTm90b1NhbnMnLCBzYW5zLXNlcmlmO1xuICB9XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4iLCJAdXNlICcuLy4uLy4uL3ZhcmlhYmxlcy9mb250LnZhcmlhYmxlcycgYXMgKjtcblxuQG1peGluIGZvbnQtc2l6ZS14cygkcGFyYWdyYXBoOiBmYWxzZSkge1xuICBmb250LXNpemU6ICRmb250U2l6ZVhTICogMXB4O1xuICBsaW5lLWhlaWdodDogaWYoJHBhcmFncmFwaCwgJGZvbnRTaXplWFMgKiAxLjUgKiAxcHgsICRsaW5lSGVpZ2h0WFMgKiAxcHgpO1xufVxuIiwiQHVzZSAnLi8uLi8uLi92YXJpYWJsZXMvZm9udC52YXJpYWJsZXMnIGFzICo7XG5cbkBtaXhpbiBmb250LXNpemUtbSgkcGFyYWdyYXBoOiBmYWxzZSkge1xuICBmb250LXNpemU6ICRmb250U2l6ZU0gKiAxcHg7XG4gIGxpbmUtaGVpZ2h0OiBpZigkcGFyYWdyYXBoLCAkZm9udFNpemVNICogMS41ICogMXB4LCAkbGluZUhlaWdodE0gKiAxcHgpO1xufVxuIiwiQHVzZSAnLi8uLi8uLi92YXJpYWJsZXMvZm9udC52YXJpYWJsZXMnIGFzICo7XG5cbkBtaXhpbiBmb250LXNpemUtbCgkcGFyYWdyYXBoOiBmYWxzZSkge1xuICBmb250LXNpemU6ICRmb250U2l6ZUwgKiAxcHg7XG4gIGxpbmUtaGVpZ2h0OiBpZigkcGFyYWdyYXBoLCAkZm9udFNpemVMICogMS41ICogMXB4LCAkbGluZUhlaWdodEwgKiAxcHgpO1xufVxuIl19 */";

/***/ }),

/***/ 6387:
/*!********************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/link-demo/examples/button-as-link-example/button-as-link-example.component.scss?ngResource ***!
  \********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b24tYXMtbGluay1leGFtcGxlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 39853:
/*!***********************************************************************************!*\
  !*** ./projects/demo/src/app/pages/link-demo/link-demo.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaW5rLWRlbW8uY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 53400:
/*!**************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/link-demo/examples/basic-example/basic-example.component.html?ngResource ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = "<p class=\"mark\">\n  Lorem Ipsum is simply dummy text of the printing\n  <a pupaLink href=\"https://google.com\" target=\"_blank\">and</a> typesetting industry. Lorem Ipsum has been the\n  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to\n  make a type specimen <a pupaLink href=\"https://google.com\" icon=\"app-search\" target=\"_blank\">book</a>.\n</p>\n\n<p class=\"small\">\n  Lorem Ipsum is simply dummy text of the printing\n  <a pupaLink href=\"https://google.com\" target=\"_blank\">and</a> typesetting industry. Lorem Ipsum has been the\n  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to\n  make a type specimen <a pupaLink href=\"https://google.com\" icon=\"app-search\" target=\"_blank\">book</a>.\n</p>\n\n<p class=\"medium\">\n  Lorem Ipsum is simply dummy text of the printing\n  <a pupaLink href=\"https://google.com\" target=\"_blank\">and</a> typesetting industry. Lorem Ipsum has been the\n  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to\n  make a type specimen <a pupaLink href=\"https://google.com\" icon=\"app-search\" target=\"_blank\">book</a>.\n</p>\n";

/***/ }),

/***/ 67930:
/*!********************************************************************************************************************************!*\
  !*** ./projects/demo/src/app/pages/link-demo/examples/button-as-link-example/button-as-link-example.component.html?ngResource ***!
  \********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<button pupaLink>Button as link</button>\n";

/***/ }),

/***/ 13020:
/*!***********************************************************************************!*\
  !*** ./projects/demo/src/app/pages/link-demo/link-demo.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<h1>Link</h1>\n\n<h3 demoAnchor>Basic usage</h3>\n<pupa-code-container [content]=\"basicExampleContent\">\n  <demo-basic-example *pupaCodeContainerPreviewTemplate></demo-basic-example>\n</pupa-code-container>\n\n<h3 demoAnchor>Button as link</h3>\n<pupa-code-container [content]=\"buttonAsLinkExampleContent\">\n  <demo-button-as-link-example *pupaCodeContainerPreviewTemplate></demo-button-as-link-example>\n</pupa-code-container>\n";

/***/ })

}]);
//# sourceMappingURL=projects_demo_src_app_pages_link-demo_link-demo_module_ts.js.map