import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fnb1Page } from './fnb1.page';

describe('Fnb1Page', () => {
  let component: Fnb1Page;
  let fixture: ComponentFixture<Fnb1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fnb1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fnb1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
