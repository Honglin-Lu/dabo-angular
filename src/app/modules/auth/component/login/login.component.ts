import { Component, OnInit } from '@angular/core';
import {
  NbComponentStatus, NbGlobalLogicalPosition,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrConfig,
  NbToastrService,
} from '@nebular/theme';
import {AuthService} from '../../service/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'hl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
              private router: Router,
              private toastrService: NbToastrService,
              private loginService: AuthService,
              private formBuilder: FormBuilder) { }

  config: NbToastrConfig;
  index = 1;
  destroyByClick = true;
  duration = 2000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'warning';

  types: NbComponentStatus[] = [
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ];


  ngOnInit(): void {
    // @ts-ignore
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() { return this.loginForm.controls; }

  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };

    this.toastrService.show(
      body,
      title,
      config);
  }

  login() {
    this.loginService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.loginService.isLogged(true);
          this.showToast('success', 'Login Info', 'You have successfully logged into the system.');
          this.router.navigate(['/']);
        },
        error => {
          this.showToast('warning', 'Login Error', 'Username or password is incorrect!');
        });
  }
}
