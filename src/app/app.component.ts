import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app/app.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'agrobirja-admin';
  jwtHelper = new JwtHelperService();

  constructor(
    private appService: AppService,
    public router: Router,
  ) { }

  ngOnInit() {}

  logOut() {
    this.appService.logout().subscribe(() => {
      localStorage.clear();
      this.router.navigate(['/login']);
    });
  }

  loggedIn() {
    const token = localStorage.getItem('acc_jwt');
    return !this.jwtHelper.isTokenExpired(token);
  }
}


