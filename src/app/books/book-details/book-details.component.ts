import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import { slideInOutAnimation } from 'src/app/animation/animations';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  animations: [slideInOutAnimation],
})
export class BookDetailsComponent {
  @Input('book-cible') book: Book | undefined;
  @Output('book-to-delete') onDelete = new EventEmitter<number>();

  deleteThisBook() {
    this.onDelete.emit(this.book?.isbn);
  }

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
}
