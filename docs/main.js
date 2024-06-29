(self["webpackChunkangular_starter1"] = self["webpackChunkangular_starter1"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




const routes = [];
const baseRoutes = [{
  path: '',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/home/home.module */ 7527)).then(m => m.HomeModule)
}, {
  path: 'error',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_error_error_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/error/error.module */ 8941)).then(m => m.ErrorModule)
}];
src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.availableLangs.forEach((lang, index) => {
  baseRoutes.forEach(route => {
    routes.push({
      ...route,
      path: `${index ? lang : ''}/${route.path}`.replace(/(^\/|\/$)/g, '')
    });
  });
});
routes.push({
  path: '**',
  redirectTo: '/error/404'
});
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always',
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled'
    }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/loader.service */ 3096);
/* harmony import */ var src_app_core_services_lang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/lang.service */ 9907);
/* harmony import */ var src_app_core_services_ssr_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/ssr.service */ 9404);
/* harmony import */ var src_app_shared_modules_scripts_services_scripts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/modules/scripts/services/scripts.service */ 7489);
/* harmony import */ var src_app_core_services_accessibility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/accessibility.service */ 8149);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);







class AppComponent {
  constructor(loaderService, langService, ssrService, scriptsService, accessibilityService) {
    this.loaderService = loaderService;
    this.langService = langService;
    this.ssrService = ssrService;
    this.scriptsService = scriptsService;
    this.accessibilityService = accessibilityService;
  }
  ngOnInit() {
    this.detectLanguage();
    this.accessibilityService.initA11y();
  }
  ngAfterViewInit() {
    this.loaderService.hideSiteLoader();
  }
  detectLanguage() {
    if (this.ssrService.isBrowser) {
      this.langService.setDocumentLang(this.langService.lang);
    }
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_lang_service__WEBPACK_IMPORTED_MODULE_1__.LangService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_ssr_service__WEBPACK_IMPORTED_MODULE_2__.SsrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_modules_scripts_services_scripts_service__WEBPACK_IMPORTED_MODULE_3__.ScriptsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_accessibility_service__WEBPACK_IMPORTED_MODULE_4__.AccessibilityService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-recaptcha */ 8667);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_common_locales_uk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/uk */ 7360);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app-routing.module */ 3966);
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.component */ 6401);
/* harmony import */ var src_app_transloco_root_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/transloco-root.module */ 4780);
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/core.module */ 8081);
/* harmony import */ var src_app_core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/interceptors/error.interceptor */ 8085);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);














(0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.registerLocaleData)(_angular_common_locales_uk__WEBPACK_IMPORTED_MODULE_7__["default"]);
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [src_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    providers: [{
      provide: ng_recaptcha__WEBPACK_IMPORTED_MODULE_9__.RECAPTCHA_V3_SITE_KEY,
      useValue: src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.recaptcha.siteKey
    }, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS,
      useClass: src_app_core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_4__.ErrorInterceptor,
      multi: true
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule.forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, src_app_transloco_root_module__WEBPACK_IMPORTED_MODULE_2__.TranslocoRootModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [src_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, src_app_transloco_root_module__WEBPACK_IMPORTED_MODULE_2__.TranslocoRootModule]
  });
})();

/***/ }),

/***/ 8081:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoreModule: () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var src_app_core_directives_accessibility_context_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/directives/accessibility-context.directive */ 6492);
/* harmony import */ var src_app_core_directives_http_code_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/directives/http-code.directive */ 3378);
/* harmony import */ var src_app_core_interceptors_builtin_api_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/interceptors/builtin-api.interceptor */ 2262);
/* harmony import */ var src_app_core_pipes_divides_split_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/pipes/divides-split.pipe */ 3215);
/* harmony import */ var src_app_core_pipes_memoize_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/pipes/memoize.pipe */ 7994);
/* harmony import */ var src_app_core_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/pipes/safe.pipe */ 9802);
/* harmony import */ var src_app_core_pipes_youtube_code_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/pipes/youtube-code.pipe */ 5778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);








