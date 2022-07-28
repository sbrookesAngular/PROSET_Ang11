(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sbrookes\zNode\zPROSET_NEW\src\main.ts */"zUnb");


/***/ }),

/***/ "8hKs":
/*!************************!*\
  !*** ./src/version.ts ***!
  \************************/
/*! exports provided: RuntimeVersion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeVersion", function() { return RuntimeVersion; });
class RuntimeVersion {
}
RuntimeVersion.version = '2.0.0';


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
/**
 * THIS FILE WAS GENERATED FROM msft-sme-build. DO NOT MODIFY. To change this file, make the appropriate changes in build
 *
 * The build system defaults to the dev environment which uses `environment.ts`, but if you do
 * `ng build --env=prod` then `environment.prod.ts` will be used instead.
 * The list of which env maps to which file can be found in `angular-cli.json`.
 */
const environment = {
    production: false
};


/***/ }),

/***/ "Mz/O":
/*!********************************************!*\
  !*** ./src/app/default/default.service.ts ***!
  \********************************************/
/*! exports provided: DefaultService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultService", function() { return DefaultService; });
/* harmony import */ var _microsoft_windows_admin_center_sdk_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/windows-admin-center-sdk/angular */ "W28e");
/* harmony import */ var _microsoft_windows_admin_center_sdk_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/windows-admin-center-sdk/core */ "t/l9");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _generated_powershell_scripts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../generated/powershell-scripts */ "tEo6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






class DefaultService {
    constructor(appContextService) {
        this.appContextService = appContextService;
    }
    Get_ComputerName_ps1() {
        const script = _microsoft_windows_admin_center_sdk_core__WEBPACK_IMPORTED_MODULE_1__["PowerShell"].createScript(_generated_powershell_scripts__WEBPACK_IMPORTED_MODULE_3__["PowerShellScripts"].Get_ComputerName.script);
        return this.getPowerShellResponse(script);
    }
    Get_Adapters_ps1() {
        const script = _microsoft_windows_admin_center_sdk_core__WEBPACK_IMPORTED_MODULE_1__["PowerShell"].createScript(_generated_powershell_scripts__WEBPACK_IMPORTED_MODULE_3__["PowerShellScripts"].Get_Adapters.script);
        return this.getPowerShellResponse(script);
    }
    getPowerShellResponse(script) {
        this.m_session = this.appContextService.powerShell.createSession(this.appContextService.activeConnection.nodeName);
        return this.appContextService.powerShell.run(this.m_session, script).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            console.log(response);
            if (response && response.results) {
                return response.results;
            }
            return 'no response';
        }));
    }
}
DefaultService.ɵfac = function DefaultService_Factory(t) { return new (t || DefaultService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_microsoft_windows_admin_center_sdk_angular__WEBPACK_IMPORTED_MODULE_0__["AppContextService"])); };
DefaultService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: DefaultService, factory: DefaultService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
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
webpackContext.id = "RnhZ";

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
/* harmony import */ var _microsoft_windows_admin_center_sdk_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/windows-admin-center-sdk/angular */ "W28e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor(appContext, navigationService) {
        this.appContext = appContext;
        this.navigationService = navigationService;
    }
    ngOnInit() {
        this.appContext.ngInit({ navigationService: this.navigationService });
    }
    ngOnDestroy() {
        this.appContext.ngDestroy();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_microsoft_windows_admin_center_sdk_angular__WEBPACK_IMPORTED_MODULE_0__["AppContextService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_microsoft_windows_admin_center_sdk_angular__WEBPACK_IMPORTED_MODULE_0__["NavigationService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["sme-root"]], decls: 2, vars: 0, consts: [[1, "sme-layout-absolute", "sme-position-inset-none"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sme-ux", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_microsoft_windows_admin_center_sdk_angular__WEBPACK_IMPORTED_MODULE_0__["SmeUxComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], encapsulation: 2 });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _microsoft_windows_admin_center_sdk_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/windows-admin-center-sdk/angular */ "W28e");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _default_default_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./default/default.service */ "Mz/O");










class AppModule {
    constructor(appContextService) {
        this.appContextService = appContextService;
        this.appContextService.initializeModule({});
    }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_microsoft_windows_admin_center_sdk_angular__WEBPACK_IMPORTED_MODULE_4__["AppContextService"])); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
        _microsoft_windows_admin_center_sdk_angular__WEBPACK_IMPORTED_MODULE_4__["ResourceService"],
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"],
            useClass: _microsoft_windows_admin_center_sdk_angular__WEBPACK_IMPORTED_MODULE_4__["AppErrorHandler"]
        },
        _default_default_service__WEBPACK_IMPORTED_MODULE_7__["DefaultService"]
    ], imports: [[
            _microsoft_windows_admin_center_sdk_angular__WEBPACK_IMPORTED_MODULE_4__["CoreServiceModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _microsoft_windows_admin_center_sdk_angular__WEBPACK_IMPORTED_MODULE_4__["DialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _microsoft_windows_admin_center_sdk_angular__WEBPACK_IMPORTED_MODULE_4__["SmeUxModule"],
            _microsoft_windows_admin_center_sdk_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"],
            _microsoft_windows_admin_center_sdk_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingWheelModule"],
            _microsoft_windows_admin_center_sdk_angular__WEBPACK_IMPORTED_MODULE_4__["GuidedPanelModule"],
            _microsoft_windows_admin_center_sdk_angular__WEBPACK_IMPORTED_MODULE_4__["IdleModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]], imports: [_microsoft_windows_admin_center_sdk_angular__WEBPACK_IMPORTED_MODULE_4__["CoreServiceModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _microsoft_windows_admin_center_sdk_angular__WEBPACK_IMPORTED_MODULE_4__["DialogModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _microsoft_windows_admin_center_sdk_angular__WEBPACK_IMPORTED_MODULE_4__["SmeUxModule"],
        _microsoft_windows_admin_center_sdk_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"],
        _microsoft_windows_admin_center_sdk_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingWheelModule"],
        _microsoft_windows_admin_center_sdk_angular__WEBPACK_IMPORTED_MODULE_4__["GuidedPanelModule"],
        _microsoft_windows_admin_center_sdk_angular__WEBPACK_IMPORTED_MODULE_4__["IdleModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "hN/g":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/es6/symbol */ "vqGA");
/* harmony import */ var core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_es6_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/es6/object */ "99sg");
/* harmony import */ var core_js_es6_object__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_object__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_es6_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/es6/function */ "4A4+");
/* harmony import */ var core_js_es6_function__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_function__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/es6/parse-int */ "oka+");
/* harmony import */ var core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/es6/parse-float */ "ifmr");
/* harmony import */ var core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_es6_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/es6/number */ "Lmuc");
/* harmony import */ var core_js_es6_number__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_number__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_es6_math__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/es6/math */ "CuTL");
/* harmony import */ var core_js_es6_math__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_math__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_es6_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/es6/string */ "V5/Y");
/* harmony import */ var core_js_es6_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_es6_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/es6/date */ "nx1v");
/* harmony import */ var core_js_es6_date__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_date__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_es6_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/es6/array */ "dQfE");
/* harmony import */ var core_js_es6_array__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_array__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/es6/regexp */ "rfyP");
/* harmony import */ var core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_es6_map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/es6/map */ "qKs0");
/* harmony import */ var core_js_es6_map__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_map__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_es6_set__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/es6/set */ "VXxg");
/* harmony import */ var core_js_es6_set__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_set__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/es6/reflect */ "VbrY");
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/es7/reflect */ "FZcq");
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! zone.js/dist/zone */ "pDpN");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _microsoft_windows_admin_center_sdk_core_polyfills__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @microsoft/windows-admin-center-sdk/core/polyfills */ "hK4m");
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
 * Microsoft Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.

 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
