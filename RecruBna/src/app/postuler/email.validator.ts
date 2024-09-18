import { AbstractControl, ValidatorFn } from '@angular/forms';

export function emailCustomValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const email = control.value;
    if (email && (!email.includes('@') || !email.includes('.'))) {
      return { 'emailCustom': true };
    }
    return null;
  };
}
