import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Book } from 'src/app/models/BookModel';
import { BookApiService } from 'src/app/services/book-api.service';

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css'],
})
export class DetailsBookComponent implements OnInit {
  book: Book | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private bookStoreService: BookApiService
  ) {}

  ngOnInit() {
    this.getBookDetails();
  }

  getBookDetails() {
    //const bookId = this.route.snapshot.params['id'];

    /* this.bookStoreService
      .getBookInfo(bookId)
      .subscribe((book) => (this.book = book)); */

    this.route.params
      .pipe(
        switchMap((params) => this.bookStoreService.getBookInfo(params['id']))
      )
      .subscribe((book) => (this.book = book));
  }
}
