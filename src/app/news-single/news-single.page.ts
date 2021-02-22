import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {
  article: any;
  web: any;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    // console.log(this.newsService.currentArticle);
    this.article = this.newsService.currentArticle;
  }

  openWeb(web) {
    this.web = web;
    window.open(this.web, '_blank');
  }

}
