import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableToolbarComponent } from './table-toolbar/table-toolbar.component';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbContextMenuModule,
  NbIconModule,
  NbLayoutModule, NbSearchModule, NbSidebarModule, NbUserModule,
} from '@nebular/theme';
import {RouterModule} from '@angular/router';
import { TableBasicComponent } from './table-basic/table-basic.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { LayoutFullComponent } from './layout-full/layout-full.component';
import { LayoutSideComponent } from './layout-side/layout-side.component';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { CommonFooterComponent } from './common-footer/common-footer.component';
import { CommonSidemenuComponent } from './common-sidemenu/common-sidemenu.component';
import { PaginationBasicComponent } from './pagination-basic/pagination-basic.component';
import { MessageFeedbackComponent } from './message-feedback/message-feedback.component';

@NgModule({
  declarations: [
    TableToolbarComponent,
    TableBasicComponent,
    LayoutFullComponent,
    LayoutSideComponent,
    CommonHeaderComponent,
    CommonFooterComponent,
    CommonSidemenuComponent,
    PaginationBasicComponent,
    MessageFeedbackComponent,
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    NbContextMenuModule,
    RouterModule,
    Ng2SmartTableModule,
    NbLayoutModule,
    NbActionsModule,
    NbSearchModule,
    NbUserModule,
    NbSidebarModule,
  ],
  exports: [
      TableToolbarComponent,
      TableBasicComponent,
      LayoutFullComponent,
      LayoutSideComponent,
      PaginationBasicComponent,
  ],
})
export class BaseModule { }
