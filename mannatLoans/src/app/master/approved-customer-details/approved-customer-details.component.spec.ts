import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedCustomerDetailsComponent } from './approved-customer-details.component';

describe('ApprovedCustomerDetailsComponent', () => {
  let component: ApprovedCustomerDetailsComponent;
  let fixture: ComponentFixture<ApprovedCustomerDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApprovedCustomerDetailsComponent]
    });
    fixture = TestBed.createComponent(ApprovedCustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
