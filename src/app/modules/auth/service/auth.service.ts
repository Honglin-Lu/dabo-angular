import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../model/user';
import {environment} from '../../../../environments/environment';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService {

  loginStatus: boolean = false;
  sub: Subject<any>;

  constructor(private http: HttpClient, private router: Router) {
    this.sub = new Subject<any>();
    this.updateUserLoginState();
  }

  updateUserLoginState(): void {
    if (localStorage.getItem('user')) {
      this.loginStatus = true;
    } else {
      this.loginStatus = false;
    }
    this.sub.next(this.loginStatus);
  }

  login(username, password) {
    return this.http.post<User>(`${environment.baseUrl}/api/auth/signin`,
      {username, password})
      .pipe(map(user => {
          const res = JSON.stringify(user['data']);
          localStorage.setItem('user', res);
          this.updateUserLoginState();
          return res;
      }));
  }

  logout() {
    // localStorage.removeItem('user');
    localStorage.clear();
    this.updateUserLoginState();
    this.router.navigate(['/auth/login']);
  }

}
