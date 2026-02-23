import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Message } from "./components/message/message";

@Component({
  selector: 'app-root',
  imports: [Message],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Login');
}
