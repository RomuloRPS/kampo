(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-revisions-expense-view-revisions-expense-view-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/revisions-expense-view/revisions-expense-view.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/revisions-expense-view/revisions-expense-view.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Visualizar Despesa</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n  <img style=\"border-color: #0205A1;\"  src=\"/assets/nf.jpeg\" />\n  <form class=\"mt-6\" #loginForm=\"ngForm\" novalidate>\n    <ion-row class=\"flex justify-center \">\n      <ion-col size=\"11\">\n        <ion-item  lines=\"none\" class=\"rounded-lg\">\n          <ion-icon slot=\"start\" color=\"tertiary\" name=\"file-tray-full-outline\"></ion-icon>\n          <ion-label>Política de Despesas: </ion-label>\n          <ion-select disabled=\"true\"interface=\"action-sheet\" value=\"cs\" placeholder=\"\">\n            <ion-select-option value=\"cs\"><ion-text>Despesas de Março</ion-text></ion-select-option>\n            <ion-select-option value=\"cd\">Despesas de Fevereiro</ion-select-option>\n            <ion-select-option value=\"f\">Despesas de Janeiro</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"11\">\n        <ion-item lines=\"none\" class=\"rounded-lg\">\n          <ion-icon slot=\"start\" color=\"tertiary\" name=\"pencil\"></ion-icon>\n          <ion-label>Fornecedor: </ion-label>\n          <ion-input disabled=\"true\" value=\"POSTO RODAO\" name=\"username\" type=\"text\" \n            spellcheck=\"false\" autocapitalize=\"off\" required>\n          </ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"11\">\n        <ion-item lines=\"none\" class=\"rounded-lg\">\n          <ion-icon slot=\"start\" color=\"tertiary\" name=\"receipt\"></ion-icon>\n          <ion-label>Valor: </ion-label>\n          <ion-input disabled=\"true\" value=\"150,320\" required=\"true\"  name=\"username\" type=\"number\" \n            spellcheck=\"false\" autocapitalize=\"off\" required>\n          </ion-input>\n        </ion-item>\n      </ion-col>\n      <div class=\"h-2 w-7/12 mt-6 rounded-md mb-6\" style=\"background-color: #0205A1;\"></div>\n\n      <ion-col size=\"11\">\n        <ion-item lines=\"none\" class=\"rounded-lg\">\n          <ion-icon slot=\"start\" color=\"tertiary\" name=\"document\"></ion-icon>\n          <ion-label>Tipo de Documento: </ion-label>\n          <ion-select disabled=\"true\" value=\"cd\" interface=\"popover\" placeholder=\"\">\n            <ion-select-option value=\"cs\">Boleto</ion-select-option>\n            <ion-select-option value=\"cd\">Nota fiscal</ion-select-option>\n            <ion-select-option value=\"f\">Recibo</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"11\">\n        <ion-item lines=\"none\" class=\"rounded-lg\">\n          <ion-icon slot=\"start\" color=\"tertiary\" name=\"document-text\"></ion-icon>\n          <ion-label>Número do documento: </ion-label>\n          <ion-input disabled=\"true\" required=\"true\"  name=\"username\" type=\"number\" \n            spellcheck=\"false\" autocapitalize=\"off\" required>\n          </ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"11\">\n        <ion-item lines=\"none\" class=\"rounded-lg\">\n          <ion-icon slot=\"start\" color=\"tertiary\" name=\"card\"></ion-icon>\n          <ion-label>Forma de pagamento: </ion-label>\n          <ion-select disabled=\"true\" value=\"f\" interface=\"popover\" placeholder=\"\">\n            <ion-select-option value=\"cs\">Cartão de crédito</ion-select-option>\n            <ion-select-option value=\"cd\">Cartão de débito</ion-select-option>\n            <ion-select-option value=\"f\">Dinheiro</ion-select-option>\n            <ion-select-option value=\"m\">Boleto Bancário</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"11\">\n        <ion-item lines=\"none\" class=\"rounded-lg\">\n          <ion-icon slot=\"start\" color=\"tertiary\" name=\"albums\"></ion-icon>\n          <ion-label>Categoria: </ion-label>\n          <ion-select disabled=\"true\" value=\"c\" interface=\"popover\" placeholder=\"\">\n            <ion-select-option value=\"f\">Comida</ion-select-option>\n            <ion-select-option value=\"c\">Combustível</ion-select-option>\n            <ion-select-option value=\"m\">Serviço</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"11\">\n        <ion-item lines=\"none\" class=\"rounded-lg\">\n          <ion-icon slot=\"start\" color=\"tertiary\" name=\"information-circle-outline\"></ion-icon>\n          <ion-label position=\"floating\">Observação: </ion-label>\n          <ion-textarea disabled=\"true\" value=\"Abastecido com gasolina comum\"></ion-textarea>\n        </ion-item>\n      </ion-col>\n\n    </ion-row>\n  </form>\n  \n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-row >\n      <ion-col size=\"6\">\n        <ion-button (click)=\"toReportView()\" fill=\"outline\" color=\"danger\" expand=\"block\">\n          Reprovar\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button color=\"success\" (click)=\"toReportView()\"  expand=\"block\">\n          Aprovar\n        </ion-button>\n      </ion-col>\n    </ion-row>\n   \n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/revisions-expense-view/revisions-expense-view-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/revisions-expense-view/revisions-expense-view-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: RevisionsExpenseViewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisionsExpenseViewPageRoutingModule", function() { return RevisionsExpenseViewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _revisions_expense_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./revisions-expense-view.page */ "./src/app/pages/revisions-expense-view/revisions-expense-view.page.ts");




const routes = [
    {
        path: '',
        component: _revisions_expense_view_page__WEBPACK_IMPORTED_MODULE_3__["RevisionsExpenseViewPage"]
    }
];
let RevisionsExpenseViewPageRoutingModule = class RevisionsExpenseViewPageRoutingModule {
};
RevisionsExpenseViewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RevisionsExpenseViewPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/revisions-expense-view/revisions-expense-view.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/revisions-expense-view/revisions-expense-view.module.ts ***!
  \*******************************************************************************/
/*! exports provided: RevisionsExpenseViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisionsExpenseViewPageModule", function() { return RevisionsExpenseViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _revisions_expense_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./revisions-expense-view-routing.module */ "./src/app/pages/revisions-expense-view/revisions-expense-view-routing.module.ts");
/* harmony import */ var _revisions_expense_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./revisions-expense-view.page */ "./src/app/pages/revisions-expense-view/revisions-expense-view.page.ts");







