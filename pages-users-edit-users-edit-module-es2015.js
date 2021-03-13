(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-users-edit-users-edit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users-edit/users-edit.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users-edit/users-edit.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Editar Usuário</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n  \n    <img style=\"height: 200px; height: 200px; margin: auto; border-radius: 100%; margin-top: 20px;\"  src=\"/assets/usuario.png\" />\n\n  <form class=\"mt-6\" #loginForm=\"ngForm\" novalidate>\n    <ion-row class=\"flex justify-center \">\n      <ion-col size=\"11\">\n        <ion-item lines=\"none\" class=\"rounded-lg\">\n          <ion-icon slot=\"start\" color=\"tertiary\" name=\"person\"></ion-icon>\n          <ion-label>Nome: </ion-label>\n          <ion-input value=\"Rômulo\" name=\"username\" type=\"text\" \n            spellcheck=\"false\" autocapitalize=\"off\" required>\n          </ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"11\">\n        <ion-item lines=\"none\" class=\"rounded-lg\">\n          <ion-icon slot=\"start\" color=\"tertiary\" name=\"mail\"></ion-icon>\n          <ion-label>Email: </ion-label>\n          <ion-input value=\"romulo.rps@hotmail.com\" name=\"username\" type=\"text\" \n            spellcheck=\"false\" autocapitalize=\"off\" required>\n          </ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"11\">\n        <ion-item  lines=\"none\" class=\"rounded-lg\">\n          <ion-icon slot=\"start\" color=\"tertiary\" name=\"file-tray-full-outline\"></ion-icon>\n          <ion-label>Departamento: </ion-label>\n          <ion-select interface=\"action-sheet\" value=\"cs\" placeholder=\"\">\n            <ion-select-option value=\"cs\"><ion-text>Desenvolvimento</ion-text></ion-select-option>\n            <ion-select-option value=\"cd\">Suporte</ion-select-option>\n            <ion-select-option value=\"f\">Comercial</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n\n\n      <ion-col size=\"11\">\n        <ion-item  lines=\"none\" class=\"rounded-lg\">\n          <ion-icon slot=\"start\" color=\"tertiary\" name=\"aperture-outline\"></ion-icon>\n          <ion-label>Centro de custo: </ion-label>\n          <ion-select interface=\"action-sheet\" value=\"f\" placeholder=\"\">\n            <ion-select-option value=\"cs\"><ion-text>Marketing</ion-text></ion-select-option>\n            <ion-select-option value=\"cd\">Vendas</ion-select-option>\n            <ion-select-option value=\"f\">Desenvolvimento</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"11\">\n        <ion-item  lines=\"none\" class=\"rounded-lg\">\n          <ion-icon slot=\"start\" color=\"tertiary\" name=\"aperture-outline\"></ion-icon>\n          <ion-label>Permissão de Usuário: </ion-label>\n          <ion-select multiple=\"true\" interface=\"action-sheet\" value=\"f\" placeholder=\"\">\n            <ion-select-option value=\"cs\"><ion-text>Admin</ion-text></ion-select-option>\n            <ion-select-option value=\"cd\">Revisador</ion-select-option>\n            <ion-select-option value=\"f\">Gerador</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    \n      <ion-col size=\"11\">\n        <ion-item lines=\"none\" class=\"rounded-lg\">\n          <ion-icon slot=\"start\" color=\"tertiary\" name=\"lock-closed\"></ion-icon>\n          <ion-label>Senha: </ion-label>\n          <ion-input name=\"username\" type=\"password\" \n            spellcheck=\"false\" autocapitalize=\"off\" required>\n          </ion-input>\n        </ion-item>\n      </ion-col>\n      \n      <ion-col size=\"11\">\n        <ion-item lines=\"none\" class=\"rounded-lg\">\n          <ion-icon slot=\"start\" color=\"tertiary\" name=\"lock-closed\"></ion-icon>\n          <ion-label>Confirmar Senha  : </ion-label>\n          <ion-input name=\"username\" type=\"password\" \n            spellcheck=\"false\" autocapitalize=\"off\" required>\n          </ion-input>\n        </ion-item>\n      </ion-col>\n\n    </ion-row>\n  </form>\n  \n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button (click)=\"toReportView()\" fill=\"outline\" color=\"danger\" expand=\"block\">\n          Cancelar\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button (click)=\"toReportView()\"  expand=\"block\">\n          Salvar\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    \n   \n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/users-edit/users-edit-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/users-edit/users-edit-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: UsersEditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersEditPageRoutingModule", function() { return UsersEditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _users_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users-edit.page */ "./src/app/pages/users-edit/users-edit.page.ts");




const routes = [
    {
        path: '',
        component: _users_edit_page__WEBPACK_IMPORTED_MODULE_3__["UsersEditPage"]
    }
];
let UsersEditPageRoutingModule = class UsersEditPageRoutingModule {
};
UsersEditPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UsersEditPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/users-edit/users-edit.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/users-edit/users-edit.module.ts ***!
  \*******************************************************/
/*! exports provided: UsersEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersEditPageModule", function() { return UsersEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _users_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users-edit-routing.module */ "./src/app/pages/users-edit/users-edit-routing.module.ts");
/* harmony import */ var _users_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users-edit.page */ "./src/app/pages/users-edit/users-edit.page.ts");







let UsersEditPageModule = class UsersEditPageModule {
};
UsersEditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _users_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsersEditPageRoutingModule"]
        ],
        declarations: [_users_edit_page__WEBPACK_IMPORTED_MODULE_6__["UsersEditPage"]]
    })
], UsersEditPageModule);



/***/ }),

/***/ "./src/app/pages/users-edit/users-edit.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/users-edit/users-edit.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzLWVkaXQvdXNlcnMtZWRpdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/users-edit/users-edit.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/users-edit/users-edit.page.ts ***!
  \*****************************************************/
/*! exports provided: UsersEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersEditPage", function() { return UsersEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let UsersEditPage = class UsersEditPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    toReportView() {
        this.router.navigate(['users-list']);
    }
    toReportList() {
        this.router.navigate(['users-list']);
    }
};
UsersEditPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UsersEditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users-edit.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users-edit/users-edit.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users-edit.page.scss */ "./src/app/pages/users-edit/users-edit.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], UsersEditPage);



/***/ })

}]);
//# sourceMappingURL=pages-users-edit-users-edit-module-es2015.js.map