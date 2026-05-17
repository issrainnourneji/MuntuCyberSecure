import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SolutionsComponent } from './pages/solutions/solutions/solutions.component';
import { OffresComponent } from './pages/offres/offres.component';
import { PresentationComponent } from './pages/entreprise/presentation/presentation.component';
import { ComingSoonComponent } from './attente/coming-soon/coming-soon.component';
import { ExpertiseComponent } from './pages/solutions/expertise/expertise.component';
import { TarifsComponent } from './pages/solutions/tarifs/tarifs.component';
import { PartenairesComponent } from './pages/entreprise/partenaires/partenaires.component';
import { RefCertifComponent } from './pages/entreprise/ref-certif/ref-certif.component';
import { ClientsComponent } from './pages/temoignages/clients/clients.component';
import { TemoignagesComponent } from './pages/temoignages/temoignages/temoignages.component';
import { CollabsComponent } from './pages/temoignages/collabs/collabs.component';
import { PartnersComponent } from './pages/temoignages/partners/partners.component';
import { PrestationsComponent } from './pages/solutions/prestations/prestations.component';
import { DiagnosticComponent } from './pages/solutions/diagnostic/diagnostic.component';
import { ActualitesComponent } from './pages/entreprise/actualites/actualites.component';
import { NewsletterComponent } from './pages/contenus/newsletter/newsletter.component';
import { BlogComponent } from './pages/contenus/blog/blog.component';

// ngx-translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Fonction loader : juste 1 argument
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http); // ✅ plus d'erreur
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    SolutionsComponent,
    OffresComponent,
    PresentationComponent,
    ComingSoonComponent,
    ExpertiseComponent,
    TarifsComponent,
    PartenairesComponent,
    RefCertifComponent,
    ClientsComponent,
    TemoignagesComponent,
    CollabsComponent,
    PartnersComponent,
    PrestationsComponent,
    DiagnosticComponent,
    ActualitesComponent,
    NewsletterComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      defaultLanguage: 'fr', // langue initiale
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
