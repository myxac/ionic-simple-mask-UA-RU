/**
 * @license ngx-ion-simple-mask
 * MIT license
 */

import { Directive, HostListener, Input, Injectable, Self, Renderer2, Pipe, NgModule } from '@angular/core';
import { NgControl } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SimpleMask {
    constructor() {
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
     * @param {?} patterns new patterns
     * @param {?=} clear true if to clear old patterns
     * @return {?}
     */
    setPatterns(patterns, clear = false) {
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
        for (const key in patterns) {
            if (patterns.hasOwnProperty(key)) {
                this.patterns[key] = new RegExp(patterns[key]);
            }
        }
    }
    /**
     * checks if the char is a pattern, that is, if is a pattern
     * @param {?} char value to check
     * @return {?} true is a pattern, false if is not
     */
    isPattern(char) {
        for (const key in this.patterns) {
            if (this.patterns.hasOwnProperty(key) && key === char) {
                return true;
            }
        }
        return false;
    }
    /**
     * Fits the value with the mask and return a formatted value
     * @param {?} value value to fit
     * @return {?} formatted value
     */
    fitToMask(value) {
        /** @type {?} */
        let newValue = '';
        // value size adjust to mask size
        /** @type {?} */
        const size = this.mask.replace(/\\(?!\\)/g, '').length;
        value = value.substring(0, size);
        for (let i = 0, j = 0; j < this.mask.length && i < value.length; i++, j++) {
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
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SimpleMaskDirective extends SimpleMask {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SimpleMaskPipe extends SimpleMask {
    constructor() {
        super();
    }
    /**
     * @param {?} value
     * @param {?} mask
     * @param {?=} patterns
     * @param {?=} clear
     * @return {?}
     */
    transform(value, mask, patterns, clear = false) {
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
    }
}
SimpleMaskPipe.decorators = [
    { type: Pipe, args: [{
                name: 'simpleMask'
            },] }
];
/** @nocollapse */
SimpleMaskPipe.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SimpleMaskModule {
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
