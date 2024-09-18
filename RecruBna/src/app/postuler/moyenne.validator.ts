import { AbstractControl, ValidatorFn } from '@angular/forms';

export function moyenne(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (!value) {
      return null; // No validation if the field is empty
    }

    // Check if the value is a valid float number and within the range
    const floatValue = parseFloat(value);
    if (isNaN(floatValue) || floatValue < min || floatValue > max) {
      return { 'floatRange': { value } };
    }

    return null;
  };
}
