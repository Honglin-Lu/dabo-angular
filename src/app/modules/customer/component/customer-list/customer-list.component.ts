import { Component, OnInit } from '@angular/core';
import {CustomerAddComponent} from "../customer-add/customer-add.component";
import {CustomerImportComponent} from "../customer-import/customer-import.component";

@Component({
  selector: 'hl-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {

  table = {
    columns: ['ID', 'UserName', 'Email', 'FirstName', 'LastName', 'Role'],
    data: null,
  };
  toolbarPopupConfig = {
    addBtnPopup: {
      title: 'Add Customer',
      icon: 'plus-square-outline',
      comp: CustomerAddComponent,
    },
    morePopup: [
      { title: 'Import Csv', icon: 'cloud-upload-outline', comp: CustomerImportComponent },
      { title: 'Export Csv', icon: 'cloud-download-outline', comp: CustomerAddComponent },
    ]
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
