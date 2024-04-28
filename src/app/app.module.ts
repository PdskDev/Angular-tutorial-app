import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookHomeComponent } from './books/book-home/book-home.component';
import { AppHomeComponent } from './home/app-home/app-home.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BookServiceService } from './services/book-service.service';
//import { BookApiService } from './services/book-api.service';
import { BookSearchComponent } from './books/book-search/book-search.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookSearchHomeComponent } from './books/book-search-home/book-search-home.component';
import { RegistrationFormComponent } from './forms/registration-form/registration-form.component';
import { FormHomeComponent } from './forms/form-home/form-home.component';
import { RxRegistrationFormComponent } from './forms/rx-registration-form/rx-registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BookHomeComponent,
    AppHomeComponent,
    BookDetailsComponent,
    BookSearchComponent,
    BookListComponent,
    BookSearchHomeComponent,
    RegistrationFormComponent,
    FormHomeComponent,
    RxRegistrationFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  //providers: [{provide: BookServiceService, useClass: BookApiService}],
  providers: [BookServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
