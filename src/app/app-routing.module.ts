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
  { path: 'edit-profile', loadChildren: './edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'gallery', loadChildren: './gallery/gallery.module#GalleryPageModule' },
  { path: 'upload-photo', loadChildren: './upload-photo/upload-photo.module#UploadPhotoPageModule' },
  { path: 'joindetails', loadChildren: './tab1/joindetails/joindetails.module#JoindetailsPageModule' },
  { path: 'payment', loadChildren: './tab1/payment/payment.module#PaymentPageModule' },
  { path: 'jointrip', loadChildren: './tab1/jointrip/jointrip.module#JointripPageModule' },
  { path: '', redirectTo: 'login', pathMatch:'full'},
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'trip-created', loadChildren: './tab3/trip-created/trip-created.module#TripCreatedPageModule' },
  { path: 'edit-trip-created', loadChildren: './tab3/edit-trip-created/edit-trip-created.module#EditTripCreatedPageModule' },
  { path: 'member-list', loadChildren: './tab3/member-list/member-list.module#MemberListPageModule' },
  { path: 'accommodation', loadChildren: './tab3/accommodation/accommodation.module#AccommodationPageModule' },
  { path: 'accommodation1', loadChildren: './tab3/accommodation1/accommodation1.module#Accommodation1PageModule' },
  { path: 'ratinf', loadChildren: './ratinf/ratinf.module#RatinfPageModule' },
  { path: 'fnb', loadChildren: './tab3/fnb/fnb.module#FnbPageModule' },
  { path: 'fnb1', loadChildren: './tab3/fnb1/fnb1.module#Fnb1PageModule' },
  { path: 'fnb2', loadChildren: './tab3/fnb2/fnb2.module#Fnb2PageModule' },
  { path: 'fnb3', loadChildren: './tab3/fnb3/fnb3.module#Fnb3PageModule' },
  { path: 'triplist', loadChildren: './tab3/triplist/triplist.module#TriplistPageModule' }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

  // { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  // { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  // { path: '', redirectTo: 'login', pathMatch:'full'},
  // { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  // { path: 'edit-profile', loadChildren: './edit-profile/edit-profile.module#EditProfilePageModule' },
  // { path: 'gallery', loadChildren: './gallery/gallery.module#GalleryPageModule' },
  // { path: 'upload-photo', loadChildren: './upload-photo/upload-photo.module#UploadPhotoPageModule' },
  // { path: '', redirectTo: 'login', pathMatch:'full'},
  // { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  // { path: 'trip-created', loadChildren: './tab3/trip-created/trip-created.module#TripCreatedPageModule' },
  // { path: 'edit-trip-created', loadChildren: './tab3/edit-trip-created/edit-trip-created.module#EditTripCreatedPageModule' },
  // { path: 'member-list', loadChildren: './tab3/member-list/member-list.module#MemberListPageModule' },
  // { path: 'accommodation', loadChildren: './tab3/accommodation/accommodation.module#AccommodationPageModule' },
  // { path: 'accommodation1', loadChildren: './tab3/accommodation1/accommodation1.module#Accommodation1PageModule' },
  // { path: 'ratinf', loadChildren: './ratinf/ratinf.module#RatinfPageModule' },
  // { path: 'fnb', loadChildren: './tab3/fnb/fnb.module#FnbPageModule' },
  // { path: 'fnb1', loadChildren: './tab3/fnb1/fnb1.module#Fnb1PageModule' },
  // { path: 'fnb2', loadChildren: './tab3/fnb2/fnb2.module#Fnb2PageModule' },
  // { path: 'fnb3', loadChildren: './tab3/fnb3/fnb3.module#Fnb3PageModule' },
