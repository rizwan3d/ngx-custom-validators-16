import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { base64 } from './validator';

const BASE64_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => Base64Validator),
  multi: true
};

@Directive({
  selector: '[ngv-base64][formControlName],[ngv-base64][formControl],[ngv-base64][ngModel]',
  providers: [BASE64_VALIDATOR],
  standalone: true,
})
export class Base64Validator implements Validator {
  validate(c: AbstractControl): { [key: string]: any } {
    return base64(c);
  }
}
