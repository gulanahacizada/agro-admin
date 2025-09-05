import { Component, OnInit } from '@angular/core';
import { RequestMembersService } from '../../services/request-members.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from 'src/app/interfaces/response';

@Component({
  selector: 'app-userDetails',
  templateUrl: './userDetails.component.html',
  styleUrls: ['./userDetails.component.scss']
})
export class UserDetailsComponent implements OnInit {

  id: '';
  userInfo: any;

  constructor(
    private membersRequestService: RequestMembersService,
    private activateRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.id = this.activateRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this.membersRequestService.getUserById(this.id).subscribe((response: Response) => {
      this.userInfo = response.responseContent;
    });
  }

  changeStatus() {
    this.membersRequestService.changeStatus2(`${this.id}?verified=1`).subscribe((response: Response) => {
      // if (response.responseCode == 1) {
        this.router.navigate(['/members-request']);
      // }
    });
  }

}
