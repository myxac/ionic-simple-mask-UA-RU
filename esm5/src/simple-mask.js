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
export { SimpleMask };
if (false) {
    /** @type {?} */
    SimpleMask.prototype.patterns;
    /** @type {?} */
    SimpleMask.prototype.mask;
}
//# sourceMappingURL=simple-mask.js.map