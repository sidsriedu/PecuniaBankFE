import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitUsingChequeComponent } from './debit-using-cheque.component';

describe('DebitUsingChequeComponent', () => {
  let component: DebitUsingChequeComponent;
  let fixture: ComponentFixture<DebitUsingChequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitUsingChequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitUsingChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
