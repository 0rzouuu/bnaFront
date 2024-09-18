import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

export function matchEmailValidator(emailKey: string): ValidatorFn {
  return (formGroup: AbstractControl): { [key: string]: any } | null => {
    const emailControl = formGroup.get(emailKey);
    const confirmationEmailControl = formGroup.get('confirmationEmail');

    if (emailControl && confirmationEmailControl && emailControl.value !== confirmationEmailControl.value) {
      return { 'emailsMismatch': true };
    }
    return null;
  };
}


