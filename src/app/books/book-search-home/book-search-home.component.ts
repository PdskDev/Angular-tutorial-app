import { Component } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-book-search-home',
  templateUrl: './book-search-home.component.html',
  styleUrls: ['./book-search-home.component.css']
})
export class BookSearchHomeComponent {
  filteredBooks: Book[] = [];

  constructor(private bookStoreService: BookServiceService){}

  searchBook(title: string) {
    this.bookStoreService.getBooksWithSimilareTitle(title)
    .subscribe(booksList => this.filteredBooks = booksList);
  }

}
