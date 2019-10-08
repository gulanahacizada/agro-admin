import { Injectable } from '@angular/core';
import { AppService } from 'src/app/services/app/app.service';
import { HttpClient, HttpEvent, HttpParams, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgronomistsService extends AppService {

  constructor(public http: HttpClient) {
    super(http);
  }

  public getAllAgronoms(params: any = {}): Observable<any> {
    return this.get(this.http, this.GET_ALL_AGRONOMS, params);
  }

  createAgronom(  agronom: any, file: File): Observable<HttpEvent<any>> {
    const url = 'http://test.agrobirja.az/api/v1/agronoms';
    const formData = new FormData();
    formData.append('title_az', agronom.title_az);
    if (agronom.title_ru) {
      formData.append('title_ru', agronom.title_ru);
    }
    if (agronom.title_en) {
      formData.append('title_en', agronom.title_en);
    }
 
    formData.append('description_az', agronom.description_az);
    if (agronom.description_ru) {
      formData.append('description_ru', agronom.description_ru);
    }
    if (agronom.description_en) {
      formData.append('description_en', agronom.description_en);
    }
    formData.append('body_az', agronom.body_az);
    if (agronom.body_ru) {
      formData.append('body_ru', agronom.body_ru);
    }
    if (agronom.body_en) {
      formData.append('body_en', agronom.body_en);
    }
    formData.append('image', file);
    const params = new HttpParams();
    const options = {
      params: params,
      reportProgress: true,
    };
    const req = new HttpRequest('POST', url, formData, options);
    return this.http.request(req);
  }


  editAgronom(agronom: any, id: any, file: File): Observable<HttpEvent<any>> {
    const url = 'http://test.agrobirja.az/api/v1/agronoms' + '/' + id + '/update';
    const formData = new FormData();
    formData.append('title_az', agronom.title_az);
    if (agronom.title_ru) {
      formData.append('title_ru', agronom.title_ru);
    }
    if (agronom.title_en) {
      formData.append('title_en', agronom.title_en);
    }
 
    formData.append('description_az', agronom.description_az);
    if (agronom.description_ru) {
      formData.append('description_ru', agronom.description_ru);
    }
    if (agronom.description_en) {
      formData.append('description_en', agronom.description_en);
    }
    formData.append('body_az', agronom.body_az);
    if (agronom.body_ru) {
      formData.append('body_ru', agronom.body_ru);
    }
    if (agronom.body_en) {
      formData.append('body_en', agronom.body_en);
    }
    if (file) {
      formData.append('image', file);
    }
    const params = new HttpParams();
    const options = {
      params: params,
      reportProgress: true,
    };
    const req = new HttpRequest('POST', url, formData, options);
    return this.http.request(req);
  }

  public getAgronomById( params: any = {}): Observable<any> {
    return this.get(this.http, this.GET_AGRONOMS_BY_ID + '/' + params);
  }

  public deleteAgronomById(params: any = {}): Observable <any> {
    return this.post(this.http, this.GET_AGRONOMS_BY_ID + '/' + params + '/delete', null);
  }
}
