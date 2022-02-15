import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './component/profile/profile.component';
import {NbButtonModule, NbCardModule, NbDatepickerModule, NbInputModule} from '@nebular/theme';
import {SettingRoutingModule} from './setting-routing.module';
import { PasswordComponent } from './component/password/password.component';



@NgModule({
  declarations: [
    ProfileComponent,
    PasswordComponent,
  ],
  imports: [
    SettingRoutingModule,
    CommonModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbDatepickerModule,
  ],
})
export class SettingModule { }

