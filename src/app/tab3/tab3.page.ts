import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { TripService } from '../shared/trip.service';
import { ToastrService } from 'ngx-toastr';
import { AuthenticateService } from '../services/authentication.service';
import { Navigation } from 'selenium-webdriver';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
 constructor(private router: Router,
  private firestore: AngularFirestore,
  private service: TripService,
  private toastr: ToastrService,
  private emailservice: AuthenticateService,
  private navCtrl: NavController) {}


  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm)
  {
    if (form!= null) {
      form.resetForm();
    }
    this.service.formData = {
      email: this.emailservice.userDetails().email,
      tripid: this.firestore.createId(),
      account_name: '',
      account_no: '',
      bank: '',
      trip_type: '',
      trip_name: '',
      trip_dest: '',
      end_date: '',
      end_time: '',
      start_date: '',
      start_time: '',
      pax: '',
      fee: '',
      num_day: '',
      rv: '',
      trip_details:'',
      payment_details: '',
    }
  }
  
  go(){
    this.router.navigateByUrl('/tabs');
  }

  createTrip(form: NgForm){
    let data = form.value;
    this.firestore.collection('trips').add(data);
    this.resetForm();
    this.toastr.success('Created Successfully','Create Trip');
    this.go();
  }  
}
