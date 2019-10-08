import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { QualityRoutingModule } from './quality-routing.module';
import { QualityComponent } from '../quality.component';

@NgModule({
  declarations: [QualityComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QualityRoutingModule
  ]
})
export class QualityModule { }
