import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThemeModule} from '../../@theme/theme.module';
import {NbButtonModule, NbCardModule, NbInputModule, NbMenuModule, NbRadioModule} from '@nebular/theme';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
// import {TablesModule} from '../../pages/tables/tables.module';
import {BaseModule} from '../../base/base.module';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerImportComponent } from './customer-import/customer-import.component';


@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerAddComponent,
    CustomerImportComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ThemeModule,
    NbMenuModule,
    BaseModule,
    NbCardModule,
    NbRadioModule,
    NbInputModule,
    NbButtonModule,
  ],
})
export class CustomerModule {

  constructor() {
  }
}
