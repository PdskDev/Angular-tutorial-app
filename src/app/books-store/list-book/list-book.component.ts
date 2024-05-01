import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/BookModel';
import { BookApiService } from 'src/app/services/book-api.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css'],
})
export class ListBookComponent implements OnInit {
  booksList: Book[] = [];

  constructor(private bookStoreService: BookApiService) {}

  ngOnInit(): void {}

  getListOfBooks() {
    this.bookStoreService.getAllBooks();
  }
}
