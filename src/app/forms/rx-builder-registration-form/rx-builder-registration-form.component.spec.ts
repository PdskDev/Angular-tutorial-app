import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxBuilderRegistrationFormComponent } from './rx-builder-registration-form.component';

describe('RxBuilderRegistrationFormComponent', () => {
  let component: RxBuilderRegistrationFormComponent;
  let fixture: ComponentFixture<RxBuilderRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxBuilderRegistrationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxBuilderRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
