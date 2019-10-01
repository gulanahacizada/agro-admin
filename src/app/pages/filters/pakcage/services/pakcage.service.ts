import { Injectable } from '@angular/core';
import { AppService } from 'src/app/services/app/app.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PakcageService extends AppService{

  constructor(public http: HttpClient) {
    super(http);
  }

  public getAllPackeg( params: any = {}): Observable<any> {
    return this.get(this.http, this.GET_ALL_PACKEG, params);
  }

  public addPackeg( params: any = {}): Observable<any> {
    return this.post(this.http, this.ADD_PACKEG, params);
  }
}
