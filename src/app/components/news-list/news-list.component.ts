import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { debounceTime, fromEvent, mergeWith, Observable, Subject, take, timeout } from 'rxjs';
import { ResponseOneMiniNews } from 'src/app/shared/interfaces/interfaces';
import { ApiNewsService } from 'src/app/services/api-news.service';
import { AddNewNewsService } from 'src/app/services/add-new-news.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements AfterViewInit, OnInit {

  public news: ResponseOneMiniNews[] = [];
  public loadNews: boolean = true;
  @ViewChild('newsCardsWrapper') private newsCardsWrapperRef!: ElementRef<HTMLDivElement>;
  private scrollDocument$: Observable<Event> = fromEvent<Event>(document, 'scroll');
  private resizeWindow$: Observable<Event> = fromEvent<Event>(window, 'resize');
  private dozenNews: number = 0;
	private newsLocalStorage$: Subject<ResponseOneMiniNews> = this.addNewNewsService.news$;

  constructor(
		private apiNewsService: ApiNewsService,
		private addNewNewsService: AddNewNewsService
	) { }

	ngOnInit(): void {
		this.newsLocalStorage$
		.pipe(
			untilDestroyed(this),
		)
		.subscribe(newsLocalStorage => {
			this.news.unshift(newsLocalStorage);
		});
	}

  ngAfterViewInit(): void {

    this.getNowNews();

    this.scrollDocument$
    .pipe(
      mergeWith(this.resizeWindow$),
      debounceTime(300),
			untilDestroyed(this)
    )
    .subscribe(event => {
      this.scrollDocument(event);
    });

  }

  private scrollDocument(event: Event): void {
    const rect = this.newsCardsWrapperRef.nativeElement.getBoundingClientRect();
    const targetPosition = {
      top: window.pageYOffset + rect.top,
      left: window.pageXOffset + rect.left,
      right: window.pageXOffset + rect.right,
      bottom: window.pageYOffset + rect.bottom
    };
    const windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

    if (targetPosition.bottom < windowPosition.bottom) {
      this.getNowNews();
    }
  }

  getNowNews(): void {
    this.loadNews = true;

    this.apiNewsService.getNews(++this.dozenNews)
    .pipe(
      take(1),
    )
    .subscribe(res => {
      this.loadNews = false;
      this.news.push(...res.news);
    });
  }

}
