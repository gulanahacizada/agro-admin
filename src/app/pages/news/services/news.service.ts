import { Injectable } from '@angular/core';
import { AppService } from 'src/app/services/app/app.service';
import { HttpClient, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class NewsService extends AppService {

  constructor(public http: HttpClient) {
    super(http);
  }

  public getAllNews(params: any = {}): Observable<any> {
    return this.get(this.http, this.GET_ALL_NEWS, params);
  }
  
  createNews(news: any, file: File): Observable<HttpEvent<any>> {
    const url = 'http://test.agrobirja.az/api/v1/news';
    const formData = new FormData();
    formData.append('title_az', news.title_az);
    formData.append('description_az', news.description_az);
    formData.append('body_az', news.body_az);
    if (news.title_en) {
      formData.append('title_en', news.title_en);
    }
    if (news.title_ru) {
      formData.append('title_ru', news.title_ru);
    }
    if (news.body_ru) {
      formData.append('body_ru', news.body_ru);
    }
    if (news.body_en) {
      formData.append('body_en', news.body_en);
    }
    if (news.description_en) {
      formData.append('description_en', news.description_en);
    }
    if (news.description_ru) {
      formData.append('description_ru', news.description_ru);
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

  editNews(news: any, id: any, file: File): Observable<HttpEvent<any>> {
    const url = 'http://test.agrobirja.az/api/v1/news' + '/' + id + '/update';
    const formData = new FormData();
    formData.append('title_az', news.title_az);
    formData.append('description_az', news.description_az);
    formData.append('body_az', news.body_az);
    if (news.title_en) {
      formData.append('title_en', news.title_en);
    }
    if (news.title_ru) {
      formData.append('title_ru', news.title_ru);
    }
    if (news.body_ru) {
      formData.append('body_ru', news.body_ru);
    }
    if (news.body_en) {
      formData.append('body_en', news.body_en);
    }
    if (news.description_en) {
      formData.append('description_en', news.description_en);
    }
    if (news.description_ru) {
      formData.append('description_ru', news.description_ru);
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

  public getNewById(params: any = {}): Observable<any> {
    return this.get(this.http, this.GET_NEW_BY_UD + '/' + params);
  }

  public deleteNewById(params: any = {}): Observable <any> {
    return this.post(this.http, this.GET_NEW_BY_UD + '/' + params + '/delete', null);
  }

}