class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [src_app_core_interceptors_builtin_api_interceptor__WEBPACK_IMPORTED_MODULE_2__.BuiltinApidProvider]
    };
  }
  static #_ = this.ɵfac = function CoreModule_Factory(t) {
    return new (t || CoreModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: CoreModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    providers: [src_app_core_interceptors_builtin_api_interceptor__WEBPACK_IMPORTED_MODULE_2__.BuiltinApidProvider]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CoreModule, {
    declarations: [src_app_core_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_5__.SafePipe, src_app_core_pipes_divides_split_pipe__WEBPACK_IMPORTED_MODULE_3__.DividesSplitPipe, src_app_core_pipes_youtube_code_pipe__WEBPACK_IMPORTED_MODULE_6__.YoutubeCodePipe, src_app_core_pipes_memoize_pipe__WEBPACK_IMPORTED_MODULE_4__.MemoizePipe, src_app_core_directives_http_code_directive__WEBPACK_IMPORTED_MODULE_1__.HttpCodeDirective, src_app_core_directives_accessibility_context_directive__WEBPACK_IMPORTED_MODULE_0__.AccessibilityContextDirective],
    exports: [src_app_core_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_5__.SafePipe, src_app_core_pipes_divides_split_pipe__WEBPACK_IMPORTED_MODULE_3__.DividesSplitPipe, src_app_core_pipes_youtube_code_pipe__WEBPACK_IMPORTED_MODULE_6__.YoutubeCodePipe, src_app_core_pipes_memoize_pipe__WEBPACK_IMPORTED_MODULE_4__.MemoizePipe, src_app_core_directives_http_code_directive__WEBPACK_IMPORTED_MODULE_1__.HttpCodeDirective, src_app_core_directives_accessibility_context_directive__WEBPACK_IMPORTED_MODULE_0__.AccessibilityContextDirective]
  });
})();

/***/ }),

/***/ 6492:
/*!********************************************************************!*\
  !*** ./src/app/core/directives/accessibility-context.directive.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessibilityContextDirective: () => (/* binding */ AccessibilityContextDirective)
/* harmony export */ });
/* harmony import */ var src_app_core_interfaces_accessibility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/interfaces/accessibility */ 677);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_core_services_accessibility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/accessibility.service */ 8149);



class AccessibilityContextDirective {
  constructor(accessibilityService) {
    this.accessibilityService = accessibilityService;
    this.ContrastMode = src_app_core_interfaces_accessibility__WEBPACK_IMPORTED_MODULE_0__.ContrastMode;
  }
  static #_ = this.ɵfac = function AccessibilityContextDirective_Factory(t) {
    return new (t || AccessibilityContextDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_accessibility_service__WEBPACK_IMPORTED_MODULE_1__.AccessibilityService));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: AccessibilityContextDirective,
    selectors: [["", "appAccessibilityContext", ""]],
    exportAs: ["accessibilityContext"]
  });
}


/***/ }),

/***/ 3378:
/*!********************************************************!*\
  !*** ./src/app/core/directives/http-code.directive.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpCodeDirective: () => (/* binding */ HttpCodeDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class HttpCodeDirective {
  constructor(el, renderer) {
    this.el = el;
    this.renderer = renderer;
  }
  setStatusCode() {
    const div = this.renderer.createElement('div');
    div.style.display = 'none';
    div.innerHTML = `ssrHttpStatusCode:${this.httpCode}`;
    this.renderer.appendChild(this.el.nativeElement, div);
  }
  ngOnInit() {
    if (/^\d\d\d$/.test(`${this.httpCode}`)) {
      this.setStatusCode();
    }
  }
  static #_ = this.ɵfac = function HttpCodeDirective_Factory(t) {
    return new (t || HttpCodeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: HttpCodeDirective,
    selectors: [["", "appHttpCode", ""]],
    inputs: {
      httpCode: ["appHttpCode", "httpCode"]
    }
  });
}


/***/ }),

/***/ 2262:
/*!**************************************************************!*\
  !*** ./src/app/core/interceptors/builtin-api.interceptor.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuiltinApiInterceptor: () => (/* binding */ BuiltinApiInterceptor),
