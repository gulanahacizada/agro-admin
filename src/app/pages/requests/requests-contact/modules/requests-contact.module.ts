import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestsContactRoutingModule } from './requests-contact-routing.module';
import { RequestsContactComponent } from '../requests-contact.component';
import {DropdownModule} from 'primeng/dropdown';
import {PaginatorModule} from 'primeng/paginator';
import { OfferDetailsComponent } from '../components/offerDetails/offerDetails.component';

@NgModule({
  declarations: [RequestsContactComponent, OfferDetailsComponent],
  imports: [
    CommonModule,
    RequestsContactRoutingModule,
    DropdownModule,
    PaginatorModule
  ]
})
export class RequestsContactModule { }
