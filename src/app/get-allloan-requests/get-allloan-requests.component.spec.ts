import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllloanRequestsComponent } from './get-allloan-requests.component';

describe('GetAllloanRequestsComponent', () => {
  let component: GetAllloanRequestsComponent;
  let fixture: ComponentFixture<GetAllloanRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllloanRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllloanRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
