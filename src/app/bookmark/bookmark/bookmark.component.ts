import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Article } from '../article.model';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  @Input() bookmark: Article;
  @Output() removeBookmark = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeBookmarkedArticle(bookmark: Article) {
    this.removeBookmark.emit(bookmark)
  }

}
