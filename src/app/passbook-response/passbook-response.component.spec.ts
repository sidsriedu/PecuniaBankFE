import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassbookResponseComponent } from './passbook-response.component';

describe('PassbookResponseComponent', () => {
  let component: PassbookResponseComponent;
  let fixture: ComponentFixture<PassbookResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassbookResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassbookResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
