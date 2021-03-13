(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-user-register-user-module"],{

/***/ "./node_modules/br-mask/dist/app.module.js":
/*!*************************************************!*\
  !*** ./node_modules/br-mask/dist/app.module.js ***!
  \*************************************************/
/*! exports provided: BrMaskerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrMaskerModule", function() { return BrMaskerModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _directives_br_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/br-mask */ "./node_modules/br-mask/dist/directives/br-mask.js");



var BrMaskerModule = (function () {
    function BrMaskerModule() {
    }
    return BrMaskerModule;
}());

BrMaskerModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                declarations: [
                    _directives_br_mask__WEBPACK_IMPORTED_MODULE_2__["BrMaskDirective"]
                ],
                exports: [
                    _directives_br_mask__WEBPACK_IMPORTED_MODULE_2__["BrMaskDirective"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
                ],
                schemas: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
                ]
            },] },
];
/** @nocollapse */
BrMaskerModule.ctorParameters = function () { return []; };
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./node_modules/br-mask/dist/directives/br-mask.js":
/*!*********************************************************!*\
  !*** ./node_modules/br-mask/dist/directives/br-mask.js ***!
  \*********************************************************/
/*! exports provided: BrMaskModel, BrMaskDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrMaskModel", function() { return BrMaskModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrMaskDirective", function() { return BrMaskDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");


var BrMaskModel = (function () {
    function BrMaskModel() {
        this.type = 'alfa';
        this.decimal = 2;
        this.decimalCaracter = ",";
        this.userCaracters = false;
        this.numberAndTousand = false;
        this.moneyInitHasInt = true;
    }
    return BrMaskModel;
}());

var BrMaskDirective = (function () {
    function BrMaskDirective(controlContainer, elementRef) {
        this.controlContainer = controlContainer;
        this.elementRef = elementRef;
        this.brmasker = new BrMaskModel();
    }
    /**
    * Event key up in directive
    * @author Antonio Marques <tmowna@gmail.com>
    * @constant {string} value
    */
    BrMaskDirective.prototype.inputKeyup = function (event) {
        var value = this.returnValue(event.target.value);
        this.setValueInFormControl(value);
    };
    BrMaskDirective.prototype.ngOnInit = function () {
        if (!this.brmasker.type) {
            this.brmasker.type = 'all';
        }
        if (!this.brmasker.decimal) {
            this.brmasker.decimal = 2;
        }
        if (this.brmasker.moneyInitHasInt === undefined) {
            this.brmasker.moneyInitHasInt = true;
        }
        if (!this.brmasker.decimalCaracter) {
            this.brmasker.decimalCaracter = ',';
        }
        if (this.controlContainer) {
            if (this.formControlName) {
                this.brmasker.form = this.controlContainer.control.get(this.formControlName);
            }
            else {
                console.warn('Missing FormControlName directive from host element of the component');
            }
        }
        else {
            console.warn('Can\'t find parent FormGroup directive');
        }
        this.initialValue();
    };
    BrMaskDirective.prototype.initialValue = function () {
        var value = this.returnValue(this.elementRef.nativeElement.value);
        this.setValueInFormControl(value);
    };
    /**
    * The verification of form
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.verifyFormControl()</caption>
    * @returns {boolean} return a boolean value
    */
    BrMaskDirective.prototype.verifyFormControl = function () {
        if (this.brmasker.form instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
    * Set Value em FormControl
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.setValueInFormControl(string)</caption>
    */
    BrMaskDirective.prototype.setValueInFormControl = function (value) {
        if (!this.verifyFormControl()) {
            this.elementRef.nativeElement.value = value;
            return;
        }
        this.brmasker.form.setValue(value);
        this.brmasker.form.updateValueAndValidity();
    };
    /**
    * For initial value
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.setValueInFormControl(string, model)</caption>
    * @param {string} value
    * @param {BrMaskModel} config
    * @returns {string} mask intial value
    */
    BrMaskDirective.prototype.writeCreateValue = function (value, config) {
        if (config === void 0) { config = new BrMaskModel(); }
        if (value && config.phone) {
            return value.replace(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/gi, '$1 ($2) $3-$4');
        }
        if (value && config.phoneNotDDD) {
            return this.phoneNotDDDMask(value);
        }
        if (value && config.money) {
            return this.writeValueMoney(value, config);
        }
        if (value && config.person) {
            return this.writeValuePerson(value);
        }
        if (value && config.percent) {
            return this.writeValuePercent(value);
        }
        if (this.brmasker.userCaracters) {
            return this.usingSpecialCharacters(value, this.brmasker.mask, this.brmasker.len);
        }
        if (value && config.mask) {
            this.brmasker.mask = config.mask;
            if (config.len) {
                this.brmasker.len = config.len;
            }
            return this.onInput(value);
        }
        return value;
    };
    /**
    * For initial value percent
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.writeValuePercent(string)</caption>
    * @param {string} value
    * @returns {string} mask intial value
    */
    BrMaskDirective.prototype.writeValuePercent = function (value) {
        value.replace(/\D/gi, '');
        value.replace(/%/gi, '');
        return value.replace(/([0-9]{0})$/gi, '%$1');
    };
    /**
    * For initial value person
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.writeValuePerson(string)</caption>
    * @param {string} value
    * @returns {string} mask intial value
    */
    BrMaskDirective.prototype.writeValuePerson = function (value) {
        if (value.length <= 11) {
            return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi, '\$1.\$2.\$3\-\$4');
        }
        else {
            return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/gi, '\$1.\$2.\$3\/\$4\-\$5');
        }
    };
    /**
    * For initial value money
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.writeValueMoney(string, model)</caption>
    * @param {string} value
    * @param {BrMaskModel} value
    * @returns {string} mask intial value
    */
    BrMaskDirective.prototype.writeValueMoney = function (value, config) {
        if (config === void 0) { config = new BrMaskModel(); }
        return this.moneyMask(value, config);
    };
    /**
    * Here is one of the main functions
    * responsible for identifying the type of mask
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.returnValue(string)</caption>
    * @param {string} value
    * @returns {string} mask value
    */
    BrMaskDirective.prototype.returnValue = function (value) {
        if (!this.brmasker.mask) {
            this.brmasker.mask = '';
        }
        if (value) {
            var formValue = value;
            if (this.brmasker.type === 'alfa') {
                formValue = formValue.replace(/\d/gi, '');
            }
            if (this.brmasker.type === 'num') {
                formValue = formValue.replace(/\D/gi, '');
            }
            if (this.brmasker.money) {
                return this.moneyMask(this.onInput(formValue), this.brmasker);
            }
            if (this.brmasker.phone) {
                return this.phoneMask(formValue);
            }
            if (this.brmasker.phoneNotDDD) {
                return this.phoneNotDDDMask(formValue);
            }
            if (this.brmasker.person) {
                return this.peapollMask(formValue);
            }
            if (this.brmasker.percent) {
                return this.percentMask(formValue);
            }
            if (this.brmasker.numberAndTousand) {
                return this.thousand(formValue);
            }
            if (this.brmasker.userCaracters) {
                return this.usingSpecialCharacters(formValue, this.brmasker.mask, this.brmasker.len);
            }
            return this.onInput(formValue);
        }
        else {
            return '';
        }
    };
    /**
    * Here we have a mask for percentage
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.percentMask(string)</caption>
    * @param {string} value
    * @returns {string} string percentage
    */
    BrMaskDirective.prototype.percentMask = function (value) {
        var tmp = value;
        tmp = tmp.replace(/\D/gi, '');
        tmp = tmp.replace(/%/gi, '');
        tmp = tmp.replace(/([0-9]{0})$/gi, '%$1');
        return tmp;
    };
    /**
    * Here we have a mask for phone in 8 digits or 9 digits
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.phoneMask(string)</caption>
    * @param {string} value
    * @returns {string} string phone
    */
    BrMaskDirective.prototype.phoneMask = function (value) {
        var formValue = value;
        if (formValue.length > 14 || formValue.length === 11) {
            this.brmasker.len = 15;
            this.brmasker.mask = '(99) 99999-9999';
            formValue = formValue.replace(/\D/gi, '');
            formValue = formValue.replace(/(\d{2})(\d)/gi, '$1 $2');
            formValue = formValue.replace(/(\d{5})(\d)/gi, '$1-$2');
            formValue = formValue.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        else {
            this.brmasker.len = 14;
            this.brmasker.mask = '(99) 9999-9999';
            formValue = formValue.replace(/\D/gi, '');
            formValue = formValue.replace(/(\d{2})(\d)/gi, '$1 $2');
            formValue = formValue.replace(/(\d{4})(\d)/gi, '$1-$2');
            formValue = formValue.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        return this.onInput(formValue);
    };
    /**
    * Here we have a mask for phone in 8 digits or 9 digits not ddd
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.phoneMask(string)</caption>
    * @param {string} value
    * @returns {string} string phone
    */
    BrMaskDirective.prototype.phoneNotDDDMask = function (value) {
        var formValue = value;
        if (formValue.length > 9) {
            this.brmasker.len = 10;
            this.brmasker.mask = '99999-9999';
            formValue = formValue.replace(/\D/gi, '');
            formValue = formValue.replace(/(\d{5})(\d)/gi, '$1-$2');
            formValue = formValue.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        else {
            this.brmasker.len = 9;
            this.brmasker.mask = '9999-9999';
            formValue = formValue.replace(/\D/gi, '');
            formValue = formValue.replace(/(\d{4})(\d)/gi, '$1-$2');
            formValue = formValue.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        return this.onInput(formValue);
    };
    /**
    * Here we have a mask for peapoll ID
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.peapollMask(string)</caption>
    * @param {string} value
    * @returns {string} string ID
    */
    BrMaskDirective.prototype.peapollMask = function (value) {
        var formValue = value;
        if (formValue.length > 14) {
            this.brmasker.len = 18;
            this.brmasker.mask = '99.999.999/9999-99';
            formValue = formValue.replace(/\D/gi, '');
            formValue = formValue.replace(/(\d{2})(\d)/gi, '$1.$2');
            formValue = formValue.replace(/(\d{3})(\d)/gi, '$1.$2');
            formValue = formValue.replace(/(\d{3})(\d)/gi, '$1/$2');
            formValue = formValue.replace(/(\d{4})(\d{1,4})$/gi, '$1-$2');
            formValue = formValue.replace(/(\d{2})(\d{1,2})$/gi, '$1$2');
        }
        else {
            this.brmasker.len = 14;
            this.brmasker.mask = '999.999.999-99';
            formValue = formValue.replace(/\D/gi, '');
            formValue = formValue.replace(/(\d{3})(\d)/gi, '$1.$2');
            formValue = formValue.replace(/(\d{3})(\d)/gi, '$1.$2');
            formValue = formValue.replace(/(\d{3})(\d{1,2})$/gi, '$1-$2');
        }
        return this.onInput(formValue);
    };
    /**
    * Here we have a mask for money mask
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.moneyMask(string)</caption>
    * @param {string} value
    * @param {BrMaskModel} config
    * @returns {string} string money
    */
    BrMaskDirective.prototype.moneyMask = function (value, config) {
        var decimal = config.decimal || this.brmasker.decimal;
        value = value
            .replace(/\D/gi, '')
            .replace(new RegExp('([0-9]{' + decimal + '})$', 'g'), config.decimalCaracter + '$1');
        if (value.length === 1 && !this.brmasker.moneyInitHasInt) {
            var dec = Array(decimal - 1).fill(0);
            return "0" + config.decimalCaracter + dec.join('') + value;
        }
        if (value.length === decimal + 1) {
            return '0' + value;
        }
        else if (value.length > decimal + 2 && value.charAt(0) === '0') {
            return value.substr(1);
        }
        if (config.thousand && value.length > (Number(4) + Number(config.decimal))) {
            var valueOne = "([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)";
            value = value.replace(new RegExp("" + valueOne, "g"), config.thousand + "$1" + config.decimalCaracter + "$2");
        }
        if (config.thousand && value.length > (Number(8) + Number(config.decimal))) {
            var valueTwo = "([0-9]{3})" + config.thousand + "([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)";
            value = value.replace(new RegExp("" + valueTwo, "g"), config.thousand + "$1" + config.thousand + "$2" + config.decimalCaracter + "$3");
        }
        return value;
    };
    /**
    * Responsible for returning the empty mask
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.onInput(string)</caption>
    * @param {string} value
    * @returns {string} value
    */
    BrMaskDirective.prototype.onInput = function (value) {
        return this.formatField(value, this.brmasker.mask, this.brmasker.len);
    };
    /**
    * Responsible for special characters
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.usingSpecialCharacters(string)</caption>
    * @param {string} field
    * @param {string} mask
    * @param {number} size
    * @returns {string} value
    */
    BrMaskDirective.prototype.usingSpecialCharacters = function (field, mask, size) {
        if (!size) {
            size = 99999999999;
        }
        var boleanoMascara;
        var exp = /\-|\.|\,| /gi;
        var campoSoNumeros = field.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var sizeMascara = campoSoNumeros.length;
        for (var i = 0; i < sizeMascara; i++) {
            if (i < size) {
                boleanoMascara = ((mask.charAt(i) === '-') || (mask.charAt(i) === '.') || (mask.charAt(i) === ','));
                if (boleanoMascara) {
                    NovoValorCampo += mask.charAt(i);
                    sizeMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    /**
    * Responsible formating number
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.thousand(string)</caption>
    * @param {string} value
    */
    BrMaskDirective.prototype.thousand = function (value) {
        var val = value.replace(/\D/gi, '');
        var reverse = val.toString().split('').reverse().join('');
        var thousands = reverse.match(/\d{1,3}/g);
        if (thousands) {
            return thousands.join("" + (this.brmasker.thousand || '.')).split('').reverse().join('');
        }
    };
    /**
    * Responsible for removing special characters
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.formatField(string)</caption>
    * @param {string} field
    * @param {string} mask
    * @param {number} size
    * @returns {string} value
    */
    BrMaskDirective.prototype.formatField = function (field, mask, size) {
        if (!size) {
            size = 99999999999;
        }
        var boleanoMascara;
        var exp = /\_|\-|\.|\/|\(|\)|\,|\*|\+|\@|\#|\$|\&|\%|\:| /gi;
        var campoSoNumeros = field.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var TamanhoMascara = campoSoNumeros.length;
        for (var i = 0; i < TamanhoMascara; i++) {
            if (i < size) {
                boleanoMascara = (mask.charAt(i) === '-') || (mask.charAt(i) === '.') || (mask.charAt(i) === '/');
                boleanoMascara = boleanoMascara || mask.charAt(i) === '_';
                boleanoMascara = boleanoMascara || ((mask.charAt(i) === '(') || (mask.charAt(i) === ')') || (mask.charAt(i) === ' '));
                boleanoMascara = boleanoMascara || ((mask.charAt(i) === ',') || (mask.charAt(i) === '*') || (mask.charAt(i) === '+'));
                boleanoMascara = boleanoMascara || ((mask.charAt(i) === '@') || (mask.charAt(i) === '#') || (mask.charAt(i) === ':'));
                boleanoMascara = boleanoMascara || ((mask.charAt(i) === '$') || (mask.charAt(i) === '&') || (mask.charAt(i) === '%'));
                if (boleanoMascara) {
                    NovoValorCampo += mask.charAt(i);
                    TamanhoMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    return BrMaskDirective;
}());

BrMaskDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[brmasker]'
            },] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
BrMaskDirective.ctorParameters = function () { return [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] },] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
]; };
BrMaskDirective.propDecorators = {
    'brmasker': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'formControlName': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'inputKeyup': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keyup', ['$event'],] },],
};
//# sourceMappingURL=br-mask.js.map

/***/ }),

/***/ "./node_modules/br-mask/dist/directives/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/br-mask/dist/directives/index.js ***!
  \*******************************************************/
/*! exports provided: BrMaskModel, BrMaskDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _br_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./br-mask */ "./node_modules/br-mask/dist/directives/br-mask.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrMaskModel", function() { return _br_mask__WEBPACK_IMPORTED_MODULE_0__["BrMaskModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrMaskDirective", function() { return _br_mask__WEBPACK_IMPORTED_MODULE_0__["BrMaskDirective"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/br-mask/dist/index.js":
/*!********************************************!*\
  !*** ./node_modules/br-mask/dist/index.js ***!
  \********************************************/
/*! exports provided: BrMaskerModule, BrMaskModel, BrMaskDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.module */ "./node_modules/br-mask/dist/app.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrMaskerModule", function() { return _app_module__WEBPACK_IMPORTED_MODULE_0__["BrMaskerModule"]; });

/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives */ "./node_modules/br-mask/dist/directives/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrMaskModel", function() { return _directives__WEBPACK_IMPORTED_MODULE_1__["BrMaskModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrMaskDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_1__["BrMaskDirective"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register-user/register-user.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register-user/register-user.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"medium\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Cadastrar Usuário</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n  <form class=\"mt-6\" #loginForm=\"ngForm\" novalidate>\n\n    <div class=\"text-center\">\n      <ion-icon class=\"text-6xl\" color=\"secondary\" src=\"./assets/icons/elo-employee.svg\"></ion-icon>\n    </div>\n   \n    <ion-row class=\"flex justify-center mt-4\">\n      <ion-col size=\"11\">\n        <ion-item lines=\"none\" class=\"rounded-lg\">\n          <ion-icon slot=\"start\" color=\"secondary\" name=\"person\"></ion-icon>\n          <ion-input placeholder=\"Seu Nome\" [(ngModel)]=\"userData.name\" name=\"name\" type=\"text\" #name=\"ngModel\"\n            spellcheck=\"false\" autocapitalize=\"off\" required>\n          </ion-input>\n        </ion-item>\n        <ion-text color=\"danger\">\n          <p [hidden]=\"userData.name || !submitted\" class=\"ion-padding-start\">\n            * Informe o nome\n          </p>\n        </ion-text>\n      </ion-col>\n\n      <ion-col size=\"11\">\n        <ion-item lines=\"none\" class=\"rounded-lg\">\n          <ion-icon slot=\"start\" color=\"secondary\" name=\"mail\"></ion-icon>\n          <ion-input placeholder=\"Seu Email\" [(ngModel)]=\"userData.mail\" name=\"mail\" type=\"text\" #mail=\"ngModel\"\n            spellcheck=\"false\" autocapitalize=\"off\" required>\n          </ion-input>\n        </ion-item>\n        <ion-text color=\"danger\">\n          <p [hidden]=\"userData.mail || !submitted\" class=\"ion-padding-start\">\n            * Informe o email\n          </p>\n        </ion-text>\n      </ion-col>\n\n      <ion-col size=\"11\">\n        <ion-item lines=\"none\" class=\"rounded-lg\">\n          <ion-icon slot=\"start\" color=\"secondary\" name=\"logo-whatsapp\"></ion-icon>\n          <ion-input placeholder=\"(11) 99999-9999\" [brmasker]=\"{phone: true}\" [(ngModel)]=\"userData.phone\" name=\"whatsapp\" type=\"text\" #whatsapp=\"ngModel\"\n            spellcheck=\"false\" autocapitalize=\"off\">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"11\">\n        <ion-item lines=\"none\" class=\"rounded-lg\">\n          <ion-icon slot=\"start\" color=\"secondary\" name=\"lock-closed\"></ion-icon>\n          <ion-input placeholder=\"Informe uma Senha\" [(ngModel)]=\"userData.password\" name=\"password\" [type]=\"passwordType\"\n            #password=\"ngModel\" required>\n          </ion-input>\n          <ion-icon color=\"dark\" slot=\"end\" [name]=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\n        </ion-item>\n        <ion-text color=\"danger\">\n          <p [hidden]=\"userData.password || !submitted\" class=\"ion-padding-start\">\n            * Informe a senha\n          </p>\n        </ion-text>\n      </ion-col>\n\n      <ion-col size=\"11\">\n        <ion-item lines=\"none\" class=\"rounded-lg\">\n          <ion-icon slot=\"start\" color=\"secondary\" name=\"lock-closed\"></ion-icon>\n          <ion-input placeholder=\"Confirme sua Senha\" [(ngModel)]=\"userData.confirmPassword\" name=\"confirmPassword\" [type]=\"confirmPasswordType\"\n            #confirmPassword=\"ngModel\" required>\n          </ion-input>\n          <ion-icon color=\"dark\" slot=\"end\" [name]=\"confirmPasswordIcon\" (click)='hideShowConfirmPassword()'></ion-icon>\n        </ion-item>\n        <ion-text color=\"danger\">\n          <p [hidden]=\"userData.confirmPassword || !submitted\" class=\"ion-padding-start\">\n            * Confirme a senha\n          </p>\n        </ion-text>\n      </ion-col>\n\n      <ion-col class=\"flex justify-center mt-4\" size=\"10\">\n        <ion-button color=\"secondary\" [disabled]=\"loading\" (click)=\"register(loginForm)\">\n          <ion-spinner *ngIf=\"loading\" name=\"crescent\" slot=\"start\"></ion-spinner>Próximo\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/register-user/register-user-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/register-user/register-user-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterUserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUserPageRoutingModule", function() { return RegisterUserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-user.page */ "./src/app/pages/register-user/register-user.page.ts");




const routes = [
    {
        path: '',
        component: _register_user_page__WEBPACK_IMPORTED_MODULE_3__["RegisterUserPage"]
    }
];
let RegisterUserPageRoutingModule = class RegisterUserPageRoutingModule {
};
RegisterUserPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterUserPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/register-user/register-user.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/register-user/register-user.module.ts ***!
  \*************************************************************/
/*! exports provided: RegisterUserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUserPageModule", function() { return RegisterUserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _register_user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-user-routing.module */ "./src/app/pages/register-user/register-user-routing.module.ts");
/* harmony import */ var _register_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-user.page */ "./src/app/pages/register-user/register-user.page.ts");
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! br-mask */ "./node_modules/br-mask/dist/index.js");








let RegisterUserPageModule = class RegisterUserPageModule {
};
RegisterUserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_user_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterUserPageRoutingModule"],
            br_mask__WEBPACK_IMPORTED_MODULE_7__["BrMaskerModule"]
        ],
        declarations: [_register_user_page__WEBPACK_IMPORTED_MODULE_6__["RegisterUserPage"]]
    })
], RegisterUserPageModule);



