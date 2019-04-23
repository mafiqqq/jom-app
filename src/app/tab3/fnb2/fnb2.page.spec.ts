import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fnb2Page } from './fnb2.page';

describe('Fnb2Page', () => {
  let component: Fnb2Page;
  let fixture: ComponentFixture<Fnb2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fnb2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fnb2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
