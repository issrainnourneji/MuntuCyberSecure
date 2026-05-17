import { Component } from '@angular/core';
import { environment } from '../environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

   constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('lang') || 'fr';
    translate.use(savedLang);
  }
  title = 'MuntuCybersecure';
  // Si on est en mode visiteur et pas développeur → afficher Coming Soon
  get isComingSoon(): boolean {
    return environment.comingSoon && !environment.developerMode;
  }}
