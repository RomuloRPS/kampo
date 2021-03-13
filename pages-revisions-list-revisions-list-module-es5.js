function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-revisions-list-revisions-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/revisions-list/revisions-list.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/revisions-list/revisions-list.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRevisionsListRevisionsListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Revisões</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n\n\n  <ion-card (click)=\"toExpenseReportView('revision')\" class=\"card-no-border card-no-margin\">\n    <ion-item  lines=\"none\">\n\n      <ion-icon class=\"text-5xl z-50\" slot=\"start\" color=\"primary\" name=\"file-tray-full-outline\"></ion-icon>\n\n      <ion-label class=\"text-xs \">\n        <p style=\"font-size: 13px;\" class=\"mt-2 w-12/12\">\n          <span class=\"ml-1 font-bold text-base\" style=\"font-size: 15px;\">Despedas de Fevereiro</span>\n        </p>\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n          <strong class=\"ml-1\"> 400,00 COP</strong>\n        </p>\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n          <strong class=\"ml-1\"> Rômulo</strong>\n        </p>\n\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n          <ion-text class=\"ml-1\">Observação: iureuiheuyihfiuhiwh ihuhsfdiusiufghuys hoijviugs iudafji dh siunfsiuiu fhiuefbiuf biufiusniufiudbnsijfndsjknfkjdsbfjhbdskfjdnigbdsiufjdsoinfbijsnamdifbksefnojagbnigbijsdbfisaufsos</ion-text>\n        </p>\n        <p  style=\"font-size: 13px;\" class=\"ml-8 mt-2\">\n          <ion-badge class=\"mt-2\" color=\"warning\">\n            <ion-icon slot=\"start\" name=\"elo-information\"></ion-icon>\n            Em Revisão - 320,30 COP\n          </ion-badge>\n        </p>\n      </ion-label>\n\n      <ion-buttons  slot=\"end\">\n        <ion-button color=\"primary\">\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n  </ion-card>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/revisions-list/revisions-list-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/revisions-list/revisions-list-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: RevisionsListPageRoutingModule */

  /***/
  function srcAppPagesRevisionsListRevisionsListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RevisionsListPageRoutingModule", function () {
      return RevisionsListPageRoutingModule;
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


    var _revisions_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./revisions-list.page */
    "./src/app/pages/revisions-list/revisions-list.page.ts");

    var routes = [{
      path: '',
      component: _revisions_list_page__WEBPACK_IMPORTED_MODULE_3__["RevisionsListPage"]
    }];

    var RevisionsListPageRoutingModule = function RevisionsListPageRoutingModule() {
      _classCallCheck(this, RevisionsListPageRoutingModule);
    };

    RevisionsListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RevisionsListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/revisions-list/revisions-list.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/revisions-list/revisions-list.module.ts ***!
    \***************************************************************/

  /*! exports provided: RevisionsListPageModule */

  /***/
  function srcAppPagesRevisionsListRevisionsListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RevisionsListPageModule", function () {
      return RevisionsListPageModule;
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


    var _revisions_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./revisions-list-routing.module */
    "./src/app/pages/revisions-list/revisions-list-routing.module.ts");
    /* harmony import */


    var _revisions_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./revisions-list.page */
    "./src/app/pages/revisions-list/revisions-list.page.ts");

    var RevisionsListPageModule = function RevisionsListPageModule() {
      _classCallCheck(this, RevisionsListPageModule);
    };

    RevisionsListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _revisions_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["RevisionsListPageRoutingModule"]],
      declarations: [_revisions_list_page__WEBPACK_IMPORTED_MODULE_6__["RevisionsListPage"]]
    })], RevisionsListPageModule);
    /***/
  },

  /***/
  "./src/app/pages/revisions-list/revisions-list.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/revisions-list/revisions-list.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRevisionsListRevisionsListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JldmlzaW9ucy1saXN0L3JldmlzaW9ucy1saXN0LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/revisions-list/revisions-list.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/revisions-list/revisions-list.page.ts ***!
    \*************************************************************/

  /*! exports provided: RevisionsListPage */

  /***/
  function srcAppPagesRevisionsListRevisionsListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RevisionsListPage", function () {
      return RevisionsListPage;
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

    var RevisionsListPage = /*#__PURE__*/function () {
      function RevisionsListPage(router) {
        _classCallCheck(this, RevisionsListPage);

        this.router = router;
      }

      _createClass(RevisionsListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toExpenseReportView",
        value: function toExpenseReportView(status) {
          localStorage.setItem('revisions-edit', status);
          this.router.navigate(['revisions-view']);
        }
      }]);

      return RevisionsListPage;
    }();

    RevisionsListPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    RevisionsListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-revisions-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./revisions-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/revisions-list/revisions-list.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./revisions-list.page.scss */
      "./src/app/pages/revisions-list/revisions-list.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], RevisionsListPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-revisions-list-revisions-list-module-es5.js.map