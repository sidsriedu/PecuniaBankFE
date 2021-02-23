import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitUsingSlipComponent } from './debit-using-slip.component';

describe('DebitUsingSlipComponent', () => {
  let component: DebitUsingSlipComponent;
  let fixture: ComponentFixture<DebitUsingSlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitUsingSlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitUsingSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