// tslint:disable:ordered-imports
// tslint:disable-next-line:jsdoc-format
/** IE9, IE10 and IE11 requires all of the following polyfills. **/













/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
// tslint:disable-next-line:jsdoc-format
/** Evergreen browsers require these. **/


// tslint:disable-next-line:jsdoc-format
/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
// Server management tools specific polyfills

/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Microsoft Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
/**
 * Need to import at least one locale-data with intl.
 */
// import 'intl/locale-data/jsonp/en';


/***/ }),

/***/ "tEo6":
/*!*********************************************!*\
  !*** ./src/generated/powershell-scripts.ts ***!
  \*********************************************/
/*! exports provided: PowerShellScripts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerShellScripts", function() { return PowerShellScripts; });
/* tslint:disable */
/**
 * @file Source code generated by gulp-ps-code.
 * @version 1.1
 */
var PowerShellScripts;
(function (PowerShellScripts) {
    'use strict';
    PowerShellScripts.module = 'microsoft.hci.snap-in-demo';
    PowerShellScripts.resourceName = 'MicrosoftHciSnapInDemo';
    PowerShellScripts.Get_Adapters = {
        command: 'Get-Adapters',
        script: "##Get-Adapters##:Get-Adapters.ps1\nGet-IntelNetAdapter\n"
    };
    PowerShellScripts.Get_ComputerName = {
        command: 'Get-ComputerName',
        script: "##Get-ComputerName##:Get-ComputerName.ps1\n$env:COMPUTERNAME\n"
    };
    PowerShellScripts.Get_IntelEthernet = {
        command: 'Get-IntelEthernet',
        script: "##Get-IntelEthernet##:Get-IntelEthernet.ps1\nfunction Get-IntelEthernet\n{\n[CmdletBinding()]\nParam(\n[parameter(Mandatory = $false)]\n[SupportsWildcards()]\n[ValidateNotNullOrEmpty()]\n[String[]]\n$Name = \u0027\u0027,\n[parameter(Mandatory = $false, Position = 0, ValueFromPipeline = $true)]\n[ValidateNotNullOrEmpty()]\n[object[]]\n$Adapter = $null\n)\nBegin\n{\n$AdapterName = $Name\n$script:ErrorMessagesGet = @()\n$script:WarningMessagesGet = @()\n$FinalObject = @()\nGetIntelEthernetDevices\nif ($null -ne $script:SupportedAdapters)\n{\n$script:MSNetAdapters = Get-NetAdapter -InterfaceDescription $SupportedAdapters.Name -ErrorAction SilentlyContinue\n}\nGetIntelDriverInfo\n$script:MSNetHwInfo = Get-NetAdapterHardwareInfo -ErrorAction SilentlyContinue\n$script:MSNetAdvProperty = Get-NetAdapterAdvancedProperty -ErrorAction SilentlyContinue\n$AdapterPropertiesNames = @(\"NetCfgInstanceId\", \"DriverVersion\", \"Port\")\n$972Key = Get-ItemProperty -Path \"HKLM:\\SYSTEM\\CurrentControlSet\\Control\\Class\\{4d36e972-e325-11ce-bfc1-08002be10318}\\*\" -Name $AdapterPropertiesNames -ErrorAction SilentlyContinue\n}\nProcess\n{\n$Adapters = $Adapter\n$PreProcessedAdapterNames = ValidateGetAdapterNameParams $AdapterName $Adapters\n$AdapterNamesArray = @(GetSupportedAdapters $PreProcessedAdapterNames)\nforeach ($a in $AdapterNamesArray)\n{\n$TmpStatusMsg = CheckDeviceError $a\nif (-not [string]::IsNullOrEmpty($TmpStatusMsg))\n{\n$Script:WarningMessagesGet += $TmpStatusMsg\n}\n$SupportedSpeeds = GetAdapterSupportedSpeeds $a\n$AdapterStatuses = GetAdapterStatus $a\n$BusTypes = GetAdapterBusType $a\n$Capabilities = GetAdapterCapabilities $a $SupportedSpeeds\n$ConnectionNames = GetAdapterConnectionName $a\n$DDPPackageNameAndVersions = GetAdapterDDPPackageNameAndVersion $a\n$DDPPackageTrackIds = GetAdapterDDPPackageTrackId $a\n$DeviceStatuses = GetAdapterDeviceStatus $a $SupportedSpeeds\n$DriverVersion = GetDriverVersion $a\n$EEEStatuses = GetAdapterEEEStatus $a\n$ETrackIDs = GetAdapterETrackId $a\n$FullDuplex = GetFullDuplex $a\n$LinkSpeedDuplex = GetLinkSpeedDuplex $a\n$MaxSpeeds = GetAdapterMaxSpeed $a $SupportedSpeeds\n$MediaTypes = GetAdapterMediaType $a\n$MiniPortNames = GetAdapterMiniPortName $a\n$NVMVersions = GetAdapterNVMVersion $a\n$NegotiatedLinkSpeed = GetAdapterNegotiatedLinkSpeed $a\n$NegotiatedLinkWidth = GetAdapterNegotiatedLinkWidth $a\n$NetlistVersions = GetAdapterNetlistVersion $a\n$OemFwVersions = GetOemFwVersion $a\n$OriginalDisplayNames = GetOriginalDisplayName $a\n$PCIDeviceIDs = GetAdapterPCIDeviceID $a\n$PartNumbers = GetAdapterPartNumber $a\n$PciLocations = GetAdapterPCILocation $a\n$RegistryValues = GetAdapterPropertiesFromRegistry $a $972Key\n$SanMacAddresses = GetAdapterSanMacAddress $a\n$FinalObject += [PsCustomObject] @{\nPSTypeName          = \u0027IntelEthernetAdapter\u0027\nAdapterStatus       = $AdapterStatuses\nBusType             = $BusTypes.BusType\nBusTypeString       = $BusTypes.BusTypeString\nCapabilities        = $Capabilities\nConnectionName      = $ConnectionNames\nDDPPackageName      = $DDPPackageNameAndVersions.Name\nDDPPackageTrackId   = $DDPPackageTrackIds\nDDPPackageVersion   = $DDPPackageNameAndVersions.Version\nDeviceStatus        = $DeviceStatuses.DeviceStatus\nDeviceStatusString  = $DeviceStatuses.DeviceStatusString\nDriverVersion       = $DriverVersion\nEEE                 = $EEEStatuses.EEEStatus\nEEEString           = $EEEStatuses.EEEStatusString\nETrackID            = $ETrackIDs\nFWVersion           = $OemFwVersions\nFullDuplex          = $FullDuplex\nLocation            = $PciLocations\nMaxSpeed            = $MaxSpeeds\nMediaType           = $MediaTypes.MediaType\nMediaTypeString     = $MediaTypes.MediaTypeString\nMiniPortInstance    = $MiniPortNames.Instance\nMiniPortName        = $MiniPortNames.Name\nNVMVersion          = $NVMVersions\nName                = $a\nNegotiatedLinkSpeed       = $NegotiatedLinkSpeed.NegotiatedLinkSpeed\nNegotiatedLinkSpeedString = $NegotiatedLinkSpeed.NegotiatedLinkSpeedString\nNegotiatedLinkWidth       = $NegotiatedLinkWidth.NegotiatedLinkWidth\nNegotiatedLinkWidthString = $NegotiatedLinkWidth.NegotiatedLinkWidthString\nNetlistVersion      = $NetlistVersions\nOriginalDisplayName = $OriginalDisplayNames\nPCIDeviceID         = $PCIDeviceIDs\nPartNumber          = $PartNumbers\nPortNumber          = $RegistryValues.Port\nPortNumberString    = $RegistryValues.PortString\nSANMacAddress       = $SanMacAddresses\nSpeed               = $LinkSpeedDuplex.Speed\nSpeedString         = $LinkSpeedDuplex.SpeedString\n}\n}\n}\nEnd\n{\n$FinalObject | Sort-Object -Property Location\nforeach ($WarningMessage in $WarningMessagesGet)\n{\nWrite-Warning $WarningMessage\n}\nforeach ($ErrorMessage in $ErrorMessagesGet)\n{\nWrite-Error $ErrorMessage\n}\n}\n}\nfunction GetAdapterBusType($AdapterName)\n{\n$BusType       = 0\n$BusTypeString = $Messages.Unknown\nforeach ($Bus in $script:BusTypesArray)\n{\nif (($null -ne $Bus) -and ($Bus.InstanceName -eq $AdapterName))\n{\n$BusType       = $Bus.BusType\n$BusTypeString = $BusTypeMap[[int]$Bus.BusType]\nbreak\n}\n}\nreturn [PsCustomObject] @{\nBusType       = $BusType\nBusTypeString = $BusTypeString }\n}\nfunction GetAdapterConnectionName($AdapterName)\n{\nreturn ($MSNetAdapters | Where-Object {$_.InterfaceDescription -eq $AdapterName}).InterfaceAlias\n}\nfunction GetAdapterDDPPackageNameAndVersion($AdapterName)\n{\n$Name    = $Messages.NotSupported\n$Version = $Messages.NotSupported\nforeach ($DDPPkgName in $script:DDPPkgNamesArray)\n{\nif (($null -ne $DDPPkgName) -and ($DDPPkgName.InstanceName -eq $AdapterName))\n{\n$Name    = [System.Text.Encoding]::ASCII.GetString($DDPPkgName.Name)\n$Version = $DDPPkgName.Major.ToString() + \".\" + $DDPPkgName.Minor.ToString()\nbreak\n}\n}\nreturn [PsCustomObject] @{\nName    = $Name\nVersion = $Version }\n}\nfunction GetAdapterDDPPackageTrackId($AdapterName)\n{\n$TrackId = $Messages.NotSupported\n$Params = @{Version = [uint32]1; Size = [uint32]12; Type = [uint32]1;}\n$Result = InvokeCimMethod \"IntlLan_GetTrackId\" $AdapterName \"WmiGetTrackId\" $Params\nif (($null -ne $Result) -and ($Result.ReturnValue -eq $true))\n{\n$TrackId = \u00270x{0:X}\u0027 -f $Result.Track_Id\n}\nreturn $TrackId\n}\nfunction GetAdapterDeviceStatus($AdapterName, $SupportedSpeeds)\n{\n$DeviceStatus = 0\n$DeviceStatusString = $Messages.Unknown\n$AdapterNames = $MSNetAdapters | Where-Object {$_.InterfaceDescription -eq $AdapterName}\nforeach($TmpAdapter in $AdapterNames)\n{\nif (\"Up\" -eq $TmpAdapter.Status)\n{\n$MaxSpeed = GetAdapterMaxSpeed $AdapterName $SupportedSpeeds\n$CurrentSpeed = (GetLinkSpeedDuplex $AdapterName).Speed\nif ($CurrentSpeed -lt $MaxSpeed)\n{\n$DeviceStatus = 4\n$DeviceStatusString = $Messages.LinkUpNotMax\n}\nelse\n{\n$DeviceStatus = 1\n$DeviceStatusString = $Messages.LinkUp\n}\n}\nelseif (\"Disconnected\" -eq $TmpAdapter.Status)\n{\n$DeviceStatus = 2\n$DeviceStatusString = $Messages.LinkDown\n}\nelseif (\"Disabled\" -eq $TmpAdapter.Status)\n{\n$DeviceStatus = 0\n$DeviceStatusString = $Messages.Disabled\n}\nelseif ($null -eq ($script:PnpDevice | Where-Object {$_.Name -eq $TmpAdapter.InterfaceDescription}).Service)\n{\n$DeviceStatus = 4\n$DeviceStatusString = $Messages.NotPresent\n}\n}\nreturn [PsCustomObject] @{\nDeviceStatus       = $DeviceStatus\nDeviceStatusString = $DeviceStatusString}\n}\nfunction GetAdapterETrackId($AdapterName)\n{\n$ETrackId = $Messages.NotSupported\nforeach ($ETrackId in $script:ETrackIdsArray)\n{\nif (($null -ne $ETrackId) -and ($ETrackId.InstanceName -eq $AdapterName))\n{\n$ETrackId = \u00270x{0:X}\u0027 -f $ETrackId.Id\nbreak\n}\n}\nreturn $ETrackId\n}\nfunction GetAdapterNVMVersion($AdapterName)\n{\n$Version = $Messages.NotSupported\nforeach ($NVMVersion in $script:NVMVersionsArray)\n{\nif (($null -ne $NVMVersion) -and ($NVMVersion.InstanceName -eq $AdapterName))\n{\n$Version = (($NVMVersion.Version -band 0xffff) -shr 8).ToString() + \".\" + (($NVMVersion.Version -band 0xff)).ToString(\"X2\")\nbreak\n}\n}\nreturn $Version\n}\nfunction GetAdapterNetlistVersion($AdapterName)\n{\n$NetlistVersion = $Messages.NotSupported\n$Params = @{Version = [uint32]1; Size = [uint32]12; Type = [uint32]1;}\n$Result = InvokeCimMethod \"IntlLan_GetNVMNetlistInfo\" $AdapterName \"WmiGetNVMNetlistInfo\" $params\nif (($null -ne $Result) -and ($Result.ReturnValue -eq $true))\n{\n$NetlistVersion = [System.Text.Encoding]::ASCII.GetString($Result.VersionStr)\n}\nreturn $NetlistVersion\n}\nfunction GetAdapterPartNumber($AdapterName)\n{\n$PartNumberString = $Messages.NotSupported\nforeach ($PartNumber in $script:PartNumbersArray)\n{\nif (($null -ne $PartNumber) -and ($PartNumber.InstanceName -eq $AdapterName))\n{\n$PartNumberString = [System.Text.Encoding]::ASCII.GetString($PartNumber.PartNumberString)\nbreak\n}\n}\nreturn $PartNumberString\n}\nfunction GetAdapterSanMacAddress($AdapterName)\n{\n$MacAddress = $Messages.NotSupported\nforeach ($SanMacAddress in $script:SanMacAddressesArray)\n{\nif (($null -ne $SanMacAddress) -and ($SanMacAddress.InstanceName -eq $AdapterName))\n{\n$MacAddress = \"\"\nfor ($i = 0; $i -lt 6; $i++)\n{\n$MacAddress += $SanMacAddress.SanMacAddr[$i].ToString(\"X2\")\n}\nbreak\n}\n}\nreturn $MacAddress\n}\nfunction GetAdapterMediaType($AdapterName)\n{\n$MediaType = [PsCustomObject] @{\nMediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_UNKNOWN\nMediaTypeString = $Messages.Unknown }\n$ServiceName = ($script:SupportedAdapters | Where-Object {$_.Name -eq $AdapterName}).ServiceName\nswitch ($ServiceName)\n{\nicea  { $MediaType = GetAdapterMediaTypeIce $AdapterName; break }\nscea  { $MediaType = GetAdapterMediaTypeIce $AdapterName; break }\ni40ea { $MediaType = GetAdapterMediaTypeI40e $AdapterName; break }\ni40eb { $MediaType = GetAdapterMediaTypeI40e $AdapterName; break }\n}\nreturn $MediaType\n}\nfunction GetAdapterMediaTypeIce($AdapterName)\n{\nforeach ($PhyInfo in $script:PhyInfoArray)\n{\nif (($null -ne $PhyInfo) -and ($PhyInfo.InstanceName -eq $AdapterName) -and ($PhyInfo.PhyInfo.Length -ge 8))\n{\n$PhyType = $PhyInfo.PhyInfo[0];\n$LinkInfo = $PhyInfo.PhyInfo[1];\n$MediaInterface = $PhyInfo.PhyInfo[7];\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Unknown\n$MediaTypeString = $Messages.Unknown\nif ($LinkInfo -band 0x01)\n{\nswitch ($PhyType)\n{\n{$_ -in [int][CVL_PHY_TYPE]::CVL10GSFIAOC_ACC,\n[int][CVL_PHY_TYPE]::CVL25GAUIAOC_ACC,\n[int][CVL_PHY_TYPE]::CVL40GXLAUIAOC_ACC,\n[int][CVL_PHY_TYPE]::CVL50GLAUI2AOC_ACC,\n[int][CVL_PHY_TYPE]::CVL50GAUI2AOC_ACC,\n[int][CVL_PHY_TYPE]::CVL50GAUI1AOC_ACC,\n[int][CVL_PHY_TYPE]::CVL100GCAUI4AOC_ACC,\n[int][CVL_PHY_TYPE]::CVL100GAUI4AOC_ACC,\n[int][CVL_PHY_TYPE]::CVL100GAUI2AOC_ACC}\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_AOC_ACC\n$MediaTypeString = $Messages.AOCACC\nbreak\n}\n{$_ -in [int][CVL_PHY_TYPE]::CVL5GBaseKR,\n[int][CVL_PHY_TYPE]::CVL10GBaseKR,\n[int][CVL_PHY_TYPE]::CVL25GBaseKR}\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Backplane_KR\n$MediaTypeString = $Messages.BackplaneKR\nbreak\n}\n([int][CVL_PHY_TYPE]::CVL25GBaseKR1)\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Backplane_KR1\n$MediaTypeString = $Messages.BackplaneKR1\nbreak\n}\n([int][CVL_PHY_TYPE]::CVL50GBaseKR2)\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Backplane_KR2\n$MediaTypeString = $Messages.BackplaneKR2\nbreak\n}\n([int][CVL_PHY_TYPE]::CVL100GBaseKR2PAM4)\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Backplane_KR2_PAM4\n$MediaTypeString = $Messages.BackplaneKR2PAM4\nbreak\n}\n{$_ -in [int][CVL_PHY_TYPE]::CVL40GBaseKR4,\n[int][CVL_PHY_TYPE]::CVL100GBaseKR4}\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Backplane_KR4\n$MediaTypeString = $Messages.BackplaneKR4\nbreak\n}\n([int][CVL_PHY_TYPE]::CVL100GBaseKR4PAM4)\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Backplane_KR4_PAM4\n$MediaTypeString = $Messages.BackplaneKR4PAM4\nbreak\n}\n([int][CVL_PHY_TYPE]::CVL50GBaseKRPAM4)\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Backplane_KR_PAM4\n$MediaTypeString = $Messages.BackplaneKRPAM4\nbreak\n}\n([int][CVL_PHY_TYPE]::CVL25GBaseKRS)\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Backplane_KR_S\n$MediaTypeString = $Messages.BackplaneKRS\nbreak\n}\n{$_ -in [int][CVL_PHY_TYPE]::CVL1000BaseKX,\n[int][CVL_PHY_TYPE]::CVL2Point5GBaseKX}\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Backplane_KX\n$MediaTypeString = $Messages.BackplaneKX\nbreak\n}\n{$_ -in [int][CVL_PHY_TYPE]::CVL10GSFIC2C,\n[int][CVL_PHY_TYPE]::CVL25GAUIC2C,\n[int][CVL_PHY_TYPE]::CVL40GXLAUI,\n[int][CVL_PHY_TYPE]::CVL50GLAUI2,\n[int][CVL_PHY_TYPE]::CVL50GAUI2,\n[int][CVL_PHY_TYPE]::CVL50GAUI1,\n[int][CVL_PHY_TYPE]::CVL100GCAUI4,\n[int][CVL_PHY_TYPE]::CVL100GAUI4,\n[int][CVL_PHY_TYPE]::CVL100GAUI2}\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Chip_to_Chip\n$MediaTypeString = $Messages.ChiptoChip\nbreak\n}\n{$_ -in [int][CVL_PHY_TYPE]::CVL1000BaseT,\n[int][CVL_PHY_TYPE]::CVL2Point5GBaseT,\n[int][CVL_PHY_TYPE]::CVL5GBaseT,\n[int][CVL_PHY_TYPE]::CVL10GBaseT,\n[int][CVL_PHY_TYPE]::CVL25GBaseT}\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Copper_T\n$MediaTypeString = $Messages.CopperT\nbreak\n}\n([int][CVL_PHY_TYPE]::CVL100BaseTX)\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Copper_TX\n$MediaTypeString = $Messages.CopperTX\nbreak\n}\n([int][CVL_PHY_TYPE]::CVL10GSFIDA)\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Direct_Attach\n$MediaTypeString = $Messages.DirectAttach\nbreak\n}\n([int][CVL_PHY_TYPE]::CVL100GBaseCP2)\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Direct_Attach_CP2\n$MediaTypeString = $Messages.DirectAttachCP2\nbreak\n}\n([int][CVL_PHY_TYPE]::CVL25GBaseCR)\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Direct_Attach_CR\n$MediaTypeString = $Messages.DirectAttachCR\nbreak\n}\n([int][CVL_PHY_TYPE]::CVL25GBaseCR1)\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Direct_Attach_CR1\n$MediaTypeString = $Messages.DirectAttachCR1\nbreak\n}\n([int][CVL_PHY_TYPE]::CVL50GBaseCR2)\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Direct_Attach_CR2\n$MediaTypeString = $Messages.DirectAttachCR2\nbreak\n}\n{$_ -in [int][CVL_PHY_TYPE]::CVL40GBaseCR4,\n[int][CVL_PHY_TYPE]::CVL100GBaseCR4}\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Direct_Attach_CR4\n$MediaTypeString = $Messages.DirectAttachCR4\nbreak\n}\n([int][CVL_PHY_TYPE]::CVL50GBaseCRPAM4)\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Direct_Attach_CR_PAM4\n$MediaTypeString = $Messages.DirectAttachCRPAM4\nbreak\n}\n([int][CVL_PHY_TYPE]::CVL25GBaseCRS)\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Direct_Attach_CR_S\n$MediaTypeString = $Messages.DirectAttachCRS\nbreak\n}\n([int][CVL_PHY_TYPE]::CVL100GBaseDR)\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Fiber_DR\n$MediaTypeString = $Messages.FiberDR\nbreak\n}\n([int][CVL_PHY_TYPE]::CVL50GBaseFR)\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Fiber_FR\n$MediaTypeString = $Messages.FiberFR\nbreak\n}\n{$_ -in [int][CVL_PHY_TYPE]::CVL10GBaseLR,\n[int][CVL_PHY_TYPE]::CVL25GBaseLR,\n[int][CVL_PHY_TYPE]::CVL50GBaseLR}\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Fiber_LR\n$MediaTypeString = $Messages.FiberLR\nbreak\n}\n{$_ -in [int][CVL_PHY_TYPE]::CVL40GBaseLR4,\n[int][CVL_PHY_TYPE]::CVL100GBaseLR4}\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Fiber_LR4\n$MediaTypeString = $Messages.FiberLR4\nbreak\n}\n([int][CVL_PHY_TYPE]::CVL1000BaseLX)\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Fiber_LX\n$MediaTypeString = $Messages.FiberLX\nbreak\n}\n{$_ -in [int][CVL_PHY_TYPE]::CVL10GBaseSR,\n[int][CVL_PHY_TYPE]::CVL25GBaseSR,\n[int][CVL_PHY_TYPE]::CVL50GBaseSR}\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Fiber_SR\n$MediaTypeString = $Messages.FiberSR\nbreak\n}\n([int][CVL_PHY_TYPE]::CVL100GBaseSR2)\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Fiber_SR2\n$MediaTypeString = $Messages.FiberSR2\nbreak\n}\n{$_ -in [int][CVL_PHY_TYPE]::CVL40GBaseSR4,\n[int][CVL_PHY_TYPE]::CVL100GBaseSR4}\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Fiber_SR4\n$MediaTypeString = $Messages.FiberSR4\nbreak\n}\n([int][CVL_PHY_TYPE]::CVL1000BaseSX)\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Fiber_SX\n$MediaTypeString = $Messages.FiberSX\nbreak\n}\n([int][CVL_PHY_TYPE]::CVL2Point5gBaseX)\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Fiber_X\n$MediaTypeString = $Messages.FiberX\nbreak\n}\n{$_ -in [int][CVL_PHY_TYPE]::CVL100MSGMII,\n[int][CVL_PHY_TYPE]::CVL1GSGMII}\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_SGMII\n$MediaTypeString = $Messages.SGMII\nbreak\n}\ndefault\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Unknown\n$MediaTypeString = $Messages.Unknown\nbreak\n}\n}\n}\nelse\n{\nswitch ($MediaInterface)\n{\n([int][CPK_PHY_INFO]::CPK_PHYINFO_MEDIA_BACKPLANE)\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_INTERFACE_CVL_BACKPLANE\n$MediaTypeString = $Messages.Backplane\nbreak\n}\n([int][CPK_PHY_INFO]::CPK_PHYINFO_MEDIA_QSFP)\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_INTERFACE_CVL_QSFP\n$MediaTypeString = $Messages.QSFP\nbreak\n}\n([int][CPK_PHY_INFO]::CPK_PHYINFO_MEDIA_SFP)\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_INTERFACE_CVL_SFP\n$MediaTypeString = $Messages.SFP\nbreak\n}\n([int][CPK_PHY_INFO]::CPK_PHYINFO_MEDIA_BASE_T)\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_INTERFACE_CVL_BASE_T\n$MediaTypeString = $Messages.CopperT\nbreak\n}\n([int][CPK_PHY_INFO]::CPK_PHYINFO_MEDIA_SGMII)\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_INTERFACE_CVL_SGMII\n$MediaTypeString = $Messages.SGMII\nbreak\n}\n([int][CPK_PHY_INFO]::CPK_PHYINFO_MEDIA_FIBER)\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_INTERFACE_CVL_FIBER\n$MediaTypeString = $Messages.Fiber\nbreak\n}\ndefault\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_CVL_Unknown\n$MediaTypeString = $Messages.Unknown\nbreak\n}\n}\n}\n}\n}\nreturn [PsCustomObject] @{\nMediaType = $MediaType\nMediaTypeString = $MediaTypeString }\n}\nfunction GetAdapterMediaTypeI40e($AdapterName)\n{\nforeach ($PhyInfo in $script:PhyInfoArray)\n{\nif (($null -ne $PhyInfo) -and ($PhyInfo.InstanceName -eq $AdapterName) -and ($PhyInfo.PhyInfo.Length -ge 13))\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_UNKNOWN\n$MediaTypeString = $Messages.Unknown\n$PhyType = $PhyInfo.PhyInfo[0];\n$LinkType = ([uint32]$PhyInfo.PhyInfo[11] -shl 24) + ([uint32]$PhyInfo.PhyInfo[10] -shl 16) + ([uint32]$PhyInfo.PhyInfo[9] -shl 8) + [uint32]$PhyInfo.PhyInfo[8];\n$LinkTypeExt = $PhyInfo.PhyInfo[12];\nif ($PhyType -eq [int][I40E_PHY_TYPE]::I40E_PHY_TYPE_EMPTY)\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_UNKNOWN\n}\nelseif (($LinkType -band [int][LinkType]::LINK_TYPE_40GBASE_KR4) -or\n($LinkType -band [int][LinkType]::LINK_TYPE_10GBASE_KR) -or\n($LinkTypeExt -band [int][LinkTypeExt]::LINK_TYPE_25GBase_KR))\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_BACKPLANE\n$MediaTypeString = $Messages.Backplane\n}\nelseif (($LinkType -band [int][LinkType]::LINK_TYPE_10GBASE_SFP_Cu) -or\n($LinkType -band [int][LinkType]::LINK_TYPE_10GBASE_CR1))\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_SFPDIRECTATTACH\n$MediaTypeString = $Messages.SFPDirectAttach\n}\nelseif (($LinkType -band [int][LinkType]::LINK_TYPE_40GBASE_LR4) -or\n($LinkType -band [int][LinkType]::LINK_TYPE_10GBASE_LR) -or\n($LinkTypeExt -band [int][LinkTypeExt]::LINK_TYPE_25GBase_LR))\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_LR_FIBER\n$MediaTypeString = $Messages.LRFiber\n}\nelseif (($LinkType -band [int][LinkType]::LINK_TYPE_10GBASE_SR) -or\n($LinkType -band [int][LinkType]::LINK_TYPE_40GBASE_SR4) -or\n($LinkTypeExt -band [int][LinkTypeExt]::LINK_TYPE_25GBase_SR))\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_SR_FIBER\n$MediaTypeString = $Messages.SRFiber\n}\nelseif (($LinkType -band [int][LinkType]::LINK_TYPE_10GBASE_T) -or\n($LinkType -band [int][LinkType]::LINK_TYPE_1000BASE_T) -or\n($LinkType -band [int][LinkType]::LINK_TYPE_100BASE_TX) -or\n($LinkTypeExt -band [int][LinkTypeExt]::LINK_TYPE_2_5GBASE_T) -or\n($LinkTypeExt -band [int][LinkTypeExt]::LINK_TYPE_5GBASE_T))\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_COPPER\n$MediaTypeString = $Messages.Copper\n}\nelseif (($LinkType -band [int][LinkType]::LINK_TYPE_10GBASE_CR1_CU) -or\n($LinkType -band [int][LinkType]::LINK_TYPE_40GBASE_CR4_CU) -or\n($LinkType -band [int][LinkType]::LINK_TYPE_40GBASE_CR4))\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_QSFPDIRECTATTACH\n$MediaTypeString = $Messages.QSFPDirectAttach\n}\nelseif (($LinkType -band [int][LinkType]::LINK_TYPE_10GBASE_KX4) -or\n($LinkType -band [int][LinkType]::LINK_TYPE_1000BASE_KX))\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_KX4BACKPLANE\n$MediaTypeString = $Messages.KXBackplane\n}\nelseif (($LinkType -band [int][LinkType]::LINK_TYPE_XAUI) -or\n($LinkType -band [int][LinkType]::LINK_TYPE_XLAUI))\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_XAUI\n$MediaTypeString = $Messages.XAUI\n}\nelseif (($LinkTypeExt -band [int][LinkTypeExt]::LINK_TYPE_25G_AOC) -or\n($LinkTypeExt -band [int][LinkTypeExt]::LINK_TYPE_25G_ACC) -or\n($LinkTypeExt -band [int][LinkTypeExt]::LINK_TYPE_25GBase_CR))\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_SFP28DIRECTATTACH\n$MediaTypeString = $Messages.SFP28DirectAttach\n}\nelseif ($LinkTypeExt -eq 0 -and $LinkType -eq 0)\n{\nif (($PhyType -eq [int][I40E_PHY_TYPE]::I40E_PHY_TYPE_40GBASE_KR4) -or\n($PhyType -eq [int][I40E_PHY_TYPE]::I40E_PHY_TYPE_10GBASE_KR) -or\n($PhyType -eq [int][I40E_PHY_TYPE]::I40E_PHY_TYPE_25GBASE_KR))\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_BACKPLANE\n$MediaTypeString = $Messages.Backplane\n}\nelseif (($PhyType -eq [int][I40E_PHY_TYPE]::I40E_PHY_TYPE_10GBASE_SFPP_CU) -or\n($PhyType -eq [int][I40E_PHY_TYPE]::I40E_PHY_TYPE_10GBASE_CR1))\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_SFPDIRECTATTACH\n$MediaTypeString = $Messages.SFPDirectAttach\n}\nelseif (($PhyType -eq [int][I40E_PHY_TYPE]::I40E_PHY_TYPE_40GBASE_LR4) -or\n($PhyType -eq [int][I40E_PHY_TYPE]::I40E_PHY_TYPE_10GBASE_LR) -or\n($PhyType -eq [int][I40E_PHY_TYPE]::I40E_PHY_TYPE_25GBASE_LR))\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_LR_FIBER\n$MediaTypeString = $Messages.LRFiber\n}\nelseif (($PhyType -eq [int][I40E_PHY_TYPE]::I40E_PHY_TYPE_10GBASE_SR) -or\n($PhyType -eq [int][I40E_PHY_TYPE]::I40E_PHY_TYPE_40GBASE_SR4) -or\n($PhyType -eq [int][I40E_PHY_TYPE]::I40E_PHY_TYPE_25GBASE_SR))\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_SR_FIBER\n$MediaTypeString = $Messages.SRFiber\n}\nelseif (($PhyType -eq [int][I40E_PHY_TYPE]::I40E_PHY_TYPE_10GBASE_T) -or\n($PhyType -eq [int][I40E_PHY_TYPE]::I40E_PHY_TYPE_1000BASE_T) -or\n($PhyType -eq [int][I40E_PHY_TYPE]::I40E_PHY_TYPE_100BASE_TX))\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_COPPER\n$MediaTypeString = $Messages.Copper\n}\nelseif (($PhyType -eq [int][I40E_PHY_TYPE]::I40E_PHY_TYPE_10GBASE_CR1_CU) -or\n($PhyType -eq [int][I40E_PHY_TYPE]::I40E_PHY_TYPE_40GBASE_CR4_CU) -or\n($PhyType -eq [int][I40E_PHY_TYPE]::I40E_PHY_TYPE_40GBASE_CR4))\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_QSFPDIRECTATTACH\n$MediaTypeString = $Messages.QSFPDirectAttach\n}\nelseif (($PhyType -eq [int][I40E_PHY_TYPE]::I40E_PHY_TYPE_10GBASE_KX4) -or\n($PhyType -eq [int][I40E_PHY_TYPE]::I40E_PHY_TYPE_1000BASE_KX))\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_KX4BACKPLANE\n$MediaTypeString = $Messages.KXBackplane\n}\nelseif (($PhyType -eq [int][I40E_PHY_TYPE]::I40E_PHY_TYPE_XAUI) -or\n($PhyType -eq [int][I40E_PHY_TYPE]::I40E_PHY_TYPE_XLAUI))\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_XAUI\n$MediaTypeString = $Messages.XAUI\n}\nelseif (($PhyType -eq [int][I40E_PHY_TYPE]::I40E_PHY_TYPE_25GBASE_AOC) -or\n($PhyType -eq [int][I40E_PHY_TYPE]::I40E_PHY_TYPE_25GBASE_ACC) -or\n($PhyType -eq [int][I40E_PHY_TYPE]::I40E_PHY_TYPE_25GBASE_CR))\n{\n$MediaType = [int][NCS_ADAPTER_MEDIA_TYPE]::NCS_MEDIA_SFP28DIRECTATTACH\n$MediaTypeString = $Messages.SFP28DirectAttach\n}\n}\n}\n}\nreturn [PsCustomObject] @{\nMediaType = $MediaType\nMediaTypeString = $MediaTypeString }\n}\nfunction GetAdapterPCILocation($AdapterName)\n{\n$PCILocation = $Messages.NotSupported\nforeach ($HwInfo in $MSNetHwInfo)\n{\nif ($AdapterName -eq $HwInfo.ifDesc)\n{\n$PCILocation = $HwInfo.Bus.ToString() + \":\" + $HwInfo.Device.ToString()  + \":\" + $HwInfo.Function.ToString() + \":\" + $HwInfo.Segment.ToString()\nbreak\n}\n}\nreturn $PCILocation\n}\nfunction GetOriginalDisplayName($AdapterName)\n{\nreturn ($MSNetHwInfo | Where-Object {$_.ifDesc -eq $AdapterName}).ifDesc\n}\nfunction GetOemFwVersion($AdapterName)\n{\n$Version = $Messages.NotSupported\nforeach ($FwVersion in $script:FwVersionsArray)\n{\nif ($FwVersion.InstanceName -eq $AdapterName)\n{\nif ($FwVersion.SingleNvmVersion[0] -ne 0)\n{\n$Version = [System.Text.Encoding]::ASCII.GetString($FwVersion.SingleNvmVersion)\n}\nbreak\n}\n}\nreturn $Version\n}\nfunction GetAdapterPCIDeviceID($AdapterName)\n{\nreturn ($MSNetAdapters | Where-Object {$_.InterfaceDescription -eq $AdapterName}).PnPDeviceID\n}\nfunction GetAdapterNegotiatedLinkWidth($AdapterName)\n{\n$NegotiatedLinkWidth = ($MSNetHwInfo | Where-Object {$_.ifDesc -eq $AdapterName}).PciExpressCurrentLinkWidth\n$NegotiatedLinkWidthString = \"x\" + ($MSNetHwInfo | Where-Object {$_.ifDesc -eq $AdapterName}).PciExpressCurrentLinkWidth.ToString()\nreturn [PsCustomObject] @{\nNegotiatedLinkWidth = $NegotiatedLinkWidth\nNegotiatedLinkWidthString = $NegotiatedLinkWidthString }\n}\nfunction GetAdapterNegotiatedLinkSpeed($AdapterName)\n{\n$NegotiatedLinkSpeed = ($MSNetHwInfo | Where-Object {$_.ifDesc -eq $AdapterName}).PciExpressCurrentLinkSpeedEncoded\nswitch ($NegotiatedLinkSpeed)\n{\n0 {$NegotiatedLinkSpeedString = $Messages.Unknown; break}\n1 {$NegotiatedLinkSpeedString = $Messages.NegLaneSpeed25; break}\n2 {$NegotiatedLinkSpeedString = $Messages.NegLaneSpeed50; break}\n3 {$NegotiatedLinkSpeedString = $Messages.NegLaneSpeed80; break}\ndefault {$NegotiatedLinkSpeedString = $Messages.Unknown; break}\n}\nreturn [PsCustomObject] @{\nNegotiatedLinkSpeed = $NegotiatedLinkSpeed\nNegotiatedLinkSpeedString = $NegotiatedLinkSpeedString }\n}\nfunction GetLinkSpeedDuplex($AdapterName)\n{\n$AdapterObj = $MSNetAdapters | Where-Object {$_.InterfaceDescription -eq $AdapterName}\n$Speed = $AdapterObj.Speed\n$SpeedString = $AdapterObj.LinkSpeed\n$FullDuplex = $AdapterObj.FullDuplex\nif (\"Up\" -ne $AdapterObj.Status)\n{\n$Speed = 0\n$SpeedString = $Messages.NotAvailable\n}\nelseif ($true -eq $FullDuplex)\n{\n$SpeedString += \" \" + $Messages.FullDuplex\n}\nreturn [PsCustomObject] @{\nSpeed = $Speed\nSpeedString = $SpeedString }\n}\nfunction GetFullDuplex($AdapterName)\n{\n$FullDuplex = ($MSNetAdapters | Where-Object {$_.InterfaceDescription -eq $AdapterName}).FullDuplex\nif ($null -eq $FullDuplex)\n{\n$FullDuplex = \"\"\n}\nreturn $FullDuplex\n}\nfunction GetAdapterPropertiesFromRegistry($AdapterName, $972Key)\n{\n$AdapterInstanceID = ($script:MSNetAdapters | Where-Object {$_.InterfaceDescription -eq $AdapterName}).InterfaceGuid\n$AdapterRegKey = $972Key | Where-Object {$_.NetCfgInstanceId -Like ($AdapterInstanceID)}\nswitch ($AdapterRegKey.Port)\n{\n0 {$PortNumberString = $Messages.PortA; break}\n1 {$PortNumberString = $Messages.PortB; break}\n2 {$PortNumberString = $Messages.PortC; break}\n3 {$PortNumberString = $Messages.PortD; break}\ndefault {$PortNumberString = $Messages.NotSupported; break}\n}\nreturn [PsCustomObject] @{\nPort       = $AdapterRegKey.Port\nPortString = $PortNumberString }\n}\nfunction GetDriverVersion($AdapterName)\n{\n$DriverVersion = ($MSNetAdapters | Where-Object {$_.InterfaceDescription -eq $AdapterName}).DriverVersion\nreturn $DriverVersion\n}\nfunction GetAdapterMiniPortName($AdapterName)\n{\n$Name = ($script:PnpDevice | Where-Object {$_.Name -eq $AdapterName}).Service\n$Instance = ($script:MSNetAdapters | Where-Object {$_.InterfaceDescription -eq $AdapterName}).InterfaceGuid\nreturn [PsCustomObject] @{\nName     = $Name\nInstance = $Instance }\n}\nfunction GetAdapterMaxSpeed($AdapterName, $SupportedSpeeds)\n{\nif ($SupportedSpeeds.Length -gt 0)\n{\nreturn $SupportedSpeeds[-1]\n}\nreturn 0\n}\nfunction GetAdapterSupportedSpeeds($AdapterName)\n{\n$SpeedDuplex = $MSNetAdvProperty | Where-Object {$_.InterfaceDescription -eq $AdapterName -and $_.RegistryKeyword -eq \"*SpeedDuplex\"}\nif ($null -ne $SpeedDuplex)\n{\n$RegistryValues = ($SpeedDuplex).ValidRegistryValues\n}\n$SupportedSpeeds = @()\nforeach ($i in $RegistryValues)\n{\n$SupportedSpeeds += $SupportedSpeedsMap[$i]\n}\nreturn $SupportedSpeeds | Sort-Object\n}\nfunction GetAdapterEEEStatus($AdapterName)\n{\n$EEELinkAdvertisement = $MSNetAdvProperty | Where-Object {$_.InterfaceDescription -eq $AdapterName -and $_.RegistryKeyword -eq \"EEELinkAdvertisement\"}\n$EEEStatus = 0\n$EEEStatusString = $Messages.NotSupported\nforeach ($EEE in $script:EEELinkStatusArray)\n{\nif (($null -ne $EEE) -and ($EEE.InstanceName -eq $AdapterName))\n{\nif ($EEE.EEELinkStatus -eq $false)\n{\nif ($EEELinkAdvertisement -gt 0)\n{\n$EEEStatus = 3 #Not Negotiated\n$EEEStatusString = $Messages.NotNegotiated\n}\nelse\n{\n$EEEStatus = 1 #Disabled\n$EEEStatusString = $Messages.Disabled\n}\n}\nelse\n{\n$EEEStatus = 2 #Active\n$EEEStatusString = $Messages.Active\n}\n}\n}\nreturn [PsCustomObject] @{\nEEEStatus       = $EEEStatus\nEEEStatusString = $EEEStatusString }\n}\nfunction GetAdapterStatus($AdapterName)\n{\n$AdapterStatus = [ADAPTER_STATUS]::Installed -bor [ADAPTER_STATUS]::DriverLoaded -bor [ADAPTER_STATUS]::HasDiag\n$LinkStatus = ($MSNetAdapters | Where-Object {$_.InterfaceDescription -eq $AdapterName}).Status\nif ($LinkStatus -eq \u0027Up\u0027)\n{\n$AdapterStatus = $AdapterStatus -bor [ADAPTER_STATUS]::HasLink\n}\nreturn $AdapterStatus\n}\nfunction GetAdapterCapabilities($AdapterName, $SupportedSpeeds)\n{\n$Capabilities = @([int][ADAPTER_CAPABILITY]::NCS_ADAPTER_CAP_VENDOR_INTEL)\nforeach ($SupportedSpeed in $SupportedSpeeds)\n{\nswitch ($SupportedSpeed)\n{\n10000000     {$Capabilities += [int][ADAPTER_CAPABILITY]::NCS_ADAPTER_CAP_SPEED_10_MBPS; break}\n100000000    {$Capabilities += [int][ADAPTER_CAPABILITY]::NCS_ADAPTER_CAP_SPEED_100_MBPS; break}\n1000000000   {$Capabilities += [int][ADAPTER_CAPABILITY]::NCS_ADAPTER_CAP_SPEED_1000_MBPS; break}\n2500000000   {$Capabilities += [int][ADAPTER_CAPABILITY]::NCS_ADAPTER_CAP_SPEED_2500_MBPS; break}\n5000000000   {$Capabilities += [int][ADAPTER_CAPABILITY]::NCS_ADAPTER_CAP_SPEED_5000_MBPS; break}\n10000000000  {$Capabilities += [int][ADAPTER_CAPABILITY]::NCS_ADAPTER_CAP_SPEED_10000_MBPS; break}\n40000000000  {$Capabilities += [int][ADAPTER_CAPABILITY]::NCS_ADAPTER_CAP_SPEED_40000_MBPS; break}\n25000000000  {$Capabilities += [int][ADAPTER_CAPABILITY]::NCS_ADAPTER_CAP_SPEED_25000_MBPS; break}\n50000000000  {$Capabilities += [int][ADAPTER_CAPABILITY]::NCS_ADAPTER_CAP_SPEED_50000_MBPS; break}\n100000000000 {$Capabilities += [int][ADAPTER_CAPABILITY]::NCS_ADAPTER_CAP_SPEED_100000_MBPS; break}\n}\n}\n$Capabilities += [int][ADAPTER_CAPABILITY]::NCS_ADAPTER_CAP_PERFORMANCE_PROFILE\n$Capabilities += [int][ADAPTER_CAPABILITY]::NCS_ADAPTER_CAP_DIAGNOSTIC_SUPPORT\n$Capabilities += [int][ADAPTER_CAPABILITY]::NCS_ADAPTER_CAP_FLASH_SUPPORT\n$Capabilities += [int][ADAPTER_CAPABILITY]::NCS_ADAPTER_CAP_CYPRESS\n$Capabilities += [int][ADAPTER_CAPABILITY]::NCS_ADAPTER_CAP_IDENTIFY_ADAPTER_SUPPORT\n$Capabilities += [int][ADAPTER_CAPABILITY]::NCS_ADAPTER_CAP_NDIS_IOAT\n$Capabilities += [int][ADAPTER_CAPABILITY]::NCS_ADAPTER_CAP_EXTENDED_DMIX_SUPPORT\n$MSDCB = $MSNetAdvProperty | Where-Object {$_.InterfaceDescription -eq $AdapterName -and $_.RegistryKeyword -eq \"*QOS\"}\nif ($null -ne $MSDCB)\n{\n$Capabilities += [int][ADAPTER_CAPABILITY]::NCS_ADAPTER_CAP_DCB\n}\n$JumboFrames = $MSNetAdvProperty | Where-Object {$_.InterfaceDescription -eq $AdapterName -and $_.RegistryKeyword -eq \"*JumboPacket\"}\nif ($null -ne $JumboFrames)\n{\n$Capabilities += [int][ADAPTER_CAPABILITY]::NCS_ADAPTER_CAP_JUMBO_FRAMES\n}\nreturn , ($Capabilities | Sort-Object)\n}\nfunction GetIntelDriverInfo()\n{\n$script:BusTypesArray        = Get-CimInstance -Namespace \"root\\wmi\" -ClassName IntlLan_BusType -Property BusType -ErrorAction SilentlyContinue\n$script:DDPPkgNamesArray     = Get-CimInstance -Namespace \"root\\wmi\" -ClassName IntlLan_GetPackageInfo -Property Name, Major, Minor -ErrorAction SilentlyContinue\n$script:ETrackIdsArray       = Get-CimInstance -Namespace \"root\\wmi\" -ClassName IntlLan_EetrackId -Property Id -ErrorAction SilentlyContinue\n$script:NVMVersionsArray     = Get-CimInstance -Namespace \"root\\wmi\" -ClassName IntlLan_EepromVersion -Property Version -ErrorAction SilentlyContinue\n$script:SanMacAddressesArray = Get-CimInstance -Namespace \"root\\wmi\" -ClassName IntlLan_GetSanMacAddress -Property SanMacAddr -ErrorAction SilentlyContinue\n$script:PartNumbersArray     = Get-CimInstance -Namespace \"root\\wmi\" -ClassName IntlLan_PartNumberString -Property PartNumberString -ErrorAction SilentlyContinue\n$script:PhyInfoArray         = Get-CimInstance -Namespace \"root\\wmi\" -ClassName IntlLan_GetPhyInfo -Property PhyInfo -ErrorAction SilentlyContinue\n$script:FwVersionsArray      = Get-CimInstance -Namespace \"root\\wmi\" -ClassName IntlLan_GetOemProductVer -Property SingleNvmVersion -ErrorAction SilentlyContinue\n$script:EEELinkStatusArray   = Get-CimInstance -Namespace \"root\\wmi\" -ClassName IntlLan_EEELinkStatus -Property EEELinkStatus -ErrorAction SilentlyContinue\n}\n"
    };
    PowerShellScripts.Get_Process = {
        command: 'Get-Process',
        script: "##Get-Process##:Get-Process.ps1\nGet-Process\n"
    };
})(PowerShellScripts || (PowerShellScripts = {}));


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _microsoft_windows_admin_center_sdk_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/windows-admin-center-sdk/angular */ "W28e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




