import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonicSelectableComponent } from 'ionic-selectable';

class Location {
  public id: number;
  public name: string;
}

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.page.html',
  styleUrls: ['./upload-photo.page.scss'],
})
export class UploadPhotoPage implements OnInit {

  

  ngOnInit() {
  }
  gallery() {
    this.router.navigateByUrl('/gallery');
  }

  
  locations: Location[];
  location: Location;


  constructor(private router: Router) {
    this.locations = [
      { id: 1, name: 'Serdang' },
      { id: 2, name: 'Bukit Broga' },
      { id: 3, name: 'Navlakhi' }
    ];
   }

   userChanged(event: { component: IonicSelectableComponent, value: any}){
     console.log('location: ', event.value);
   }

}
