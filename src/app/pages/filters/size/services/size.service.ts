import { Injectable } from '@angular/core';
import { AppService } from 'src/app/services/app/app.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SizeService extends AppService {

  constructor(public http: HttpClient) {
    super(http);
  }

  public getAllKalibry( params: any = {}): Observable<any> {
    return this.get(this.http, this.KALIBRY, params);
  }

  public addKalibry( params: any = {}): Observable<any> {

    if (params.id) {
      return this.post(this.http, this.KALIBRY_UPDATE + '/' + params.id, params);
    } else {
      return this.post(this.http, this.KALIBRY, params);
    }
  }

  public getKalibryById(params: any = {}): Observable<any> {
    return this.get(this.http, this.KALIBRY + '/' + params);
  }

  public deleteKalibry(id: any): Observable<any> {
    return this.post(this.http, this.KALIBRY + '/' + 'delete' + '/' + id , null);
  }
}
