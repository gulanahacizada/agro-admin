import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationContactRoutingModule } from './application-contact-routing.module';
import { ApplicationContactComponent } from '../application-contact.component';

@NgModule({
  declarations: [ApplicationContactComponent],
  imports: [
    CommonModule,
    ApplicationContactRoutingModule
  ]
})
export class ApplicationContactModule { }
