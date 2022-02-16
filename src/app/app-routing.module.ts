import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {AuthGuard} from './guard/auth.guard';

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full',
    // canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module')
      .then(m => m.AuthModule),
  },
  {
    path: 'customer',
    loadChildren: () => import('./modules/customer/customer.module')
      .then(m => m.CustomerModule),
  },
  {
    path: 'department',
    loadChildren: () => import('./modules/department/department.module')
      .then(m => m.DepartmentModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module')
      .then(m => m.UserModule),
  },
  { path: 'product', loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule) },
  {
    path: 'setting',
    loadChildren: () => import('./modules/setting/setting.module')
      .then(m => m.SettingModule),
  },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
