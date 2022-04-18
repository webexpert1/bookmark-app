import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookmarkModule } from './bookmark/bookmark.module';


@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
     BrowserModule,
     FormsModule,
     HttpClientModule,
     ReactiveFormsModule,
     BookmarkModule
   ],
   providers: [
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
