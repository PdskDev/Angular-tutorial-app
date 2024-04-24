import { Component } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { BOOKS } from 'src/app/models/mock-books-list';

@Component({
  selector: 'app-book-home',
  templateUrl: './book-home.component.html',
  styleUrls: ['./book-home.component.css']
})
export class BookHomeComponent {
  booksList: Book[] = BOOKS;
  selectedBook!: Book;

  getBookDetails(isbn: number) {
   var selectedBook = this.booksList.filter(book => book.isbn === isbn);
   this.selectedBook = selectedBook[0];
  }

}
