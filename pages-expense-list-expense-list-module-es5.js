function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-expense-list-expense-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expense-list/expense-list-popover/expense-list-popover.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expense-list/expense-list-popover/expense-list-popover.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesExpenseListExpenseListPopoverExpenseListPopoverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-list lines=\"none\">\n  <ion-item (click)=\"edit()\" button>\n    <ion-icon color=\"primary\" slot=\"start\" name=\"add-outline\"></ion-icon>Criar informe de despesa\n  </ion-item>\n\n\n  <ion-item button>\n    <ion-icon color=\"danger\" slot=\"start\" name=\"trash\"></ion-icon>Excluir Despesas\n  </ion-item>\n\n</ion-list>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expense-list/expense-list.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expense-list/expense-list.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesExpenseListExpenseListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Despesas Avulsas</ion-title>\n    <ion-badge (click)=\"setSelect(true)\" *ngIf=\"!selectOn\" slot=\"end\" color=\"light\">\n      Selecionar\n    </ion-badge>\n\n    <ion-badge (click)=\"setSelect(false)\" *ngIf=\"selectOn\" slot=\"end\" color=\"light\">\n      Cancelar\n    </ion-badge>\n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content color=\"light\">\n\n  <ion-card (click)=\"toExpenseEdit()\" class=\"card-no-border card-no-margin\">\n    <ion-item  lines=\"none\">\n\n      <ion-checkbox *ngIf=\"selectOn\" slot=\"start\"></ion-checkbox>\n      \n      <ion-thumbnail *ngIf=\"!selectOn\" slot=\"start\">\n        <img src=\"../../../assets/nf.jpeg\">\n      </ion-thumbnail>\n\n      <ion-label class=\"text-xs \">\n        <p style=\"font-size: 13px;\" class=\"mt-2 w-12/12\">\n          <span class=\"font-bold text-base\" style=\"font-size: 15px;\">POSTO RODAO</span>\n        </p>\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n          <strong > 2021-02-06</strong>\n        </p>\n\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n           <span>Combustível</span>\n        </p>\n      </ion-label>\n\n      <ion-badge color=\"warning\" slot=\"end\">\n        <ion-label>150,320 COP</ion-label>\n      </ion-badge>\n    </ion-item>\n  </ion-card>\n\n  <ion-card (click)=\"toExpenseEdit()\" class=\"card-no-border card-no-margin\">\n    <ion-item  lines=\"none\">\n\n      <ion-checkbox *ngIf=\"selectOn\" slot=\"start\"></ion-checkbox>\n      \n      <ion-thumbnail *ngIf=\"!selectOn\" slot=\"start\">\n        <img src=\"../../../assets/nf.jpeg\">\n      </ion-thumbnail>\n\n      <ion-label class=\"text-xs \">\n        <p style=\"font-size: 13px;\" class=\"mt-2 w-12/12\">\n          <span class=\"font-bold text-base\" style=\"font-size: 15px;\">ELOVERDE</span>\n        </p>\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n          <strong > 2021-02-06</strong>\n        </p>\n\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n           <span>Suporte</span>\n        </p>\n      </ion-label>\n\n      <ion-badge color=\"warning\" slot=\"end\">\n        <ion-label>200,303 COP</ion-label>\n      </ion-badge>\n    </ion-item>\n  </ion-card>\n\n  <ion-card (click)=\"toExpenseEdit()\" class=\"card-no-border card-no-margin\">\n    <ion-item  lines=\"none\">\n\n     <ion-checkbox *ngIf=\"selectOn\" slot=\"start\"></ion-checkbox>\n      \n      <ion-thumbnail *ngIf=\"!selectOn\" slot=\"start\">\n        <img src=\"../../../assets/nf.jpeg\">\n      </ion-thumbnail>\n\n      <ion-label class=\"text-xs \">\n        <p style=\"font-size: 13px;\" class=\"mt-2 w-12/12\">\n          <span class=\"font-bold text-base\" style=\"font-size: 15px;\">APPLE</span>\n        </p>\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n          <strong > 2021-02-06</strong>\n        </p>\n\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n           <span>Conserto de celular</span>\n        </p>\n      </ion-label>\n\n      <ion-badge color=\"warning\" slot=\"end\">\n        <ion-label>600,500 COP</ion-label>\n      </ion-badge>\n    </ion-item>\n  </ion-card>\n\n  <ion-card (click)=\"toExpenseEdit()\" class=\"card-no-border card-no-margin\">\n    <ion-item  lines=\"none\">\n\n      <ion-checkbox *ngIf=\"selectOn\" slot=\"start\"></ion-checkbox>\n      \n      <ion-thumbnail *ngIf=\"!selectOn\" slot=\"start\">\n        <img src=\"../../../assets/nf.jpeg\">\n      </ion-thumbnail>\n\n      <ion-label class=\"text-xs \">\n        <p style=\"font-size: 13px;\" class=\"mt-2 w-12/12\">\n          <span class=\"font-bold text-base\" style=\"font-size: 15px;\">POSTO RODAO</span>\n        </p>\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n          <strong > 2021-02-06</strong>\n        </p>\n\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n           <span>Combustível</span>\n        </p>\n      </ion-label>\n\n      <ion-badge color=\"warning\" slot=\"end\">\n        <ion-label>120,232 COP</ion-label>\n      </ion-badge>\n    </ion-item>\n  </ion-card>\n\n\n  <ion-fab *ngIf=\"selectOn\" (click)=\"openOptions($event)\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button  color=\"secondary\">\n      <ion-icon name=\"ellipsis-horizontal-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab *ngIf=\"!selectOn\"  (click)=\"toExpenseCreate()\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button  color=\"secondary\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/expense-list/expense-list-popover/expense-list-popover.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/pages/expense-list/expense-list-popover/expense-list-popover.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesExpenseListExpenseListPopoverExpenseListPopoverComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGVuc2UtbGlzdC9leHBlbnNlLWxpc3QtcG9wb3Zlci9leHBlbnNlLWxpc3QtcG9wb3Zlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/expense-list/expense-list-popover/expense-list-popover.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/expense-list/expense-list-popover/expense-list-popover.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ExpenseListPopoverComponent */

  /***/
  function srcAppPagesExpenseListExpenseListPopoverExpenseListPopoverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpenseListPopoverComponent", function () {
      return ExpenseListPopoverComponent;
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

    var ExpenseListPopoverComponent = /*#__PURE__*/function () {
      function ExpenseListPopoverComponent(router, popoverController) {
        _classCallCheck(this, ExpenseListPopoverComponent);

        this.router = router;
        this.popoverController = popoverController;
      }

      _createClass(ExpenseListPopoverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "deleteReport",
        value: function deleteReport() {
          var _this = this;

          this.popoverController.dismiss().then(function () {
            _this.router.navigate(['expense-report-list']);
          });
        }
      }, {
        key: "edit",
        value: function edit() {
          var _this2 = this;

          this.popoverController.dismiss().then(function () {
            _this2.router.navigate(['expense-report-create']);
          });
        }
      }]);

      return ExpenseListPopoverComponent;
    }();

    ExpenseListPopoverComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }];
    };

    ExpenseListPopoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu-popover',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./expense-list-popover.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expense-list/expense-list-popover/expense-list-popover.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./expense-list-popover.component.scss */
      "./src/app/pages/expense-list/expense-list-popover/expense-list-popover.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])], ExpenseListPopoverComponent);
    /***/
  },

  /***/
  "./src/app/pages/expense-list/expense-list-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/expense-list/expense-list-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ExpenseListPageRoutingModule */

  /***/
  function srcAppPagesExpenseListExpenseListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpenseListPageRoutingModule", function () {
      return ExpenseListPageRoutingModule;
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


    var _expense_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./expense-list.page */
    "./src/app/pages/expense-list/expense-list.page.ts");

    var routes = [{
      path: '',
      component: _expense_list_page__WEBPACK_IMPORTED_MODULE_3__["ExpenseListPage"]
    }];

    var ExpenseListPageRoutingModule = function ExpenseListPageRoutingModule() {
      _classCallCheck(this, ExpenseListPageRoutingModule);
    };

    ExpenseListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ExpenseListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/expense-list/expense-list.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/expense-list/expense-list.module.ts ***!
    \***********************************************************/

  /*! exports provided: ExpenseListPageModule */

  /***/
  function srcAppPagesExpenseListExpenseListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpenseListPageModule", function () {
      return ExpenseListPageModule;
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


    var _expense_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./expense-list-routing.module */
    "./src/app/pages/expense-list/expense-list-routing.module.ts");
    /* harmony import */


    var _expense_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./expense-list.page */
    "./src/app/pages/expense-list/expense-list.page.ts");
    /* harmony import */


    var _expense_list_popover_expense_list_popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./expense-list-popover/expense-list-popover.component */
    "./src/app/pages/expense-list/expense-list-popover/expense-list-popover.component.ts");

    var ExpenseListPageModule = function ExpenseListPageModule() {
      _classCallCheck(this, ExpenseListPageModule);
    };

    ExpenseListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _expense_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExpenseListPageRoutingModule"]],
      declarations: [_expense_list_page__WEBPACK_IMPORTED_MODULE_6__["ExpenseListPage"], _expense_list_popover_expense_list_popover_component__WEBPACK_IMPORTED_MODULE_7__["ExpenseListPopoverComponent"]],
      entryComponents: [_expense_list_popover_expense_list_popover_component__WEBPACK_IMPORTED_MODULE_7__["ExpenseListPopoverComponent"]]
    })], ExpenseListPageModule);
    /***/
  },

  /***/
  "./src/app/pages/expense-list/expense-list.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/expense-list/expense-list.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesExpenseListExpenseListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGVuc2UtbGlzdC9leHBlbnNlLWxpc3QucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/expense-list/expense-list.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/expense-list/expense-list.page.ts ***!
    \*********************************************************/

  /*! exports provided: ExpenseListPage */

  /***/
  function srcAppPagesExpenseListExpenseListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpenseListPage", function () {
      return ExpenseListPage;
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


    var _expense_list_popover_expense_list_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./expense-list-popover/expense-list-popover.component */
    "./src/app/pages/expense-list/expense-list-popover/expense-list-popover.component.ts");

    var ExpenseListPage = /*#__PURE__*/function () {
      function ExpenseListPage(router, popoverController) {
        _classCallCheck(this, ExpenseListPage);

        this.router = router;
        this.popoverController = popoverController;
      }

      _createClass(ExpenseListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openOptions",
        value: function openOptions(ev) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var popoverOptions, popover;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    popoverOptions = {
                      component: _expense_list_popover_expense_list_popover_component__WEBPACK_IMPORTED_MODULE_4__["ExpenseListPopoverComponent"],
                      translucent: true,
                      event: ev
                    };
                    _context.next = 3;
                    return this.popoverController.create(popoverOptions);

                  case 3:
                    popover = _context.sent;
                    _context.next = 6;
                    return popover.present();

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "setSelect",
        value: function setSelect(option) {
          this.selectOn = option;
        }
      }, {
        key: "toExpenseReportView",
        value: function toExpenseReportView(status) {
          localStorage.setItem('expense-report-status', status);
          this.router.navigate(['expense-report-view']);
        }
      }, {
        key: "createExpenseReport",
        value: function createExpenseReport() {
          this.router.navigate(['expense-report-create']);
        }
      }, {
        key: "toExpenseCreate",
        value: function toExpenseCreate() {
          if (this.selectOn) {
            this.router.navigate(['expense-report-create']);
          } else {
            localStorage.setItem('expense-group', 'true');
            localStorage.setItem('expense-last-page', 'report-view');
            this.router.navigate(['expense-create']);
          }
        }
      }, {
        key: "toReportList",
        value: function toReportList() {
          this.router.navigate(['expense-report-list']);
        }
      }, {
        key: "toExpenseEdit",
        value: function toExpenseEdit() {
          if (!this.selectOn) {
            localStorage.setItem('expense-report-status', 'open');
            this.router.navigate(['expense-edit']);
          }
        }
      }]);

      return ExpenseListPage;
    }();

    ExpenseListPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }];
    };

    ExpenseListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-expense-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./expense-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expense-list/expense-list.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./expense-list.page.scss */
      "./src/app/pages/expense-list/expense-list.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])], ExpenseListPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-expense-list-expense-list-module-es5.js.map