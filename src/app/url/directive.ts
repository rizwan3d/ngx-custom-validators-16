import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { url } from './validator';
import { IsURLOptions } from 'validator';

const URL_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => UrlValidator),
  multi: true
};

@Directive({
  selector: '[url][formControlName],[url][formControl],[url][ngModel]',
  providers: [URL_VALIDATOR],
  standalone: true,
})
export class UrlValidator implements Validator {
  @Input()
  /** validation options defaulting to
   * { protocols: ['http','https','ftp'], require_tld: true, require_protocol: false, require_host: true, require_port: false, require_valid_protocol: true, allow_underscores: false, host_whitelist: false, host_blacklist: false, allow_trailing_dot: false, allow_protocol_relative_urls: false, allow_fragments: true, allow_query_components: true, disallow_auth: false, validate_length: true }
   * */
  urlOptions?: IsURLOptions;

  validate(c: AbstractControl): { [key: string]: any } {
    return url(c, this.urlOptions);
  }
}
