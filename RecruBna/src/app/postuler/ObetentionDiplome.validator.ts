import { AbstractControl, ValidatorFn } from '@angular/forms';

export function ObetentionDiplome(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) {
      return null; // No validation if the field is empty
    }

    const inputDate = new Date(control.value);
    const cutoffDate = new Date('2024-08-01'); // Use a date format that JavaScript understands

    return inputDate < cutoffDate ? null : { dateBeforeAugust2024: true };
  };
}
