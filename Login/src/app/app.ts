import { Component, signal } from '@angular/core';
import { Login } from './pages/login/login';
import { Home } from "./pages/home/home";

@Component({
  selector: 'app-root',
  imports: [Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Login');
}
