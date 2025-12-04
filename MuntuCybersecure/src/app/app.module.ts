import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
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
    RefCertifComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
