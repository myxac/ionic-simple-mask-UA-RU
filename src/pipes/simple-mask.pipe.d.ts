import { PipeTransform } from '@angular/core';
import { SimpleMask } from '../simple-mask';
export declare class SimpleMaskPipe extends SimpleMask implements PipeTransform {
    constructor();
    transform(value: string, mask: string, patterns?: any, clear?: boolean): string;
}
