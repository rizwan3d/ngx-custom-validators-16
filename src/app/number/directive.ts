import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { number } from './validator';

const NUMBER_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => NumberValidator),
  multi: true
};

@Directive({
  selector: '[ngv-number][formControlName],[ngv-number][formControl],[ngv-number][ngModel]',
  providers: [NUMBER_VALIDATOR],
  standalone: true,
})
export class NumberValidator implements Validator {
  validate(c: AbstractControl): { [key: string]: any } {
    return number(c);
  }
}
