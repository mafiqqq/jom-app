import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageProviderService } from '../upload-photo/services/image-provider.service';
import { AuthenticateService } from '../services/authentication.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  images: any;

  constructor(private router: Router,
    private imageSrv: ImageProviderService,
    private auth: AuthenticateService) { }

  ngOnInit() {
    this.downloadImageUrls();
  }

  downloadImageUrls() {
    var userId = this.auth.userDetails().uid;
    this.imageSrv.getImage(userId);
    this.images = this.imageSrv.images;
  }

  profile() {
    this.router.navigateByUrl('/tabs/tab5');
  }

  uploadPhoto() {
    this.router.navigateByUrl('/upload-photo');
  }



}
