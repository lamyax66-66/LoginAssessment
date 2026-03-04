import { Component, computed, input } from '@angular/core';
import { InputType, ValidatorType } from '../../enums/input.enum';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Message } from '../message/message';
import { InputErrorMessage } from '../../models/input-error-message';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule, Message],
  templateUrl: './input.html',
})
export class Input {
  control = input.required<FormControl>();
  type = input<InputType>(InputType.TEXT);
  placeholder = input<string>('');
  showErrorOnSubmit = input<boolean>(false);
  errors = input<InputErrorMessage[]>();
  label = input<string>('');

  isCheckbox = computed(() => this.type() === InputType.CHECKBOX);

  readonly InputType = InputType;

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
}
