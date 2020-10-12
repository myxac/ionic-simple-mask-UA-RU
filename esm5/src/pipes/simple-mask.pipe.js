/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { SimpleMask } from '../simple-mask';
var SimpleMaskPipe = /** @class */ (function (_super) {
    tslib_1.__extends(SimpleMaskPipe, _super);
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
export { SimpleMaskPipe };
//# sourceMappingURL=simple-mask.pipe.js.map