import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';
import {PaginatorModule} from 'primeng/paginator';

import { OffersRoutingModule } from './offers-routing.module';
import { OffersComponent } from '../offers.component';
import { OfferDetailsComponent } from '../components/offerDetails/offerDetails.component';

@NgModule({
  declarations: [OffersComponent, OfferDetailsComponent],
  imports: [
    CommonModule,
    OffersRoutingModule,
    DropdownModule,
    PaginatorModule
  ]
})
export class OffersModule { }
