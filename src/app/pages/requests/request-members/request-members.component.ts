import { Component, OnInit } from '@angular/core';
import { RequestMembersService } from './services/request-members.service';
import { Response } from 'src/app/interfaces/response';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-request-members',
  templateUrl: './request-members.component.html',
  styleUrls: ['./request-members.component.scss']
})
export class RequestMembersComponent implements OnInit {

  userRequestList: any;
  usersType: SelectItem[];
  selectType = 2;
  pagination = {
    per_page: 10,
    total: null,
    page: 1
  };

  constructor(
    private membersRequestService: RequestMembersService
  ) {
    this.usersType = [
      { label: 'Bütün üzvlər', value: '2' },
      { label: 'Fiziki şəxslər', value: '0' },
      { label: 'Hüquqi şəxslər', value: '1' },
    ];
  }

  ngOnInit() {
    this.getAllNewUser();
  }


  onSelectType(event) {
    this.selectType = event.value;
    this.getAllNewUser();
  }

  getAllNewUser() {
    this.membersRequestService.getAllNewUser({is_company: this.selectType}).subscribe((response: Response) => {
      this.userRequestList = response.responseContent.data;
      this.pagination.per_page = response.responseContent.per_page;
      this.pagination.total = response.responseContent.total;
      console.log(response.responseContent);
    });
  }

  paginate(e) {
    this.pagination.page = e.page + 1;
    this.pagination.per_page = e.rows;
    this.getAllNewUser();
  }

}
