/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, HostListener, Input, Injectable, Self, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';
import { SimpleMask } from './../simple-mask';
var SimpleMaskDirective = /** @class */ (function (_super) {
    tslib_1.__extends(SimpleMaskDirective, _super);
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
export { SimpleMaskDirective };
if (false) {
    /** @type {?} */
    SimpleMaskDirective.prototype.mask;
    /** @type {?} */
    SimpleMaskDirective.prototype.clearIfNotMatch;
    /** @type {?} */
    SimpleMaskDirective.prototype.renderer;
    /** @type {?} */
    SimpleMaskDirective.prototype.ngControl;
}
//# sourceMappingURL=simple-mask.directive.js.map