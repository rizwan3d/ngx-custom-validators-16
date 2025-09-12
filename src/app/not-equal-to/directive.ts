import { Directive, Input, forwardRef, OnInit } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

import { notEqualTo } from './validator';

const NOT_EQUAL_TO_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => NotEqualToValidator),
  multi: true
};

@Directive({
  selector: '[ngv-notEqualTo][formControlName],[ngv-notEqualTo][formControl],[ngv-notEqualTo][ngModel]',
  providers: [NOT_EQUAL_TO_VALIDATOR],
  standalone: true,
})
export class NotEqualToValidator implements Validator, OnInit {
  @Input() notEqualTo: FormControl;

  private validator: ValidatorFn;

  ngOnInit() {
    this.validator = notEqualTo(this.notEqualTo);
  }

  validate(c: AbstractControl): { [key: string]: any } {
    return this.validator(c);
  }
}
