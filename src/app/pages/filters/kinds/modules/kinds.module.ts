import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { KindsRoutingModule } from './kinds-routing.module';
import { KindsComponent } from '../kinds.component';

@NgModule({
  declarations: [KindsComponent],
  imports: [
    CommonModule,
    KindsRoutingModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class KindsModule { }
