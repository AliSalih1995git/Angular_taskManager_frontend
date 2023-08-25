import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class InterceptInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const BackendUrl: string = environment.backendUrl;
    const localstorageData = localStorage.getItem('user');
    if (localstorageData) {
      const { token } = JSON.parse(localstorageData);

      if (token) {
        const newRequest = request.clone({
          url: `${BackendUrl}${request.url}`,
          setHeaders: { Authorization: `Bearer ${token}` },
        });
        return next.handle(newRequest).pipe(
          catchError((error: HttpErrorResponse) => {
            console.log('Server req err');
            return throwError(() => new Error(error.message));
          })
        );
      }
    }

    const newRequest = request.clone({
      url: `${BackendUrl}${request.url}`,
    });
    return next.handle(newRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('Server req err');
        return throwError(() => new Error(error.message));
      })
    );
  }
}
