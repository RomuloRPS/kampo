(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-integration-integration-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/integration/integration.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/integration/integration.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <ion-title>\n      Integrações\n    </ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar *ngIf=\"tasks.length > 0\">\n    <ion-item *ngIf=\"selectedTasks.length == 0\" lines=\"none\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"runOnce()\">\n          <ion-icon  name=\"cloud-upload\" slot=\"start\" color=\"primary\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-label text-wrap class=\"text-center\">Clique nas tarefas abaixo para selecioná-las</ion-label>\n    </ion-item>\n\n    <ion-item *ngIf=\"selectedTasks.length == 1\" lines=\"none\">\n      <ion-icon (click)=\"deleteTasks()\" color=\"danger\" slot=\"start\" src=\"./assets/icons/elo-trash.svg\">\n      </ion-icon>\n      <ion-label text-wrap class=\"text-center\">{{selectedTasks.length}} tarefa selecionada</ion-label>\n      <ion-icon (click)=\"unSelectTasks()\" slot=\"end\" name=\"close-outline\"></ion-icon>\n    </ion-item>\n\n    <ion-item *ngIf=\"selectedTasks.length > 1\" lines=\"none\">\n      <ion-icon (click)=\"deleteTasks()\" color=\"danger\" slot=\"start\" src=\"./assets/icons/elo-trash.svg\">\n      </ion-icon>\n      <ion-label text-wrap class=\"text-center\">{{selectedTasks.length}} tarefas selecionadas</ion-label>\n      <ion-icon (click)=\"unSelectTasks()\" slot=\"end\" name=\"close-outline\"></ion-icon>\n    </ion-item>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content color=\"light\">\n  <ion-progress-bar color=\"dark\" *ngIf=\"loading\" type=\"indeterminate\"></ion-progress-bar>\n\n\n\n  <ion-card *ngIf=\"getEncodedTasks().length == 0 && !loading\">\n    <ion-card-content>\n      <div class=\"text-center\">\n        <ion-img class=\"h-40\" src=\"../../assets/integration.svg\"></ion-img>\n\n        <ion-text color=\"dark\">\n          <p><strong class=\"text-xl\">No hay más Despesas por sincronizar.</strong></p>\n        </ion-text>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-grid style=\"--ion-grid-padding: 0px;\">\n\n    <ng-container>\n\n      <ng-container *ngFor=\"let task of tasks; let i = index\">\n        <ion-card [disabled]=\"loading\" (click)=\"selectTask(task)\" color=\"{{isSelected(task)}}\">\n          <ion-item color=\"{{isSelected(task)}}\" lines=\"none\">\n            <ion-icon class=\"text-5xl\" slot=\"start\" [color]=\"getColor(task.name)\" [src]=\"getIcon(task.name)\"></ion-icon>\n            <ion-label>\n              <h3 *ngIf=\"task?.data?.id\">\n                Id: {{task?.data?.id}}\n              </h3>\n              <p>\n                Tipo: {{getType(task.name)}}\n              </p>\n              <p>\n                Tentativas: {{task.tries}}\n              </p>\n              <p>\n                Ult. Tentativa: {{task.lastExecuted?.replace(' ', 'T') | dateTimeFormat}}\n              </p>\n            </ion-label>\n            <ion-badge *ngIf=\"task.tries > 0\" color=\"danger\" slot=\"end\">Erro</ion-badge>\n          </ion-item>\n        </ion-card>\n      </ng-container>\n\n    </ng-container>\n\n\n  </ion-grid>\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/integration/integration-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/integration/integration-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: IntegrationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegrationPageRoutingModule", function() { return IntegrationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _integration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./integration.page */ "./src/app/pages/integration/integration.page.ts");




const routes = [
    {
        path: '',
        component: _integration_page__WEBPACK_IMPORTED_MODULE_3__["IntegrationPage"]
    }
];
let IntegrationPageRoutingModule = class IntegrationPageRoutingModule {
};
IntegrationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IntegrationPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/integration/integration.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/integration/integration.module.ts ***!
  \*********************************************************/
/*! exports provided: IntegrationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegrationPageModule", function() { return IntegrationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _integration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./integration-routing.module */ "./src/app/pages/integration/integration-routing.module.ts");
/* harmony import */ var _integration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./integration.page */ "./src/app/pages/integration/integration.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








let IntegrationPageModule = class IntegrationPageModule {
};
IntegrationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _integration_routing_module__WEBPACK_IMPORTED_MODULE_5__["IntegrationPageRoutingModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_integration_page__WEBPACK_IMPORTED_MODULE_6__["IntegrationPage"]]
    })
], IntegrationPageModule);



/***/ }),

/***/ "./src/app/pages/integration/integration.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/integration/integration.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludGVncmF0aW9uL2ludGVncmF0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/integration/integration.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/integration/integration.page.ts ***!
  \*******************************************************/
/*! exports provided: IntegrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegrationPage", function() { return IntegrationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IntegrationPage = class IntegrationPage {
    constructor() {
        this.loading = false;
        this.hasData = true;
        this.selectedTasks = [];
        this.tasks = [];
        this.skeletonCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
    ngOnInit() {
        this.loading = true;
        this.getTasks();
    }
    getTasks() {
        this.tasks = [];
        this.loading = false;
    }
    getEncodedTasks() {
        return this.tasks;
    }
    getType(name) {
        switch (name) {
            case 'tenancies/:tenancy_id/transport-tasks/program-confirm':
                return 'Nova Tarefa';
            case 'tenancies/:tenancy_id/transport-tasks/execute':
                return 'Tarefa';
            case 'tenancies/:tenancy_id/transport-tasks/cancel':
                return 'Não Execução';
            case 'tenancies/:tenancy_id/waste-movements':
                return 'Inventário';
            default:
                return '';
        }
    }
    getIcon(name) {
        switch (name) {
            case 'tenancies/:tenancy_id/transport-tasks/program-confirm':
                return './assets/icons/elo-collect.svg';
            case 'tenancies/:tenancy_id/transport-tasks/execute':
                return './assets/icons/elo-task.svg';
            case 'tenancies/:tenancy_id/transport-tasks/cancel':
                return './assets/icons/elo-close.svg';
            case 'tenancies/:tenancy_id/waste-movements':
                return './assets/icons/elo-waste.svg';
        }
    }
    getColor(name) {
        if (name === 'tenancies/:tenancy_id/transport-tasks/cancel') {
            return 'danger';
        }
        return 'primary';
    }
    deleteTasks() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = true;
            const idsToDelete = [];
            this.selectedTasks.forEach((task) => {
                idsToDelete.push(task.id);
            });
        });
    }
    unSelectTasks() {
        this.selectedTasks = [];
        this.loading = false;
    }
    selectTask(task) {
        if (this.isSelected(task)) {
            const taskIndex = this.selectedTasks.findIndex((taskToFind => taskToFind.id == task.id));
            this.selectedTasks.splice(taskIndex, 1);
        }
        else {
            this.selectedTasks.push(task);
        }
    }
    isSelected(task) {
        const tasker = this.selectedTasks.find(taskToFind => taskToFind.id == task.id);
        if (tasker) {
            return 'medium';
        }
        else {
            return '';
        }
    }
    runOnce() {
        this.loading = true;
    }
    addToActionHistory(task) {
    }
    ngOnDestroy() {
        clearInterval(this.interval);
    }
};
IntegrationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-integration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./integration.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/integration/integration.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./integration.page.scss */ "./src/app/pages/integration/integration.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IntegrationPage);



/***/ })

}]);
//# sourceMappingURL=pages-integration-integration-module-es2015.js.map