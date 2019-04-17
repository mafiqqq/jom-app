import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  // { path: '', loadChildren: './login/login.module#LoginPageModule' },
  // { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  // { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  // { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },


  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
{ path: '', redirectTo: 'login', pathMatch:'full'},
{ path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'trip-created', loadChildren: './trip-created/trip-created.module#TripCreatedPageModule' },
  { path: 'edit-trip-created', loadChildren: './edit-trip-created/edit-trip-created.module#EditTripCreatedPageModule' },
  { path: 'member-list', loadChildren: './member-list/member-list.module#MemberListPageModule' },  { path: 'edit-profile', loadChildren: './edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'gallery', loadChildren: './gallery/gallery.module#GalleryPageModule' },
  { path: 'upload-photo', loadChildren: './upload-photo/upload-photo.module#UploadPhotoPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
