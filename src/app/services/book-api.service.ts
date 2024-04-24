import { Injectable } from '@angular/core';
import { Book } from '../models/Book';
import { BOOKS } from '../models/mock-books-list';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  booksList: Book[] = BOOKS;

  constructor() {}

  getAllBooks(){
    console.log('Get all books with Book API service');
    return this.booksList;
  }

  getBook(isbn: number){
    console.log('Get a book with Book API service');
    var selectedBook = this.booksList.filter(book => book.isbn === isbn);
    return selectedBook[0];
  }

  deleteBook(isbn: number){
    console.log('Delete a book with Book API service');
    this.booksList = this.booksList.filter(book => book.isbn !== isbn);
    return this.booksList;
  }
}