/* harmony export */   BuiltinApidProvider: () => (/* binding */ BuiltinApidProvider)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 2607);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* eslint-disable @typescript-eslint/no-var-requires */





class BuiltinApiInterceptor {
  intercept(request, next) {
    // wrap in delayed observable to simulate server api call
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(() => {
      let assetPath;
      if (request.method === 'GET') {
        assetPath = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.builtinApi.get.find(path => request.url.endsWith(path));
        if (assetPath) {
          return this.ok(__webpack_require__(9169)(`./data${assetPath}`).data);
        }
      }
      if (request.method === 'POST') {
        assetPath = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.builtinApi.post.find(path => request.url.endsWith(path));
        if (assetPath) {
          return this.ok(__webpack_require__(9169)(`./data${assetPath}`).data);
        }
      }
      return next.handle(request);
    }));
  }
  ok(body) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
      status: 200,
      body
    }));
  }
  unauthorized() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpErrorResponse({
      status: 401,
      error: {
        message: 'Unauthorised'
      }
    }));
  }
  error(message) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpErrorResponse({
      status: 400,
      error: {
        message
      }
    }));
  }
  static #_ = this.ɵfac = function BuiltinApiInterceptor_Factory(t) {
    return new (t || BuiltinApiInterceptor)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: BuiltinApiInterceptor,
    factory: BuiltinApiInterceptor.ɵfac
  });
}

const BuiltinApidProvider = {
  provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HTTP_INTERCEPTORS,
  useClass: BuiltinApiInterceptor,
  multi: true
};

/***/ }),

/***/ 8085:
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/error.interceptor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorInterceptor: () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_core_services_error_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/error.service */ 1763);




class ErrorInterceptor {
  constructor(errorService) {
    this.errorService = errorService;
  }
  intercept(request, next) {
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
      switch (err.status) {
        case 401:
          break;
        case 500:
          if (request.method !== 'GET') {
            // FIXME: remove after getting error code from backend
            this.errorService.triggerModal();
          }
          break;
      }
      const error = err.error.message || err.statusText;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
  static #_ = this.ɵfac = function ErrorInterceptor_Factory(t) {
    return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_core_services_error_service__WEBPACK_IMPORTED_MODULE_0__.ErrorService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ErrorInterceptor,
    factory: ErrorInterceptor.ɵfac
  });
}


/***/ }),

/***/ 677:
/*!**************************************************!*\
  !*** ./src/app/core/interfaces/accessibility.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContrastMode: () => (/* binding */ ContrastMode)
/* harmony export */ });
var ContrastMode;
(function (ContrastMode) {
  ContrastMode["Color"] = "color";
  ContrastMode["Contrast"] = "contrast";
})(ContrastMode || (ContrastMode = {}));

/***/ }),

/***/ 3215:
/*!**************************************************!*\
  !*** ./src/app/core/pipes/divides-split.pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DividesSplitPipe: () => (/* binding */ DividesSplitPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class DividesSplitPipe {
  transform(value, splitLength = 3, minLength = 0) {
    if (!value) {
      return '0';
    }
    const tmp = value.toString().split('.');
    let valueStr = tmp[0];
    const res = [];
    if (tmp.length > 1) {
      for (let i = 1; i < tmp.length; i++) {
        res.push(tmp[i]);
      }
      res.push(',');
    }
    if (valueStr.length < minLength) {
      valueStr = Array(minLength - valueStr.length).fill('0').join('') + valueStr;
    }
    for (let i = valueStr.length; i > 0; i -= splitLength) {
      res.push(valueStr.substring(Math.max(0, i - splitLength), i));
    }
    return res.reverse().join(' ').replace(/ ,/, ',');
  }
  static #_ = this.ɵfac = function DividesSplitPipe_Factory(t) {
    return new (t || DividesSplitPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "dividesSplit",
    type: DividesSplitPipe,
    pure: true
  });
}


/***/ }),

