import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './article.model';

interface Bookmark {
  id: string;
  number: string;

}
const API_KEY = `05e44aafe69d448db6a86d46c8bb3be0`;

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  baseUrl = `https://newsapi.org/v2/everything?q=Apple&from=2022-04-17&sortBy=popularity`
  bookmarks: Bookmark[];

  constructor(private http: HttpClient) { }

  getBookmarks() {
    return this.http.get<Article>(this.baseUrl, { params: {
      apiKey : `${API_KEY}`
    }});
  }

  getBookmark(id: string) {
    return this.bookmarks.find(b => b.id === id)
  }
}
