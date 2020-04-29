export type ValidationErrors = Record<string, string | undefined>;

export type Validator<formValues> = (values: formValues) => ValidationErrors;
