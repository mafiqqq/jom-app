import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fnb3Page } from './fnb3.page';

describe('Fnb3Page', () => {
  let component: Fnb3Page;
  let fixture: ComponentFixture<Fnb3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fnb3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fnb3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
