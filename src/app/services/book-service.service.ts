import { Injectable } from '@angular/core';
import { Book } from '../models/Book';
import { BOOKS } from '../models/mock-books-list';
import { Observable, map, of } from 'rxjs';

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

  getBookByTitleSansObs(title: string){
    /* var selectedBook = this.booksList.filter(book => book.title === title);
    return selectedBook[0]; */
    return title;
  }
  getBookByTitleObs(title: string): Observable<string[]>{
    var listBooks = this.booksList.filter(book => book.title.toLowerCase() === title.toLowerCase());
    return of(listBooks.map(book => book.title));
  }

  getBooksByTitle(title: string): Observable<Book[]> {
    return of(this.filterBooks(title));
  }

  getBooksTitles(title: string): Observable<string[]> {
    return of(this.filterBooks(title)
    .map(book => book.title));
  }

  filterBooks(title: string): Book[] {
    return title ?
    this.booksList.filter(
      (book) => new RegExp(title, 'gi').test(book.title)): [];
  }

}
