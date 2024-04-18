import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldCustomerDetailsComponent } from './old-customer-details.component';

describe('OldCustomerDetailsComponent', () => {
  let component: OldCustomerDetailsComponent;
  let fixture: ComponentFixture<OldCustomerDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OldCustomerDetailsComponent]
    });
    fixture = TestBed.createComponent(OldCustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
