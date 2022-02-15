import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import {ProductListComponent} from './component/product-list/product-list.component';
import {ThemeModule} from '../../@theme/theme.module';
import {NbButtonModule, NbCardModule, NbInputModule, NbMenuModule, NbRadioModule} from '@nebular/theme';
import {TablesModule} from '../../pages/tables/tables.module';
import {BaseModule} from '../../base/base.module';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductImportComponent } from './component/product-import/product-import.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductAddComponent,
    ProductImportComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ThemeModule,
    NbMenuModule,
    TablesModule,
    BaseModule,
    NbCardModule,
    NbRadioModule,
    NbInputModule,
    NbButtonModule,
  ],

})
export class ProductModule { }
