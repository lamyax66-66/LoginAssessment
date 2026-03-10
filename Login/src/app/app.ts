import { Component, inject, signal } from '@angular/core';
import { Login } from "./pages/login/login";
import { Navbar } from './components/navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { SessionStorageKeys } from './enums/session-storage-keys';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { CustomButton } from "./components/custom-button/custom-button";
import { Language } from './enums/language';
import { LanguageService } from './service/language/language-service';

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
  languageService = inject(LanguageService);

  Language = Language;

  constructor() {
    this.translate.setFallbackLang(Language.ARABIC);
    this.translate.use(Language.ARABIC);
  }

  toggleLanguage() {
    this.languageService.changeLanguage();
  }
}