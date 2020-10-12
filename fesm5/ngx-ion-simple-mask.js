/**
 * @license ngx-ion-simple-mask
 * MIT license
 */

import { __extends } from 'tslib';
import { Directive, HostListener, Input, Injectable, Self, Renderer2, Pipe, NgModule } from '@angular/core';
import { NgControl } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SimpleMask = /** @class */ (function () {
    function SimpleMask() {
        this.patterns = {
            '9': new RegExp('[0-9]'),
            'a': new RegExp('[a-z]'),
            'A': new RegExp('[a-zA-Zа-яА-ЯёЁЇїІіЄєҐґ]'),
            'x': new RegExp('[a-zA-Z]'),
            '*': new RegExp('[a-zA-Z0-9]'),
            '~': new RegExp('[-\+]')
        };
    }
    /**
     * set new patterns
     * @param patterns new patterns
     * @param clear true if to clear old patterns
     */
    /**
     * set new patterns
     * @param {?} patterns new patterns
     * @param {?=} clear true if to clear old patterns
     * @return {?}
     */
    SimpleMask.prototype.setPatterns = /**
     * set new patterns
     * @param {?} patterns new patterns
     * @param {?=} clear true if to clear old patterns
     * @return {?}
     */
    function (patterns, clear) {
        if (clear === void 0) { clear = false; }
        if (!patterns) {
            return;
        }
        try {
            JSON.parse(JSON.stringify(patterns));
        }
        catch (_a) {
            throw new Error('Invalid patterns object');
        }
        if (clear) {
            this.patterns = {};
        }
        for (var key in patterns) {
            if (patterns.hasOwnProperty(key)) {
                this.patterns[key] = new RegExp(patterns[key]);
            }
        }
    };
    /**
     * checks if the char is a pattern, that is, if is a pattern
     * @param char value to check
     * @returns true is a pattern, false if is not
     */
    /**
     * checks if the char is a pattern, that is, if is a pattern
     * @param {?} char value to check
     * @return {?} true is a pattern, false if is not
     */
    SimpleMask.prototype.isPattern = /**
     * checks if the char is a pattern, that is, if is a pattern
     * @param {?} char value to check
     * @return {?} true is a pattern, false if is not
     */
    function (char) {
        for (var key in this.patterns) {
            if (this.patterns.hasOwnProperty(key) && key === char) {
                return true;
            }
        }
        return false;
    };
    /**
     * Fits the value with the mask and return a formatted value
     * @param value value to fit
     * @returns formatted value
     */
    /**
     * Fits the value with the mask and return a formatted value
     * @param {?} value value to fit
     * @return {?} formatted value
     */
    SimpleMask.prototype.fitToMask = /**
     * Fits the value with the mask and return a formatted value
     * @param {?} value value to fit
     * @return {?} formatted value
     */
    function (value) {
        /** @type {?} */
        var newValue = '';
        // value size adjust to mask size
        /** @type {?} */
        var size = this.mask.replace(/\\(?!\\)/g, '').length;
        value = value.substring(0, size);
        for (var i = 0, j = 0; j < this.mask.length && i < value.length; i++, j++) {
            // ignore next special char
            if (this.mask[j] === '\\') {
                newValue += this.mask[j + 1];
                j++;
                continue;
            }
            // test special char
            if (this.isPattern(this.mask[j])) {
                if (this.patterns[this.mask[j]].test(value[i])) {
                    newValue += value[i];
                }
                else {
                    return newValue;
                }
            }
            else {
                newValue += this.mask[j];
                if (this.mask[j] !== value[i]) {
                    i--;
                }
            }
        }
        return newValue;
    };
    return SimpleMask;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SimpleMaskDirective = /** @class */ (function (_super) {
    __extends(SimpleMaskDirective, _super);
    function SimpleMaskDirective(renderer, ngControl) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.ngControl = ngControl;
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    SimpleMaskDirective.prototype.onInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var el = (/** @type {?} */ (event.target));
        /** @type {?} */
        var value = this.fitToMask(el.value);
        this.writeValue(value, event.target);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SimpleMaskDirective.prototype.onBlur = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var el = (/** @type {?} */ (event.target));
        if (el.value && !this.matchMask(el.value) && this.clearIfNotMatch) {
            this.writeValue(null, event.target);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SimpleMaskDirective.prototype.inputOnblur = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onBlur(event);
    };
    Object.defineProperty(SimpleMaskDirective.prototype, "addPatterns", {
        set: /**
         * @param {?} values
         * @return {?}
         */
        function (values) {
            this.setPatterns(values);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleMaskDirective.prototype, "newPatterns", {
        set: /**
         * @param {?} values
         * @return {?}
         */
        function (values) {
            this.setPatterns(values, true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * write the new value on input element and form control
     * @param value value to write
     * @param target input element
     */
    /**
     * write the new value on input element and form control
     * @param {?} value value to write
     * @param {?} target input element
     * @return {?}
     */
    SimpleMaskDirective.prototype.writeValue = /**
     * write the new value on input element and form control
     * @param {?} value value to write
     * @param {?} target input element
     * @return {?}
     */
    function (value, target) {
        target.value = value;
        this.renderer.setProperty(target, 'value', value);
        if (this.ngControl && this.ngControl.control) {
            this.ngControl.control.setValue(value);
            this.ngControl.control.markAsDirty();
            this.ngControl.control.updateValueAndValidity();
        }
    };
    /**
     * Checks if the value matches with the mask and is completed
     * @param value value to check
     * @returns true if match, false if not match
     */
    /**
     * Checks if the value matches with the mask and is completed
     * @param {?} value value to check
     * @return {?} true if match, false if not match
     */
    SimpleMaskDirective.prototype.matchMask = /**
     * Checks if the value matches with the mask and is completed
     * @param {?} value value to check
     * @return {?} true if match, false if not match
     */
    function (value) {
        // value size adjust to mask size
        /** @type {?} */
        var size = this.mask.replace(/\\(?!\\)/g, '').length;
        value = value.substring(0, size);
        return value.length === size ? true : false;
    };
    SimpleMaskDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[simpleMask]'
                },] },
        { type: Injectable }
    ];
    /** @nocollapse */
    SimpleMaskDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: NgControl, decorators: [{ type: Self }] }
    ]; };
    SimpleMaskDirective.propDecorators = {
        mask: [{ type: Input, args: ['simpleMask',] }],
        clearIfNotMatch: [{ type: Input }],
        onInput: [{ type: HostListener, args: ['input', ['$event'],] }],
        onBlur: [{ type: HostListener, args: ['blur', ['$event'],] }],
        inputOnblur: [{ type: HostListener, args: ['ionBlur', ['$event'],] }],
        addPatterns: [{ type: Input, args: ['addPatterns',] }],
        newPatterns: [{ type: Input, args: ['newPatterns',] }]
    };
    return SimpleMaskDirective;
}(SimpleMask));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SimpleMaskPipe = /** @class */ (function (_super) {
    __extends(SimpleMaskPipe, _super);
    function SimpleMaskPipe() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} value
     * @param {?} mask
     * @param {?=} patterns
     * @param {?=} clear
     * @return {?}
     */
    SimpleMaskPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} mask
     * @param {?=} patterns
     * @param {?=} clear
     * @return {?}
     */
    function (value, mask, patterns, clear) {
        if (clear === void 0) { clear = false; }
        if (mask) {
            this.mask = mask;
        }
        else {
            throw new Error('A mask is required on simpleMask pipe');
        }
        if (patterns) {
            this.setPatterns(patterns, clear);
        }
        return this.fitToMask(value);
    };
    SimpleMaskPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'simpleMask'
                },] }
    ];
    /** @nocollapse */
    SimpleMaskPipe.ctorParameters = function () { return []; };
    return SimpleMaskPipe;
}(SimpleMask));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SimpleMaskModule = /** @class */ (function () {
    function SimpleMaskModule() {
    }
    SimpleMaskModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        SimpleMaskDirective,
                        SimpleMaskPipe
                    ],
                    exports: [
                        SimpleMaskDirective,
                        SimpleMaskPipe
                    ]
                },] }
    ];
    return SimpleMaskModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { SimpleMaskDirective, SimpleMaskPipe, SimpleMaskModule, SimpleMask as ɵa };
//# sourceMappingURL=ngx-ion-simple-mask.js.map
