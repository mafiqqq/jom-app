import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { TripService } from './shared/trip.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
 constructor(private router: Router,
  private firestore: AngularFirestore,
  private service: TripService,
  private toastr: ToastrService) {}


  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm)
  {
    if (form!= null) {
      form.resetForm();
    }
    this.service.formData = {
      id: null,
      trip_type: '',
      trip_name: '',
      trip_dest: '',
      end_date_time: '',
      start_date_time: '',
      pax: '',
      fee: '',
      num_day: '',
      rv: '',
      trip_details:'',
      payment_details: '',
    }
  }
  
  go(){
    this.router.navigateByUrl('/triplist');
  }

  createTrip(form: NgForm){
    let data = form.value;
    this.firestore.collection('trips').add(data);
    this.resetForm();
    this.toastr.success('Created Successfully','Create Trip');
    this.go();
  }

  
}
