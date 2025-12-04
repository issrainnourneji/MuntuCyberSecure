import { Component } from '@angular/core';
import { environment } from '../environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MuntuCybersecure';
  // Si on est en mode visiteur et pas développeur → afficher Coming Soon
  get isComingSoon(): boolean {
    return environment.comingSoon && !environment.developerMode;
  }}
