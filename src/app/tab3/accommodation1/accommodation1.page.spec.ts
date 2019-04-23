import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Accommodation1Page } from './accommodation1.page';

describe('Accommodation1Page', () => {
  let component: Accommodation1Page;
  let fixture: ComponentFixture<Accommodation1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Accommodation1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Accommodation1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
