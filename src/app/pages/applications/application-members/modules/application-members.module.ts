import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationMembersRoutingModule } from './application-members-routing.module';
import { ApplicationMembersComponent } from '../application-members.component';

@NgModule({
  declarations: [ApplicationMembersComponent],
  imports: [
    CommonModule,
    ApplicationMembersRoutingModule
  ]
})
export class ApplicationMembersModule { }
