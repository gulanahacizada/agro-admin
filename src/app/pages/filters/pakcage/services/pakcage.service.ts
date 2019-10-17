import { Injectable } from '@angular/core';
import { AppService } from 'src/app/services/app/app.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PakcageService extends AppService {

  constructor(public http: HttpClient) {
    super(http);
  }

  public getAllPackeg( params: any = {}): Observable<any> {
    return this.get(this.http, this.PACKEGE, params);
  }

  public addPackeg( params: any = {}): Observable<any> {
    if (params.id) {
      return this.post(this.http, this.PACKEGE_UPDATE + '/' + params.id, params);
    } else {
      return this.post(this.http, this.PACKEGE, params);
    }
  }

  public getPackegById(params: any = {}): Observable<any> {
    return this.get(this.http, this.PACKEGE + '/' + params);
  }


  public deletePackeg(id: any): Observable<any> {
    return this.post(this.http, this.PACKEGE + '/' + 'delete' + '/' + id , null);
  }

}
