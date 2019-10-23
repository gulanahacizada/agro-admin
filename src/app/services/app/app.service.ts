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
  public REFRESH = 'auth/refresh';
  public CATEGORY = 'category';
  public CATEGORY_UPDATE = 'category/update';
  public KIND = 'kinds';
  public KIND_UPDATE = 'kinds/update';
  public PACKEGE = 'package';
  public PACKEGE_UPDATE = 'package/update';
  public QUALITY = 'quality';
  public QUALITY_UPDATE = 'quality/update';
  public UNIT = 'unit';
  public UNIT_UPDATE = 'unit/update';
  public KALIBRY = 'kalibry';
  public KALIBRY_UPDATE = 'kalibry/update';
  public USERS = 'admin/user';
  public NEWS = 'news';
  public AGRONOMS = 'agronoms';
  public ABOUT = 'about';
  public OFFERS = 'offers';
  public DIALOGS = 'dialog';
  public USER_ADMIN_NEW = 'admin/user/new';
  public USER_ADMIN = 'admin/user';
  public USER_STATUS = 'admin/user/changestatus';
  public ADMIN_DIALOGS = 'admin/dialogs';
  public ADMIN_DIALOG = 'dialog';


  constructor(public http: HttpClient) {
    super();
  }

  public login(params: any = {}): Observable<any> {
    return this.post(this.http, this.LOGIN, params);
  }
  public logout(params: any = {}): Observable<any> {
    return this.post(this.http, this.LOGOUT, params);
  }

  public refresh(params: any = {}): Observable<any> {
    return this.post(this.http, this.REFRESH, params);
  }
}
