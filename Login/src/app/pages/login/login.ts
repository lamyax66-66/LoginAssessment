import { Component, inject } from '@angular/core';
import { CustomButton } from '../../components/custom-button/custom-button';
import { Message } from '../../components/message/message';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Input } from '../../components/input/input';
import { ValidatorType, InputType } from '../../enums/input.enum';
import { Router } from '@angular/router';
import { ButtonType } from '../../enums/button.enum';
import { SessionStorageKeys } from '../../enums/session-storage-keys';

@Component({
  selector: 'app-login',
  imports: [CustomButton, Message, ReactiveFormsModule, Input],
  templateUrl: './login.html',
})
export class Login {
  router = inject(Router);
 login() {
  this.userForm.markAllAsTouched();
  //if (this.userForm.invalid) return;
  sessionStorage.setItem(SessionStorageKeys.LOGGED_IN, 'true');
  sessionStorage.setItem(MediaSession, this.usernameControl.value);
  this.router.navigate(['/home']);
}
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
  usernameErrors = [
    { message: 'Username is required', types: [ValidatorType.required] }
  ];
  passwordErrors = [
    { message: 'Password is required', types: [ValidatorType.required] },
    { message: 'Minimum 8 characters', types: [ValidatorType.minlength] }
  ];
  readonly ValidatorType = ValidatorType;
  readonly InputType = InputType;
  readonly ButtonType = ButtonType;
}
