import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
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
