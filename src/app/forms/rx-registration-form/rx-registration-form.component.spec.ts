import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxRegistrationFormComponent } from './rx-registration-form.component';

describe('RxRegistrationFormComponent', () => {
  let component: RxRegistrationFormComponent;
  let fixture: ComponentFixture<RxRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxRegistrationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