/***/ 7994:
/*!********************************************!*\
  !*** ./src/app/core/pipes/memoize.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MemoizePipe: () => (/* binding */ MemoizePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class MemoizePipe {
  transform(fn, ...args) {
    return fn(...args);
  }
  static #_ = this.ɵfac = function MemoizePipe_Factory(t) {
    return new (t || MemoizePipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "memoize",
    type: MemoizePipe,
    pure: true
  });
}


/***/ }),

/***/ 9802:
/*!*****************************************!*\
  !*** ./src/app/core/pipes/safe.pipe.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafePipe: () => (/* binding */ SafePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);


class SafePipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(value, type) {
    switch (type) {
      case 'html':
        return this.sanitizer.bypassSecurityTrustHtml(value);
      case 'style':
        return this.sanitizer.bypassSecurityTrustStyle(value);
      case 'script':
        return this.sanitizer.bypassSecurityTrustScript(value);
      case 'url':
        return this.sanitizer.bypassSecurityTrustUrl(value);
      case 'resourceUrl':
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    }
    return undefined;
  }
  static #_ = this.ɵfac = function SafePipe_Factory(t) {
    return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "safe",
    type: SafePipe,
    pure: true
  });
}


/***/ }),

/***/ 5778:
/*!*************************************************!*\
  !*** ./src/app/core/pipes/youtube-code.pipe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   YoutubeCodePipe: () => (/* binding */ YoutubeCodePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class YoutubeCodePipe {
  transform(value) {
    if (value.indexOf('watch?v=') !== -1) {
      return value.match('v=([a-zA-Z0-9-_]+)')?.[1];
    } else {
      return value.split('/').pop();
    }
  }
  static #_ = this.ɵfac = function YoutubeCodePipe_Factory(t) {
    return new (t || YoutubeCodePipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "youtubeCode",
    type: YoutubeCodePipe,
    pure: true
  });
}


/***/ }),

/***/ 8149:
/*!********************************************************!*\
  !*** ./src/app/core/services/accessibility.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessibilityService: () => (/* binding */ AccessibilityService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var src_app_core_interfaces_accessibility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/interfaces/accessibility */ 677);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage.service */ 8895);




