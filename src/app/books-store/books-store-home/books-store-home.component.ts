import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/BookModel';

@Component({
  selector: 'app-books-store-home',
  templateUrl: './books-store-home.component.html',
  styleUrls: ['./books-store-home.component.css']
})
export class BooksStoreHomeComponent implements OnInit{
 book: Book ={
   id: 0,
   isbn: '',
   title: '',
   authors: '',
   published: '',
   description: '',
   coverImage: ''
 }

  booksList: Book[] = [];
  apiUrl: string = "http://localhost:4567";

  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.getBooksData();
  }

  getBooksData() {
    this.http.get<Book[]>(`${this.apiUrl}/books`)
    .subscribe(result => this.booksList = result);
}

getBookInfo(id: any) {
this.http.get<Book>(`${this.apiUrl}/books/${id}`)
.subscribe(book => this.book = book);
}

}


