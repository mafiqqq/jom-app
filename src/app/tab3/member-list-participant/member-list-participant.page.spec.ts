import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberListParticipantPage } from './member-list-participant.page';

describe('MemberListParticipantPage', () => {
  let component: MemberListParticipantPage;
  let fixture: ComponentFixture<MemberListParticipantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberListParticipantPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberListParticipantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
