import { AppService } from 'src/app/services/app/app.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';



@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private appService: AppService,
    private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(evt => {
        if (evt instanceof HttpResponse) {
          // pass url in component like : params['navigatorUrl'] = '/hr';
          // if (request.body && request.body.hasOwnProperty('navigatorUrl') && (evt.body.responseCode == 1)) {
          //   Swal.fire({
          //     title: 'Əməliyyat uğurla tamamlandı!',
          //     text: evt.body.responseMessage,
          //     type: 'success',
          //     showCancelButton: false,
          //     confirmButtonText: 'Bağla',
          //   }).then((result) => {
          //     if (result.value) {
          //       this.router.navigate([request.body.navigatorUrl]);
          //     }
          //   });
          // // } else if (request.body && request.body.hasOwnProperty('navigatorUrl') && (evt.body.responseCode != 1)) {
          // } else if ((evt.body.responseCode != 1)) {
          //   Swal.fire({
          //     title: 'Əməliyyatda səhv!',
          //     text: evt.body.responseMessage,
          //     type: 'warning',
          //     showCancelButton: false,
          //     confirmButtonText: 'Bağla',
          //   }).then((result) => {
          //     if (result.value) {
          //       this.router.navigate(['home']);
          //     }
          //   });
          // }
        }
      }),
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          try {
            if ([401, 403].indexOf(err.status) !== -1) {
              // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
              this.appService.logout();
              // location.reload();
            }
            // Swal.fire({
            //   title: 'Əməliyyatda səhv',
            //   text: err.message,
            //   type: 'warning',
            //   showCancelButton: false,
            //   confirmButtonText: 'Bağla',
            // }).then((result) => {
            //   if (result.value) {
            //     this.router.navigate(['login']);
            //   }
            // });
          } catch (e) {
            const error = err.error.message || err.statusText;
            return throwError(error);
          }
        }
        return of(err);
      }));
  }
}
