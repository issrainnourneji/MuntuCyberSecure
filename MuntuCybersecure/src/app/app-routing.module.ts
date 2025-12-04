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

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {path:"",redirectTo:"home", pathMatch:"full"},
  {path: "contact" , component : ContactComponent},
  {path: "offres" , component : OffresComponent},
  {path: "solutions" , component : SolutionsComponent},
  {path: "expertise" , component : ExpertiseComponent},
  {path: "tarifs" , component : TarifsComponent},
  {path: "qui-sommes-nous" , component : PresentationComponent},
  {path: "nos-partenaires" , component : PartenairesComponent},
  {path: "ref&certif" , component : RefCertifComponent},




  {path: "comingSoon" , component : ComingSoonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
