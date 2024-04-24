import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  @Input("book-cible") book: Book | undefined;
  @Output() onDelete = new EventEmitter<number>();

  deleteThisBook() {
    this.onDelete.emit(this.book?.isbn);
  }



}
