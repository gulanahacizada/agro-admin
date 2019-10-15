import { Injectable } from '@angular/core';
import { AppService } from 'src/app/services/app/app.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitsService extends AppService{

  constructor(public http: HttpClient) {
    super(http);
  }

  public getAllUnits( params: any = {}): Observable<any> {
    return this.get(this.http, this.UNİT, params);
  }

  public addUnit( params: any = {}): Observable<any> {
    return this.post(this.http, this.UNİT, params);
  }
}
