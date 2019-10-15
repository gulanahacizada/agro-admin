import { Component, OnInit } from '@angular/core';
import { RequestsContactService } from '../../services/requests-contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from 'src/app/interfaces/response';

@Component({
  selector: 'app-offerDetails',
  templateUrl: './offerDetails.component.html',
  styleUrls: ['./offerDetails.component.scss']
})
export class OfferDetailsComponent implements OnInit {

  id: '';
  offerInfo: any;

  constructor(
    private requestContactService: RequestsContactService,
    private activateRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.id = this.activateRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.getOfferById();
  }

  getOfferById() {
    this.requestContactService.getOfferById(this.id).subscribe((response: Response) => {
      this.offerInfo = response.responseContent;
    });
  }

}
