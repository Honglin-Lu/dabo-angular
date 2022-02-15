import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './component/login/login.component';
import {NbButtonModule, NbCardModule, NbInputModule} from '@nebular/theme';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { LogoutComponent } from './component/logout/logout.component';


@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule { }
