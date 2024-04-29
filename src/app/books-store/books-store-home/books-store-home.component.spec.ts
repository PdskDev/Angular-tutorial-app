import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksStoreHomeComponent } from './books-store-home.component';

describe('BooksStoreHomeComponent', () => {
  let component: BooksStoreHomeComponent;
  let fixture: ComponentFixture<BooksStoreHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksStoreHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksStoreHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
