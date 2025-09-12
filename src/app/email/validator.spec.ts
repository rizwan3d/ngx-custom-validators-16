import { FormControl } from '@angular/forms';

import { email } from './validator';

describe('Email', () => {
  const error = { email: true };

  const validCases = [
    'test@gmail.com',
    'test@gmail-abc.com',
    'test@gmail-abc.com.aa',
    'test@abc.online',
    't@a.aa',
    't-a@aa.com',
    't_a@aa.com',
    't.a@aa.com',
    't.a.b@aa.com',
  ];

  const invalidCases = [
    'test',
    'test@',
    'test@.com',
    'test@.com.',
    'test@abc',
    'test@abc.',
    '.@abc.com',
    '.a@abc.com',
    'a.@abc.com',
    'a@b@abc.com',
    'test@a_a.com',
    'test@aa.com/',
    'test@aa.co-m',
  ];

  validCases.forEach((validCase) => {
    it(`"${validCase}" should be a valid email`, () => {
      const control = new FormControl(validCase);
      expect(email(control)).toBeNull();
    });
  });

  invalidCases.forEach((invalidCase) => {
    it(`"${invalidCase}" should not be a valid email`, () => {
      const control = new FormControl(invalidCase);
      expect(email(control)).toEqual(error);
    });
  });
});
