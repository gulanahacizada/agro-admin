import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from '../news.component';
import {EditorModule} from 'primeng/editor';
import {DropdownModule} from 'primeng/dropdown';
import {PaginatorModule} from 'primeng/paginator';
import { AddNewComponent } from '../components/addNew/addNew.component';
import { EditNewComponent } from '../components/editNew/editNew.component';

@NgModule({
  declarations: [NewsComponent, AddNewComponent, EditNewComponent],
  imports: [
    CommonModule,
    EditorModule,
    DropdownModule,
    FormsModule,
    PaginatorModule,
    ReactiveFormsModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
