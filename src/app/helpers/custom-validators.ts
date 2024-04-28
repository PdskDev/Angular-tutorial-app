import { AbstractControl } from "@angular/forms";

export class CustomValidators {

  static passwordValidityCheck(control: AbstractControl){
    const PASSWORD_REGEX = "(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#\$%\^&\*]{8,}";

    if(CustomValidators.isEmptyValue(control.value)){
      return null;
    }

    if(!control.value.match(PASSWORD_REGEX)){
      return {'weakPassword': true};
    }
    return null;
  }

  static passwordMatcher(control: AbstractControl){
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if(CustomValidators.isEmptyValue(password) || CustomValidators.isEmptyValue(confirmPassword)){
      return null;
    }
    return password === confirmPassword ? null : {'mismatch': true}
  }

  static isEmptyValue(value: any) {
    return value == null || typeof value ==='string' && value.length === 0;

  }
}
