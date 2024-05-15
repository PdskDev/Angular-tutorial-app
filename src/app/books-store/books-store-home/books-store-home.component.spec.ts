import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksStoreHomeComponent } from './books-store-home.component';
import { BookApiService } from 'src/app/services/book-api.service';

describe('BooksStoreHomeComponent', () => {
  let component: BooksStoreHomeComponent;
  let fixture: ComponentFixture<BooksStoreHomeComponent>;
  let bookApiServiceMock: BookApiService, mockHttp;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksStoreHomeComponent],
      providers: [{ provide: BookApiService, useValue: bookApiServiceMock }],
    }).compileComponents();

    mockHttp = jasmine.createSpyObj('mockHttp', ['get', 'delete', 'post']);
    bookApiServiceMock = new BookApiService(mockHttp);

    fixture = TestBed.createComponent(BooksStoreHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
