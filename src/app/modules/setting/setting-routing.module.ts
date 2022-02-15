import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './component/profile/profile.component';
import { PasswordComponent} from './component/password/password.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'password', component: PasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingRoutingModule { }
