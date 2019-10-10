import { Component, OnInit } from '@angular/core';
import { AgronomistsService } from './services/agronomists.service';
import { Response } from 'src/app/interfaces/response';

@Component({
  selector: 'app-agronomists',
  templateUrl: './agronomists.component.html',
  styleUrls: ['./agronomists.component.scss']
})
export class AgronomistsComponent implements OnInit {

  agronomsList: any;
  count = 0;
  serchValue = '';
  pagination = {
    per_page: 10,
    total: null,
    page: 1
  };

  constructor(
    private agronomService: AgronomistsService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.getAllAgronoms();
    }, 400);
  }

  getAllAgronoms() {
    this.agronomService.getAllAgronoms({page: this.pagination.page, per_page: this.pagination.per_page}).subscribe((response: Response) => {
      this.agronomsList = response.responseContent.data;
      this.pagination.per_page = response.responseContent.per_page;
      this.pagination.total = response.responseContent.total;
    });
  }

  filterAgronoms() {
    this.count ++;
    if (this.count == 1) {
      this.pagination.page = 1;
    }
    this.agronomService.getAllAgronoms({like: this.serchValue, page: this.pagination.page, per_page: this.pagination.per_page} )
    .subscribe((response: Response) => {
      this.agronomsList = response.responseContent.data;
      this.pagination.per_page = response.responseContent.per_page;
      this.pagination.total = response.responseContent.total;
    });
  }

  paginate(e) {
    console.log('paginate');

    this.pagination.page = e.page + 1;
    this.pagination.per_page = e.rows;
    if (this.serchValue.length > 0) {
      this.filterAgronoms();
    } else {
      this.getAllAgronoms();
    }
  }

  resetSerch() {
    this.serchValue = '';
    this.pagination.per_page = 10;
    this.pagination.page = 1;
    this.getAllAgronoms();
  }

}
