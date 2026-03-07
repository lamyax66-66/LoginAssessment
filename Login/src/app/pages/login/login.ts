import { Component, inject } from '@angular/core';
import { CustomButton } from '../../components/custom-button/custom-button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Input } from '../../components/input/input';
import { ValidatorType, InputType } from '../../enums/input.enum';
import { Router } from '@angular/router';
import { ButtonType } from '../../enums/button.enum';
import { SessionStorageKeys } from '../../enums/session-storage-keys';
import { Constants, REGEX } from '../../core/constants';
import { RouterPath } from '../../core/router-path';

@Component({
  selector: 'app-login',
  imports: [CustomButton, ReactiveFormsModule, Input],
  templateUrl: './login.html',
})
export class Login {
   router = inject(Router);
 
  readonly InputType = InputType;
  readonly ButtonType = ButtonType;
  
  userForm: FormGroup = new FormGroup({
    username: new FormControl('', { validators: [Validators.required, Validators.pattern(REGEX.TEN_DIGITS)]}),
    password: new FormControl('', { validators: [Validators.required, Validators.minLength(Constants.PASSWORD_MIN_LENGTH)] }),
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
    { message: 'Username is required', types: [ValidatorType.required] },
    { message: 'Username must contain exactly 10 numbers', types: [ValidatorType.pattern] }
  ];
  passwordErrors = [
    { message: 'Password is required', types: [ValidatorType.required] },
    { message: 'Minimum 8 characters', types: [ValidatorType.minlength] }
  ];
  
  login() {
    this.userForm.markAllAsTouched();
    console.log(this.userForm.value);
    if (this.userForm.invalid) return;
    sessionStorage.setItem(SessionStorageKeys.LOGGED_IN, 'true');
    sessionStorage.setItem(SessionStorageKeys.USERNAME, this.usernameControl.value);
    void this.router.navigate([RouterPath.Pages.HOME]);
  }
}