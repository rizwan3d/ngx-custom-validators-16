import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { email } from './validator';
import { IsEmailOptions } from 'validator';

const EMAIL_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};

@Directive({
  selector: '[ngvemail][formControlName],[ngvemail][formControl],[ngvemail][ngModel]',
  providers: [EMAIL_VALIDATOR]
})
export class EmailValidator implements Validator {
  /** validation options defaulting to
   * { allow_display_name: false, require_display_name: false, allow_utf8_local_part: true, require_tld: true, allow_ip_domain: false, allow_underscores: false, domain_specific_validation: false, blacklisted_chars: '', host_blacklist: [] }
   */
  @Input()
  emailOptions?: IsEmailOptions;

  validate(c: AbstractControl): { [key: string]: any } {
    return email(c, this.emailOptions);
  }
}
