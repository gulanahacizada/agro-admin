import { Injectable } from '@angular/core';
import { AppService } from 'src/app/services/app/app.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestMembersService  extends AppService {

  constructor(public http: HttpClient) {
    super(http);
  }

  public getAllNewUser(params: any = {}): Observable<any> {
    return this.get(this.http, this.GET_ALL_NEW_USER_FOR_ADMIN, params);
  }

  public getUserById(params: any = {}): Observable<any> {
    return this.get(this.http, this.GET_BY_ID_USER_FOR_ADMIN + '/' + params);
  }

  public changeStatus(params: any = {}): Observable<any> {
    return this.post(this.http, this.CHANGE_USER_STATUS + '/' + params, null);
  }
}
