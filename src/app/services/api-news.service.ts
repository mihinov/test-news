import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseGetFullNews, ResponseGetMiniNews } from '../shared/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiNewsService {

  private url: string = 'https://webapi.autodoc.ru/api/news';
  private quantityPerPage: number = 10;

  constructor(private http: HttpClient) { }

  public getNews(tens: number): Observable<ResponseGetMiniNews> {
    return this.http.get<ResponseGetMiniNews>(`${this.url}/${tens}/${this.quantityPerPage}`);
  }

  public getOneNews(urlNews: string): Observable<ResponseGetFullNews> {
    return this.http.get<ResponseGetFullNews>(`${this.url}/item/${urlNews}`);
  }
}
