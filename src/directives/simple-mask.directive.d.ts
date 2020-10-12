import { Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';
import { SimpleMask } from './../simple-mask';
export declare class SimpleMaskDirective extends SimpleMask {
    private renderer;
    ngControl?: NgControl | undefined;
    mask: string;
    clearIfNotMatch: boolean;
    constructor(renderer: Renderer2, ngControl?: NgControl | undefined);
    onInput(event: KeyboardEvent): void;
    onBlur(event: Event): void;
    inputOnblur(event: Event): void;
    addPatterns: any;
    newPatterns: any;
    /**
     * write the new value on input element and form control
     * @param value value to write
     * @param target input element
     */
    private writeValue;
    /**
     * Checks if the value matches with the mask and is completed
     * @param value value to check
     * @returns true if match, false if not match
     */
    private matchMask;
}
