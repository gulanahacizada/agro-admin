import { Component, OnInit } from '@angular/core';
import { RequestsContactService } from './services/requests-contact.service';
import { Response } from 'src/app/interfaces/response';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-requests-contact',
  templateUrl: './requests-contact.component.html',
  styleUrls: ['./requests-contact.component.scss']
})
export class RequestsContactComponent implements OnInit {

  contactOffers: any;
  offersType: SelectItem[];
  selectType = 2;
  count = 0;
  pagination = {
    per_page: 10,
    total: null,
    page: 1
  };

  constructor(
    private requestContactService: RequestsContactService
  ) {
    this.offersType = [
      { label: 'Bütün müraciətlər', value: '2' },
      { label: 'Baxılmış müraciətlər', value: '1' },
      { label: 'Baxılmamış müraciətlər', value: '0' },
    ];
  }

  ngOnInit() {
    this.getAllOffers();
  }

  onSelectType(event) {
    this.selectType = event.value;
    this.getAllOffers();
  }

  getAllOffers() {
    this.requestContactService.getAllContactOffers({read: this.selectType, page: this.pagination.page, per_page: this.pagination.per_page})
    .subscribe((response: Response) => {
      this.contactOffers = response.responseContent.data;
      this.pagination.per_page = response.responseContent.per_page;
      this.pagination.total = response.responseContent.total;
    });
  }

  paginate(e) {
    this.pagination.page = e.page + 1;
    this.pagination.per_page = e.rows;
    this.getAllOffers();
  }
}
