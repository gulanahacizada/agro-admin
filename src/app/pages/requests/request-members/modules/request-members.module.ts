import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DropdownModule} from 'primeng/dropdown';
import {PaginatorModule} from 'primeng/paginator';

import { RequestMembersRoutingModule } from './request-members-routing.module';
import { RequestMembersComponent } from '../request-members.component';
import { UserDetailsComponent } from '../components/userDetails/userDetails.component';

@NgModule({
  declarations: [RequestMembersComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    RequestMembersRoutingModule,
    DropdownModule,
    PaginatorModule
  ]
})
export class RequestMembersModule { }
