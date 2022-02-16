import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UserAddComponent} from '../user-add/user-add.component';
import {UserImportComponent} from '../user-import/user-import.component';

@Component({
  selector: 'hl-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserListComponent implements OnInit {

  table = {
    columns: ['ID', 'UserName', 'Email', 'FirstName', 'LastName', 'Role'],
    data: null,
  };

  toolbarPopupConfig = {
    addBtnPopup: {
      title: 'Add User',
      icon: 'plus-square-outline',
      comp: UserAddComponent,
    },
    morePopup: [
      { title: 'Import User From Csv', icon: 'cloud-upload-outline', comp: UserImportComponent, dialogWidth: '30%' },
      { title: 'Export User To Csv', icon: 'cloud-download-outline', comp: UserAddComponent, dialogWidth: '10%' },
    ],
  };

  constructor() { }

  ngOnInit(): void {
    
  }

}
