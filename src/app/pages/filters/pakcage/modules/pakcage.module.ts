import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PakcageRoutingModule } from './pakcage-routing.module';
import { PakcageComponent } from '../pakcage.component';

@NgModule({
  declarations: [PakcageComponent],
  imports: [
    CommonModule,
    PakcageRoutingModule
  ]
})
export class PakcageModule { }
