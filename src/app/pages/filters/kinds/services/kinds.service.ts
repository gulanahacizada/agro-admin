import { Injectable } from '@angular/core';
import { AppService } from 'src/app/services/app/app.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KindsService extends AppService {

  constructor(public http: HttpClient) {
    super(http);
  }


  public getAllSubCategory( params: any = {}): Observable<any> {
    return this.get(this.http, this.CATEGORY, params);
  }

  public getKind( params: any = {}): Observable<any> {
    return this.get(this.http, this.KIND, params);
  }

  public addKind( params: any = {}): Observable<any> {
    if (params.id) {
      return this.post(this.http, this.KIND_UPDATE + '/' + params.id, params);
    } else {
      return this.post(this.http, this.KIND, params);
    }
  }

  public getKindById(params: any = {}): Observable<any> {
    return this.get(this.http, this.KIND + '/' + params);
  }

  public deleteKind(id: any): Observable<any> {
    return this.post(this.http, this.KIND + '/' + 'delete' + '/' + id , null);
  }
}
