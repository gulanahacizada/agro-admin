import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestMembersRoutingModule } from './request-members-routing.module';
import { RequestMembersComponent } from '../request-members.component';

@NgModule({
  declarations: [RequestMembersComponent],
  imports: [
    CommonModule,
    RequestMembersRoutingModule
  ]
})
export class RequestMembersModule { }
