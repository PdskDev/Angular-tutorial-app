import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookApiService } from 'src/app/services/book-api.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css'],
})
export class NewBookComponent implements OnInit {
  newBookForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private bookStoreService: BookApiService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.newBookForm = this.formBuilder.group({
      isbn: ['', Validators.required],
      title: ['', Validators.required],
      authors: ['', Validators.required],
      published: ['', Validators.required],
      description: ['', Validators.required],
      coverImage: ['', Validators.required],
    });
  }

  saveBook() {
    if (this.newBookForm?.valid) {
      var book = this.newBookForm.value;
      this.bookStoreService
        .addBook(book)
        .subscribe((res) => this.router.navigate(['/books-store/list']));
    }
  }

  goBack() {
    this.location.back();
  }
}
