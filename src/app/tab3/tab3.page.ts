import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { TripService } from './shared/trip.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
 constructor(private router: Router,
  private service:TripService,
  private firestore: AngularFirestore) {}

  
  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm)
  {
    if (form!= null)
      form.resetForm();
    this.service.formData = {
      trip_type: '',
      trip_name: '',
      trip_dest: '',
      pax: '',
      fee: '',
      num_day: '',
      rv: '',
      trip_details:'',
      payment_details: '',
    }
  }
  
  go(){
    this.router.navigateByUrl('/trip-created');
  }

  createTrip(form: NgForm){
    let data = form.value;
    this.firestore.collection('trips').add(data);
    this.resetForm();
    this.go();
  }
}
