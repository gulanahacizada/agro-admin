import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { Response } from 'src/app/interfaces/response';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersList: any;
  serchValue = '';
  membersType: SelectItem[];
  selectType = 2;
  count = 0;
  pagination = {
    per_page: 10,
    total: null,
    page: 1
  };

  constructor(
    private userService: UsersService,

  ) { 
    this.membersType = [
      { label: 'Bütün üzvlər', value: '2' },
      { label: 'Fiziki şəxslər', value: '0' },
      { label: 'Hüquqi şəxslər', value: '1' },
    ];
  }

  ngOnInit() {
    this.getAllUsers();
  }

  onSelectType(event) {
    this.selectType = event.value;
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers({page: this.pagination.page, per_page: this.pagination.per_page, is_company: this.selectType})
    .subscribe((response: Response) => {
      this.usersList = response.responseContent.data;
      this.pagination.per_page = response.responseContent.per_page;
      this.pagination.total = response.responseContent.total;
    });
  }

  filterUser() {
    this.count ++;
    if (this.count == 1) {
      this.pagination.page = 1;
    }
    this.userService.getAllUsers({like: this.serchValue, page: this.pagination.page, per_page: this.pagination.per_page})
    .subscribe((response: Response) => {
      this.usersList = response.responseContent.data;
      this.pagination.per_page = response.responseContent.per_page;
      this.pagination.total = response.responseContent.total;
    });
  }

  paginate(e) {
    this.pagination.page = e.page + 1;
    this.pagination.per_page = e.rows;
    if (this.serchValue.length > 0) {
      this.filterUser();
    } else {
      this.getAllUsers();
    }
  }

  resetSerch() {
    this.serchValue = '';
    this.pagination.per_page = 10;
    this.pagination.page = 1;
    this.getAllUsers();
  }
}
