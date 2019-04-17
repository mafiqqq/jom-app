import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditTripCreatedPage } from './edit-trip-created.page';

const routes: Routes = [
  {
    path: '',
    component: EditTripCreatedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditTripCreatedPage]
})
export class EditTripCreatedPageModule {}
