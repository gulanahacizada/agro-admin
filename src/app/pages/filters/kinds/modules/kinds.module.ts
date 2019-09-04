import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KindsRoutingModule } from './kinds-routing.module';
import { KindsComponent } from '../kinds.component';

@NgModule({
  declarations: [KindsComponent],
  imports: [
    CommonModule,
    KindsRoutingModule
  ]
})
export class KindsModule { }
