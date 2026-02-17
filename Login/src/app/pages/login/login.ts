import { Component } from '@angular/core';
import { LoginButton } from '../../components/login-button/login-button';

@Component({
  selector: 'app-login',
  imports: [LoginButton],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

}
