export enum InputType {
    TEXT = 'text',
    PASSWORD = 'password',
    CHECKBOX = 'checkbox'
};
export enum InputStyle {
    DEFAULT = 'rounded-md p-2 w-full border border-gray-300 transition',
    ERROR = 'rounded-md p-2 w-full border-2 border-error bg-error-bg transition',
    CHECKBOX = 'w-4 h-4 accent-primary'
};
export enum ValidatorType {
  required,
  pattern,
  maxlength,
  minlength,
  max,
  min
}