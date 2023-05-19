import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidator
{
  static ConfirmPasswordValidator(control:AbstractControl) : ValidationErrors | null
  {
    let password = control?.get('password');
    let confirmPassword = control?.get('confirmPassword');
    if (confirmPassword?.errors && !confirmPassword?.errors?.["matchPassword"]) {
      // return if another validator has already found an error on the matchingControl
      return null;
    }

    if (password?.value !== confirmPassword?.value) {
      confirmPassword?.setErrors({
        matchPassword: true
      })
      return {matchPassword: true}
    }
    return null
  }
}
