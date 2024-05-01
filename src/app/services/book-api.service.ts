import { Injectable } from '@angular/core';
import { Book } from '../models/BookModel';
//import { BOOKS } from '../models/mock-books-list';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  baseUrl: string = 'http://localhost:4567';
  headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  /* getAllBooks(){
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
  } */

  getBooksData(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/books`);
  }

  getBookInfo(id: any): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/books/${id}`);
  }

  deleteBook(id: number) {
    return this.http.delete(`${this.baseUrl}/books/${id}`);
  }
}
