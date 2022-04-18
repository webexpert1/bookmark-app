import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  addArticleBoobmark(article: Article) {
    this.addBookmark.emit(article)
  }

}
