import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


import { AppComponent } from './app.component';
import { ImmobilierComponent } from './immobilier/immobilier.component';
import { CatalogueComponent } from './immobilier/catalogue/catalogue.component';
import { NavComponent } from './immobilier/nav/nav.component';
import { FooterComponent } from './immobilier/footer/footer.component';

import { DetailsComponent } from './immobilier/details/details.component';
import { RechercheComponent } from './immobilier/recherche/recherche.component';
import { ReservationComponent } from './immobilier/reservation/reservation.component';
import { FormComponent } from './immobilier/form/form.component';
import { BienService } from './service/bien.service';

/*import { ReactiveFormsModule } from '@angular/forms';
import './rxjs-operators';
//import { ConnexionComponent } from './connexion/connexion.component';*/
@NgModule({
  declarations: [
    AppComponent,
    ImmobilierComponent,
    CatalogueComponent,
    NavComponent,
    FooterComponent,
    DetailsComponent,
    RechercheComponent,
    ReservationComponent,
   /* FormComponent,
    ReactiveFormsModule,
    //ConnexionComponent*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule, MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule
    
  ],
  providers: [BienService],
  bootstrap: [AppComponent]
})
export class AppModule { }