/***/ }),

/***/ "./src/app/pages/register-user/register-user.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/register-user/register-user.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyLXVzZXIvcmVnaXN0ZXItdXNlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/register-user/register-user.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/register-user/register-user.page.ts ***!
  \***********************************************************/
/*! exports provided: RegisterUserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUserPage", function() { return RegisterUserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let RegisterUserPage = class RegisterUserPage {
    constructor(router) {
        this.router = router;
        this.userData = {
            login: null,
            password: null,
            confirmPassword: null,
            name: null,
            phone: null,
            mail: null
        };
        this.passwordType = 'password';
        this.passwordIcon = 'eye';
        this.confirmPasswordType = 'password';
        this.confirmPasswordIcon = 'eye';
        this.submitted = false;
    }
    ngOnInit() {
    }
    register(form) {
        this.loading = true;
        this.submitted = true;
        if (form.valid) {
            this.loading = false;
            this.router.navigate(['register-company']);
        }
        else {
            this.loading = false;
        }
    }
    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye' ? 'eye-off' : 'eye';
    }
    hideShowConfirmPassword() {
        this.confirmPasswordType = this.confirmPasswordType === 'text' ? 'password' : 'text';
        this.confirmPasswordIcon = this.confirmPasswordIcon === 'eye' ? 'eye-off' : 'eye';
    }
    toRegisterCompany() {
        this.router.navigate(['register-company']);
    }
};
RegisterUserPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RegisterUserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register-user.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register-user/register-user.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register-user.page.scss */ "./src/app/pages/register-user/register-user.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], RegisterUserPage);



/***/ })

}]);
//# sourceMappingURL=pages-register-user-register-user-module-es2015.js.map