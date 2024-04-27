import { Component, ElementRef, OnInit, ViewChild,  } from '@angular/core';
import { Observable, Subject, Subscription, debounceTime, delay, distinctUntilChanged, fromEvent, map, mergeMap, of, tap } from 'rxjs';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef | undefined;
  bookTitles: Array<string> | undefined;

  public keyUP = new Subject<KeyboardEvent>();
  private subscription: Subscription | undefined;

  constructor(private bookStoreService: BookServiceService){

  }

  ngOnInit(): void {
   this.subscription = this.keyUP.pipe(
      map(event => (<HTMLInputElement>event.target).value),
      debounceTime(300),
      distinctUntilChanged(),
      mergeMap(search => of(search).pipe(delay(200))),
    ).subscribe(title =>
      this.bookStoreService.getOnlyTitlesOfBooks(title)
      .subscribe(bookTitles => this.bookTitles = bookTitles));
  }

}



