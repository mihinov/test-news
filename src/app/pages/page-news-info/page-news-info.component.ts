import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-news-info',
  templateUrl: './page-news-info.component.html',
  styleUrls: ['./page-news-info.component.scss']
})
export class PageNewsInfoComponent implements OnInit {

  urlNews: string;

  constructor(private activateRoute: ActivatedRoute) {
    this.urlNews = this.activateRoute.snapshot.params['urlNews'];
  }

  ngOnInit(): void {
    // console.log(this.activateRoute);

  }

}
