import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableToolbarComponent } from './table-toolbar/table-toolbar.component';
import {NbButtonModule, NbCardModule, NbContextMenuModule, NbIconModule} from '@nebular/theme';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    TableToolbarComponent,
  ],
    imports: [
        CommonModule,
        NbCardModule,
        NbIconModule,
        NbButtonModule,
        NbContextMenuModule,
        RouterModule,
    ],
  exports: [
    TableToolbarComponent,
  ],
})
export class BaseModule { }
