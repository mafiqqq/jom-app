import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FnbPage } from './fnb.page';

describe('FnbPage', () => {
  let component: FnbPage;
  let fixture: ComponentFixture<FnbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FnbPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FnbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
