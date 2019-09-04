import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgronomistsRoutingModule } from './agronomists-routing.module';
import { AgronomistsComponent } from '../agronomists.component';

@NgModule({
  declarations: [AgronomistsComponent],
  imports: [
    CommonModule,
    AgronomistsRoutingModule
  ]
})
export class AgronomistsModule { }
