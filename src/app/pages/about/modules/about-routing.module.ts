import { AboutComponent } from './../about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAboutComponent } from '../components/addAbout/addAbout.component';
import { DetailsAboutComponent } from '../components/detailsAbout/detailsAbout.component';
import { EditAboutComponent } from '../components/editAbout/editAbout.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'add',
    component: AddAboutComponent
  },
  {
    path: 'details/:id',
    component: DetailsAboutComponent
  },
  {
    path: 'edit/:id',
    component: EditAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
