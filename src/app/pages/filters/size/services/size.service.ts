import { Injectable } from '@angular/core';
import { AppService } from 'src/app/services/app/app.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SizeService extends AppService{

  constructor(public http: HttpClient) {
    super(http);
  }

  public getAllKalibry( params: any = {}): Observable<any> {
    return this.get(this.http, this.KALIBRY, params);
  }

  public addKalibry( params: any = {}): Observable<any> {
    return this.post(this.http, this.KALIBRY, params);
  }
}
