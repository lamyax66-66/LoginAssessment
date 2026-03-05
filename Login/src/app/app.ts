import { Component, signal } from '@angular/core';
import { Login } from "./pages/login/login";
import { Navbar } from './components/navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { SessionStorageKeys } from './enums/session-storage-keys';

@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Login');
    get isLoggedIn() {
    return sessionStorage.getItem(SessionStorageKeys.LOGGED_IN) === 'true';
  }
 
}
