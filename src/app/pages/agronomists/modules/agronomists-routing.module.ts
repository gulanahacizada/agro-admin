import { AgronomistsComponent } from './../agronomists.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAgronomComponent } from '../components/addAgronom/addAgronom.component';
import { EditAgronomComponent } from '../components/editAgronom/editAgronom.component';

const routes: Routes = [
  {
    path: '',
    component: AgronomistsComponent
  },
  {
    path: 'add',
    component: AddAgronomComponent
  },
  {
    path: 'edit/:id',
    component: EditAgronomComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgronomistsRoutingModule { }
