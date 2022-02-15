import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthResponse} from '../interface/auth-response';
import {AuthRequest} from '../interface/auth-request';
import {User} from '../model/user';
import {environment} from '../../../../environments/environment';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService {

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  public logStatus: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(
      localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  currentUser() {
    return this.userValue;
  }

  isLogged(status: boolean) {
    this.logStatus = status;
  }

  login(username, password) {
    return this.http.post<User>(`${environment.baseUrl}/api/auth/signin`,
      {username, password})
      .pipe(map(user => {
          localStorage.setItem('user', JSON.stringify(user['data']));
          this.userSubject.next(user);
          return user;
      }));
  }

  logout() {
    localStorage.removeItem('user');
    this.isLogged(false);
    this.userSubject.next(null);
    this.router.navigate(['/auth/login']);
  }
}
