import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UploadPhotoPage } from './upload-photo.page';
import { IonicSelectableModule } from 'ionic-selectable';
import { ImageProviderService } from './services/image-provider.service';

const routes: Routes = [
  {
    path: '',
    component: UploadPhotoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    IonicSelectableModule
    
  ],
  declarations: [UploadPhotoPage],
  providers: [ImageProviderService],
})
export class UploadPhotoPageModule {}
