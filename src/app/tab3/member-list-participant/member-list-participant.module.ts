import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MemberListParticipantPage } from './member-list-participant.page';

const routes: Routes = [
  {
    path: '',
    component: MemberListParticipantPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MemberListParticipantPage]
})
export class MemberListParticipantPageModule {}
