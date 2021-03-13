(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-expense-create-expense-create-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expense-create/expense-create.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expense-create/expense-create.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Informar Despesa</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n  <div *ngIf=\"!showImg\" class=\"w-7/12 m-auto mt-4\">\n    <ion-button (click)=\"showPhoto()\" expand=\"block\" fill=\"outline\">\n      <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\n      Escanear Documento\n    </ion-button>\n  </div>\n\n  <img class=\"border-b-4\" style=\"border-color: #0205A1;\" *ngIf=\"showImg\" src=\"../../../assets/nf.jpeg\" />\n\n  <form class=\"mt-6\" #loginForm=\"ngForm\" novalidate>\n    <ion-row class=\"flex justify-center \">\n      <ion-col size=\"11\">\n        <ion-item lines=\"none\" class=\"rounded-lg\">\n          <ion-icon slot=\"start\" color=\"tertiary\" name=\"file-tray-full-outline\"></ion-icon>\n          <ion-label>Informe de Despesa: </ion-label>\n          <ion-select name=\"category\" interface=\"action-sheet\" value=\"{{group ? 'cs' : ''}}\" [(ngModel)]=\"inform\" placeholder=\"\">\n            <ion-select-option value=\"cs\"><ion-text>Não Informar</ion-text></ion-select-option>\n            <ion-select-option value=\"cs1\"><ion-text>Despesas Eloverde</ion-text></ion-select-option>\n            <ion-select-option value=\"cs2\"><ion-text>Despesas de Março</ion-text></ion-select-option>\n            <ion-select-option value=\"cd\">Despesas de Fevereiro</ion-select-option>\n            <ion-select-option value=\"f\">Despesas de Janeiro</ion-select-option>\n\n            <ion-select-option value=\"ci\"><ion-icon slot=\"start\" name=\"add\"></ion-icon><ion-text>Criar informe</ion-text></ion-select-option>\n\n          </ion-select>\n        </ion-item>\n      </ion-col>\n\n      <ion-col *ngIf=\"inform == 'ci'\" size=\"11\">\n        <ion-item lines=\"none\" class=\"rounded-lg\">\n          <ion-icon slot=\"start\" color=\"tertiary\" name=\"pencil\"></ion-icon>\n          <ion-label position=\"floating\">Nome de informe de despesa: </ion-label>\n          <ion-input name=\"username\" type=\"text\" \n            spellcheck=\"false\" autocapitalize=\"off\" required>\n          </ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col *ngIf=\"inform == 'ci'\" size=\"11\">\n        <ion-item lines=\"none\" class=\"rounded-lg\">\n          <ion-icon slot=\"start\" color=\"tertiary\"  name=\"document-outline\"></ion-icon>\n          <ion-label position=\"floating\">Política de Despesas</ion-label>\n          <ion-select interface=\"popover\" placeholder=\"\">\n            <ion-select-option value=\"f\">Política 1</ion-select-option>\n            <ion-select-option value=\"c\">Política 2</ion-select-option>\n            <ion-select-option value=\"m\">Política 3</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"11\">\n        <ion-item lines=\"none\" class=\"rounded-lg\">\n          <ion-icon slot=\"start\" color=\"tertiary\" name=\"pencil\"></ion-icon>\n          <ion-label>Fornecedor: </ion-label>\n          <ion-input name=\"username\" type=\"text\" \n            spellcheck=\"false\" autocapitalize=\"off\" required>\n          </ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"11\">\n        <ion-item lines=\"none\" class=\"rounded-lg\">\n          <ion-icon slot=\"start\" color=\"tertiary\" name=\"receipt\"></ion-icon>\n          <ion-label>Valor (COP): </ion-label>\n          <ion-input required=\"true\"   name=\"username\" type=\"number\" \n            spellcheck=\"false\" autocapitalize=\"off\" required>\n          </ion-input>\n        </ion-item>\n      </ion-col>\n      <div class=\"h-2 w-7/12 mt-6 rounded-md mb-6\" style=\"background-color: #0205A1;\"></div>\n\n      <ion-col size=\"11\">\n        <ion-item lines=\"none\" class=\"rounded-lg\">\n          <ion-icon slot=\"start\" color=\"tertiary\" name=\"document-text\"></ion-icon>\n          <ion-label>Nr. documento: </ion-label>\n          <ion-input required=\"true\"  name=\"username\" type=\"number\" \n            spellcheck=\"false\" autocapitalize=\"off\" required>\n          </ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"11\">\n        <ion-item lines=\"none\" class=\"rounded-lg\">\n          <ion-icon slot=\"start\" color=\"tertiary\" name=\"albums\"></ion-icon>\n          <ion-label>Categoria: </ion-label>\n          <ion-select [disabled]=\"!inform\" interface=\"popover\" placeholder=\"\">\n            <ion-select-option value=\"f\">Comida</ion-select-option>\n            <ion-select-option value=\"c\">Combustível</ion-select-option>\n            <ion-select-option value=\"m\">Serviço</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"11\">\n        <ion-item lines=\"none\" class=\"rounded-lg\">\n          <ion-icon slot=\"start\" color=\"tertiary\" name=\"information-circle-outline\"></ion-icon>\n          <ion-label position=\"floating\">Observação: </ion-label>\n          <ion-textarea></ion-textarea>\n        </ion-item>\n      </ion-col>\n\n    </ion-row>\n  </form>\n  \n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button (click)=\"toReportView()\" fill=\"outline\" color=\"danger\" expand=\"block\">\n          Cancelar\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button (click)=\"toReportList()\"  expand=\"block\">\n          Salvar\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    \n   \n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/expense-create/expense-create-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/expense-create/expense-create-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ExpenseCreatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseCreatePageRoutingModule", function() { return ExpenseCreatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _expense_create_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expense-create.page */ "./src/app/pages/expense-create/expense-create.page.ts");




const routes = [
    {
        path: '',
        component: _expense_create_page__WEBPACK_IMPORTED_MODULE_3__["ExpenseCreatePage"]
    }
];
let ExpenseCreatePageRoutingModule = class ExpenseCreatePageRoutingModule {
};
ExpenseCreatePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExpenseCreatePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/expense-create/expense-create.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/expense-create/expense-create.module.ts ***!
  \***************************************************************/
/*! exports provided: ExpenseCreatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseCreatePageModule", function() { return ExpenseCreatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _expense_create_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./expense-create-routing.module */ "./src/app/pages/expense-create/expense-create-routing.module.ts");
/* harmony import */ var _expense_create_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expense-create.page */ "./src/app/pages/expense-create/expense-create.page.ts");







