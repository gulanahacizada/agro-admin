import { Component, OnInit } from '@angular/core';
import { NewsService } from './services/news.service';
import { Response } from 'src/app/interfaces/response';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  newsList: any;
  serchValue = '';

  constructor(
    private newService: NewsService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.gelAllNews();
    }, 400);
  }

  gelAllNews() {
    this.newService.getAllNews().subscribe((response: Response) => {
      this.newsList = response.responseContent.data;
      console.log(response.responseContent);
    });
  }

  filterNew() {
    this.newService.getAllNews({like: this.serchValue}).subscribe((response: Response) => {
      this.newsList = response.responseContent.data;
      console.log(this.newsList);
    });
  }



}
