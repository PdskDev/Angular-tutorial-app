import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
} from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import { BookApiService } from 'src/app/services/book-api.service';
import { DebugElement } from '@angular/core';
import { Book } from 'src/app/models/BookModel';
import { Observable, of } from 'rxjs';

describe('BookListComponent', () => {
  let component: BookListComponent,
    fixture: ComponentFixture<BookListComponent>,
    debugElement: DebugElement,
    element: HTMLElement,
    bookApiServiceMock: BookApiService;

  const booksList: Book[] = [
    {
      id: 2,
      isbn: '978-1803233444',
      title: 'Angular Cookbook - Second Edition',
      authors: ' Muhammad Ahsan Ayaz',
      published: '29 décembre 2023',
      description:
        'iscover core concepts, advanced techniques, and end-to-end solutions for building production-ready applications.',
      coverImage:
        'https://m.media-amazon.com/images/I/71MYVL9PP+L._SL1360_.jpg',
    },
    {
      id: 3,
      isbn: '978-1804613276',
      title:
        'Modern API Development with Spring 6 and Spring Boot 3 - Second Edition',
      authors: ' Sourabh Sharma',
      published: '22 septembre 2023 ',
      description:
        "Discover ways to enhance your application's functionality through hands-on learning for designing, testing, securing, deploying, and maintaining production-ready APIs.",
      coverImage:
        'https://m.media-amazon.com/images/I/61VpEJ6ulyL._SL1360_.jpg',
    },
  ];

  beforeEach(async () => {
    bookApiServiceMock = jasmine.createSpyObj('bookApiServiceMock', [
      'getBooksData',
      'getBookInfo',
      'deleteBook',
      'addBook',
    ]);

    await TestBed.configureTestingModule({
      declarations: [BookListComponent],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
        { provide: BookApiService, useValue: bookApiServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
