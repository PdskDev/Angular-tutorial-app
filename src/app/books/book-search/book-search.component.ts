import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild,  } from '@angular/core';
import { Observable, Subject, Subscription, debounceTime, delay, distinctUntilChanged, fromEvent, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  @ViewChild('searchInput') searchInput: ElementRef | undefined;
  @ViewChild('suggestions') suggestions: ElementRef | undefined;
  bookTitles: Array<string> = [];
  searchInputTerm: string = '';

  @Output() searchBookTitle = new EventEmitter<string>();

  public searchTitleKeyUP = new Subject<KeyboardEvent>();
  public sugessionsClick = new Subject<MouseEvent>();
  //private subscriptionInputSearch: Subscription | undefined;
  //private subscriptionSugessionsClick: Subscription | undefined;

  constructor(private bookStoreService: BookServiceService){

  }

  ngOnInit(): void {
   /* this.subscriptionInputSearch = this.keyUP.pipe(
      map(event => (<HTMLInputElement>event.target).value),
      debounceTime(300),
      distinctUntilChanged(),
      mergeMap(search => of(search).pipe(delay(200))),
    ).subscribe(title =>
      this.bookStoreService.getOnlyTitlesOfBooks(title)
      .subscribe(bookTitles => this.bookTitles = bookTitles)); */

      this.booksSearch();
      this.clickTitleSuggestions();
  }

  searchBooks() {
    this.bookTitles = [];
    this.searchBookTitle.emit(this.searchInputTerm);

  }

  booksSearch(){
    this.searchTitleKeyUP.pipe(
      map((event: KeyboardEvent) => (<HTMLInputElement>event.target).value),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((title) => this.bookStoreService.getOnlyTitlesOfBooks(title))
    ).subscribe(booksTitlesList => this.bookTitles = booksTitlesList);
  }

  clickTitleSuggestions(){
    this.sugessionsClick.pipe(
      map((event: MouseEvent) => (<HTMLInputElement>event.target).innerText),
      debounceTime(100),
      distinctUntilChanged(),
    ).subscribe(title => {
      this.searchInputTerm = title;
      this.bookTitles = [];
    });
  }


}



