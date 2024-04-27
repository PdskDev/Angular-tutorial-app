import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSearchHomeComponent } from './book-search-home.component';

describe('BookSearchHomeComponent', () => {
  let component: BookSearchHomeComponent;
  let fixture: ComponentFixture<BookSearchHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSearchHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookSearchHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