let RevisionsExpenseViewPageModule = class RevisionsExpenseViewPageModule {
};
RevisionsExpenseViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _revisions_expense_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["RevisionsExpenseViewPageRoutingModule"]
        ],
        declarations: [_revisions_expense_view_page__WEBPACK_IMPORTED_MODULE_6__["RevisionsExpenseViewPage"]]
    })
], RevisionsExpenseViewPageModule);



/***/ }),

/***/ "./src/app/pages/revisions-expense-view/revisions-expense-view.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/revisions-expense-view/revisions-expense-view.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JldmlzaW9ucy1leHBlbnNlLXZpZXcvcmV2aXNpb25zLWV4cGVuc2Utdmlldy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/revisions-expense-view/revisions-expense-view.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/revisions-expense-view/revisions-expense-view.page.ts ***!
  \*****************************************************************************/
/*! exports provided: RevisionsExpenseViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisionsExpenseViewPage", function() { return RevisionsExpenseViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let RevisionsExpenseViewPage = class RevisionsExpenseViewPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    toReportView() {
        this.router.navigate(['revisions-view']);
    }
    toReportList() {
        this.router.navigate(['revisions-view']);
    }
};
RevisionsExpenseViewPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RevisionsExpenseViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-revisions-expense-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./revisions-expense-view.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/revisions-expense-view/revisions-expense-view.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./revisions-expense-view.page.scss */ "./src/app/pages/revisions-expense-view/revisions-expense-view.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], RevisionsExpenseViewPage);



/***/ })

}]);
//# sourceMappingURL=pages-revisions-expense-view-revisions-expense-view-module-es2015.js.map