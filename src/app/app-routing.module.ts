import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookHomeComponent } from './books/book-home/book-home.component';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './home/app-home/app-home.component';

const routes: Routes = [
  {path: '', component: AppHomeComponent},
  {path: 'books', component: BookHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