let ExpenseCreatePageModule = class ExpenseCreatePageModule {
};
ExpenseCreatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _expense_create_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExpenseCreatePageRoutingModule"]
        ],
        declarations: [_expense_create_page__WEBPACK_IMPORTED_MODULE_6__["ExpenseCreatePage"]]
    })
], ExpenseCreatePageModule);



/***/ }),

/***/ "./src/app/pages/expense-create/expense-create.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/expense-create/expense-create.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGVuc2UtY3JlYXRlL2V4cGVuc2UtY3JlYXRlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/expense-create/expense-create.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/expense-create/expense-create.page.ts ***!
  \*************************************************************/
/*! exports provided: ExpenseCreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseCreatePage", function() { return ExpenseCreatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ExpenseCreatePage = class ExpenseCreatePage {
    constructor(router) {
        this.router = router;
        this.showImg = false;
    }
    ngOnInit() {
        this.group = localStorage.getItem('expense-group');
    }
    toReportView() {
        if (localStorage.getItem('expense-last-page') == 'menu') {
            this.router.navigate(['']);
            return;
        }
        else {
            this.router.navigate(['expense-report-view']);
        }
    }
    toReportList() {
        this.router.navigate(['expense-report-list']);
    }
    showPhoto() {
        this.showImg = true;
    }
};
ExpenseCreatePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ExpenseCreatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expense-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./expense-create.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expense-create/expense-create.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./expense-create.page.scss */ "./src/app/pages/expense-create/expense-create.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ExpenseCreatePage);



/***/ })

}]);
//# sourceMappingURL=pages-expense-create-expense-create-module-es2015.js.map