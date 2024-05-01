import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { BookDetailsComponent } from 'src/app/books/book-details/book-details.component';
import { Book } from 'src/app/models/BookModel';
import { BookApiService } from 'src/app/services/book-api.service';

@Component({
  selector: 'app-books-store-home',
  templateUrl: './books-store-home.component.html',
  styleUrls: ['./books-store-home.component.css'],
})
export class BooksStoreHomeComponent implements OnInit {
  book: Book | undefined;

  booksList: Book[] = [];

  constructor(private bookStoreService: BookApiService) {}
  ngOnInit(): void {
    this.getBooksData();
  }

  getBooksData() {
    this.bookStoreService
      .getBooksData()
      .subscribe((books) => (this.booksList = books));
  }

  getBookInfo(id: any) {
    this.bookStoreService
      .getBookInfo(id)
      .subscribe((book) => (this.book = book));
  }
}
