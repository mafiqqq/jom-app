import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
// import { Routes } from '@angular/router';


// const routes: Routes = [
//   {
//     path : 'tabs',
//     component: TabsPage,
//     children : [
//       {
//         path : 'tab1',
//         loadChildren: '../tab1/tab1.module#Tab1PageModule'
//       },
//       {
//         path : 'tab2',
//         loadChildren: '../tab2/tab2.module#Tab2PageModule'
//       }

//     ]
//   },
//   {
//     path : '',
//     redirectTo: '/tabs/tab1'
//   }
// ];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
