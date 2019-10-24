import { Component, OnInit } from '@angular/core';
import { OffersService } from '../../services/offers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from 'src/app/interfaces/response';

@Component({
  selector: 'app-offerDetails',
  templateUrl: './offerDetails.component.html',
  styleUrls: ['./offerDetails.component.scss']
})
export class OfferDetailsComponent implements OnInit {

  id: '';
  total: number;
  offerInfo: any;

  constructor(
    private offerService: OffersService,
    private activateRoute: ActivatedRoute,
    private router: Router,
  ) {
     this.id = this.activateRoute.snapshot.params.id;
     }

  ngOnInit() {
    this.getOfferById();
  }

  getOfferById() {
    this.offerService.getDialogById(this.id).subscribe((response: Response) => {
      this.offerInfo = response.responseContent;
    });
  }

  offerType() {
    
  }
}
