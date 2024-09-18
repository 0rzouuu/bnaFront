import { AbstractControl, ValidatorFn } from '@angular/forms';

export function dateBeforeValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const birthDate = new Date(control.value);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const isOldEnough = age >= 18;

    return !isOldEnough ? { 'dateBefore': true } : null;
  };
}
