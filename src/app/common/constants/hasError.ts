import { FormGroup } from '@angular/forms';

export const hasError = (formGroupName: FormGroup, controlName: string, errorName: string) => {
  const control = formGroupName.get(controlName);
  if (control) {
    return control.hasError(errorName);
  }
  return false;
};

export const hasErrorWithPattern = (
  formGroupName: FormGroup,
  controlName: string,
  errorName: string,
  pattern: RegExp
) => {
  const control = formGroupName.get(controlName);
  if (control && control.errors) {
    const error = control.errors[errorName];
    if (error && error.pattern === pattern) {
      return true;
    }
  }
  return false;
};

