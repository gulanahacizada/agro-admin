import { Injectable } from '@angular/core';
import { AppService } from 'src/app/services/app/app.service';
import { HttpClient, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends AppService {

  constructor(public http: HttpClient) {
    super(http);
  }

  public getCategory(params: any = {}): Observable<any> {
    return this.get(this.http, this.CATEGORY, params);
  }

  public getCategoryById(params: any = {}): Observable<any> {
    return this.get(this.http, this.CATEGORY + '/' + params);
  }

  public deleteCategory(id: any): Observable<any> {
    return this.post(this.http, this.CATEGORY + '/' + 'delete' + '/' + id , null);
  }



  public addCategory(params: any = {}): Observable<any> {
    if (params.id) {
      return this.post(this.http, this.CATEGORY_UPDATE + '/' + params.id, params);
    } else {
      return this.post(this.http, this.CATEGORY, params);

    }
  }
}
