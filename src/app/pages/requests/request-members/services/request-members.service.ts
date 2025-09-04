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
    return this.get(this.http, this.USER_ADMIN_NEW, params);
  }

  public getUserById(params: any = {}): Observable<any> {
    return this.get(this.http, this.USER_ADMIN + '/' + params);
  }

  public changeStatus(params: any = {}): Observable<any> {
    return this.post(this.http, this.USER_STATUS + '/' + params, null);
  }
  public changeStatus2(params: any = {}): Observable<any> {
    return this.post(this.http, this.USER_STATUS2 + '/' + params, null);
  }
}
