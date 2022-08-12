import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ResponseOneMiniNews } from '../shared/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AddNewNewsService {

	private newsLocalStorage: ResponseOneMiniNews[] = [];
	private keyLocalStorage: string = 'news';
	public news$: Subject<ResponseOneMiniNews> = new Subject<ResponseOneMiniNews>();

  constructor() {

		setTimeout(() => {
			const allNews = this.getAllNews();

			if (Array.isArray(allNews)) {
				this.newsLocalStorage.push(...allNews);

				for (const item of this.newsLocalStorage) {
					this.news$.next(item);
				}

			}
		}, 1000);
	}

	public addNewNews(news: ResponseOneMiniNews): void {
		this.newsLocalStorage.push(news);
		window.localStorage.setItem(this.keyLocalStorage, JSON.stringify(this.newsLocalStorage));

		for (const item of this.newsLocalStorage) {
			this.news$.next(item);
		}
	}

	public getAllNews(): ResponseOneMiniNews[] | null {
		const localStorageVal: string | null = window.localStorage.getItem(this.keyLocalStorage);

		if (localStorageVal !== null) {
			const parseVal: ResponseOneMiniNews[] = JSON.parse(localStorageVal);
			return parseVal;
		}

		return null;
	}
}
