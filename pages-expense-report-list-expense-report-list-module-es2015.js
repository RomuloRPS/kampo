(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-expense-report-list-expense-report-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expense-report-list/expense-report-list.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expense-report-list/expense-report-list.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Informes de despesas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n\n  <ion-card (click)=\"toExpenseReportView('open')\" class=\"card-no-border card-no-margin\">\n    <ion-item  lines=\"none\">\n\n      <ion-icon class=\"text-5xl z-50\" slot=\"start\" color=\"primary\" name=\"file-tray-full-outline\"></ion-icon>\n\n      <ion-label class=\"text-xs \">\n        <p style=\"font-size: 13px;\" class=\"mt-2 w-12/12\">\n          <span class=\"ml-1 font-bold text-base\" style=\"font-size: 15px;\">Despedas de Março</span>\n        </p>\n\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n          <ion-text class=\"ml-1\">Observação: iureuiheuyihfiuhiwh ihuhsfdiusiufghuys hoijviugs iudafji dh siunfsiuiu fhiuefbiuf biufiusniufiudbnsijfndsjknfkjdsbfjhbdskfjdnigbdsiufjdsoinfbijsnamdifbksefnojagbnigbijsdbfisaufsos</ion-text>\n        </p>\n        <p  style=\"font-size: 13px;\" class=\"ml-8 mt-2\">\n          <ion-badge class=\"mt-2\" color=\"primary\">\n            <ion-icon slot=\"start\" name=\"elo-information\"></ion-icon>\n            Aberto\n          </ion-badge>\n        </p>\n      </ion-label>\n\n      <ion-buttons  slot=\"end\">\n        <ion-button color=\"primary\">\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n  </ion-card>\n\n  <ion-card (click)=\"toExpenseReportView('revision')\" class=\"card-no-border card-no-margin\">\n    <ion-item  lines=\"none\">\n\n      <ion-icon class=\"text-5xl z-50\" slot=\"start\" color=\"primary\" name=\"file-tray-full-outline\"></ion-icon>\n\n      <ion-label class=\"text-xs \">\n        <p style=\"font-size: 13px;\" class=\"mt-2 w-12/12\">\n          <span class=\"ml-1 font-bold text-base\" style=\"font-size: 15px;\">Despedas de Fevereiro</span>\n        </p>\n\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n          <ion-text class=\"ml-1\">Observação: iureuiheuyihfiuhiwh ihuhsfdiusiufghuys hoijviugs iudafji dh siunfsiuiu fhiuefbiuf biufiusniufiudbnsijfndsjknfkjdsbfjhbdskfjdnigbdsiufjdsoinfbijsnamdifbksefnojagbnigbijsdbfisaufsos</ion-text>\n        </p>\n        <p  style=\"font-size: 13px;\" class=\"ml-8 mt-2\">\n          <ion-badge class=\"mt-2\" color=\"warning\">\n            <ion-icon slot=\"start\" name=\"elo-information\"></ion-icon>\n            Em Revisão\n          </ion-badge>\n        </p>\n      </ion-label>\n\n      <ion-buttons  slot=\"end\">\n        <ion-button color=\"primary\">\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n  </ion-card>\n\n  \n\n  <ion-card (click)=\"toExpenseReportView('aprobado')\" class=\"card-no-border card-no-margin\">\n    <ion-item  lines=\"none\">\n\n      <ion-icon class=\"text-5xl z-50\" slot=\"start\" color=\"primary\" name=\"file-tray-full-outline\"></ion-icon>\n\n      <ion-label class=\"text-xs \">\n        <p style=\"font-size: 13px;\" class=\"mt-2 w-12/12\">\n          <span class=\"ml-1 font-bold text-base\" style=\"font-size: 15px;\">Despedas de Janeiro</span>\n        </p>\n        <p style=\"font-size: 13px;\" class=\"ml-1 mt-2\">\n          <ion-text class=\"ml-1\">Observação: iureuiheuyihfiuhiwh ihuhsfdiusiufghuys hoijviugs iudafji dh siunfsiuiu fhiuefbiuf biufiusniufiudbnsijfndsjknfkjdsbfjhbdskfjdnigbdsiufjdsoinfbijsnamdifbksefnojagbnigbijsdbfisaufsos</ion-text>\n        </p>\n        <p  style=\"font-size: 13px;\" class=\"ml-8 mt-2\">\n          <ion-badge class=\"mt-2\" color=\"success\">\n            <ion-icon slot=\"start\" name=\"elo-information\"></ion-icon>\n            Aprovado\n          </ion-badge>\n        </p>\n      </ion-label>\n\n      <ion-buttons  slot=\"end\">\n        <ion-button color=\"primary\">\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n  </ion-card>\n\n\n  <ion-fab (click)=\"createExpenseReport()\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button  color=\"secondary\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/expense-report-list/expense-report-list-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/expense-report-list/expense-report-list-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ExpenseReportListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseReportListPageRoutingModule", function() { return ExpenseReportListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _expense_report_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expense-report-list.page */ "./src/app/pages/expense-report-list/expense-report-list.page.ts");




const routes = [
    {
        path: '',
        component: _expense_report_list_page__WEBPACK_IMPORTED_MODULE_3__["ExpenseReportListPage"]
    }
];
let ExpenseReportListPageRoutingModule = class ExpenseReportListPageRoutingModule {
};
ExpenseReportListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExpenseReportListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/expense-report-list/expense-report-list.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/expense-report-list/expense-report-list.module.ts ***!
  \*************************************************************************/
/*! exports provided: ExpenseReportListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseReportListPageModule", function() { return ExpenseReportListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _expense_report_list_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expense-report-list-routing.module */ "./src/app/pages/expense-report-list/expense-report-list-routing.module.ts");
/* harmony import */ var _expense_report_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./expense-report-list.page */ "./src/app/pages/expense-report-list/expense-report-list.page.ts");






let ExpenseReportListPageModule = class ExpenseReportListPageModule {
};
ExpenseReportListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _expense_report_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["ExpenseReportListPageRoutingModule"]
        ],
        declarations: [_expense_report_list_page__WEBPACK_IMPORTED_MODULE_5__["ExpenseReportListPage"]]
    })
], ExpenseReportListPageModule);



/***/ }),

/***/ "./src/app/pages/expense-report-list/expense-report-list.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/expense-report-list/expense-report-list.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGVuc2UtcmVwb3J0LWxpc3QvZXhwZW5zZS1yZXBvcnQtbGlzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/expense-report-list/expense-report-list.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/expense-report-list/expense-report-list.page.ts ***!
  \***********************************************************************/
/*! exports provided: ExpenseReportListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseReportListPage", function() { return ExpenseReportListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ExpenseReportListPage = class ExpenseReportListPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    toExpenseReportView(status) {
        localStorage.setItem('expense-report-status', status);
        this.router.navigate(['expense-report-view']);
    }
    createExpenseReport() {
        this.router.navigate(['expense-report-create']);
    }
};
ExpenseReportListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ExpenseReportListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expense-report-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./expense-report-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expense-report-list/expense-report-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./expense-report-list.page.scss */ "./src/app/pages/expense-report-list/expense-report-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ExpenseReportListPage);



/***/ })

}]);
//# sourceMappingURL=pages-expense-report-list-expense-report-list-module-es2015.js.map