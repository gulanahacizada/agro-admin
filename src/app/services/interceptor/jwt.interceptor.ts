import { Response } from './../../interfaces/response';
import { AppService } from './../app/app.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private appService: AppService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const currentUser = localStorage.getItem('acc_jwt');
    if (currentUser) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser}`
        }
      });
    }
    // return next.handle(request);

    return next.handle(request).pipe(
      tap(evt => {
        if (evt instanceof HttpResponse) {
          if (evt.body && evt.body.responseCode == 11) {
            console.log(evt)
            this.appService.refresh().subscribe((response: Response) => {
              if (response.responseCode == 1) {
                localStorage.clear();
                localStorage.setItem('acc_jwt', response.responseContent.access_token);
                return next.handle(request);
              }
            });
          }
        }
      }),
      catchError((err: any) => {
        return of(err);
      }));

  }
}

