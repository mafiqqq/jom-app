import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JointripPage } from './jointrip.page';

describe('JointripPage', () => {
  let component: JointripPage;
  let fixture: ComponentFixture<JointripPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JointripPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JointripPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
