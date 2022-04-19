import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Article } from './article.model';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  baseUrl = environment.baseUrl;
  API_KEY = environment.API_KEY;

  constructor(private http: HttpClient) { }

  getBookmarks() {
    return this.http.get<Article>(this.baseUrl, { params: {
      apiKey : `${this.API_KEY}`
    }});
  }
}
