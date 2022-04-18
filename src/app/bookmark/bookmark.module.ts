import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarkRoutingModule } from './bookmark-routing.module';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { ArticleComponent } from './article/article.component';


@NgModule({
  declarations: [ BookmarkComponent, ArticleComponent ],
  imports: [
    CommonModule,
    BookmarkRoutingModule
  ],
  exports: [  BookmarkComponent, ArticleComponent ]
})
export class BookmarkModule { }
