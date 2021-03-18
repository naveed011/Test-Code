import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPaymentByIdComponent } from './view-payment-by-id.component';

describe('ViewPaymentByIdComponent', () => {
  let component: ViewPaymentByIdComponent;
  let fixture: ComponentFixture<ViewPaymentByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPaymentByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPaymentByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
