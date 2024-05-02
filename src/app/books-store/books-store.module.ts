import { NgModule } from '@angular/core';
import { BooksStoreHomeComponent } from './books-store-home/books-store-home.component';
import { DetailsBookComponent } from './details-book/details-book.component';
import { NewBookComponent } from './new-book/new-book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BooksStoreRoutingModule } from './books-store-routing.module';
import { BookApiService } from '../services/book-api.service';

@NgModule({
  declarations: [
    BooksStoreHomeComponent,
    DetailsBookComponent,
    NewBookComponent,
    ListBookComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    BooksStoreRoutingModule,
  ],
  providers: [BookApiService],
})
export class BooksStoreModule {}
