import { Component, signal } from '@angular/core';
import { Input } from './components/input/input';
import { InputStyle, InputType } from './enums/input.enum';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [Input],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Login');

  username = new FormControl('', { validators: [Validators.required] });
  password = new FormControl('', { validators: [Validators.required] });


  readonly InputType = InputType;
  readonly InputStyle = InputStyle;
}
