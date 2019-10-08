import { Injectable } from '@angular/core';
import { AppService } from 'src/app/services/app/app.service';
import { HttpClient, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService extends AppService {

  constructor(public http: HttpClient) {
    super(http);
  }

  public getAllAbout(params: any = {}): Observable<any> {
    return this.get(this.http, this.GET_ALL_ABOUT, params);
  }

  createAbout(about: any, file: File): Observable<HttpEvent<any>> {
    const url = 'http://test.agrobirja.az/api/v1/about';
    const formData = new FormData();
    formData.append('body_az', about.body_az);
    formData.append('title_az', about.title_az);
    if (about.title_en) {
      formData.append('title_en', about.title_en);
    }
    if (about.title_ru) {
      formData.append('title_ru', about.title_ru);
    }
    if (about.body_ru) {
      formData.append('body_ru', about.body_ru);
    }
    if (about.body_en) {
      formData.append('body_en', about.body_en);
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


  editAbout(about: any, id: any, file: File): Observable<HttpEvent<any>> {
    const url = 'http://test.agrobirja.az/api/v1/about' + '/' + id + '/update';
    const formData = new FormData();
    formData.append('title_az', about.title_az);
    formData.append('body_az', about.body_az);
    if (about.title_en) {
      formData.append('title_en', about.title_en);
    }
    if (about.title_ru) {
      formData.append('title_ru', about.title_ru);
    }
    if (about.body_ru) {
      formData.append('body_ru', about.body_ru);
    }
    if (about.body_en) {
      formData.append('body_en', about.body_en);
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

  public getAboutById(params: any = {}): Observable<any> {
    return this.get(this.http, this.GET_ABOUT_BY_ID + '/' + params);
  }

}
