import { Component, signal } from '@angular/core';
import { Input } from './components/input/input';
import { InputStyle, InputType, ValidatorType } from './enums/input.enum';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomButton } from './components/custom-button/custom-button';
import { TempMessage } from './components/temp-messgage/temp-message';

@Component({
  selector: 'app-root',
  imports: [Input, ReactiveFormsModule, CustomButton,TempMessage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Login');

  userForm: FormGroup = new FormGroup({
    username: new FormControl('', { validators: [Validators.required] }),
    password: new FormControl('', { validators: [Validators.required, Validators.minLength(8)] }),
    remember: new FormControl(false, { validators: [Validators.requiredTrue] }),
  })
  get usernameControl(): FormControl {
    return this.userForm.get('username') as FormControl;
  }
  get passwordControl(): FormControl {
    return this.userForm.get('password') as FormControl;
  }
  get rememberControl(): FormControl {
    return this.userForm.get('remember') as FormControl;
  }
  readonly ValidatorType = ValidatorType;
  readonly InputType = InputType;
  readonly InputStyle = InputStyle;
}
