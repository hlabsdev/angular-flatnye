import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import {IvyCarouselModule} from 'angular-responsive-carousel';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VMenuBarComponent } from './v-menu-bar/v-menu-bar.component';
import { SearchHouseComponent } from './search-house/search-house.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { DetailsHouseComponent } from './details-house/details-house.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjouterEtablissementComponent } from './ajouter-etablissement/ajouter-etablissement.component';
import { EtablissementMailSentComponent } from './etablissement-mail-sent/etablissement-mail-sent.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HelpComponent } from './help/help.component';
import { DecouvrirPlusComponent } from './decouvrir-plus/decouvrir-plus.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { HomeEtablissementComponent } from './home-etablissement/home-etablissement.component';
import { EditHouseEtablissementComponent } from './edit-house-etablissement/edit-house-etablissement.component';
import { ShowHouseEtablissementComponent } from './show-house-etablissement/show-house-etablissement.component';
import { UpdateEtablissementComponent } from './update-etablissement/update-etablissement.component';
import { InscriptionFormComponent } from './inscription-form/inscription-form.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'house/search', component: SearchHouseComponent },
  { path: 'house/bien/:id', component: DetailsHouseComponent },
  { path: 'users/etablissement/register', component: AjouterEtablissementComponent },
  { path: 'users/etablissement/register/mail_sent', component: EtablissementMailSentComponent },
  { path: 'help', component: HelpComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'inscription', component: InscriptionFormComponent},
  { path: 'houses/more', component: DecouvrirPlusComponent },
  // { path: 'search/result', component: SearchResultComponent },
  { path: 'search/result/:budget', component: SearchResultComponent },
  { path: 'etablissement/index', component: HomeEtablissementComponent },
  { path: 'etablissement/house/edit', component: EditHouseEtablissementComponent },
  // { path: 'etablissement/house/show', component: ShowHouseEtablissementComponent },
  { path: 'etablissement/house/show/:id', component: ShowHouseEtablissementComponent },
  // { path: 'etablissement/profile/update', component: UpdateEtablissementComponent },
  { path: 'etablissement/profile/update/:id', component: UpdateEtablissementComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    VMenuBarComponent,
    SearchHouseComponent,
    HomeComponent,
    DetailsHouseComponent,
    AjouterEtablissementComponent,
    EtablissementMailSentComponent,
    ContactFormComponent,
    HelpComponent,
    DecouvrirPlusComponent,
    SearchResultComponent,
    HomeEtablissementComponent,
    EditHouseEtablissementComponent,
    ShowHouseEtablissementComponent,
    UpdateEtablissementComponent,
    InscriptionFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    IvyCarouselModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyClax-FuHquwTAVevn4c3i_Au71k85Ax7I',
      libraries: ['places']
    }),
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
