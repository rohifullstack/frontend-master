import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedCustomerDetailsComponent } from './rejected-customer-details.component';

describe('RejectedCustomerDetailsComponent', () => {
  let component: RejectedCustomerDetailsComponent;
  let fixture: ComponentFixture<RejectedCustomerDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RejectedCustomerDetailsComponent]
    });
    fixture = TestBed.createComponent(RejectedCustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
