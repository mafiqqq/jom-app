import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup ,Validators, PatternValidator, FormControl} from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { TripService } from '../shared/trip.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page],
  providers: [TripService],
  
})


export class Tab3PageModule {
  // tripForm:FormGroup;
  // constructor(){
  //   this.tripForm = new FormGroup({
  //     trip_name: new FormControl('',[Validators.required,Validators.minLength(20)]),
  //   })
  // }

  // createTrip(data:any){
  //   console.log

  // }
}

