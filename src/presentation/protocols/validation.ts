export interface Validation {
  validate(input: object): string | null;
}
export interface ValidatorMessageError {
  error: boolean;
  errorMessage: string;
}
