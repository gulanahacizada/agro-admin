import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SizeRoutingModule } from './size-routing.module';
import { SizeComponent } from '../size.component';

@NgModule({
  declarations: [SizeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SizeRoutingModule
  ]
})
export class SizeModule { }
