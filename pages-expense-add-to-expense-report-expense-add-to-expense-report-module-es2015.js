(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-expense-add-to-expense-report-expense-add-to-expense-report-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expense-add-to-expense-report/expense-add-to-expense-report.page.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expense-add-to-expense-report/expense-add-to-expense-report.page.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Adicionar Despesas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n\n  <ion-card (click)=\"toExpenseEdit()\" class=\"card-no-border card-no-margin\">\n\n        <ion-item  lines=\"none\">\n          <ion-checkbox slot=\"start\"></ion-checkbox>\n          <ion-label class=\"text-xs \">\n            <p style=\"font-size: 13px;\" class=\"mt-2 w-12/12\">\n              <span class=\"font-bold text-base\" style=\"font-size: 15px;\">POSTO RODAO</span>\n            </p>\n            <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n              <strong > 2021-02-06</strong>\n            </p>\n    \n            <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n               <span>Combustível</span>\n            </p>\n            <p>\n              <ion-badge color=\"warning\" >\n                <ion-label>150,320 COP</ion-label>\n              </ion-badge>\n            </p>\n          </ion-label>\n    \n          \n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"toExpenseView()\" color=\"primary\">\n              <ion-icon name=\"eye-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-item>\n    \n  </ion-card>\n\n  <ion-card class=\"card-no-border card-no-margin\">\n    <ion-item  lines=\"none\">\n      <ion-checkbox slot=\"start\"></ion-checkbox>\n\n      <ion-label class=\"text-xs \">\n        <p style=\"font-size: 13px;\" class=\"mt-2 w-12/12\">\n          <span class=\"font-bold text-base\" style=\"font-size: 15px;\">ELOVERDE</span>\n        </p>\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n          <strong > 2021-02-06</strong>\n        </p>\n\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n           <span>Suporte</span>\n        </p>\n        <p>\n          <ion-badge color=\"warning\">\n            <ion-label>200,303 COP</ion-label>\n          </ion-badge>\n        </p>\n      </ion-label>\n\n      \n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"toExpenseView()\" color=\"primary\">\n          <ion-icon name=\"eye-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n  </ion-card>\n\n  <ion-card (click)=\"toExpenseEdit()\" class=\"card-no-border card-no-margin\">\n    <ion-item  lines=\"none\">\n      <ion-checkbox slot=\"start\"></ion-checkbox>\n\n      <ion-label class=\"text-xs \">\n        <p style=\"font-size: 13px;\" class=\"mt-2 w-12/12\">\n          <span class=\"font-bold text-base\" style=\"font-size: 15px;\">APPLE</span>\n        </p>\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n          <strong > 2021-02-06</strong>\n        </p>\n\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n           <span>Conserto de celular</span>\n        </p>\n        <p>\n          <ion-badge color=\"warning\">\n            <ion-label>600,500 COP</ion-label>\n          </ion-badge>s\n        </p>\n      </ion-label>\n\n      \n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"toExpenseView()\" color=\"primary\">\n          <ion-icon name=\"eye-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n  </ion-card>\n\n  <ion-card (click)=\"toExpenseEdit()\" class=\"card-no-border card-no-margin\">\n    <ion-item  lines=\"none\">\n\n      <ion-checkbox slot=\"start\"></ion-checkbox>\n\n\n      <ion-label class=\"text-xs \">\n        <p style=\"font-size: 13px;\" class=\"mt-2 w-12/12\">\n          <span class=\"font-bold text-base\" style=\"font-size: 15px;\">POSTO RODAO</span>\n        </p>\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n          <strong > 2021-02-06</strong>\n        </p>\n\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n           <span>Combustível</span>\n        </p>\n        <p>\n          <ion-badge color=\"warning\">\n            <ion-label>120,232 COP</ion-label>\n          </ion-badge>\n        </p>\n      </ion-label>\n\n      \n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"toExpenseView()\" color=\"primary\">\n          <ion-icon name=\"eye-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button (click)=\"toExpenseReportView()\" fill=\"outline\" color=\"danger\" expand=\"block\">\n          Cancelar\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button (click)=\"toExpenseReportView()\"  expand=\"block\">\n          Adicionar\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    \n   \n  </ion-toolbar>\n</ion-footer>\n\n\n");

