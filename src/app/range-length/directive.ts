import { Directive, Input, forwardRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { rangeLength } from './validator';

const RANGE_LENGTH_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RangeLengthValidator),
  multi: true
};

@Directive({
  selector: '[ngv-rangeLength][formControlName],[ngv-rangeLength][formControl],[ngv-rangeLength][ngModel]',
  providers: [RANGE_LENGTH_VALIDATOR],
  standalone: true,
})
export class RangeLengthValidator implements Validator, OnInit, OnChanges {
  @Input() rangeLength: [number];

  private validator: ValidatorFn;
  private onChange: () => void;

  ngOnInit() {
    this.validator = rangeLength(this.rangeLength);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const key in changes) {
      if (key === 'rangeLength') {
        this.validator = rangeLength(changes[key].currentValue);
        if (this.onChange) {
          this.onChange();
        }
      }
    }
  }

  validate(c: AbstractControl): { [key: string]: any } {
    return this.validator(c);
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onChange = fn;
  }
}
