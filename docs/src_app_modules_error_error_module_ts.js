"use strict";
(self["webpackChunkangular_starter1"] = self["webpackChunkangular_starter1"] || []).push([["src_app_modules_error_error_module_ts"],{

/***/ 680:
/*!*******************************************************!*\
  !*** ./src/app/modules/error/error-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorRoutingModule: () => (/* binding */ ErrorRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_modules_error_pages_404_error404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/error/pages/404/error404.component */ 9458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




const routes = [{
  path: '404',
  component: src_app_modules_error_pages_404_error404_component__WEBPACK_IMPORTED_MODULE_0__.Error404Component
}, {
  path: '**',
  redirectTo: '404'
}];
class ErrorRoutingModule {
  static #_ = this.ɵfac = function ErrorRoutingModule_Factory(t) {
    return new (t || ErrorRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ErrorRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ErrorRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 8941:
/*!***********************************************!*\
  !*** ./src/app/modules/error/error.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorModule: () => (/* binding */ ErrorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/core.module */ 8081);
/* harmony import */ var src_app_modules_error_error_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/error/error-routing.module */ 680);
/* harmony import */ var src_app_modules_error_pages_404_error404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/error/pages/404/error404.component */ 9458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);





class ErrorModule {
  static #_ = this.ɵfac = function ErrorModule_Factory(t) {
    return new (t || ErrorModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: ErrorModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, src_app_modules_error_error_routing_module__WEBPACK_IMPORTED_MODULE_1__.ErrorRoutingModule, src_app_core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ErrorModule, {
    declarations: [src_app_modules_error_pages_404_error404_component__WEBPACK_IMPORTED_MODULE_2__.Error404Component],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, src_app_modules_error_error_routing_module__WEBPACK_IMPORTED_MODULE_1__.ErrorRoutingModule, src_app_core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule]
  });
})();

/***/ }),

/***/ 9458:
/*!***************************************************************!*\
  !*** ./src/app/modules/error/pages/404/error404.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Error404Component: () => (/* binding */ Error404Component)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_core_directives_http_code_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/directives/http-code.directive */ 3378);




