import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoindetailsPage } from './joindetails.page';

describe('JoindetailsPage', () => {
  let component: JoindetailsPage;
  let fixture: ComponentFixture<JoindetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoindetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoindetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
