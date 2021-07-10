import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { TokenStorageService } from '../_services/token-storage.service';

//const TOKEN_HEADER_KEY = '';  

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private token: TokenStorageService,
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.token.getToken();
    if (token != null) {
      authReq = req.clone({
        setHeaders: {
          'x-access-token': `${token}`
        }
      });
    }
    return next.handle(authReq).pipe(
      tap(
        (event: HttpEvent<any>) => { },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              window.sessionStorage.clear();
              this.router.navigate(['login']);
            }
          }
        }
      )
    );
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];