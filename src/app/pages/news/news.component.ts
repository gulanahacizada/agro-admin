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
  count = 0;
  serchValue = '';
  pagination = {
    per_page: 10,
    total: null,
    page: 1
  };

  constructor(
    private newService: NewsService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.gelAllNews();
    }, 400);
  }

  gelAllNews() {
    this.newService.getAllNews({page: this.pagination.page, per_page: this.pagination.per_page})
    .subscribe((response: any) => {
      this.newsList = response.responseContent.data;
      this.pagination.per_page = response.responseContent.per_page;
      this.pagination.total = response.responseContent.total;
    });
  }

  filterNew() {
    this.count ++;
    if (this.count == 1) {
      this.pagination.page = 1;
    }
    this.newService.getAllNews(
      {like: this.serchValue, page: this.pagination.page, per_page: this.pagination.per_page} )
      .subscribe((response: Response) => {
      this.newsList = response.responseContent.data;
      this.pagination.per_page = response.responseContent.per_page;
      this.pagination.total = response.responseContent.total;
    });
  }

  paginate(e) {
    this.pagination.page = e.page + 1;
    this.pagination.per_page = e.rows;
    if (this.serchValue.length > 0) {
      this.filterNew();
    } else {
      this.gelAllNews();
    }
  }

  resetSerch() {
    this.serchValue = '';
    this.pagination.per_page = 10;
    this.pagination.page = 1;
    this.gelAllNews();
  }

}
