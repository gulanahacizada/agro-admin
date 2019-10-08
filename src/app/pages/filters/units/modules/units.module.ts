import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UnitsRoutingModule } from './units-routing.module';
import { UnitsComponent } from '../units.component';

@NgModule({
  declarations: [UnitsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UnitsRoutingModule
  ]
})
export class UnitsModule { }
