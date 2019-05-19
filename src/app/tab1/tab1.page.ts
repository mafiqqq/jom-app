import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { TripService } from '../shared/trip.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Trip } from '../shared/trip.model';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  
  //[START] This is to test the dashboard whether can get email and logout
  userEmail: string;
  uid: string;
  list: Trip[];
  
  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private router: Router, 
    private alertCtrl: AlertController,
    private service: TripService,
    private firestore:AngularFirestore,
    private toastr: ToastrService,
  ) {}
 
  ngOnInit(){
    if(this.authService.userDetails()){
      this.userEmail = this.authService.userDetails().email;
    }else{
      this.navCtrl.navigateBack('');
    }
    this.service.getTrips().subscribe(actionArray =>{
      this.list = actionArray.map(item =>{
        return {
          tripid: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Trip;
      })
    });
  }
 
  logout(){
    this.authService.logoutUser()
    .then(res => {
      console.log(res);
      this.navCtrl.navigateBack('');
    })
    .catch(error => {
      console.log(error);
    })
  }

  Participantgo(){
    // this.router.navigate(['jointrip']);
    this.navCtrl.navigateForward('/jointrip');
  }

  Creatorgo(){
    // this.router.navigate(['edittrip']);
    this.navCtrl.navigateForward('/edittrip');
  }

  onClick(trp: Trip){
    this.service.formData = Object.assign({}, trp);
    this.firestore.doc('trips/' + trp.tripid);
    if (this.authService.userDetails().email === trp.email) 
      this.Creatorgo();
    else 
      this.Participantgo();
    }
}
