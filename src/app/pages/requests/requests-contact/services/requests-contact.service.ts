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
    return this.get(this.http, this.OFFERS, params);
  }

  public getOfferById(params: any = {}): Observable<any> {
    return this.get(this.http, this.OFFERS + '/' + params);
  }


}
