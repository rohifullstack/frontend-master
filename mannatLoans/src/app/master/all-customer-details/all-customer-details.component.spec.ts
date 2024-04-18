import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCustomerDetailsComponent } from './all-customer-details.component';

describe('AllCustomerDetailsComponent', () => {
  let component: AllCustomerDetailsComponent;
  let fixture: ComponentFixture<AllCustomerDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllCustomerDetailsComponent]
    });
    fixture = TestBed.createComponent(AllCustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
