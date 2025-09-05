import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
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
  phone = [];
  email = [];

  constructor(
    private userService: UsersService,
    private activateRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.id = this.activateRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.getUserById();
  }

  getUserById() {
    this.userService.getUserById(this.id).subscribe((response: Response) => {
      this.userInfo = response.responseContent;
      this.phone = this.userInfo.contacts.filter(e => e.type == 0);
      this.email = this.userInfo.contacts.filter(e => e.type == 1);
    });
  }

  changeStatus() {
    this.userService.changeStatus2(`${this.id}?verified=0`).subscribe((response: Response) => {
      // if (response.responseCode == 1) {
        this.router.navigate(['/users']);
      // }
    });
  }
}
