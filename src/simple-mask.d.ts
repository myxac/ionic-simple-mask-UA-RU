export declare class SimpleMask {
    protected patterns: any;
    mask: string;
    /**
     * set new patterns
     * @param patterns new patterns
     * @param clear true if to clear old patterns
     */
    protected setPatterns(patterns: any, clear?: boolean): void;
    /**
     * checks if the char is a pattern, that is, if is a pattern
     * @param char value to check
     * @returns true is a pattern, false if is not
     */
    protected isPattern(char: string): boolean;
    /**
     * Fits the value with the mask and return a formatted value
     * @param value value to fit
     * @returns formatted value
     */
    protected fitToMask(value: string): string;
}
