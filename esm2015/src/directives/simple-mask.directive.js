/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input, Injectable, Self, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';
import { SimpleMask } from './../simple-mask';
export class SimpleMaskDirective extends SimpleMask {
    /**
     * @param {?} renderer
     * @param {?=} ngControl
     */
    constructor(renderer, ngControl) {
        super();
        this.renderer = renderer;
        this.ngControl = ngControl;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onInput(event) {
        /** @type {?} */
        const el = (/** @type {?} */ (event.target));
        /** @type {?} */
        const value = this.fitToMask(el.value);
        this.writeValue(value, event.target);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onBlur(event) {
        /** @type {?} */
        const el = (/** @type {?} */ (event.target));
        if (el.value && !this.matchMask(el.value) && this.clearIfNotMatch) {
            this.writeValue(null, event.target);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    inputOnblur(event) {
        this.onBlur(event);
    }
    /**
     * @param {?} values
     * @return {?}
     */
    set addPatterns(values) {
        this.setPatterns(values);
    }
    /**
     * @param {?} values
     * @return {?}
     */
    set newPatterns(values) {
        this.setPatterns(values, true);
    }
    /**
     * write the new value on input element and form control
     * @param {?} value value to write
     * @param {?} target input element
     * @return {?}
     */
    writeValue(value, target) {
        target.value = value;
        this.renderer.setProperty(target, 'value', value);
        if (this.ngControl && this.ngControl.control) {
            this.ngControl.control.setValue(value);
            this.ngControl.control.markAsDirty();
            this.ngControl.control.updateValueAndValidity();
        }
    }
    /**
     * Checks if the value matches with the mask and is completed
     * @param {?} value value to check
     * @return {?} true if match, false if not match
     */
    matchMask(value) {
        // value size adjust to mask size
        /** @type {?} */
        const size = this.mask.replace(/\\(?!\\)/g, '').length;
        value = value.substring(0, size);
        return value.length === size ? true : false;
    }
}
SimpleMaskDirective.decorators = [
    { type: Directive, args: [{
                selector: '[simpleMask]'
            },] },
    { type: Injectable }
];
/** @nocollapse */
SimpleMaskDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: NgControl, decorators: [{ type: Self }] }
];
SimpleMaskDirective.propDecorators = {
    mask: [{ type: Input, args: ['simpleMask',] }],
    clearIfNotMatch: [{ type: Input }],
    onInput: [{ type: HostListener, args: ['input', ['$event'],] }],
    onBlur: [{ type: HostListener, args: ['blur', ['$event'],] }],
    inputOnblur: [{ type: HostListener, args: ['ionBlur', ['$event'],] }],
    addPatterns: [{ type: Input, args: ['addPatterns',] }],
    newPatterns: [{ type: Input, args: ['newPatterns',] }]
};
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