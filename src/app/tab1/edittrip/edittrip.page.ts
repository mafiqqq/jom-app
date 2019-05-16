import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TripService } from 'src/app/shared/trip.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Trip } from 'src/app/shared/trip.model';

@Component({
  selector: 'app-edittrip',
  templateUrl: './edittrip.page.html',
  styleUrls: ['./edittrip.page.scss'],
})
export class EdittripPage implements OnInit {

  list: Trip[];
  
  constructor(
    private router : Router,
    private toastr: ToastrService,
    private service: TripService,
    private firestore: AngularFirestore,
  ) { }

  ngOnInit() {
  }

  onEdit(){
    
  }

  onDelete(tripid : string){
    if(confirm("Are you sure to delete this trip?")){
      this.firestore.doc('trips/' + tripid).delete();
      this.toastr.warning('Deleted Successfully', 'Trip');
    }
  }
}
