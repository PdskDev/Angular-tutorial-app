import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookHomeComponent } from './books/book-home/book-home.component';
import { RouterModule } from '@angular/router';
import { AppHomeComponent } from './home/app-home/app-home.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookHomeComponent,
    AppHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
