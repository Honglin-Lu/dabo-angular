import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableToolbarComponent } from './table-toolbar/table-toolbar.component';
import {NbButtonModule, NbCardModule, NbContextMenuModule, NbIconModule} from '@nebular/theme';
import {RouterModule} from '@angular/router';
import { TableBasicComponent } from './table-basic/table-basic.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';

@NgModule({
  declarations: [
    TableToolbarComponent,
    TableBasicComponent,
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    NbContextMenuModule,
    RouterModule,
    Ng2SmartTableModule,
  ],
  exports: [
    TableToolbarComponent,
    TableBasicComponent,
  ],
})
export class BaseModule { }
