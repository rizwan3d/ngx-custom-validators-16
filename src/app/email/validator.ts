import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { isPresent } from '../util/lang';
import { IsEmailOptions, isEmail } from 'validator';

export const email = (control: AbstractControl, options?: IsEmailOptions): ValidationErrors => {
  if (isPresent(Validators.required(control))) {
    return null;
  }

  const v: string = control.value;
  return isEmail(v, options) ? null : { email: true };
};
