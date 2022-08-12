import { Component, Input, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { ResponseGetFullNews } from 'src/app/shared/interfaces/interfaces';
import { ApiNewsService } from 'src/app/services/api-news.service';

@Component({
  selector: 'app-news-card-full',
  templateUrl: './news-card-full.component.html',
  styleUrls: ['./news-card-full.component.scss']
})
export class NewsCardFullComponent implements OnInit {

  @Input('urlNews') public set urlNews(url: string) {
    this.oneNews$ = this.apiNewsService.getOneNews(url);
  }

  public oneNews$: Observable<ResponseGetFullNews> | null = null;


  constructor(private apiNewsService: ApiNewsService) {}

  ngOnInit(): void {

  }

}
