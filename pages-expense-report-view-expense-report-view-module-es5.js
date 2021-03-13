function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-expense-report-view-expense-report-view-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expense-report-view/expense-report-view.page.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expense-report-view/expense-report-view.page.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesExpenseReportViewExpenseReportViewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar [color]=\"status == 'aprobado' ? 'success' : 'primary'\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Informe de despesas</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button [disabled]=\"status != 'open'\"  (click)=\"openOptions($event)\">\n        <ion-icon name=\"ellipsis-horizontal-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n  <ion-toolbar *ngIf=\"status == 'revision'\" color=\"warning\">\n    <p class=\"ml-2\">Este informe está em revisão. O encarregado atual é <strong>André Fraga</strong></p>\n  </ion-toolbar>\n  <div [style.background-color]=\"status == 'aprobado' ? '#1acc8d' : '#0205A1'\"  class=\"relative\">\n    <div class=\"pt-4\">\n      <ion-text >\n        <p style=\"color: white;\" class=\"text-center text-base font-bold\">Despedas de Março</p>\n      </ion-text>\n      <p style=\"color: white;\" class=\"text-center font-extrabold text-3xl\">448,370 COP</p>\n      <p style=\"color: white;\" class=\"text-center font-light\">Aprovado: 0 COP</p>\n  \n    </div>\n  \n    <div class=\"w-10/12 h-1 rounded-md m-auto mt-4\" style=\"background-color: white;\"></div>\n    <div class=\"ml-4 mt-4 mr-4 relative\">\n      <div class=\"absolute top-0 right-0\">\n        <ion-badge *ngIf=\"status == 'revision'\" class=\"mt-2\" color=\"warning\">\n          <ion-icon slot=\"start\" name=\"elo-information\"></ion-icon>\n          Em Revisão\n        </ion-badge>\n        <ion-badge *ngIf=\"status == 'aprobado'\" class=\"mt-2\" color=\"success\">\n          <ion-icon slot=\"start\" name=\"elo-information\"></ion-icon>\n          Aprobado\n        </ion-badge>\n      </div>\n      <p style=\"color: white;\" class=\"text-left\"><strong>Envio:</strong> 2021-02-11</p>\n      <p style=\"color: white;\" class=\"text-left\"><strong>Nota:</strong><ion-text> Revisar as despesas referentes ao mês de Março</ion-text></p>\n    </div>\n    \n    <svg class=\"hero-waves\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 24 150 28 \" preserveAspectRatio=\"none\">\n      <defs>\n        <path id=\"wave-path\" d=\"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z\">\n      </path></defs>\n      <g class=\"wave1\">\n        <use xlink:href=\"#wave-path\" x=\"50\" y=\"3\" fill=\"rgba(244,245,248, .1)\">\n      </use></g>\n      <g class=\"wave2\">\n        <use xlink:href=\"#wave-path\" x=\"50\" y=\"0\" fill=\"rgba(244,245,248, .2)\">\n      </use></g>\n      <g class=\"wave3\">\n        <use xlink:href=\"#wave-path\" x=\"50\" y=\"9\" fill=\"#F4F5F8\">\n      </use></g>\n    </svg>\n  </div>\n\n  <div *ngIf=\"status == 'open'\" class=\"m-auto text-center mt-3 px-3 mb-3\">\n    <ion-button (click)=\"toReportList()\" color=\"success\" expand=\"block\">Enviar informe</ion-button>\n  </div>\n\n  <div *ngIf=\"status == 'open'\" class=\"m-auto text-center mt-3 px-3 mb-3\">\n    <ion-button (click)=\"toExpenseListAdd()\" size=\"small\" fill=\"outline\" color=\"primary\" expand=\"block\">\n      <ion-icon name=\"add\" slot=\"start\"></ion-icon>\n      Adicionar despesa\n    </ion-button>\n  </div>\n\n  <ion-card (click)=\"toExpenseEdit()\" class=\"card-no-border card-no-margin\">\n    <ion-item  lines=\"none\">\n\n      <ion-thumbnail slot=\"start\">\n        <img src=\"../../../assets/nf.jpeg\">\n      </ion-thumbnail>\n\n      <ion-label class=\"text-xs \">\n        <p style=\"font-size: 13px;\" class=\"mt-2 w-12/12\">\n          <span class=\"font-bold text-base\" style=\"font-size: 15px;\">POSTO RODAO</span>\n        </p>\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n          <strong > 2021-02-06</strong>\n        </p>\n\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n           <span>Combustível</span>\n        </p>\n      </ion-label>\n\n      <ion-badge color=\"warning\" slot=\"end\">\n        <ion-label>150,320 COP</ion-label>\n      </ion-badge>\n    </ion-item>\n  </ion-card>\n\n  <ion-card (click)=\"toExpenseEdit()\" class=\"card-no-border card-no-margin\">\n    <ion-item  lines=\"none\">\n\n      <ion-thumbnail slot=\"start\">\n        <img src=\"../../../assets/nf.jpeg\">\n      </ion-thumbnail>\n\n      <ion-label class=\"text-xs \">\n        <p style=\"font-size: 13px;\" class=\"mt-2 w-12/12\">\n          <span class=\"font-bold text-base\" style=\"font-size: 15px;\">ELOVERDE</span>\n        </p>\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n          <strong > 2021-02-06</strong>\n        </p>\n\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n           <span>Suporte</span>\n        </p>\n      </ion-label>\n\n      <ion-badge color=\"warning\" slot=\"end\">\n        <ion-label>200,303 COP</ion-label>\n      </ion-badge>\n    </ion-item>\n  </ion-card>\n\n  <ion-card (click)=\"toExpenseEdit()\" class=\"card-no-border card-no-margin\">\n    <ion-item [disabled]=\"true\" lines=\"none\">\n\n      <ion-thumbnail slot=\"start\">\n        <img src=\"../../../assets/nf.jpeg\">\n      </ion-thumbnail>\n\n      <ion-text class=\"text-xs \">\n        <p style=\"font-size: 13px;\" class=\"mt-2 w-12/12\">\n          <span class=\"font-bold text-base\" style=\"font-size: 15px;\">APPLE</span>\n        </p>\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n          <strong > 2021-02-06</strong>\n        </p>\n\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n           <span>Conserto de celular</span>\n        </p>\n\n      </ion-text>\n\n      <ion-badge color=\"danger\" slot=\"end\">\n        <ion-label>600,500 COP</ion-label>\n      </ion-badge>\n    </ion-item>\n    <p style=\"font-size: 13px;\" class=\"ml-1 mt-2 font-light text-center\">\n      <ion-icon color=\"danger\"  name=\"information-circle-outline\"></ion-icon>\n      <ion-text>\n          Valor não corresponde com as nossas diretrizes\n      </ion-text>\n   </p>\n  </ion-card>\n\n  <ion-card (click)=\"toExpenseEdit()\" class=\"card-no-border card-no-margin\">\n    <ion-item  lines=\"none\">\n\n      <ion-thumbnail slot=\"start\">\n        <img src=\"../../../assets/nf.jpeg\">\n      </ion-thumbnail>\n\n      <ion-label class=\"text-xs \">\n        <p style=\"font-size: 13px;\" class=\"mt-2 w-12/12\">\n          <span class=\"font-bold text-base\" style=\"font-size: 15px;\">POSTO RODAO</span>\n        </p>\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n          <strong > 2021-02-06</strong>\n        </p>\n\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n           <span>Combustível</span>\n        </p>\n      </ion-label>\n\n      <ion-badge color=\"warning\" slot=\"end\">\n        <ion-label>120,232 COP</ion-label>\n      </ion-badge>\n    </ion-item>\n  </ion-card>\n\n\n  <ion-fab (click)=\"toExpenseCreate()\" *ngIf=\"status == 'open'\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button  color=\"secondary\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expense-report-view/menu-popover/menu-popover.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expense-report-view/menu-popover/menu-popover.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesExpenseReportViewMenuPopoverMenuPopoverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-list lines=\"none\">\n\n  <ion-item (click)=\"edit()\" button>\n    <ion-icon color=\"warning\" slot=\"start\" name=\"create-outline\"></ion-icon>Editar\n  </ion-item>\n\n\n  <ion-item (click)=\"deleteReport()\" button>\n    <ion-icon color=\"danger\" slot=\"start\" name=\"trash\"></ion-icon>Excluir\n  </ion-item>\n\n</ion-list>";
    /***/
  },

  /***/
  "./src/app/pages/expense-report-view/expense-report-view-routing.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/expense-report-view/expense-report-view-routing.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: ExpenseReportViewPageRoutingModule */

  /***/
  function srcAppPagesExpenseReportViewExpenseReportViewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpenseReportViewPageRoutingModule", function () {
      return ExpenseReportViewPageRoutingModule;
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


    var _expense_report_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./expense-report-view.page */
    "./src/app/pages/expense-report-view/expense-report-view.page.ts");

    var routes = [{
      path: '',
      component: _expense_report_view_page__WEBPACK_IMPORTED_MODULE_3__["ExpenseReportViewPage"]
    }];

    var ExpenseReportViewPageRoutingModule = function ExpenseReportViewPageRoutingModule() {
      _classCallCheck(this, ExpenseReportViewPageRoutingModule);
    };

    ExpenseReportViewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ExpenseReportViewPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/expense-report-view/expense-report-view.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/expense-report-view/expense-report-view.module.ts ***!
    \*************************************************************************/

  /*! exports provided: ExpenseReportViewPageModule */

  /***/
  function srcAppPagesExpenseReportViewExpenseReportViewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpenseReportViewPageModule", function () {
      return ExpenseReportViewPageModule;
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


    var _expense_report_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./expense-report-view-routing.module */
    "./src/app/pages/expense-report-view/expense-report-view-routing.module.ts");
    /* harmony import */


    var _expense_report_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./expense-report-view.page */
    "./src/app/pages/expense-report-view/expense-report-view.page.ts");
    /* harmony import */


    var _menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./menu-popover/menu-popover.component */
    "./src/app/pages/expense-report-view/menu-popover/menu-popover.component.ts");

    var ExpenseReportViewPageModule = function ExpenseReportViewPageModule() {
      _classCallCheck(this, ExpenseReportViewPageModule);
    };

    ExpenseReportViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _expense_report_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExpenseReportViewPageRoutingModule"]],
      declarations: [_expense_report_view_page__WEBPACK_IMPORTED_MODULE_6__["ExpenseReportViewPage"], _menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_7__["ExpenseReportPopoverComponent"]],
      entryComponents: [_menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_7__["ExpenseReportPopoverComponent"]]
    })], ExpenseReportViewPageModule);
    /***/
  },

  /***/
  "./src/app/pages/expense-report-view/expense-report-view.page.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/expense-report-view/expense-report-view.page.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesExpenseReportViewExpenseReportViewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGVuc2UtcmVwb3J0LXZpZXcvZXhwZW5zZS1yZXBvcnQtdmlldy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/expense-report-view/expense-report-view.page.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/expense-report-view/expense-report-view.page.ts ***!
    \***********************************************************************/

  /*! exports provided: ExpenseReportViewPage */

  /***/
  function srcAppPagesExpenseReportViewExpenseReportViewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpenseReportViewPage", function () {
      return ExpenseReportViewPage;
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


    var _menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./menu-popover/menu-popover.component */
    "./src/app/pages/expense-report-view/menu-popover/menu-popover.component.ts");

    var ExpenseReportViewPage = /*#__PURE__*/function () {
      function ExpenseReportViewPage(router, popoverController) {
        _classCallCheck(this, ExpenseReportViewPage);

        this.router = router;
        this.popoverController = popoverController;
        this.permissionType = 'user';
        this.status = 'revision';
      }

      _createClass(ExpenseReportViewPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.permissionType = localStorage.getItem('expense-report-permission-type');
          this.status = localStorage.getItem('expense-report-status');
        }
      }, {
        key: "getColor",
        value: function getColor() {
          return '#1acc8d';
        }
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
                      component: _menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_4__["ExpenseReportPopoverComponent"],
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
        key: "toExpenseCreate",
        value: function toExpenseCreate() {
          localStorage.setItem('expense-group', 'true');
          localStorage.setItem('expense-last-page', 'report-view');
          this.router.navigate(['expense-create']);
        }
      }, {
        key: "toReportList",
        value: function toReportList() {
          this.router.navigate(['expense-report-list']);
        }
      }, {
        key: "toExpenseListAdd",
        value: function toExpenseListAdd() {
          this.router.navigate(['expense-add-to-expense-report']);
        }
      }, {
        key: "toExpenseEdit",
        value: function toExpenseEdit() {
          localStorage.setItem('lastpage', 'expense-report-view');
          this.router.navigate(['expense-edit']);
        }
      }]);

      return ExpenseReportViewPage;
    }();

    ExpenseReportViewPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }];
    };

    ExpenseReportViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-expense-report-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./expense-report-view.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expense-report-view/expense-report-view.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./expense-report-view.page.scss */
      "./src/app/pages/expense-report-view/expense-report-view.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])], ExpenseReportViewPage);
    /***/
  },

  /***/
  "./src/app/pages/expense-report-view/menu-popover/menu-popover.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/expense-report-view/menu-popover/menu-popover.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesExpenseReportViewMenuPopoverMenuPopoverComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGVuc2UtcmVwb3J0LXZpZXcvbWVudS1wb3BvdmVyL21lbnUtcG9wb3Zlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/expense-report-view/menu-popover/menu-popover.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/expense-report-view/menu-popover/menu-popover.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: ExpenseReportPopoverComponent */

  /***/
  function srcAppPagesExpenseReportViewMenuPopoverMenuPopoverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpenseReportPopoverComponent", function () {
      return ExpenseReportPopoverComponent;
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

    var ExpenseReportPopoverComponent = /*#__PURE__*/function () {
      function ExpenseReportPopoverComponent(router, popoverController) {
        _classCallCheck(this, ExpenseReportPopoverComponent);

        this.router = router;
        this.popoverController = popoverController;
      }

      _createClass(ExpenseReportPopoverComponent, [{
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
            _this2.router.navigate(['expense-report-edit']);
          });
        }
      }]);

      return ExpenseReportPopoverComponent;
    }();

    ExpenseReportPopoverComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }];
    };

    ExpenseReportPopoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu-popover',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu-popover.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expense-report-view/menu-popover/menu-popover.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu-popover.component.scss */
      "./src/app/pages/expense-report-view/menu-popover/menu-popover.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])], ExpenseReportPopoverComponent);
    /***/
  }
}]);
//# sourceMappingURL=pages-expense-report-view-expense-report-view-module-es5.js.map