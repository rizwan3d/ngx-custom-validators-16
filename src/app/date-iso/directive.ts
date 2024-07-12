import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { dateISO } from './validator';

const DATE_ISO_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => DateISOValidator),
  multi: true
};

@Directive({
  selector: '[ngv-dateISO][formControlName],[ngv-dateISO][formControl],[ngv-dateISO][ngModel]',
  providers: [DATE_ISO_VALIDATOR],
  standalone: true,
})
export class DateISOValidator implements Validator {
  validate(c: AbstractControl): { [key: string]: any } {
    return dateISO(c);
  }
}
