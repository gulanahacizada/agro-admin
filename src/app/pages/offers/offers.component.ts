import { Component, OnInit } from '@angular/core';
import { OffersService } from './services/offers.service';
import { Response } from 'src/app/interfaces/response';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  dialogType: SelectItem[];
  dialogList: any;
  selectType = 3;
  pagination = {
    per_page: 10,
    total: null,
    page: 1
  };

  constructor(
    private offerService: OffersService
  ) {
    this.dialogType = [
      { label: 'Bütün təkliflər', value: '3' },
      { label: 'Gözlenilmədə', value: '2' },
      { label: 'Razılaşmış', value: '1' },
      { label: 'Rəd edilmiş', value: '0' },
    ];
  }

  ngOnInit() {
    this.getAllDialogs();
  }

  onSelectType(event) {
    this.selectType = event.value;
    this.getAllDialogs();
  }

  getAllDialogs() {
    this.offerService.getAllDialogs({status: this.selectType, page: this.pagination.page, per_page: this.pagination.per_page})
    .subscribe((response: Response) => {
      console.log(response.responseContent.data);
      this.dialogList = response.responseContent.data;
      this.pagination.per_page = response.responseContent.per_page;
      this.pagination.total = response.responseContent.total;
    });
  }

  paginate(e) {
    this.pagination.page = e.page + 1;
    this.pagination.per_page = e.rows;
    this.getAllDialogs();
  }
}
