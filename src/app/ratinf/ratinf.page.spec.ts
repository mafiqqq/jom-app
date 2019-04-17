import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatinfPage } from './ratinf.page';

describe('RatinfPage', () => {
  let component: RatinfPage;
  let fixture: ComponentFixture<RatinfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatinfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatinfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
