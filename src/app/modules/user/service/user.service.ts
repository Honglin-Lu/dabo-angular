import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../interface/user';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  addUrl = `${environment.baseUrl}/api/auth/signup`;
  listUrl = `${environment.baseUrl}/users`;
  constructor(private http: HttpClient) {}

  addUser(user: User): Observable<any> {
    return this.http.post<User>(this.addUrl, user);
  }

  getUsers(page: number): Observable<User[]> {
    return this.http.get<User[]>(this.listUrl + '?page=' + page);
  }


}
