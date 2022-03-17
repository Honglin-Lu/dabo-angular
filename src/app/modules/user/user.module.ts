import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserAddComponent } from './component/user-add/user-add.component';
import { UserImportComponent } from './component/user-import/user-import.component';
import {BaseModule} from '../../base/base.module';
import {NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbRadioModule, NbSelectModule} from '@nebular/theme';
import {ReactiveFormsModule} from "@angular/forms";
import { UserFormComponent } from './component/user-form/user-form.component';
import { UserEditComponent } from './component/user-edit/user-edit.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserAddComponent,
    UserImportComponent,
    UserFormComponent,
    UserEditComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    BaseModule,
    NbCardModule,
    NbRadioModule,
    NbInputModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    ReactiveFormsModule,
  ],
})
export class UserModule { }
