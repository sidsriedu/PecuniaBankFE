import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditUsingSlipComponent } from './credit-using-slip.component';

describe('CreditUsingSlipComponent', () => {
  let component: CreditUsingSlipComponent;
  let fixture: ComponentFixture<CreditUsingSlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditUsingSlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditUsingSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
