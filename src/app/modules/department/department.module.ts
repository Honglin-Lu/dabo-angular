import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentListComponent } from './component/department-list/department-list.component';
import { DepartmentAddComponent } from './component/department-add/department-add.component';
import {BaseModule} from '../../base/base.module';


@NgModule({
  declarations: [
    DepartmentListComponent,
    DepartmentAddComponent,
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    BaseModule,
  ],
})
export class DepartmentModule { }
