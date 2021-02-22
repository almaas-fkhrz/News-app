import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  data: any;
  data2: any;
  slidesOpt = {
    slidesPerView: 1.1
  }
  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getData('top-headlines?sources=cnn').subscribe(data => {
      // console.log(data);
      this.data = data;
    });
    this.newsService.getData('top-headlines?sources=bbc-news').subscribe(data2 => {
      // console.log(data);
      this.data2 = data2;
    });
  }

  goToPage(a) {
    this.newsService.currentArticle = a;
    this.router.navigate(['/news-single']);
  }

}
