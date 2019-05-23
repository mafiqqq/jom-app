import { Component, OnInit, NgZone } from '@angular/core';
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

  //GoogleAutocomplete = new google.maps.places.AutocompleteService();
  GoogleAutocomplete = new google.maps.places.AutocompleteService();
  autocomplete = { input: '' };
  autocompleteItems = [];
  geocoder = new google.maps.Geocoder;
  markers = [];
   message:any;
  //error 'google': npm install @types/googlemaps --save-dev


 constructor(private router: Router,
  private firestore: AngularFirestore,
  private service: TripService,
  private toastr: ToastrService,
  private emailservice: AuthenticateService,
  private navCtrl: NavController, private zone: NgZone) {}


  ngOnInit() {
    this.resetForm();
  }
  async updateSearchResults(){
    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
    (predictions, status) => {
      this.autocompleteItems = [];
      this.zone.run(() => {
        predictions.forEach((prediction) => {
          this.autocompleteItems.push(prediction);
        });
      });
    });
  }
  selectSearchResult(item){
    this.message = item.description;
    this.autocomplete.input=this.message;
    this.autocompleteItems = [];
  
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
      trip_dest:this.message,
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
