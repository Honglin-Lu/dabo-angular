import { Component, OnInit } from '@angular/core';
import {ProductAddComponent} from '../product-add/product-add.component';
import {ProductImportComponent} from '../product-import/product-import.component';


@Component({
  selector: 'hl-product',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  table = {
    columns: ['ID', 'UserName', 'Email', 'FirstName', 'LastName', 'Role'],
    data: null,
  };
  toolbarPopupConfig = {
    addBtnPopup: {
      title: 'Add Product',
      icon: 'plus-square-outline',
      comp: ProductAddComponent,
    },
    morePopup: [
      {title: 'Import Csv', icon: 'cloud-upload-outline', comp: ProductImportComponent},
      {title: 'Export Csv', icon: 'cloud-download-outline', comp: ProductImportComponent},
    ],
  };
  constructor() { }

  ngOnInit(): void {
  }

}
