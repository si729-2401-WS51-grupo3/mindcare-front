import {Component, NgModule} from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'language-switcher',
  imports: [TranslateModule],
  standalone: true,
  template: `
    <button (click)="switchLanguage('en')">EN</button>
    <button (click)="switchLanguage('es')">ES</button>
  `
})
export class LanguageSwitcherComponent {
  constructor(private translate: TranslateService) {}
  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
