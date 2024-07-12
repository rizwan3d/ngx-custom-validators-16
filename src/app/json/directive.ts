import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { json } from './validator';

const JSON_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => JSONValidator),
  multi: true
};

@Directive({
  selector: '[ngv-json][formControlName],[ngv-json][formControl],[ngv-json][ngModel]',
  providers: [JSON_VALIDATOR],
  standalone: true,
})
export class JSONValidator implements Validator {
  validate(c: AbstractControl): { [key: string]: any } {
    return json(c);
  }
}
