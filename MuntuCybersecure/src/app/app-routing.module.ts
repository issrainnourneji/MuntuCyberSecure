import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
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

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {path:"",redirectTo:"home", pathMatch:"full"},
  {path: "contact" , component : ContactComponent},
  {path: "offres" , component : OffresComponent},
  {path: "solutions" , component : SolutionsComponent},
  {path: "prestations" , component : PrestationsComponent},
  {path: "expertise" , component : ExpertiseComponent},
  {path: "tarifs" , component : TarifsComponent},
  {path: "diagnostic" , component : DiagnosticComponent},
  {path: "qui-sommes-nous" , component : PresentationComponent},
  {path: "nos-partenaires" , component : PartenairesComponent},
  {path: "ref&certif" , component : RefCertifComponent},
  {path: "actualites" , component : ActualitesComponent},
  {path: "temoignages" , component : TemoignagesComponent},
  {path: "temoignagesClients" , component : ClientsComponent},
  {path: "temoignagesCollaborateurs" , component : CollabsComponent},
  {path: "temoignagesPartenaires" , component : PartnersComponent},
  {path: "newsletters" , component : NewsletterComponent},
  {path: "blog" , component : BlogComponent},





  {path: "comingSoon" , component : ComingSoonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
