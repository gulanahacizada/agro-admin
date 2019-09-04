import { Injectable } from '@angular/core';
import { HttpsService } from '../https/https.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class AppService extends HttpsService {

  public LOGOUT = 'logout';
  public LOGIN = 'login';

  constructor(public http: HttpClient) {
    super();
  }

  public login(params: any = {}): Observable<any> {
    return this.post(this.http, this.LOGIN, params);
  }
  public logout(params: any = {}): Observable<any> {
    return this.post(this.http, this.LOGOUT, params);
  }
}
