import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {EditorModule} from 'primeng/editor';
import {DropdownModule} from 'primeng/dropdown';
import {PaginatorModule} from 'primeng/paginator';

import { AgronomistsRoutingModule } from './agronomists-routing.module';
import { AgronomistsComponent } from '../agronomists.component';
import { AddAgronomComponent } from '../components/addAgronom/addAgronom.component';
import { EditAgronomComponent } from '../components/editAgronom/editAgronom.component';


@NgModule({
  declarations: [AgronomistsComponent, AddAgronomComponent, EditAgronomComponent],
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    PaginatorModule,
    ReactiveFormsModule,
    EditorModule,
    AgronomistsRoutingModule,
 
  ]
})
export class AgronomistsModule { }
