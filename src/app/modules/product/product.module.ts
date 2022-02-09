import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product-list/product.component';
import {ThemeModule} from '../../@theme/theme.module';
import {NbMenuModule} from '@nebular/theme';


@NgModule({
  declarations: [
    ProductComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ThemeModule,
    NbMenuModule,
  ],
})
export class ProductModule { }
