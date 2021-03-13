function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-item lines=\"none\" color=\"primary\">\n      <ion-badge slot=\"start\">\n        <ion-label  class=\"text-xs\">v.{{ version }}</ion-label>\n      </ion-badge>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n  <div style=\"background-color: #0205A1;\" class=\" h-24 absolute\">\n    \n    <svg class=\"hero-waves\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 24 150 28 \" preserveAspectRatio=\"none\">\n      <defs>\n        <path id=\"wave-path\" d=\"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z\">\n      </path></defs>\n      <g class=\"wave1\">\n        <use xlink:href=\"#wave-path\" x=\"50\" y=\"3\" fill=\"rgba(244,245,248, .1)\">\n      </use></g>\n      <g class=\"wave2\">\n        <use xlink:href=\"#wave-path\" x=\"50\" y=\"0\" fill=\"rgba(244,245,248, .2)\">\n      </use></g>\n      <g class=\"wave3\">\n        <use xlink:href=\"#wave-path\" x=\"50\" y=\"9\" fill=\"#F4F5F8\">\n      </use></g>\n    </svg>\n  <ion-progress-bar *ngIf=\"loading\" type=\"indeterminate\"></ion-progress-bar>\n\n  <div style=\"margin-top: 40px;\">\n    <ion-card >\n\n      <ion-card-header>\n        <img class=\"h-32 rounded-lg m-auto\" src=\"./assets/logo.jpeg\" />\n        <p class=\"text-center font-bold text-4xl\" style=\"color: #230E40;\">Kampo</p>\n      </ion-card-header>\n    \n      <form class=\"mt-6\" #loginForm=\"ngForm\" novalidate>\n        <ion-row class=\"flex justify-center \">\n          <ion-col size=\"10\">\n            <ion-item class=\"rounded-lg\">\n              <ion-icon slot=\"start\" color=\"tertiary\" name=\"person\"></ion-icon>\n              <ion-input placeholder=\"Usuário\" [(ngModel)]=\"userData.login\" name=\"username\" type=\"text\" #username=\"ngModel\"\n                spellcheck=\"false\" autocapitalize=\"off\" required>\n              </ion-input>\n            </ion-item>\n          </ion-col>\n    \n          <ion-col size=\"10\">\n            <ion-item class=\"rounded-lg\">\n              <ion-icon slot=\"start\" color=\"tertiary\" name=\"lock-closed\"></ion-icon>\n              <ion-input placeholder=\"Senha\" [(ngModel)]=\"userData.password\" name=\"password\" [type]=\"passwordType\"\n                #password=\"ngModel\" required>\n              </ion-input>\n              <ion-icon color=\"dark\" slot=\"end\" [name]=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\n            </ion-item>\n            <ion-text color=\"danger\">\n              <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\n                Informe a senha\n              </p>\n            </ion-text>\n          </ion-col>\n          <ion-col style=\"text-align: right;\" size=\"10\">\n           \n              <a (click)=\"forgotPassword()\" style=\"color: black; text-align: right;\" >\n                Esqueceu sua senha?\n              </a>\n \n          </ion-col>\n    \n          <ion-col size=\"10\">\n            <ion-button color=\"secondary\" [disabled]=\"loading\" (click)=\"onLogin(loginForm)\" expand=\"block\">\n              <ion-spinner *ngIf=\"loading\" name=\"crescent\" slot=\"start\"></ion-spinner>Entrar\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </form>\n      <br>\n    </ion-card>\n  </div>\n  \n  </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/login/login-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/login/login-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".hero-waves {\n  display: block;\n  width: 100%;\n  height: 60px;\n  position: absolute;\n  bottom: 0;\n}\n\n.wave1 use {\n  -webkit-animation: move-forever1 10s linear infinite;\n  animation: move-forever1 10s linear infinite;\n  -webkit-animation-delay: -2s;\n  animation-delay: -2s;\n}\n\n.wave2 use {\n  -webkit-animation: move-forever2 8s linear infinite;\n  animation: move-forever2 8s linear infinite;\n  -webkit-animation-delay: -2s;\n  animation-delay: -2s;\n}\n\n.wave3 use {\n  -webkit-animation: move-forever3 6s linear infinite;\n  animation: move-forever3 6s linear infinite;\n  -webkit-animation-delay: -2s;\n  animation-delay: -2s;\n}\n\n@-webkit-keyframes move-forever1 {\n  0% {\n    transform: translate(85px, 0%);\n  }\n  100% {\n    transform: translate(-90px, 0%);\n  }\n}\n\n@keyframes move-forever1 {\n  0% {\n    transform: translate(85px, 0%);\n  }\n  100% {\n    transform: translate(-90px, 0%);\n  }\n}\n\n@-webkit-keyframes move-forever2 {\n  0% {\n    transform: translate(-90px, 0%);\n  }\n  100% {\n    transform: translate(85px, 0%);\n  }\n}\n\n@keyframes move-forever2 {\n  0% {\n    transform: translate(-90px, 0%);\n  }\n  100% {\n    transform: translate(85px, 0%);\n  }\n}\n\n@-webkit-keyframes move-forever3 {\n  0% {\n    transform: translate(-90px, 0%);\n  }\n  100% {\n    transform: translate(85px, 0%);\n  }\n}\n\n@keyframes move-forever3 {\n  0% {\n    transform: translate(-90px, 0%);\n  }\n  100% {\n    transform: translate(85px, 0%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb211bG9yYW1vc2Rlc2lxdWVpcmEvRWxvdmVyZGUva2FtcG8tYXBwL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNDSjs7QURFRTtFQUNFLG9EQUFBO0VBQ0EsNENBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUU7RUFDRSxtREFBQTtFQUNBLDJDQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVFO0VBQ0UsbURBQUE7RUFDQSwyQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFRTtFQUNFO0lBQ0UsOEJBQUE7RUNDSjtFRENFO0lBQ0UsK0JBQUE7RUNDSjtBQUNGOztBREVFO0VBQ0U7SUFDRSw4QkFBQTtFQ0FKO0VERUU7SUFDRSwrQkFBQTtFQ0FKO0FBQ0Y7O0FER0U7RUFDRTtJQUNFLCtCQUFBO0VDREo7RURHRTtJQUNFLDhCQUFBO0VDREo7QUFDRjs7QURJRTtFQUNFO0lBQ0UsK0JBQUE7RUNGSjtFRElFO0lBQ0UsOEJBQUE7RUNGSjtBQUNGOztBREtFO0VBQ0U7SUFDRSwrQkFBQTtFQ0hKO0VES0U7SUFDRSw4QkFBQTtFQ0hKO0FBQ0Y7O0FETUU7RUFDRTtJQUNFLCtCQUFBO0VDSko7RURNRTtJQUNFLDhCQUFBO0VDSko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZXJvLXdhdmVzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgfVxuICBcbiAgLndhdmUxIHVzZSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IG1vdmUtZm9yZXZlcjEgMTBzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBhbmltYXRpb246IG1vdmUtZm9yZXZlcjEgMTBzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTJzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTJzO1xuICB9XG4gIFxuICAud2F2ZTIgdXNlIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZS1mb3JldmVyMiA4cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLWZvcmV2ZXIyIDhzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTJzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTJzO1xuICB9XG4gIFxuICAud2F2ZTMgdXNlIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZS1mb3JldmVyMyA2cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLWZvcmV2ZXIzIDZzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTJzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTJzO1xuICB9XG5cbiAgQC13ZWJraXQta2V5ZnJhbWVzIG1vdmUtZm9yZXZlcjEge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDg1cHgsIDAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTBweCwgMCUpO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBtb3ZlLWZvcmV2ZXIxIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg4NXB4LCAwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTkwcHgsIDAlKTtcbiAgICB9XG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyBtb3ZlLWZvcmV2ZXIyIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTBweCwgMCUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDg1cHgsIDAlKTtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgbW92ZS1mb3JldmVyMiB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTkwcHgsIDAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg4NXB4LCAwJSk7XG4gICAgfVxuICB9XG4gIFxuICBALXdlYmtpdC1rZXlmcmFtZXMgbW92ZS1mb3JldmVyMyB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTkwcHgsIDAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg4NXB4LCAwJSk7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIG1vdmUtZm9yZXZlcjMge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC05MHB4LCAwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoODVweCwgMCUpO1xuICAgIH1cbiAgfSIsIi5oZXJvLXdhdmVzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xufVxuXG4ud2F2ZTEgdXNlIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IG1vdmUtZm9yZXZlcjEgMTBzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBtb3ZlLWZvcmV2ZXIxIDEwcyBsaW5lYXIgaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMnM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTJzO1xufVxuXG4ud2F2ZTIgdXNlIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IG1vdmUtZm9yZXZlcjIgOHMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IG1vdmUtZm9yZXZlcjIgOHMgbGluZWFyIGluZmluaXRlO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTJzO1xuICBhbmltYXRpb24tZGVsYXk6IC0ycztcbn1cblxuLndhdmUzIHVzZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlLWZvcmV2ZXIzIDZzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBtb3ZlLWZvcmV2ZXIzIDZzIGxpbmVhciBpbmZpbml0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0ycztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMnM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBtb3ZlLWZvcmV2ZXIxIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDg1cHgsIDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTBweCwgMCUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIG1vdmUtZm9yZXZlcjEge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoODVweCwgMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC05MHB4LCAwJSk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBtb3ZlLWZvcmV2ZXIyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC05MHB4LCAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoODVweCwgMCUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIG1vdmUtZm9yZXZlcjIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTkwcHgsIDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg4NXB4LCAwJSk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBtb3ZlLWZvcmV2ZXIzIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC05MHB4LCAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoODVweCwgMCUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIG1vdmUtZm9yZXZlcjMge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTkwcHgsIDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg4NXB4LCAwJSk7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/login/login.page.ts ***!
    \*******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/barcode-scanner/ngx */
    "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(route, alertController, toastController, barcodeScanner, statusBar) {
        _classCallCheck(this, LoginPage);

        this.route = route;
        this.alertController = alertController;
        this.toastController = toastController;
        this.barcodeScanner = barcodeScanner;
        this.statusBar = statusBar;
        this.userData = {
          login: '',
          password: '',
          email: ''
        };
        this.submitted = false;
        this.passwordType = 'password';
        this.passwordIcon = 'eye';
        this.loading = false;
        this.version = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].version;
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.statusBar.backgroundColorByHexString('#6C9F23');
        }
      }, {
        key: "onLogin",
        value: function onLogin(form) {
          var _this = this;

          this.loading = true;

          if (form.valid) {
            this.userData.email = this.userData.login;

            if (this.userData.login == 'revisador') {
              localStorage.setItem('user', 'revisador');
            } else if (this.userData.login == 'admin') {
              localStorage.setItem('user', 'admin');
            } else {
              localStorage.setItem('user', 'normal');
            }

            if (!window.navigator.onLine) {
              this.loading = false;
              this.loginFailed('Sem conexão com internet!');
              return;
            }

            this.loading = false;
            setTimeout(function () {
              localStorage.setItem('JWT', 'batata');

              _this.route.navigate(['/']);
            }, 2000);
          } else {
            this.submitted = true;
            this.loading = false;
          }
        }
      }, {
        key: "hideShowPassword",
        value: function hideShowPassword() {
          this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
          this.passwordIcon = this.passwordIcon === 'eye' ? 'eye-off' : 'eye';
        }
      }, {
        key: "loginFailed",
        value: function loginFailed(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
                      message: message,
                      duration: 2000,
                      position: 'top',
                      animated: true,
                      color: 'danger',
                      mode: 'ios',
                      buttons: [{
                        side: 'end',
                        icon: 'close',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('close clicked');
                        }
                      }]
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "register",
        value: function register() {
          this.route.navigate(['register-user']);
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword() {
          this.route.navigate(['forgot-password']);
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/login/login.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map