class AccessibilityService {
  constructor(localStorage, rendererFactory, document) {
    this.localStorage = localStorage;
    this.rendererFactory = rendererFactory;
    this.document = document;
    this.fontSizeMap = ['12pt', '14.5pt', '18pt'];
    this.minFontSizeLevel = 0;
    this.maxFontSizeLevel = this.fontSizeMap.length - 1;
    this.storageKeyMap = {
      contrastMode: 'contrastMode',
      fontSizeLevel: 'fontSizeLevel'
    };
    this.htmlTag = this.document.documentElement;
    this.bodyTag = this.document.body;
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }
  initA11y() {
    const [storedContrastMode, storedFontSizeLevel] = [this.localStorage.getItem(this.storageKeyMap.contrastMode), this.localStorage.getItem(this.storageKeyMap.fontSizeLevel)];
    if (storedContrastMode) {
      this.contrastMode = storedContrastMode;
    } else {
      this.contrastMode = src_app_core_interfaces_accessibility__WEBPACK_IMPORTED_MODULE_0__.ContrastMode.Color;
      this.localStorage.setItem(this.storageKeyMap.contrastMode, this.contrastMode);
    }
    if (storedFontSizeLevel && typeof storedFontSizeLevel === 'number') {
      this.fontSizeLevel = storedFontSizeLevel;
    } else {
      this.fontSizeLevel = 0;
      this.localStorage.setItem(this.storageKeyMap.fontSizeLevel, this.fontSizeLevel);
    }
    this.renderer.addClass(this.bodyTag, this.contrastMode);
    if (this.contrastMode === src_app_core_interfaces_accessibility__WEBPACK_IMPORTED_MODULE_0__.ContrastMode.Contrast) {
      this.renderer.setStyle(this.htmlTag, 'font-size', this.fontSizeMap[this.fontSizeLevel]);
    }
  }
  setContrast(newContrastMode) {
    const prevContrastMode = this.contrastMode !== newContrastMode ? this.contrastMode : undefined;
    this.contrastMode = newContrastMode;
    this.localStorage.setItem(this.storageKeyMap.contrastMode, this.contrastMode);
    this.renderer.addClass(this.bodyTag, this.contrastMode);
    if (prevContrastMode) {
      this.renderer.removeClass(this.bodyTag, prevContrastMode);
    }
    if (this.contrastMode === src_app_core_interfaces_accessibility__WEBPACK_IMPORTED_MODULE_0__.ContrastMode.Color) {
      this.disable();
    } else {
      this.setFontSize(this.fontSizeLevel);
    }
  }
  decrementFontSizeLevel() {
    this.setFontSize(this.fontSizeLevel - 1);
  }
  incrementFontSizeLevel() {
    this.setFontSize(this.fontSizeLevel + 1);
  }
  validateFontSizeLevel(newFontSizeLevel) {
    if (newFontSizeLevel < 0) {
      return 0;
    }
    if (newFontSizeLevel > this.maxFontSizeLevel) {
      return this.maxFontSizeLevel;
    }
    return newFontSizeLevel;
  }
  setFontSize(newFontSizeLevel) {
    if (newFontSizeLevel < 0) {
      return;
    }
    this.fontSizeLevel = this.validateFontSizeLevel(newFontSizeLevel);
    this.localStorage.setItem(this.storageKeyMap.fontSizeLevel, this.fontSizeLevel);
    this.renderer.setStyle(this.htmlTag, 'font-size', this.fontSizeMap[this.fontSizeLevel]);
  }
  reset() {
    this.setFontSize(0);
    this.setContrast(src_app_core_interfaces_accessibility__WEBPACK_IMPORTED_MODULE_0__.ContrastMode.Color);
  }
  enable() {
    this.renderer.addClass(this.bodyTag, this.contrastMode);
    this.renderer.removeClass(this.bodyTag, src_app_core_interfaces_accessibility__WEBPACK_IMPORTED_MODULE_0__.ContrastMode.Contrast);
    this.renderer.removeClass(this.bodyTag, src_app_core_interfaces_accessibility__WEBPACK_IMPORTED_MODULE_0__.ContrastMode.Color);
    this.setContrast(this.contrastMode);
    this.setFontSize(this.fontSizeLevel);
  }
  disable() {
    this.renderer.removeClass(this.bodyTag, src_app_core_interfaces_accessibility__WEBPACK_IMPORTED_MODULE_0__.ContrastMode.Contrast);
    this.renderer.addClass(this.bodyTag, src_app_core_interfaces_accessibility__WEBPACK_IMPORTED_MODULE_0__.ContrastMode.Color);
    this.renderer.setStyle(this.htmlTag, 'font-size', this.fontSizeMap[0]);
  }
  static #_ = this.ɵfac = function AccessibilityService_Factory(t) {
    return new (t || AccessibilityService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.RendererFactory2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AccessibilityService,
    factory: AccessibilityService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 1763:
/*!************************************************!*\
  !*** ./src/app/core/services/error.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorService: () => (/* binding */ ErrorService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class ErrorService {
  constructor() {
    this.errorModalSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.showModal$ = this.errorModalSubject.asObservable();
  }
  triggerModal() {
    this.errorModalSubject.next();
  }
  static #_ = this.ɵfac = function ErrorService_Factory(t) {
    return new (t || ErrorService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ErrorService,
    factory: ErrorService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 8803:
/*!*********************************************!*\
  !*** ./src/app/core/services/ga.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GaService: () => (/* binding */ GaService)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_core_services_ssr_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/ssr.service */ 9404);





class GaService {
  constructor(ssrService, router) {
    this.ssrService = ssrService;
    this.router = router;
  }
  init() {
    const windowWithGA = window;
    if (this.ssrService.isBrowser) {
      if (windowWithGA && 'ga' in windowWithGA) {
        if (windowWithGA.ga.getAll) {
          this.tracker = windowWithGA.ga.getAll()[0];
        }
      }
      if (!this.tracker) {
        if (windowWithGA && 'gtag' in windowWithGA) {
          this.gtag = windowWithGA.gtag;
        }
      }
      this.startTrackPages();
    }
  }
  startTrackPages() {
    let isFirstTransition = true;
    if (this.tracker) {
      this.router.events.subscribe(event => {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
          if (!isFirstTransition) {
            this.tracker?.set('page', event.urlAfterRedirects);
            this.tracker?.send('pageview');
          } else {
            isFirstTransition = false;
          }
        }
      });
    }
  }
  sendEvent(eventName, eventOptions) {
    if (this.tracker) {
      this.tracker.send(eventName);
    } else if (this.gtag) {
      if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
        // eslint-disable-next-line no-console
        console.log(`Send GA Event: ${eventName}${eventOptions ? ', ' + JSON.stringify(eventOptions) : ''}`);
      }
      this.gtag('event', eventName, eventOptions || {});
    }
  }
  static #_ = this.ɵfac = function GaService_Factory(t) {
    return new (t || GaService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_core_services_ssr_service__WEBPACK_IMPORTED_MODULE_1__.SsrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: GaService,
    factory: GaService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 9907:
/*!***********************************************!*\
  !*** ./src/app/core/services/lang.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LangService: () => (/* binding */ LangService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_core_services_ssr_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/ssr.service */ 9404);
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage.service */ 8895);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/transloco */ 9041);







