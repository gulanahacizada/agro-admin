import { Injectable } from '@angular/core';
import { AppService } from 'src/app/services/app/app.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService  extends AppService {

  constructor(public http: HttpClient) {
    super(http);
  }

  public getAllUsers(params: any = {}): Observable<any> {
    return this.get(this.http, this.GET_ALL_USERS, params);
  }

  public getUserById(params: any = {}): Observable<any> {
    return this.get(this.http, this.GET_ALL_USERS + '/' + params);
  }
}
