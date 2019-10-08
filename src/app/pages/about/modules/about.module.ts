import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {EditorModule} from 'primeng/editor';
import {DropdownModule} from 'primeng/dropdown';
import {AboutComponent} from '../about.component';
import {AboutRoutingModule} from '../modules/about-routing.module';
import { AddAboutComponent } from '../components/addAbout/addAbout.component';
import { DetailsAboutComponent } from '../components/detailsAbout/detailsAbout.component';
import { EditAboutComponent } from '../components/editAbout/editAbout.component';



@NgModule({
  declarations: [AboutComponent, AddAboutComponent, DetailsAboutComponent, EditAboutComponent],
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    ReactiveFormsModule,
    EditorModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
