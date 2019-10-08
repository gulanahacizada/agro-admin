import { Injectable } from '@angular/core';
import { AppService } from 'src/app/services/app/app.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QualityService extends AppService{

  constructor(public http: HttpClient) {
    super(http);
  }

  public getAllQuality( params: any = {}): Observable<any> {
    return this.get(this.http, this.GET_ALL_QUALITY, params);
  }

  public addQuality( params: any = {}): Observable<any> {
    return this.post(this.http, this.ADD_QUALITY, params);
  }
}
