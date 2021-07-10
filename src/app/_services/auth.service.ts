// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(user: string, password: string): Observable<any> {
    return this.http.post(environment.apiUrl + environment.apiLogin, {
      user,
      password
    }, httpOptions);
  }

  register(user: string, email: string, password: string): Observable<any> {
    return this.http.post(environment.apiUrl + environment.ApiRegister, {
      user,
      email,
      password
    }, httpOptions);
  }
}