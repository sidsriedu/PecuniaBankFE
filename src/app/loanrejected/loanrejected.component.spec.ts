import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanrejectedComponent } from './loanrejected.component';

describe('LoanrejectedComponent', () => {
  let component: LoanrejectedComponent;
  let fixture: ComponentFixture<LoanrejectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanrejectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanrejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
