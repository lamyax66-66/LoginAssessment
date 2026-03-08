import { Component, inject, signal } from '@angular/core';
import { Login } from "./pages/login/login";
import { Navbar } from './components/navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { SessionStorageKeys } from './enums/session-storage-keys';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { CustomButton } from "./components/custom-button/custom-button";

@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet, TranslatePipe, CustomButton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Login');
  // get isLoggedIn() {
  //   return sessionStorage.getItem(SessionStorageKeys.LOGGED_IN) === 'true';
  // }

  private translate = inject(TranslateService);

  currentLang = 'en';

  constructor() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.translate.use(this.currentLang);

     if (this.currentLang === 'ar') {
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
  }
  }
}
