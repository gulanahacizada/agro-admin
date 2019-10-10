import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestMembersComponent } from '../request-members.component';
import { UserDetailsComponent } from '../components/userDetails/userDetails.component';

const routes: Routes = [
  {
    path: '',
    component: RequestMembersComponent
  },
  {
    path: 'detail/:id',
    component: UserDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestMembersRoutingModule { }
