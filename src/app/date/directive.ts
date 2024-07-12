import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { date } from './validator';

const DATE_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => DateValidator),
  multi: true
};

@Directive({
  selector: '[ngv-date][formControlName],[ngv-date][formControl],[ngv-date][ngModel]',
  providers: [DATE_VALIDATOR],
  standalone: true,
})
export class DateValidator implements Validator {
  validate(c: AbstractControl): { [key: string]: any } {
    return date(c);
  }
}
