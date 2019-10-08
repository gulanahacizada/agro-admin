import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestsContactRoutingModule } from './requests-contact-routing.module';
import { RequestsContactComponent } from '../requests-contact.component';

@NgModule({
  declarations: [RequestsContactComponent],
  imports: [
    CommonModule,
    RequestsContactRoutingModule
  ]
})
export class RequestsContactModule { }
