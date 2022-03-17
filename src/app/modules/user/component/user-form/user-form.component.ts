import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'hl-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {

  userForm!: FormGroup;

  constructor(private userService: UserService) { }

  roleSelected = '4';

  get username() { return this.userForm.get('username'); }

  get password() { return this.userForm.get('password'); }

  get email() { return this.userForm.get('email'); }

  get firstname() { return this.userForm.get('firstname'); }

  get lastname() { return this.userForm.get('lastname'); }

  ngOnInit(): void {
    this.userForm = new FormGroup({
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

}