// These are the basic routes that are required in order to load an extension and make service calls.
const appRoutes = [
    // The idle component route is used for 'long running' processes that take any amount of time (async).
    // This is a required path and component.
    {
        path: 'idle',
        component: _microsoft_windows_admin_center_sdk_angular__WEBPACK_IMPORTED_MODULE_1__["IdleComponent"]
    },
    {
        path: '',
        loadChildren: './default/default.module#DefaultModule'
    },
    // this child route is used to route back to the home path when an invalid URL is provided to the browser.
    {
        path: '**',
        redirectTo: '' // double check navigation
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, {
                // un-comment to enable debug log messages
                // enableTracing: true,
                // don't navigate at initially.
                initialNavigation: 'disabled'
            })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _polyfills_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polyfills.ts */ "hN/g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _microsoft_windows_admin_center_sdk_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/windows-admin-center-sdk/core */ "t/l9");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _generated_powershell_scripts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./generated/powershell-scripts */ "tEo6");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./version */ "8hKs");
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.








if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
// initialize SME module environment with localization settings.
_microsoft_windows_admin_center_sdk_core__WEBPACK_IMPORTED_MODULE_3__["CoreEnvironment"].initialize({
    name: 'Intel.PROSEt',
    version: _version__WEBPACK_IMPORTED_MODULE_7__["RuntimeVersion"].version,
    powerShellModuleName: _generated_powershell_scripts__WEBPACK_IMPORTED_MODULE_6__["PowerShellScripts"].module,
    isProduction: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production,
    shellOrigin: '*'
}, {
    resourcesPath: 'assets/strings'
})
    .then(() => _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./default/default.module": [
		"mqlq",
		"default-default-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "zn8P";
module.exports = webpackAsyncContext;

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map