import { Injectable } from '@angular/core';
import { AppService } from 'src/app/services/app/app.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffersService extends AppService {

  constructor(public http: HttpClient) {
    super(http);
  }

  public getAllDialogs(params: any = {}): Observable<any> {
    return this.get(this.http, this.GET_ALL_CONTACT_OFFERS_FOR_ADMIN, params);
  }

  public getDialogById( params: any = {}): Observable<any> {
    return this.get(this.http, this.GET_CONTACT_OFFERS_BY_ID_FOR_ADMIN + '/' + params);
  }

}
