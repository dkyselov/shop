import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../interfaces/user';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  registerUser(newUser: User): Observable<User> {
    newUser.id = '';
    return this.http.post<User>(environment.apiBaseUrl + '/api/register', newUser);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(environment.apiBaseUrl + '/login', {email, password});
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken');
    const helper = new JwtHelperService();
    const isExpired = helper.isTokenExpired(token);
    return !isExpired;
  }
}
