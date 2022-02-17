import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ngx-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class UserAddComponent implements OnInit {

  addUserForm!: FormGroup;

  constructor() { }

  roleSelected = '4';

  get username() { return this.addUserForm.get('username'); }

  get password() { return this.addUserForm.get('password'); }

  get email() { return this.addUserForm.get('email'); }

  get firstname() { return this.addUserForm.get('firstname'); }

  get lastname() { return this.addUserForm.get('lastname'); }

  ngOnInit(): void {
    this.addUserForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(2),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      firstname: new FormControl(null, [
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      lastname: new FormControl(null, [
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
    });

  }

  onSubmit() {
    console.log(this.addUserForm.value);
  }

}