/***/ }),

/***/ "./src/app/pages/expense-add-to-expense-report/expense-add-to-expense-report-routing.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/expense-add-to-expense-report/expense-add-to-expense-report-routing.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ExpenseAddToExpenseReportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseAddToExpenseReportPageRoutingModule", function() { return ExpenseAddToExpenseReportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _expense_add_to_expense_report_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expense-add-to-expense-report.page */ "./src/app/pages/expense-add-to-expense-report/expense-add-to-expense-report.page.ts");




const routes = [
    {
        path: '',
        component: _expense_add_to_expense_report_page__WEBPACK_IMPORTED_MODULE_3__["ExpenseAddToExpenseReportPage"]
    }
];
let ExpenseAddToExpenseReportPageRoutingModule = class ExpenseAddToExpenseReportPageRoutingModule {
};
ExpenseAddToExpenseReportPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExpenseAddToExpenseReportPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/expense-add-to-expense-report/expense-add-to-expense-report.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/expense-add-to-expense-report/expense-add-to-expense-report.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: ExpenseAddToExpenseReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseAddToExpenseReportPageModule", function() { return ExpenseAddToExpenseReportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _expense_add_to_expense_report_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./expense-add-to-expense-report-routing.module */ "./src/app/pages/expense-add-to-expense-report/expense-add-to-expense-report-routing.module.ts");
/* harmony import */ var _expense_add_to_expense_report_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expense-add-to-expense-report.page */ "./src/app/pages/expense-add-to-expense-report/expense-add-to-expense-report.page.ts");







let ExpenseAddToExpenseReportPageModule = class ExpenseAddToExpenseReportPageModule {
};
ExpenseAddToExpenseReportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _expense_add_to_expense_report_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExpenseAddToExpenseReportPageRoutingModule"]
        ],
        declarations: [_expense_add_to_expense_report_page__WEBPACK_IMPORTED_MODULE_6__["ExpenseAddToExpenseReportPage"]]
    })
], ExpenseAddToExpenseReportPageModule);



/***/ }),

/***/ "./src/app/pages/expense-add-to-expense-report/expense-add-to-expense-report.page.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/expense-add-to-expense-report/expense-add-to-expense-report.page.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGVuc2UtYWRkLXRvLWV4cGVuc2UtcmVwb3J0L2V4cGVuc2UtYWRkLXRvLWV4cGVuc2UtcmVwb3J0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/expense-add-to-expense-report/expense-add-to-expense-report.page.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/expense-add-to-expense-report/expense-add-to-expense-report.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: ExpenseAddToExpenseReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseAddToExpenseReportPage", function() { return ExpenseAddToExpenseReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ExpenseAddToExpenseReportPage = class ExpenseAddToExpenseReportPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    toExpenseReportView() {
        localStorage.setItem('expense-report-status', 'open');
        this.router.navigate(['expense-report-view']);
    }
    createExpenseReport() {
        this.router.navigate(['expense-report-create']);
    }
    toExpenseView() {
        localStorage.setItem('expense-report-status', 'close');
        this.router.navigate(['expense-edit']);
    }
};
ExpenseAddToExpenseReportPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ExpenseAddToExpenseReportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expense-add-to-expense-report',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./expense-add-to-expense-report.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expense-add-to-expense-report/expense-add-to-expense-report.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./expense-add-to-expense-report.page.scss */ "./src/app/pages/expense-add-to-expense-report/expense-add-to-expense-report.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ExpenseAddToExpenseReportPage);



/***/ })

}]);
//# sourceMappingURL=pages-expense-add-to-expense-report-expense-add-to-expense-report-module-es2015.js.map