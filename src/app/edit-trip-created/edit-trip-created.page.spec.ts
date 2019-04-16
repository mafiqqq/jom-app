import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTripCreatedPage } from './edit-trip-created.page';

describe('EditTripCreatedPage', () => {
  let component: EditTripCreatedPage;
  let fixture: ComponentFixture<EditTripCreatedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTripCreatedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTripCreatedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
