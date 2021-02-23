import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditUsingChequeComponent } from './credit-using-cheque.component';

describe('CreditUsingChequeComponent', () => {
  let component: CreditUsingChequeComponent;
  let fixture: ComponentFixture<CreditUsingChequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditUsingChequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditUsingChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
