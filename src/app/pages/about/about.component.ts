import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/interfaces/response';
import { AboutService } from './services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutList: any;

  constructor(
    private aboutService: AboutService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.getAllAbout();
    }, 400);
  }


  getAllAbout() {
    this.aboutService.getAllAbout().subscribe((response: Response) => {
      this.aboutList = response.responseContent;
      console.log(this.aboutList);
    });
  }

}
