import { Injectable } from '@angular/core';
import { HttpsService } from '../https/https.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class AppService extends HttpsService {

  public LOGIN = 'auth/login';
  public LOGOUT = 'auth/logout';
  public GET_ALL_CATEGORY = 'category';
  public ADD_CATEGORY = 'category';
  public GET_ALL_KIND = 'kinds';
  public ADD_KIND = 'kinds';
  public GET_ALL_PACKEG = 'package';
  public ADD_PACKEG = 'package';

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
