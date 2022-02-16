import { Component, OnInit } from '@angular/core';
import {DepartmentAddComponent} from '../department-add/department-add.component';

@Component({
  selector: 'hl-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss'],
})
export class DepartmentListComponent implements OnInit {
  table = {
    columns: ['ID', 'UserName', 'Email', 'FirstName', 'LastName', 'Role'],
    data: null,
  };
  toolbarPopupConfig = {
    addBtnPopup: {
      title: 'Add Department',
      icon: 'plus-square-outline',
      comp: DepartmentAddComponent,
    },
    morePopup: [
      { title: 'Export Department Report To Csv', icon: 'cloud-download-outline', comp: DepartmentAddComponent },
    ],
  };

  constructor() { }

  ngOnInit(): void {

  }

}
