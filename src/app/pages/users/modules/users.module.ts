import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';
import {PaginatorModule} from 'primeng/paginator';
import {EditorModule} from 'primeng/editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from '../users.component';
import { UserDetailsComponent } from '../components/userDetails/userDetails.component';
import { UserEditComponent } from '../components/userEdit/userEdit.component';

@NgModule({
  declarations: [UsersComponent, UserDetailsComponent, UserEditComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    DropdownModule,
    PaginatorModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
