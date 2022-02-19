import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnInit, ViewEncapsulation} from '@angular/core';
import {UserAddComponent} from '../user-add/user-add.component';
import {UserImportComponent} from '../user-import/user-import.component';
import {UserService} from "../../service/user.service";
import {User} from "../../interface/user";

@Component({
  selector: 'hl-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserListComponent implements OnInit {


  columns = {
    id:         { title: 'ID' },
    username:   { title: 'Username' },
    email:      { title: 'Email' },
    firstname:  { title: 'First Name' },
    lastname:   { title: 'Last Name' },
    created_at: { title: 'Created Time' },
  };

  records = null;

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
  users: User[] = [];
  count = 0;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(res => {
        this.records = res['data'];
      });
  }



}
