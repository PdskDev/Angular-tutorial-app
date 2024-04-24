import { Injectable } from '@angular/core';
import { Book } from '../models/Book';
import { BOOKS } from '../models/mock-books-list';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  booksList: Book[] = BOOKS;

  constructor() {}

  getAllBooks(){
    return this.booksList;
  }

  getBook(isbn: number){
    var selectedBook = this.booksList.filter(book => book.isbn === isbn);
    return selectedBook[0];
  }

  deleteBook(isbn: number){
    this.booksList = this.booksList.filter(book => book.isbn !== isbn);
    return this.booksList;
  }
}
