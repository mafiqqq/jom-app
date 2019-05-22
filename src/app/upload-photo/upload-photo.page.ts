import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonicSelectableComponent } from 'ionic-selectable';

class Location {
  public id: number;
  public name: string;
}
import { ImageProviderService } from './services/image-provider.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AuthenticateService } from '../services/authentication.service';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.page.html',
  styleUrls: ['./upload-photo.page.scss'],
})
export class UploadPhotoPage implements OnInit {

  locationValue: string = "";
  tripNameValue: string = "";

  // debug purpose
  errorMessage: string = "";

  image: any;
  imageUrls:string[] = [];    

  ngOnInit() {
  }



  async getPhoto() {
    try {
      const options: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        saveToPhotoAlbum: false,
        correctOrientation: true
      }
      const result = await this.camera.getPicture(options);
      let base64Image = `data:image/jpeg;base64,${result}`;
      this.errorMessage = this.imageSrv.uploadImage(base64Image, this.auth.userDetails().uid, this.locationValue, this.tripNameValue);
    }
    catch (e) {
      this.errorMessage = e;
    }

  }

  gallery() {
    this.router.navigateByUrl('/gallery');
  }

  
  locations: Location[];
  location: Location;


  constructor(private router: Router,
    private imageSrv: ImageProviderService,
    private camera: Camera,
    private auth: AuthenticateService) {
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
