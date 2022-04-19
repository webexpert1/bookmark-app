import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;
  @Output() addBookmark = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addArticleBookmark(article: Article) {
    this.addBookmark.emit(article)
  }

}
