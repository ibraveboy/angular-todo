import { AbstractControl, ValidatorFn } from '@angular/forms';

export function confirmPasswordValidator(): ValidatorFn {
  return (formGroup: AbstractControl): { [key: string]: boolean } | null => {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { 'confirmPasswordMismatch': true };
    }
    return null;
  };
}