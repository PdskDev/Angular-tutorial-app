import { RouterModule, Routes } from '@angular/router';
import { BooksStoreHomeComponent } from './books-store-home/books-store-home.component';
import { NewBookComponent } from './new-book/new-book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { DetailsBookComponent } from './details-book/details-book.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'books-store', component: BooksStoreHomeComponent },
  { path: 'books-store/new', component: NewBookComponent },
  { path: 'books-store/list', component: ListBookComponent },
  { path: 'books-store/:id', component: DetailsBookComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksStoreRoutingModule {}
