import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-list-participant',
  templateUrl: './member-list-participant.page.html',
  styleUrls: ['./member-list-participant.page.scss'],
})
export class MemberListParticipantPage implements OnInit {

  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];

  constructor() { }

  ngOnInit() {
  }

}

