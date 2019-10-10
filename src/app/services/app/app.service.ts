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
  public GET_ALL_QUALITY = 'quality';
  public ADD_QUALITY = 'quality';
  public ADD_UNİT = 'unit';
  public GET_ALL_UNİTS = 'unit';
  public GET_ALL_KALIBRY = 'kalibry';
  public ADD_KALIBRY = 'kalibry';
  public GET_ALL_USERS = 'admin/user';
  public GET_USERS_BY_ID = 'admin/user';
  public GET_ALL_NEWS = 'news';
  public GET_NEW_BY_UD = 'news';
  public EDIT_NEW_BY_UD = 'news';
  public DELETE_NEW_BY_ID = 'news';
  public GET_ALL_AGRONOMS = 'agronoms';
  public GET_AGRONOMS_BY_ID = 'agronoms';
  public EDIT_AGRONOMS_BY_ID = 'agronoms';
  public GET_ALL_ABOUT = 'about';
  public GET_ABOUT_BY_ID = 'about';
  public EDIT_ABOUT_BY_ID = 'about';
  public GET_ALL_CONTACT_OFFERS = 'offers';
  public GET_CONTACT_OFFERS_BY_ID = 'offers';
  public GET_ALL_DIALOGS = 'dialog';
  public GET_ALL_NEW_USER_FOR_ADMIN = 'admin/user/new';
  public GET_BY_ID_USER_FOR_ADMIN = 'admin/user';
  public CHANGE_USER_STATUS = 'admin/user/changestatus';
  public UPDATE_USER_FOR_ADMIN = 'admin/user';

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
