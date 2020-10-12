/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { SimpleMask } from '../simple-mask';
export class SimpleMaskPipe extends SimpleMask {
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
//# sourceMappingURL=simple-mask.pipe.js.map