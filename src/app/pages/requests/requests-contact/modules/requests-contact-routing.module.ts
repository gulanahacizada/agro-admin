import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestsContactComponent } from '../requests-contact.component';
import { OfferDetailsComponent } from '../components/offerDetails/offerDetails.component';

const routes: Routes = [
  {
    path: '',
    component: RequestsContactComponent
  },
  {
    path: 'detail/:id',
    component: OfferDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestsContactRoutingModule { }
