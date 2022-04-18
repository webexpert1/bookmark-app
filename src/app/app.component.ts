import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from './bookmark/article.model';
import { BookmarkService } from './bookmark/bookmark.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  bookmarks: Article[] = [];
  articles: Article[] = [];

  constructor(private bookmarkService: BookmarkService) {}

  ngOnInit(): void {
    this.bookmarkService.getBookmarks()
        .subscribe((res: any) => {
          this.articles = res.articles;
          console.log(this.articles)
        })
  }

  articleExists(article: Article) {
    return this.bookmarks.some(function(el) {
      return el.title === article.title;
    })
  }
  addArticleBoobmark(article: Article) {
    const doesArticleExist = this.articleExists(article);
    if(doesArticleExist) {
      return;
    }
    this.bookmarks.push(article)
    console.log(this.bookmarks)
  }

  removeBookmarkedArticle(bookmark: any) {
    this.bookmarks = this.bookmarks.filter(b => b.title !== bookmark.title)
  }
}
