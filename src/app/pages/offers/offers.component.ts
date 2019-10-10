import { Component, OnInit } from '@angular/core';
import { OffersService } from './services/offers.service';
import { Response } from 'src/app/interfaces/response';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  dialogList: any;

  constructor(
    private offerService: OffersService
  ) { }

  ngOnInit() {
    this.getAllDialogs();
  }

  getAllDialogs() {
    this.offerService.getAllDialogs().subscribe((response: Response) => {
      console.log(response.responseContent.data);
    });
  }

}
