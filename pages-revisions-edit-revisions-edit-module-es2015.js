(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-revisions-edit-revisions-edit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/revisions-edit/revisions-edit.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/revisions-edit/revisions-edit.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Despesas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n\n  <ion-row class=\"flex justify-center \">\n    <ion-col size=\"11\" >\n      <ion-card class=\"card-no-border card-no-margin\">\n        <ion-list>\n          <ion-list-header>\n            <ion-title>Despesas</ion-title>\n          </ion-list-header>\n        \n          <ion-item lines=\"none\">\n            <ion-checkbox slot=\"start\" [checked]=\"true\" ></ion-checkbox>\n              <ion-label>POSTO RODAO</ion-label>\n              <ion-badge color=\"warning\">\n                150,320 COP\n              </ion-badge>\n          </ion-item>\n\n          <ion-item lines=\"none\">\n            <ion-checkbox slot=\"start\" [checked]=\"true\" ></ion-checkbox>\n              <ion-label>ELOVERDE</ion-label>\n              <ion-badge color=\"warning\">\n                200,303 COP\n              </ion-badge>\n          </ion-item>\n\n          <ion-item lines=\"none\">\n            <ion-checkbox slot=\"start\" [checked]=\"false\" ></ion-checkbox>\n              <ion-label>APPLE</ion-label>\n              <ion-badge color=\"warning\">\n                600,500 COP\n              </ion-badge>\n          </ion-item>\n\n          <ion-item lines=\"none\">\n            <ion-checkbox slot=\"start\" [checked]=\"true\" ></ion-checkbox>\n              <ion-label>POSTO RODAO</ion-label>\n              <ion-badge color=\"warning\">\n                120,232 COP\n              </ion-badge>\n          </ion-item>\n\n\n        </ion-list>\n      </ion-card>\n\n      <ion-card  class=\"card-no-border card-no-margin\">\n        <ion-item lines=\"none\">\n          <ion-label position=\"floating\">Nota</ion-label>\n          <ion-textarea></ion-textarea>\n        </ion-item>\n      </ion-card>\n      \n    </ion-col>\n  \n  </ion-row>\n  \n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button (click)=\"toReportView()\" fill=\"outline\" color=\"danger\" expand=\"block\">\n          Cancelar\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button (click)=\"toReportList()\"  expand=\"block\">\n          Aprovar\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    \n   \n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/revisions-edit/revisions-edit-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/revisions-edit/revisions-edit-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: RevisionsEditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisionsEditPageRoutingModule", function() { return RevisionsEditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _revisions_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./revisions-edit.page */ "./src/app/pages/revisions-edit/revisions-edit.page.ts");




const routes = [
    {
        path: '',
        component: _revisions_edit_page__WEBPACK_IMPORTED_MODULE_3__["RevisionsEditPage"]
    }
];
let RevisionsEditPageRoutingModule = class RevisionsEditPageRoutingModule {
};
RevisionsEditPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RevisionsEditPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/revisions-edit/revisions-edit.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/revisions-edit/revisions-edit.module.ts ***!
  \***************************************************************/
/*! exports provided: RevisionsEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisionsEditPageModule", function() { return RevisionsEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _revisions_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./revisions-edit-routing.module */ "./src/app/pages/revisions-edit/revisions-edit-routing.module.ts");
/* harmony import */ var _revisions_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./revisions-edit.page */ "./src/app/pages/revisions-edit/revisions-edit.page.ts");







let RevisionsEditPageModule = class RevisionsEditPageModule {
};
RevisionsEditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _revisions_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["RevisionsEditPageRoutingModule"]
        ],
        declarations: [_revisions_edit_page__WEBPACK_IMPORTED_MODULE_6__["RevisionsEditPage"]]
    })
], RevisionsEditPageModule);



/***/ }),

/***/ "./src/app/pages/revisions-edit/revisions-edit.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/revisions-edit/revisions-edit.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JldmlzaW9ucy1lZGl0L3JldmlzaW9ucy1lZGl0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/revisions-edit/revisions-edit.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/revisions-edit/revisions-edit.page.ts ***!
  \*************************************************************/
/*! exports provided: RevisionsEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisionsEditPage", function() { return RevisionsEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let RevisionsEditPage = class RevisionsEditPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    toReportView() {
        this.router.navigate(['revisions-view']);
    }
    toReportList() {
        this.router.navigate(['revisions-list']);
    }
};
RevisionsEditPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RevisionsEditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-revisions-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./revisions-edit.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/revisions-edit/revisions-edit.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./revisions-edit.page.scss */ "./src/app/pages/revisions-edit/revisions-edit.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], RevisionsEditPage);



/***/ })

}]);
//# sourceMappingURL=pages-revisions-edit-revisions-edit-module-es2015.js.map