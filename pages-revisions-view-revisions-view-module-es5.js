function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-revisions-view-revisions-view-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/revisions-view/revisions-view.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/revisions-view/revisions-view.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRevisionsViewRevisionsViewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Revisão de Despesas</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button [disabled]=\"status != 'open'\"  (click)=\"openOptions($event)\">\n        <ion-icon name=\"ellipsis-horizontal-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n  <div style=\"background-color: #1acc8d;\" class=\"relative\">\n    <div class=\"pt-4\">\n      <ion-text >\n        <p style=\"color: white;\" class=\"text-center text-base font-bold\">Despedas de Março</p>\n      </ion-text>\n      <p style=\"color: white;\" class=\"text-center font-extrabold text-3xl\">448,370 COP</p>\n      <p style=\"color: white;\" class=\"text-center font-light\">Aprobado: 0 COP</p>\n  \n    </div>\n  \n    <div class=\"w-10/12 h-1 rounded-md m-auto mt-4\" style=\"background-color: white;\"></div>\n    <div class=\"ml-4 mt-4 mr-4 relative\">\n      <div class=\"absolute top-0 right-0\">\n        <ion-badge class=\"mt-2\" color=\"warning\">\n          <ion-icon slot=\"start\" name=\"elo-information\"></ion-icon>\n          Em revisão\n        </ion-badge>\n      </div>\n      <p style=\"color: white;\" class=\"text-left\"><strong>Envio:</strong> 2021-02-11</p>\n      <p style=\"color: white;\" class=\"text-left\"><strong>Nota:</strong><ion-text> Revisar as despesas referentes ao mês de Março</ion-text></p>\n    </div>\n    \n    <svg class=\"hero-waves\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 24 150 28 \" preserveAspectRatio=\"none\">\n      <defs>\n        <path id=\"wave-path\" d=\"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z\">\n      </path></defs>\n      <g class=\"wave1\">\n        <use xlink:href=\"#wave-path\" x=\"50\" y=\"3\" fill=\"rgba(244,245,248, .1)\">\n      </use></g>\n      <g class=\"wave2\">\n        <use xlink:href=\"#wave-path\" x=\"50\" y=\"0\" fill=\"rgba(244,245,248, .2)\">\n      </use></g>\n      <g class=\"wave3\">\n        <use xlink:href=\"#wave-path\" x=\"50\" y=\"9\" fill=\"#F4F5F8\">\n      </use></g>\n    </svg>\n  </div>\n\n  <div class=\"m-auto text-center mt-3 px-3 mb-3\">\n    <ion-button (click)=\"toRevisionEdit()\" color=\"primary\" expand=\"block\">Aprovar ou reprovar todos as Despesas</ion-button>\n  </div>\n\n  <ion-card (click)=\"toExpenseEdit()\" class=\"card-no-border card-no-margin\">\n    <ion-item  lines=\"none\">\n\n      <ion-thumbnail slot=\"start\">\n        <img src=\"../../../assets/nf.jpeg\">\n      </ion-thumbnail>\n\n      <ion-label class=\"text-xs \">\n        <p style=\"font-size: 13px;\" class=\"mt-2 w-12/12\">\n          <span class=\"font-bold text-base\" style=\"font-size: 15px;\">POSTO RODAO</span>\n        </p>\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n          <strong > 2021-02-06</strong>\n        </p>\n\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n           <span>Combustível</span>\n        </p>\n      </ion-label>\n\n      <ion-badge color=\"warning\" slot=\"end\">\n        <ion-label>150,320 COP</ion-label>\n      </ion-badge>\n    </ion-item>\n  </ion-card>\n\n  <ion-card (click)=\"toExpenseEdit()\" class=\"card-no-border card-no-margin\">\n    <ion-item  lines=\"none\">\n\n      <ion-thumbnail slot=\"start\">\n        <img src=\"../../../assets/nf.jpeg\">\n      </ion-thumbnail>\n\n      <ion-label class=\"text-xs \">\n        <p style=\"font-size: 13px;\" class=\"mt-2 w-12/12\">\n          <span class=\"font-bold text-base\" style=\"font-size: 15px;\">ELOVERDE</span>\n        </p>\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n          <strong > 2021-02-06</strong>\n        </p>\n\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n           <span>Suporte</span>\n        </p>\n      </ion-label>\n\n      <ion-badge color=\"warning\" slot=\"end\">\n        <ion-label>200,303 COP</ion-label>\n      </ion-badge>\n    </ion-item>\n  </ion-card>\n\n  <ion-card (click)=\"toExpenseEdit()\" class=\"card-no-border card-no-margin\">\n    <ion-item  lines=\"none\">\n\n      <ion-thumbnail slot=\"start\">\n        <img src=\"../../../assets/nf.jpeg\">\n      </ion-thumbnail>\n\n      <ion-label class=\"text-xs \">\n        <p style=\"font-size: 13px;\" class=\"mt-2 w-12/12\">\n          <span class=\"font-bold text-base\" style=\"font-size: 15px;\">APPLE</span>\n        </p>\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n          <strong > 2021-02-06</strong>\n        </p>\n\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n           <span>Conserto de celular</span>\n        </p>\n      </ion-label>\n\n      <ion-badge color=\"warning\" slot=\"end\">\n        <ion-label>600,500 COP</ion-label>\n      </ion-badge>\n    </ion-item>\n  </ion-card>\n\n  <ion-card (click)=\"toExpenseEdit()\" class=\"card-no-border card-no-margin\">\n    <ion-item  lines=\"none\">\n\n      <ion-thumbnail slot=\"start\">\n        <img src=\"../../../assets/nf.jpeg\">\n      </ion-thumbnail>\n\n      <ion-label class=\"text-xs \">\n        <p style=\"font-size: 13px;\" class=\"mt-2 w-12/12\">\n          <span class=\"font-bold text-base\" style=\"font-size: 15px;\">POSTO RODAO</span>\n        </p>\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n          <strong > 2021-02-06</strong>\n        </p>\n\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n           <span>Combustível</span>\n        </p>\n      </ion-label>\n\n      <ion-badge color=\"warning\" slot=\"end\">\n        <ion-label>120,232 COP</ion-label>\n      </ion-badge>\n    </ion-item>\n  </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/revisions-view/revisions-view-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/revisions-view/revisions-view-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: RevisionsViewPageRoutingModule */

  /***/
  function srcAppPagesRevisionsViewRevisionsViewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RevisionsViewPageRoutingModule", function () {
      return RevisionsViewPageRoutingModule;
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


    var _revisions_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./revisions-view.page */
    "./src/app/pages/revisions-view/revisions-view.page.ts");

    var routes = [{
      path: '',
      component: _revisions_view_page__WEBPACK_IMPORTED_MODULE_3__["RevisionsViewPage"]
    }];

    var RevisionsViewPageRoutingModule = function RevisionsViewPageRoutingModule() {
      _classCallCheck(this, RevisionsViewPageRoutingModule);
    };

    RevisionsViewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RevisionsViewPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/revisions-view/revisions-view.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/revisions-view/revisions-view.module.ts ***!
    \***************************************************************/

  /*! exports provided: RevisionsViewPageModule */

  /***/
  function srcAppPagesRevisionsViewRevisionsViewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RevisionsViewPageModule", function () {
      return RevisionsViewPageModule;
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


    var _revisions_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./revisions-view-routing.module */
    "./src/app/pages/revisions-view/revisions-view-routing.module.ts");
    /* harmony import */


    var _revisions_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./revisions-view.page */
    "./src/app/pages/revisions-view/revisions-view.page.ts");

    var RevisionsViewPageModule = function RevisionsViewPageModule() {
      _classCallCheck(this, RevisionsViewPageModule);
    };

    RevisionsViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _revisions_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["RevisionsViewPageRoutingModule"]],
      declarations: [_revisions_view_page__WEBPACK_IMPORTED_MODULE_6__["RevisionsViewPage"]]
    })], RevisionsViewPageModule);
    /***/
  },

  /***/
  "./src/app/pages/revisions-view/revisions-view.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/revisions-view/revisions-view.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRevisionsViewRevisionsViewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JldmlzaW9ucy12aWV3L3JldmlzaW9ucy12aWV3LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/revisions-view/revisions-view.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/revisions-view/revisions-view.page.ts ***!
    \*************************************************************/

  /*! exports provided: RevisionsViewPage */

  /***/
  function srcAppPagesRevisionsViewRevisionsViewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RevisionsViewPage", function () {
      return RevisionsViewPage;
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

    var RevisionsViewPage = /*#__PURE__*/function () {
      function RevisionsViewPage(router) {
        _classCallCheck(this, RevisionsViewPage);

        this.router = router;
      }

      _createClass(RevisionsViewPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toRevisionEdit",
        value: function toRevisionEdit() {
          this.router.navigate(['revisions-edit']);
        }
      }, {
        key: "toExpenseEdit",
        value: function toExpenseEdit() {
          this.router.navigate(['revisions-expense-view']);
        }
      }]);

      return RevisionsViewPage;
    }();

    RevisionsViewPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    RevisionsViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-revisions-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./revisions-view.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/revisions-view/revisions-view.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./revisions-view.page.scss */
      "./src/app/pages/revisions-view/revisions-view.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], RevisionsViewPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-revisions-view-revisions-view-module-es5.js.map