import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PakcageRoutingModule } from './pakcage-routing.module';
import { PakcageComponent } from '../pakcage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PakcageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PakcageRoutingModule
  ]
})
export class PakcageModule { }
