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
{ path: '', loadChildren: './tabs/tabs.module#TabsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
