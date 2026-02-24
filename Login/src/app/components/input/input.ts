import { Component, computed, input } from '@angular/core';
import { InputStyle, InputType, ValidatorType } from '../../enums/input.enum';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

export class InputErrorMessage {
  message: string;
  types: ValidatorType[];

  constructor(message: string, types: ValidatorType[]) {
    this.message = message;
    this.types = types;
  }
}

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule],
  templateUrl: './input.html',
})
export class Input {
  control = input.required<FormControl>();
  type = input<InputType>(InputType.TEXT);
  styleType = input<InputStyle>(InputStyle.DEFAULT);
  placeholder = input<string>('');
  showErrorOnSubmit = input<boolean>(false);
  errors = input<InputErrorMessage[]>();

  readonly InputType = InputType;
  // readonly InputStyle = InputStyle;

  isCheckbox = computed(() => this.type() === InputType.CHECKBOX);

  get hasError(): boolean {
    const control = this.control();
    if (!control?.errors) {
      return false;
    }

    if (control.touched) {
      return true;
    }
    return false;
  }

  hasErrorByType(validatorTypes: ValidatorType[]): boolean {
    for (const validatorType of validatorTypes) {
      if (this.control()?.errors?.[ValidatorType[validatorType]]) {
        return this.hasError;
      }
    }

    return false;
  }
  inputClass = computed(() =>
    this.hasError ? InputStyle.ERROR : this.styleType()
  );
}