class LangService {
  constructor(ssrService, localStorage, translate, location, document) {
    this.ssrService = ssrService;
    this.localStorage = localStorage;
    this.translate = translate;
    this.location = location;
    this.document = document;
    this.langChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  get lang() {
    return this.translate.getActiveLang();
  }
  get langDefault() {
    return this.translate.getDefaultLang();
  }
  setLang(lang, auto = false) {
    this.translate.setActiveLang(lang);
    if (!auto) {
      this.localStorage.setItem('lang', this.lang);
    }
    if (this.ssrService.isBrowser) {
      this.setTranslatedLocation();
    }
    this.setDocumentLang(lang);
    this.langChanged.emit(this.lang);
  }
  setDocumentLang(lang) {
    this.document.documentElement.lang = lang;
  }
  getTranslatedUrl(url) {
    const urlArray = url.split('/');
    if (urlArray[1].length === 2) {
      if (this.lang === this.langDefault) {
        urlArray.splice(1, 1);
      } else {
        urlArray[1] = this.lang;
      }
    } else {
      if (this.lang !== this.langDefault) {
        urlArray.unshift('');
        urlArray[1] = this.lang;
      }
    }
    return urlArray.join('/').replace(/\/$/g, '');
  }
  setTranslatedLocation() {
    this.location.go(this.getTranslatedUrl(location.pathname), location.href.split('?')[1] || '');
  }
  static #_ = this.ɵfac = function LangService_Factory(t) {
    return new (t || LangService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_services_ssr_service__WEBPACK_IMPORTED_MODULE_0__.SsrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__.TranslocoService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: LangService,
    factory: LangService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 3096:
/*!*************************************************!*\
  !*** ./src/app/core/services/loader.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderService: () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_core_services_ssr_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/ssr.service */ 9404);



class LoaderService {
  constructor(ssrSerice, rendererFactory) {
    this.ssrSerice = ssrSerice;
    this.rendererFactory = rendererFactory;
    this.renderer = rendererFactory.createRenderer(null, null);
    this.bodyRef = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef(document.body);
    if (document.getElementById('site-loader')) {
      this.siteLoaderRef = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef(document.getElementById('site-loader'));
    }
  }
  showSiteLoader() {
    if (this.ssrSerice.isBrowser) {
      if (this.hideTimeout) {
        clearTimeout(this.hideTimeout);
        this.hideTimeout = undefined;
      }
      this.renderer.setStyle(this.siteLoaderRef, 'display', 'block');
      this.renderer.removeClass(this.bodyRef.nativeElement, 'loaded');
    }
  }
  hideSiteLoader() {
    if (this.siteLoaderRef) {
      if (this.ssrSerice.isBrowser) {
        this.hideTimeout = setTimeout(() => {
          window.onscroll = () => {};
          this.renderer.addClass(this.bodyRef.nativeElement, 'loaded');
          this.hideTimeout = setTimeout(() => {
            this.renderer.setStyle(this.siteLoaderRef?.nativeElement, 'display', 'none');
          }, 1000);
        }, 1000);
      } else {
        this.renderer.setStyle(this.siteLoaderRef?.nativeElement, 'display', 'none');
      }
    }
  }
  static #_ = this.ɵfac = function LoaderService_Factory(t) {
    return new (t || LoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_core_services_ssr_service__WEBPACK_IMPORTED_MODULE_0__.SsrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererFactory2));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: LoaderService,
    factory: LoaderService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 8895:
/*!********************************************************!*\
  !*** ./src/app/core/services/local-storage.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalStorageService: () => (/* binding */ LocalStorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_core_services_ssr_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/ssr.service */ 9404);


class LocalStorageService {
  constructor(ssrService) {
    this.ssrService = ssrService;
  }
  getItem(key) {
    if (!this.ssrService.isBrowser) {
      return undefined;
    }
    const value = localStorage.getItem(key);
    try {
      return JSON.parse(value || 'undefined');
    } catch (e) {
      return value === null ? undefined : value;
    }
  }
  setItem(key, value) {
    if (!this.ssrService.isBrowser) {
      return;
    }
    if (['string', 'number', 'boolean'].includes(typeof value)) {
      localStorage.setItem(key, value);
      return;
    }
    localStorage.setItem(key, JSON.stringify(value));
  }
  removeItem(key) {
    if (!this.ssrService.isBrowser) {
      return;
    }
    localStorage.removeItem(key);
  }
  clear() {
    if (!this.ssrService.isBrowser) {
      return;
    }
    localStorage.clear();
  }
  static #_ = this.ɵfac = function LocalStorageService_Factory(t) {
    return new (t || LocalStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_core_services_ssr_service__WEBPACK_IMPORTED_MODULE_0__.SsrService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: LocalStorageService,
    factory: LocalStorageService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 9404:
/*!**********************************************!*\
  !*** ./src/app/core/services/ssr.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SsrService: () => (/* binding */ SsrService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);



class SsrService {
  constructor(platformId) {
    this.isBrowser = false;
    this.isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(platformId);
  }
  static #_ = this.ɵfac = function SsrService_Factory(t) {
    return new (t || SsrService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: SsrService,
    factory: SsrService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 7489:
/*!********************************************************************!*\
  !*** ./src/app/shared/modules/scripts/services/scripts.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScriptsService: () => (/* binding */ ScriptsService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_core_services_ga_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/ga.service */ 8803);



class ScriptsService {
  constructor(rendererFactory, gaService, document) {
    this.rendererFactory = rendererFactory;
    this.gaService = gaService;
    this.document = document;
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }
  ngOnInit() {}
  initScripts(type) {
    if (type === 'analytic') {
      this.initScriptsGA();
      this.gaService.init();
      this.initGtm();
    }
  }
  initScriptsGA() {
    const script = this.renderer.createElement('script');
    const scriptGALink = this.renderer.createElement('script');
    scriptGALink.src = 'https://www.googletagmanager.com/gtag/js?id=G-SY435HYNPW';
    scriptGALink.async = true;
    script.text = `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-SY435HYNPW');
        `;
    this.renderer.appendChild(this.document.body, scriptGALink);
    this.renderer.appendChild(this.document.body, script);
  }
  initGtm() {
    const scriptGTMInitLink = this.renderer.createElement('script');
    const noscriptGTMInitLink = this.renderer.createElement('noscript');
    const iframe = this.renderer.createElement('iframe');
    scriptGTMInitLink.text = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-P9CCL46');`;
    iframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-P9CCL46';
    iframe.height = '0';
    iframe.width = '0';
    iframe.style = 'display:none;visibility:hidden;';
    this.renderer.appendChild(noscriptGTMInitLink, iframe);
    this.renderer.appendChild(this.document.head, scriptGTMInitLink);
    this.renderer.appendChild(this.document.body, noscriptGTMInitLink);
  }
  initScriptsYoutube() {
    const scriptSrc = `https://www.youtube.com/iframe_api`;
    if (this.document.querySelector(`script[src='${scriptSrc}']`)) {
      return;
    }
    const scriptTag = this.renderer.createElement('script');
    scriptTag.src = scriptSrc;
    this.renderer.appendChild(this.document.body, scriptTag);
  }
  static #_ = this.ɵfac = function ScriptsService_Factory(t) {
    return new (t || ScriptsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererFactory2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_core_services_ga_service__WEBPACK_IMPORTED_MODULE_0__.GaService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ScriptsService,
    factory: ScriptsService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 4780:
/*!******************************************!*\
  !*** ./src/app/transloco-root.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslocoHttpLoader: () => (/* binding */ TranslocoHttpLoader),
/* harmony export */   TranslocoRootModule: () => (/* binding */ TranslocoRootModule),
/* harmony export */   i18nInitializer: () => (/* binding */ i18nInitializer)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/transloco */ 9041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);






function i18nInitializer(router, transloco) {
  return () => {
    let lang = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.availableLangs[0];
    for (let i = 0; i < src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.availableLangs.length; i++) {
      if (window.location.pathname.startsWith(`/${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.availableLangs[i]}`)) {
        lang = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.availableLangs[i];
      }
    }
    transloco.setActiveLang(lang);
    return transloco.load(lang);
  };
}
class TranslocoHttpLoader {
  constructor(http) {
    this.http = http;
  }
  getTranslation(lang) {
    // TODO: some other idea of avoiding caching should be found
    return this.http.get(`/assets/i18n/${lang}.json?v=0`);
  }
  static #_ = this.ɵfac = function TranslocoHttpLoader_Factory(t) {
    return new (t || TranslocoHttpLoader)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: TranslocoHttpLoader,
    factory: TranslocoHttpLoader.ɵfac,
    providedIn: 'root'
  });
}

class TranslocoRootModule {
  static #_ = this.ɵfac = function TranslocoRootModule_Factory(t) {
    return new (t || TranslocoRootModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: TranslocoRootModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_INITIALIZER,
      useFactory: i18nInitializer,
      multi: true,
      deps: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router, _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__.TranslocoService]
    }, {
      provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__.TRANSLOCO_CONFIG,
      useValue: (0,_ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__.translocoConfig)({
        availableLangs: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.availableLangs,
        defaultLang: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.availableLangs[0],
        fallbackLang: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.availableLangs[0],
        reRenderOnLangChange: true,
        prodMode: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production,
        missingHandler: {
          allowEmpty: true
        }
      })
    }, {
      provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__.TRANSLOCO_LOADER,
      useClass: TranslocoHttpLoader
    }],
    imports: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__.TranslocoModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TranslocoRootModule, {
    exports: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__.TranslocoModule]
  });
})();

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
/* harmony import */ var zone_js_plugins_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/plugins/zone-error */ 2392);
/* harmony import */ var zone_js_plugins_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_plugins_zone_error__WEBPACK_IMPORTED_MODULE_0__);
const environment = {
  production: false,
  publicApi: {
    baseUrl: '',
    baseUrlSsr: ''
  },
  builtinApi: {
    post: [],
    get: ['/bundle/home']
  },
  fb: {
    appId: ''
  },
  recaptcha: {
    siteKey: ''
  },
  availableLangs: ['uk']
};
 // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);

/* eslint-disable no-console */



if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
function bootstrap() {
  _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));
}
if (document.readyState === 'complete') {
  bootstrap();
} else {
  document.addEventListener('DOMContentLoaded', bootstrap);
}

/***/ }),

/***/ 4000:
/*!****************************************!*\
  !*** ./src/assets/data/bundle/home.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   data: () => (/* binding */ data)
/* harmony export */ });
const data = {
  page: {
    translationList: [{
      lang: 'uk',
      contentData: {
        hero: {
          title: 'Starter'
        }
      }
    }]
  }
};

/***/ }),

/***/ 9169:
/*!***************************************!*\
  !*** ./src/assets/ sync ^\.\/data.*$ ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./data/bundle/home": 4000,
	"./data/bundle/home.js": 4000
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
webpackContext.id = 9169;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map