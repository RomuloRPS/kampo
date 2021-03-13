(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-expense-report-edit-expense-report-edit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expense-report-edit/expense-report-edit.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expense-report-edit/expense-report-edit.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Editar Informe</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n\n  <form class=\"mt-6\" #loginForm=\"ngForm\" novalidate>\n    <ion-row class=\"flex justify-center \">\n      <ion-col size=\"11\">\n        <ion-item lines=\"none\" class=\"rounded-lg\">\n          <ion-icon slot=\"start\" color=\"tertiary\" name=\"pencil\"></ion-icon>\n          <ion-input placeholder=\"Título\" name=\"username\" value=\"Despesas de Março\" type=\"text\" \n            spellcheck=\"false\" autocapitalize=\"off\" required>\n          </ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"11\">\n        <ion-item lines=\"none\" class=\"rounded-lg\">\n          <ion-icon slot=\"start\" color=\"tertiary\"  name=\"document-outline\"></ion-icon>\n          <ion-label position=\"floating\">Política de Despesas</ion-label>\n          <ion-select value=\"c\" interface=\"popover\" placeholder=\"\">\n            <ion-select-option value=\"f\">Política 1</ion-select-option>\n            <ion-select-option value=\"c\">Política 2</ion-select-option>\n            <ion-select-option value=\"m\">Política 3</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </form>\n\n  <ion-row class=\"flex justify-center \">\n    <ion-col size=\"11\" >\n      <ion-card class=\"card-no-border card-no-margin\">\n        <ion-list>\n          <ion-list-header>\n            <ion-title>Despesas</ion-title>\n          </ion-list-header>\n        \n          <ion-item lines=\"none\">\n            <ion-checkbox slot=\"start\" [checked]=\"true\" ></ion-checkbox>\n              <ion-label>POSTO RODAO</ion-label>\n              <ion-badge color=\"warning\">\n                150,320 COP\n              </ion-badge>\n          </ion-item>\n\n          <ion-item lines=\"none\">\n            <ion-checkbox slot=\"start\" [checked]=\"true\" ></ion-checkbox>\n              <ion-label>ELOVERDE</ion-label>\n              <ion-badge color=\"warning\">\n                200,303 COP\n              </ion-badge>\n          </ion-item>\n\n          <ion-item lines=\"none\">\n            <ion-checkbox slot=\"start\" [checked]=\"false\" ></ion-checkbox>\n              <ion-label>APPLE</ion-label>\n              <ion-badge color=\"warning\">\n                600,500 COP\n              </ion-badge>\n          </ion-item>\n\n          <ion-item lines=\"none\">\n            <ion-checkbox slot=\"start\" [checked]=\"true\" ></ion-checkbox>\n              <ion-label>POSTO RODAO</ion-label>\n              <ion-badge color=\"warning\">\n                120,232 COP\n              </ion-badge>\n          </ion-item>\n\n\n        </ion-list>\n      </ion-card>\n\n      <ion-card  class=\"card-no-border card-no-margin\">\n        <ion-item lines=\"none\">\n          <ion-label position=\"floating\">Nota</ion-label>\n          <ion-textarea></ion-textarea>\n        </ion-item>\n      </ion-card>\n      \n    </ion-col>\n  \n  </ion-row>\n  \n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button (click)=\"toReportView()\" fill=\"outline\" color=\"danger\" expand=\"block\">\n          Cancelar\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button (click)=\"toReportView()\"  expand=\"block\">\n          Salvar\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    \n   \n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/expense-report-edit/expense-report-edit-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/expense-report-edit/expense-report-edit-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ExpenseReportEditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseReportEditPageRoutingModule", function() { return ExpenseReportEditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _expense_report_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expense-report-edit.page */ "./src/app/pages/expense-report-edit/expense-report-edit.page.ts");




const routes = [
    {
        path: '',
        component: _expense_report_edit_page__WEBPACK_IMPORTED_MODULE_3__["ExpenseReportEditPage"]
    }
];
let ExpenseReportEditPageRoutingModule = class ExpenseReportEditPageRoutingModule {
};
ExpenseReportEditPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExpenseReportEditPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/expense-report-edit/expense-report-edit.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/expense-report-edit/expense-report-edit.module.ts ***!
  \*************************************************************************/
/*! exports provided: ExpenseReportEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseReportEditPageModule", function() { return ExpenseReportEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _expense_report_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./expense-report-edit-routing.module */ "./src/app/pages/expense-report-edit/expense-report-edit-routing.module.ts");
/* harmony import */ var _expense_report_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expense-report-edit.page */ "./src/app/pages/expense-report-edit/expense-report-edit.page.ts");







let ExpenseReportEditPageModule = class ExpenseReportEditPageModule {
};
ExpenseReportEditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _expense_report_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExpenseReportEditPageRoutingModule"]
        ],
        declarations: [_expense_report_edit_page__WEBPACK_IMPORTED_MODULE_6__["ExpenseReportEditPage"]]
    })
], ExpenseReportEditPageModule);



/***/ }),

/***/ "./src/app/pages/expense-report-edit/expense-report-edit.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/expense-report-edit/expense-report-edit.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGVuc2UtcmVwb3J0LWVkaXQvZXhwZW5zZS1yZXBvcnQtZWRpdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/expense-report-edit/expense-report-edit.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/expense-report-edit/expense-report-edit.page.ts ***!
  \***********************************************************************/
/*! exports provided: ExpenseReportEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseReportEditPage", function() { return ExpenseReportEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ExpenseReportEditPage = class ExpenseReportEditPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    toReportView() {
        localStorage.setItem('expense-report-status', 'open');
        this.router.navigate(['expense-report-view']);
    }
    toReportList() {
        this.router.navigate(['expense-report-list']);
    }
};
ExpenseReportEditPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ExpenseReportEditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expense-report-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./expense-report-edit.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expense-report-edit/expense-report-edit.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./expense-report-edit.page.scss */ "./src/app/pages/expense-report-edit/expense-report-edit.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ExpenseReportEditPage);



/***/ })

}]);
//# sourceMappingURL=pages-expense-report-edit-expense-report-edit-module-es2015.js.map