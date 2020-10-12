<!-- [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/rafaelcorradini/ngx-ion-simple-mask/master/LICENSE)
[![Build Status](https://travis-ci.com/rafaelcorradini/ngx-ion-simple-mask.svg?branch=master)](https://travis-ci.com/rafaelcorradini/ngx-ion-simple-mask) -->
<!-- # ngx-ion-simple-Mask -->

Simple input mask for Angular/Ionic with support Ukrainian and Russian languages

## <a name="1"></a> Installing

```bash
$ npm install git://github.com:myxac/ionic-simple-mask-UA-RU.git --Save
```

## <a name="2"></a> Usage

Import ionic-simple-mask-UA-RU module in your app.module.ts file.
```typescript
import { SimpleMaskModule } from 'ionic-simple-mask-UA-RU'

@NgModule({
  imports: [
    SimpleMaskModule
  ]
})
```

Or import the directive/pipe separately
```typescript
import { SimpleMaskDirective, SimpleMaskPipe } from 'ionic-simple-mask-UA-RU'

@NgModule({
  declarations: [
    SimpleMaskDirective,
    SimpleMaskPipe
  ]
})
```

### Ionic

ionic usage example:
```html
<ion-input simpleMask="999.999.999-99" [clearIfNotMatch]="true"></ion-input>

<ion-input simpleMask="AA 9999 AA"></ion-input>
```

### Angular

Angular usage example:
```html
<input simpleMask="999.999.999-99" [clearIfNotMatch]="true">
```

### Form Control/NgModel

The libray works with Form Control and ngModel:
```html
<input simpleMask="999.999.999-99" [formControl]="formControl">
```

```html
<input simpleMask="999.999.999-99" [(ngModel)]="value">
```

### Pipe

#### example
```html
<p>{{ '123321123-12' | simpleMask:'999.999.999-99' }}<p>
```
output: 
```html
<p>123.321.123-12</p>
```

#### example with add patterns
```html
<p>{{ 'asd-123' | simpleMask:'aaa-II':{'I': '[0-9]' } }}<p>
```
output: 
```html
<p>123.321.123-12</p>
```

#### example with new patterns(ignoring old patterns)
```html
<p>{{ '123-bddd' | simpleMask:'III-aaa':{'I': '[0-9]' }:true }}<p>
```
output: 
```html
<p>123-aaa</p>
```

## <a name="3"></a>Patterns
### Default patterns:

```typescript
patterns = {
    '9': new RegExp('[0-9]'),
    'a': new RegExp('[a-z]'),
    'A': new RegExp('a-zA-Zа-яА-ЯёЁЇїІіЄєҐґ'),
    'x': new RegExp('[a-zA-Z]'),
    '*': new RegExp('[a-zA-Z0-9]'),
    '~': new RegExp('[-\+]')
};
```


#### Examples

| mask | example |
| ------- | ------- |
| 999.999.AAA | 113.123.абв |
| (AA) 999 | (AS) 123 |
| 999\\\~ | 999~ |

### Set new patterns

The set strings will be used as regex
```html
<input
    simpleMask="IIIxxx"
    [newPatterns]="{ 'I', '[a-z]', 'x', '[0-9]' }">
```
example of input: abc123

### Add patterns

The set strings will be used as regex
```html
<input simpleMask="~III999" [addPatterns]="{ 'I', '[a-z]' }">
```
example of input: +abc123
