import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { Response } from 'src/app/interfaces/response';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersList: any;

  constructor(
    private userService: UsersService,

  ) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((response: Response) => {
      this.usersList = response.responseContent.data;
      console.log(response.responseContent.data);
    });
  }




}
