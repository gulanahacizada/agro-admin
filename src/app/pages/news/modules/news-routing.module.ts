import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from '../news.component';
import { AddNewComponent } from '../components/addNew/addNew.component';
import { EditNewComponent } from '../components/editNew/editNew.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent
  },

  {
    path: 'add',
    component: AddNewComponent
  },
  {
    path: 'edit/:id',
    component: EditNewComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
