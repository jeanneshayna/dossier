import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './immobilier/form/form.component';
import { DetailsComponent } from './immobilier/details/details.component';
import { ReservationComponent } from './immobilier/reservation/reservation.component';
import { ImmobilierComponent } from './immobilier/immobilier.component';


const routes: Routes = [
  

   {path: 'immobilier', component:ImmobilierComponent},
  
  { path: 'details{{bien.id}}', component:DetailsComponent},
];
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
