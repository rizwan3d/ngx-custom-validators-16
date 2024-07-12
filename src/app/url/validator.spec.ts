import { FormControl, ValidatorFn } from '@angular/forms';

import { url } from './validator';

describe('Url', () => {
  let validator: ValidatorFn;
  beforeEach(() => {
    validator = url;
  });

  const error = { url: true };

  const validCases = [
    'ftp://test.com',
    'ftp://test.com:21',
    'http://www.test.com',
    'http://www.test.com:8080',
    'https://www.test.com',
    'https://www.täst.com',
    'http://www.test.com/',
    'https://www.test.com:8080/',
    'http://www.test.com/index.html',
    'https://www.test.com/index.html',
    'http://www.test.com/index.html/',
    'http://www.test.com//index.html/',
    'http://www.test.com/index.html/#',
    'http://www.test.com/index.html/#hash',
    'http://www.test.com/index.html/?p',
    'http://www.test.com/index.html/?p=1',
    'http://www.test.com/index.html?p=1&q=äöüé$/abc',
    'http://www.test/.com',
  ];

  const invalidCases = [
    '23a',
    'http://w_ww.test.com',
    'http://www.t_est.com',
    'http://www.test.c_om',
    'http://www.test.com\\',
    'abc://www.test.com',
    'http://www.test$.com',
    'http://www.test%.com',
    'http://www.test&.com',
  ];

  validCases.forEach((validCase) => {
    it(`"${validCase}" should be a valid URL`, () => {
      const control = new FormControl(validCase);
      expect(validator(control)).toBeNull();
    });
  });

  invalidCases.forEach((invalidCase) => {
    it(`"${invalidCase}" should not be a valid URL`, () => {
      const control = new FormControl(invalidCase);
      expect(validator(control)).toEqual(error);
    });
  });
});
