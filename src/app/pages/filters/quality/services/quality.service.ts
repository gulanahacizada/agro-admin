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
    return this.get(this.http, this.QUALITY, params);
  }

  public addQuality( params: any = {}): Observable<any> {
    if (params.id) {
      return this.post(this.http, this.QUALITY_UPDATE + '/' + params.id, params);
    } else {
      return this.post(this.http, this.QUALITY, params);
    }

  }

  public getQualityById(params: any = {}): Observable<any> {
    return this.get(this.http, this.QUALITY + '/' + params);
  }

  public deleteQuality(id: any): Observable<any> {
    return this.post(this.http, this.QUALITY + '/' + 'delete' + '/' + id , null);
  }
}
