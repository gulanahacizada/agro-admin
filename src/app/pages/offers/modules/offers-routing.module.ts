import { OffersComponent } from './../offers.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferDetailsComponent } from '../components/offerDetails/offerDetails.component';

const routes: Routes = [
  {
    path: '',
    component: OffersComponent
  },
  {
    path: 'details/:id',
    component: OfferDetailsComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersRoutingModule { }
