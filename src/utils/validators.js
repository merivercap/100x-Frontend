import * as validator from 'validator';

export const FieldValidation = {
  ERROR = 'ERROR',
  PRISTINE = 'PRISTINE',
  SUCCESS = 'SUCCESS',
};

export function getFieldValidationStatus(isValidated) {
  return isValidated ? FieldValidation.SUCCESS : FieldValidation.ERROR;
}

export function getInputValidationClass(name) {
  switch (name) {
    case FieldValidation.ERROR:
      return 'has-error';
    case FieldValidation.SUCCESS:
      return 'is-success';
    default:
      return;
  }
}

export function getInputErrorClass(validation) {
  return validation === FieldValidation.ERROR ? 'show-error' : '';
}


// Validation helper functions

export const isFileUnderLimit = file => (
  true // false
);

export const isNotEmpty = text => (
  getFieldValidation(!validator.isEmpty(text))
);

export const isValidEmail = email => (
  getFieldValidation(validator.isEmail(email))
);


// Validation error messages

export const errorMessages = {
  emptyField: 'Field cannot be empty',
  fileTooLarge: 'File size is too large',
};
