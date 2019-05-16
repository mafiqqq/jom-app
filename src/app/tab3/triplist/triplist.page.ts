import { Component, OnInit } from '@angular/core';
import { TripService } from '../../shared/trip.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Trip } from '../../shared/trip.model';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-triplist',
  templateUrl: './triplist.page.html',
  styleUrls: ['./triplist.page.scss'],
})
export class TriplistPage implements OnInit {

    list: Trip[]
    constructor(private router: Router, private alertCtrl: AlertController,
      private service: TripService,
      private firestore:AngularFirestore,
      private toastr: ToastrService) { }
  
    ngOnInit() {
      this.service.getTrips().subscribe(actionArray =>{
        this.list = actionArray.map(item =>{
          return {
            tripid: item.payload.doc.id,
            ...item.payload.doc.data()
          } as Trip;
        })
      });
  }

  go(){
    this.router.navigateByUrl('/trip-created');
  }

  onEdit(trp:Trip){
    this.service.formData = Object.assign({},trp);
    this.go();
  }

  onDelete(id: string){
    if(confirm("Are you sure to delete this trip?")){
      this.firestore.doc('trips/' + id).delete();
      this.toastr.warning('Deleted Successfully', 'Trip');
    }
  }
}
