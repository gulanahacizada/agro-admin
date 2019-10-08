import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: HomeComponent
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'agronoms',
    canActivate: [AuthGuard],
    loadChildren: () => import('../pages/agronomists/modules/agronomists.module').then(m => m.AgronomistsModule)
  },
  {
    path: 'users',
    canActivate: [AuthGuard],
    loadChildren: () => import('../pages/users/modules/users.module').then(m => m.UsersModule)
  },
  {
    path: 'offers',
    canActivate: [AuthGuard],
    loadChildren: () => import('../pages/offers/modules/offers.module').then(m => m.OffersModule)
  },
  {
    path: 'news',
    canActivate: [AuthGuard],
    loadChildren: () => import('../pages/news/modules/news.module').then(m => m.NewsModule)
  },
  {
    path: 'category',
    canActivate: [AuthGuard],
    loadChildren: () => import('../pages/filters/category/modules/category.module').then(m => m.CategoryModule)
  },
  {
    path: 'kind',
    canActivate: [AuthGuard],
    loadChildren: () => import('../pages/filters/kinds/modules/kinds.module').then(m => m.KindsModule)
  },
  {
    path: 'pakcage',
    canActivate: [AuthGuard],
    loadChildren: () => import('../pages/filters/pakcage/modules/pakcage.module').then(m => m.PakcageModule)
  },
  {
    path: 'quality',
    canActivate: [AuthGuard],
    loadChildren: () => import('../pages/filters/quality/modules/quality.module').then(m => m.QualityModule)
  },
  {
    path: 'size',
    canActivate: [AuthGuard],
    loadChildren: () => import('../pages/filters/size/modules/size.module').then(m => m.SizeModule)
  },
  {
    path: 'unit',
    canActivate: [AuthGuard],
    loadChildren: () => import('../pages/filters/units/modules/units.module').then(m => m.UnitsModule)
  },
  {
    path: 'about',
    canActivate: [AuthGuard],
    loadChildren: () => import('../pages/about/modules/about.module').then(m => m.AboutModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
