import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { isPresent } from '../util/lang';
import { IsURLOptions, isURL } from "validator";

export const url = (control: AbstractControl, options?: IsURLOptions): ValidationErrors => {
  if (isPresent(Validators.required(control))) {
    return null;
  }

  const v: string = control.value;
  return isURL(v, options) ? null : { url: true };
};
