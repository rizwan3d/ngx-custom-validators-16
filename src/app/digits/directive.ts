import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { digits } from './validator';

const DIGITS_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => DigitsValidator),
  multi: true
};

@Directive({
  selector: '[ngv-digits][formControlName],[ngv-digits][formControl],[ngv-digits][ngModel]',
  providers: [DIGITS_VALIDATOR],
  standalone: true,
})
export class DigitsValidator implements Validator {
  validate(c: AbstractControl): { [key: string]: any } {
    return digits(c);
  }
}
