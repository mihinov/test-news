import { Component, Input, OnInit } from '@angular/core';
import { ResponseOneMiniNews } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-news-card-mini',
  templateUrl: './news-card-mini.component.html',
  styleUrls: ['./news-card-mini.component.scss']
})
export class NewsCardMiniComponent implements OnInit {

  @Input('itemNews') public itemNews: ResponseOneMiniNews | null = null;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.itemNews);

  }

}
