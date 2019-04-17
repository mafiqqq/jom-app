import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripCreatedPage } from './trip-created.page';

describe('TripCreatedPage', () => {
  let component: TripCreatedPage;
  let fixture: ComponentFixture<TripCreatedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripCreatedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripCreatedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
