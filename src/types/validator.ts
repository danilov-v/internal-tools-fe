export type ValidationErrors = Record<string, string | undefined>;

export interface Validator<T> {
  errors: ValidationErrors;
  validate: (values: T) => ValidationErrors;
}
