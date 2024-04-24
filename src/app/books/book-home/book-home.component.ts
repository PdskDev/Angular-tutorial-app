import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';
//import { BOOKS } from 'src/app/models/mock-books-list';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-book-home',
  templateUrl: './book-home.component.html',
  styleUrls: ['./book-home.component.css']
})
export class BookHomeComponent implements OnInit {
  //booksList: Book[] = BOOKS;
  booksList: Book[] | undefined;
  selectedBook: Book | undefined;

  /* getBookDetails(isbn: number) {
   var selectedBook = this.booksList.filter(book => book.isbn === isbn);
   this.selectedBook = selectedBook[0];
  }

  deleteBook(isbn: number){
    this.selectedBook = undefined;
    this.booksList = this.booksList.filter(book => book.isbn !== isbn);
  } */

  constructor(private bookStoreService: BookServiceService){}

  ngOnInit(): void {
    this.getBooksList();
  }

  getBooksList(){
    this.booksList = this.bookStoreService.getAllBooks();
  }

  getBookDetails(isbn: number) {
    this.selectedBook = this.bookStoreService.getBook(isbn);
  }

  deleteBook(isbn: number) {
    this.selectedBook = undefined;
    this.booksList = this.bookStoreService.deleteBook(isbn);
  }



}
