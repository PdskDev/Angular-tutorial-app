import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookHomeComponent } from './books/book-home/book-home.component';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './home/app-home/app-home.component';
import { BookSearchComponent } from './books/book-search/book-search.component';
import { BookSearchHomeComponent } from './books/book-search-home/book-search-home.component';

const routes: Routes = [
  {path: '', component: AppHomeComponent},
  {path: 'books/list', component: BookHomeComponent},
  {path: 'books/search', component: BookSearchHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
