import { Injectable } from '@angular/core';
import { AppService } from 'src/app/services/app/app.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsContactService extends AppService {

  constructor(public http: HttpClient) {
    super(http);
  }

  public getAllContactOffers(params: any = {}): Observable<any> {
    return this.get(this.http, this.GET_ALL_CONTACT_OFFERS, params);
  }

  public getOfferById(params: any = {}): Observable<any> {
    return this.get(this.http, this.GET_CONTACT_OFFERS_BY_ID + '/' + params);
  }


}
