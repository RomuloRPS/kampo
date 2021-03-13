function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-users-list-users-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users-list/users-list.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users-list/users-list.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUsersListUsersListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Usuários</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n\n\n  <ion-card (click)=\"toExpenseReportView('revision')\" class=\"card-no-border card-no-margin\">\n    <ion-item  lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img src=\"./assets/usuario.png\" />\n      </ion-avatar>\n\n      <ion-label class=\"text-xs \">\n        <p style=\"font-size: 13px;\" class=\"mt-2 w-12/12\">\n          <span class=\"ml-1 font-bold text-base\" style=\"font-size: 15px;\">Rômulo</span>\n        </p>\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n          <strong class=\"ml-1\">romulo.rps@hotmail.com</strong>\n        </p>\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n          <strong class=\"ml-1\">Eloverde</strong>\n        </p>\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n          <span class=\"ml-1\">Desenvolvimento</span  >\n        </p>\n      \n        <p  style=\"font-size: 13px;\" class=\"ml-8 mt-2\">\n          <ion-badge class=\"mt-2\" color=\"primary\">\n            <ion-icon slot=\"start\" name=\"elo-information\"></ion-icon>\n            Usuário\n          </ion-badge>\n        </p>\n      </ion-label>\n\n      <ion-buttons  slot=\"end\">\n        <ion-button color=\"primary\">\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n  </ion-card>\n\n  <ion-fab (click)=\"toUserCreate()\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button  color=\"secondary\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/users-list/users-list-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/users-list/users-list-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: UsersListPageRoutingModule */

  /***/
  function srcAppPagesUsersListUsersListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersListPageRoutingModule", function () {
      return UsersListPageRoutingModule;
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


    var _users_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./users-list.page */
    "./src/app/pages/users-list/users-list.page.ts");

    var routes = [{
      path: '',
      component: _users_list_page__WEBPACK_IMPORTED_MODULE_3__["UsersListPage"]
    }];

    var UsersListPageRoutingModule = function UsersListPageRoutingModule() {
      _classCallCheck(this, UsersListPageRoutingModule);
    };

    UsersListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UsersListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/users-list/users-list.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/users-list/users-list.module.ts ***!
    \*******************************************************/

  /*! exports provided: UsersListPageModule */

  /***/
  function srcAppPagesUsersListUsersListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersListPageModule", function () {
      return UsersListPageModule;
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


    var _users_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./users-list-routing.module */
    "./src/app/pages/users-list/users-list-routing.module.ts");
    /* harmony import */


    var _users_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./users-list.page */
    "./src/app/pages/users-list/users-list.page.ts");

    var UsersListPageModule = function UsersListPageModule() {
      _classCallCheck(this, UsersListPageModule);
    };

    UsersListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _users_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsersListPageRoutingModule"]],
      declarations: [_users_list_page__WEBPACK_IMPORTED_MODULE_6__["UsersListPage"]]
    })], UsersListPageModule);
    /***/
  },

  /***/
  "./src/app/pages/users-list/users-list.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/users-list/users-list.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUsersListUsersListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzLWxpc3QvdXNlcnMtbGlzdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/users-list/users-list.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/users-list/users-list.page.ts ***!
    \*****************************************************/

  /*! exports provided: UsersListPage */

  /***/
  function srcAppPagesUsersListUsersListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersListPage", function () {
      return UsersListPage;
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

    var UsersListPage = /*#__PURE__*/function () {
      function UsersListPage(router) {
        _classCallCheck(this, UsersListPage);

        this.router = router;
      }

      _createClass(UsersListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toExpenseReportView",
        value: function toExpenseReportView(user) {
          this.router.navigate(['users-edit']);
        }
      }, {
        key: "toUserCreate",
        value: function toUserCreate() {
          this.router.navigate(['users-create']);
        }
      }]);

      return UsersListPage;
    }();

    UsersListPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    UsersListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-users-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./users-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users-list/users-list.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./users-list.page.scss */
      "./src/app/pages/users-list/users-list.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], UsersListPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-users-list-users-list-module-es5.js.map