class Error404Component {
  constructor(renderer, document) {
    this.renderer = renderer;
    this.document = document;
  }
  ngOnInit() {
    this.renderer.addClass(this.document.body, 'page-404');
  }
  ngOnDestroy() {
    this.renderer.removeClass(this.document.body, 'page-404');
  }
  static #_ = this.ɵfac = function Error404Component_Factory(t) {
    return new (t || Error404Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: Error404Component,
    selectors: [["app-error404"]],
    decls: 14,
    vars: 2,
    consts: [[1, "block__main"], [1, "block__wrapper", 3, "appHttpCode"], [1, "container"], [1, "row"], [1, "col-12"], [1, "block__text"], [1, "mb-1", "mb-sm-2"], [1, "h6", "mb-3", "mb-sm-5"], [1, "btn", "btn-black", 3, "routerLink"]],
    template: function Error404Component_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0422\u0430\u043A\u043E\u0457 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 \u043D\u0435 \u0456\u0441\u043D\u0443\u0454");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u0421\u0445\u043E\u0436\u0435, \u0446\u0435 \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430 \u0430\u0434\u0440\u0435\u0441\u0430, \u0430\u0431\u043E \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430 \u043F\u0435\u0440\u0435\u0457\u0445\u0430\u043B\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u041D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appHttpCode", 404);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, src_app_core_directives_http_code_directive__WEBPACK_IMPORTED_MODULE_0__.HttpCodeDirective],
    styles: ["html[_ngcontent-%COMP%] {\n  font-size: 100%;\n}\n\n.block__main[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-height: 100svh;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n}\n.block__wrapper[_ngcontent-%COMP%] {\n  padding: 40px 0;\n}\n.block__text[_ngcontent-%COMP%] {\n  max-width: 649px;\n  margin: 0 auto;\n  text-align: center;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n}\n.block__text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 120px;\n}\n@media (max-width: 767.98px) {\n  .block__text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 90px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy90aGVtZS1hbmd1bGFyLXN0YXJ0ZXIxL2Jvb3RzdHJhcC9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL21vZHVsZXMvZXJyb3IvcGFnZXMvNDA0L2Vycm9yNDA0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fYnJlYWtwb2ludHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5TkE7RUF6RUUsZUFBQTtBQzlJRjs7QUFFRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQUNKO0FBRUU7RUFDRSxlQUFBO0FBQUo7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUdJO0VBQ0UsZ0JBQUE7QUFETjtBQ29ESTtFRHBEQTtJQUdJLGVBQUE7RUFDTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICdzcmMvYXNzZXRzL3Njc3MvdGhlbWUtYW5ndWxhci1zdGFydGVyMS9ib290c3RyYXAvdHlwZS9taXhpbnMnO1xuXG4kZm9udC1mYW1pbHktcHJpbWFyeTogXCJlVWtyYWluZVwiLCBcIkFyaWFsXCIsIEFyaWFsO1xuXG5cbiRjdXN0b20tZmlsZS10ZXh0OiAoKTtcblxuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgeHNzOiAwLFxuICB4czogNDgwcHgsXG4gIHNtOiA3NjhweCxcbiAgdGI6IDEwMjRweCxcbiAgbWQ6IDEyODBweCxcbiAgbGc6IDE0NDBweCxcbiAgeGw6IDE2ODBweCxcbiAgeHhsOiAxOTIwcHgsXG4pO1xuXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcbiAgeHM6IDEyMDBweCxcbiAgeGw6IDE1NTRweCxcbik7XG5cbiRncmlkLWd1dHRlci13aWR0aDogMzJweDtcblxuJHNwYWNlcjogOHB4O1xuJHNwYWNlcnM6ICgpO1xuXG5AZm9yICRpIGZyb20gMCB0aHJvdWdoIDIwIHtcbiAgJHNwYWNlcnM6IG1hcC1tZXJnZShcbiAgICAkc3BhY2VycyxcbiAgICAoXG4gICAgICAkaTogJHNwYWNlciAqICRpLFxuICAgIClcbiAgKTtcbn1cblxuJGVuYWJsZS1zaGFkb3dzOiBmYWxzZTtcblxuJGJvZHktYmc6ICNmZmY7XG4kYm9keS1jb2xvcjogIzAwMDtcblxuJHdoaXRlOiB3aGl0ZTtcbiRjb2xvci1lcnJvcjogI2M4MjMyMztcbiRjb250ZW50LWJnOiAkd2hpdGU7XG4kY3lhbjogI2MzZGJkYjtcbiRvcmFuZ2U6ICNmYTdiNGM7XG5cbiRwcmltYXJ5LWdyZWVuOiAjNmVhZTkzO1xuXG4kZm9udC13ZWlnaHQtYmFzZTogMzAwO1xuJGZvbnQtd2VpZ2h0LWJvbGRlcjogNzAwO1xuJGZvbnQtd2VpZ2h0LWJvbGQ6IDkwMDtcblxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiA0MDA7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6IDEuMDc7XG5cbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogMDtcblxuJGxpbmstY29sb3I6ICMwMDA7XG4kZHQtZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG5cbiRib3JkZXItcmFkaXVzOiAwO1xuXG4kYnRuLWJveC1zaGFkb3c6IG5vbmU7XG4kYnRuLWZvY3VzLWJveC1zaGFkb3c6IG5vbmU7XG4kYnRuLWZvY3VzLXdpZHRoOiAwO1xuJGJ0bi1hY3RpdmUtYm94LXNoYWRvdzogbm9uZTtcblxuJGVuYWJsZS12YWxpZGF0aW9uLWljb25zOiBmYWxzZTtcbiRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQ6IG5vbmU7XG4kZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQ6IG5vbmU7XG5cbiRpbnB1dC1jb2xvcjogIzAwMDtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICMwMDA7XG4kaW5wdXQtYm94LXNoYWRvdzogbm9uZTtcbiRpbnB1dC1sYWJlbC1jb2xvcjogIzAwMDtcbiRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogIzgwODA4MDtcbiRpbnB1dC1iZzogdHJhbnNwYXJlbnQ7XG4kaW5wdXQtZGlzYWJsZWQtYmc6IHRyYW5zcGFyZW50O1xuXG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAkb3JhbmdlO1xuJGlucHV0LWZvY3VzLXdpZHRoOiAycHg7XG5cbiRpbnB1dC1idG4tYm9yZGVyLXdpZHRoOiAycHg7XG4kaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6IG5vbmU7XG5cbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogdHJhbnNwYXJlbnQ7XG5cbiRtb2RhbC1sZzogOTYwcHg7XG4kbW9kYWwtbWQ6IDc5MnB4O1xuJG1vZGFsLXNtOiA1OTJweDtcbiRtb2RhbC1pbm5lci1wYWRkaW5nOiA0MHB4O1xuJG1vZGFsLWZvb3Rlci1tYXJnaW4tYmV0d2VlbjogMjBweDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci1yYWRpdXM6IDBweDtcbiRtb2RhbC1jb250ZW50LWlubmVyLWJvcmRlci1yYWRpdXM6IDBweDtcblxuJGxpbmstZGVjb3JhdGlvbjogJyc7XG5cbiRjb250ZW50LW1heC13aWR0aDogbm9uZTtcblxuXG5AbWl4aW4gY292ZXIoJHBvc2l0aW9uKSB7XG4gIHBvc2l0aW9uOiAkcG9zaXRpb247XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbkBtaXhpbiBjb3Zlci1wc2V1ZG8oJHBvc2l0aW9uKSB7XG4gIEBpbmNsdWRlIGNvdmVyKCRwb3NpdGlvbik7XG4gIGNvbnRlbnQ6ICcnO1xufVxuXG5AbWl4aW4gbGluZS1jbGFtcCgkbGluZXNDb3VudCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAkbGluZXNDb3VudDtcbn1cblxuLy8gLS0tLVxuLy8gcmVtIG1peGluc1xuLy8gLS0tLVxuJHJlbS1iYXNlOiAxNnB4ICFkZWZhdWx0O1xuLy8gbGlzdC1zZXBhcmF0b3IgcG9seWZpbGwgYnkgSHVnbyBHaXJhdWRlbCAoaHR0cHM6Ly9zYXNzLWNvbXBhdGliaWxpdHkuZ2l0aHViLmlvLyNsaXN0X3NlcGFyYXRvcl9mdW5jdGlvbilcbkBmdW5jdGlvbiByZW0tc2VwYXJhdG9yKCRsaXN0KSB7XG4gIEBpZiBmdW5jdGlvbi1leGlzdHMoXCJsaXN0LXNlcGFyYXRvclwiKSA9PXRydWUge1xuICAgIEByZXR1cm4gbGlzdC1zZXBhcmF0b3IoJGxpc3QpO1xuICB9XG4gICR0ZXN0LWxpc3Q6ICgpO1xuICBAZWFjaCAkaXRlbSBpbiAkbGlzdCB7XG4gICAgJHRlc3QtbGlzdDogYXBwZW5kKCR0ZXN0LWxpc3QsICRpdGVtLCBzcGFjZSk7XG4gIH1cbiAgQHJldHVybiBpZigkdGVzdC1saXN0PT0kbGlzdCwgc3BhY2UsIGNvbW1hKTtcbn1cblxuQG1peGluIHJlbS1iYXNlKCR6b29tOiAxMDAlKSB7XG4gIGZvbnQtc2l6ZTogJHpvb20gLyAxNnB4ICogJHJlbS1iYXNlO1xufVxuXG5AZnVuY3Rpb24gcmVtLWNvbnZlcnQoJHRvLCAkdmFsdWVzLi4uKSB7XG4gICRyZXN1bHQ6ICgpO1xuICAkc2VwYXJhdG9yOiByZW0tc2VwYXJhdG9yKCR2YWx1ZXMpO1xuICBAZWFjaCAkdmFsdWUgaW4gJHZhbHVlcyB7XG4gICAgQGlmIHR5cGUtb2YoJHZhbHVlKSA9PSBcIm51bWJlclwiIGFuZCB1bml0KCR2YWx1ZSkgPT0gXCJyZW1cIiBhbmQgJHRvPT0gXCJweFwiIHtcbiAgICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCAkdmFsdWUgLyAxcmVtICogJHJlbS1iYXNlLCAkc2VwYXJhdG9yKTtcbiAgICB9IEBlbHNlIGlmIHR5cGUtb2YoJHZhbHVlKSA9PSBcIm51bWJlclwiIGFuZCB1bml0KCR2YWx1ZSkgPT0gXCJweFwiIGFuZCAkdG89PSBcInJlbVwiIHtcbiAgICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCAkdmFsdWUgLyAoJHJlbS1iYXNlIC8gMXJlbSksICRzZXBhcmF0b3IpO1xuICAgIH0gQGVsc2UgaWYgdHlwZS1vZigkdmFsdWUpID09IFwibGlzdFwiIHtcbiAgICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCByZW0tY29udmVydCgkdG8sICR2YWx1ZS4uLiksICRzZXBhcmF0b3IpO1xuICAgIH0gQGVsc2Uge1xuICAgICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsICR2YWx1ZSwgJHNlcGFyYXRvcik7XG4gICAgfVxuICB9XG4gIEByZXR1cm4gaWYobGVuZ3RoKCRyZXN1bHQpID09MSwgbnRoKCRyZXN1bHQsIDEpLCAkcmVzdWx0KTtcbn1cblxuQGZ1bmN0aW9uIHJlbSgkdmFsdWVzLi4uKSB7XG4gIEByZXR1cm4gcmVtLWNvbnZlcnQocmVtLCAkdmFsdWVzLi4uKTtcbn1cblxuQG1peGluIHJlbSgkcHJvcGVydGllcywgJHZhbHVlcy4uLikge1xuICBAaWYgdHlwZS1vZigkcHJvcGVydGllcykgPT0gXCJtYXBcIiB7XG4gICAgQGVhY2ggJHByb3BlcnR5IGluIG1hcC1rZXlzKCRwcm9wZXJ0aWVzKSB7XG4gICAgICBAaW5jbHVkZSByZW0oJHByb3BlcnR5LCBtYXAtZ2V0KCRwcm9wZXJ0aWVzLCAkcHJvcGVydHkpKTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XG4gICAgICAjeyRwcm9wZXJ0eX06IHJlbS1jb252ZXJ0KHJlbSwgJHZhbHVlcy4uLik7XG4gICAgfVxuICB9XG59XG5cbi8vICRiYXNlLWZvbnQtc2l6ZTogMTAwJSAhZGVmYXVsdDtcbi8vIC8vJGJhc2UtbGluZS1oZWlnaHQgaXMgMjRweCB3aGlsZSAkYmFzZS1mb250LXNpemUgaXMgMTVweFxuLy8gJGJhc2UtbGluZS1oZWlnaHQ6IDE1MCU7XG4vLyBJdCBzdHJpcHMgdGhlIHVuaXQgb2YgbWVhc3VyZSBhbmQgcmV0dXJucyBpdFxuQGZ1bmN0aW9uIHN0cmlwLXVuaXQoJG51bSkge1xuICBAcmV0dXJuICRudW0gLyAoJG51bSAqIDAgKyAxKTtcbn1cblxuLy8gTmV3IFN5bnRheCwgYWxsb3dzIHRvIG9wdGlvbmFsbHkgY2FsY3VsYXRlIG9uIGEgZGlmZmVyZW50IGJhc2UgdmFsdWUgdG8gY291bnRlciBjb21wb3VuZGluZyBlZmZlY3Qgb2YgZW1cXCdzLlxuLy8gQ2FsbCB3aXRoIDEsIDIsIDMgb3IgNCBwYXJhbWV0ZXJzLCBcXCdweFxcJyBpcyBub3QgcmVxdWlyZWQgYnV0IHN1cHBvcnRlZFxuLy8gcmVtLWNhbGMoMTAgMjAgMzBweCA0MCk7XG4vLyBTcGFjZSBkZWxpbWl0ZWQsIGlmIHlvdSB3YW50IHRvIGRlbGltaXQgdXNpbmcgY29tbWFcXCdzLCB3cmFwIGl0IGluIGFub3RoZXIgcGFpciBvZiBicmFja2V0c1xuLy8gcmVtLWNhbGMoKDEwLCAyMCwgMzAsIDQwcHgpKTtcbi8vIE9wdGlvbmFsbHkgY2FsbCB3aXRoIGEgZGlmZmVyZW50IGJhc2UgKGVnOiA4cHgpIHRvIGNhbGN1bGF0ZSBlbS5cbi8vIHJlbS1jYWxjKDE2cHggMzJweCA0OHB4LCA4cHgpO1xuLy8gSWYgeW91IHJlcXVpcmUgdG8gY29tbWEgc2VwYXJhdGUgeW91ciBsaXN0XG4vLyByZW0tY2FsYygoMTZweCwgMzJweCwgNDgpLCA4cHgpO1xuQGZ1bmN0aW9uIGNvbnZlcnQtdG8tcmVtKCR2YWx1ZSwgJGJhc2UtdmFsdWU6ICRyZW0tYmFzZSkge1xuICAkdmFsdWU6IHN0cmlwLXVuaXQoJHZhbHVlKSAvIHN0cmlwLXVuaXQoJGJhc2UtdmFsdWUpICogMXJlbTtcbiAgQGlmICgkdmFsdWU9PTByZW0pIHtcbiAgICAkdmFsdWU6IDA7XG4gIH0gLy8gVHVybiAwZW0gaW50byAwXG4gIEByZXR1cm4gJHZhbHVlO1xufVxuXG5AZnVuY3Rpb24gcmVtLWNhbGMoJHZhbHVlcywgJGJhc2UtdmFsdWU6ICRyZW0tYmFzZSkge1xuICAkbWF4OiBsZW5ndGgoJHZhbHVlcyk7XG4gIEBpZiAkbWF4PT0xIHtcbiAgICBAcmV0dXJuIGNvbnZlcnQtdG8tcmVtKG50aCgkdmFsdWVzLCAxKSwgJGJhc2UtdmFsdWUpO1xuICB9XG4gICRyZW1WYWx1ZXM6ICgpO1xuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRtYXgge1xuICAgICRyZW1WYWx1ZXM6IGFwcGVuZCgkcmVtVmFsdWVzLCBjb252ZXJ0LXRvLXJlbShudGgoJHZhbHVlcywgJGkpLCAkYmFzZS12YWx1ZSkpO1xuICB9XG4gIEByZXR1cm4gJHJlbVZhbHVlcztcbn1cblxuaHRtbCB7XG4gIEBpbmNsdWRlIHJlbS1iYXNlO1xufVxuIiwiQGltcG9ydCAnbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucyc7XG5AaW1wb3J0ICdzcmMvYXNzZXRzL3Njc3MvdGhlbWUtYW5ndWxhci1zdGFydGVyMS9ib290c3RyYXAvdmFyaWFibGVzJztcblxuLmJsb2NrIHtcbiAgJl9fbWFpbiB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgbWluLWhlaWdodDogMTAwc3ZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAmX193cmFwcGVyIHtcbiAgICBwYWRkaW5nOiA0MHB4IDA7XG4gIH1cblxuICAmX190ZXh0IHtcbiAgICBtYXgtd2lkdGg6IDY0OXB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IDEyMHB4O1xuICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHNtKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogOTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCwgeHhsOiAxNDAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4LCB4eGw6IDE0MDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsIHh4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEBpZiBub3QgJG4ge1xuICAgIEBlcnJvciBcImJyZWFrcG9pbnQgYCN7JG5hbWV9YCBub3QgZm91bmQgaW4gYCN7JGJyZWFrcG9pbnRzfWBcIjtcbiAgfVxuICBAcmV0dXJuIGlmKCRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgsIHh4bDogMTQwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyByZWR1Y2VkIGJ5IDAuMDJweCB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2Zcbi8vIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgobWQsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCwgeHhsOiAxNDAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtYXggYW5kICRtYXggPiAwLCAkbWF4IC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCwgeHhsOiAxNDAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgsIHh4bDogMTQwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiAgYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6ICBicmVha3BvaW50LW1heCgkbmV4dCwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5leHQsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}


/***/ })

}]);
//# sourceMappingURL=src_app_modules_error_error_module_ts.js.map