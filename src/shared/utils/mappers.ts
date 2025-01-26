import { ValidationError } from '@nestjs/common';

export const mapperClassValidationErrorToAppException = (
  errors: ValidationError[],
) => {
  const errorList = {} as { [key: string]: string };

  errors.forEach((error) => {
    errorList[error.property] = Object.values(error.constraints ?? {})[0];
  });

  return errorList;
};
