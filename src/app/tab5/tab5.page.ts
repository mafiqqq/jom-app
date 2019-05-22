import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ImageProviderService } from '../upload-photo/services/image-provider.service';
import { AuthenticateService } from '../services/authentication.service';


@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  images: any[];
  userId = this.auth.userDetails().uid;

  constructor(private router: Router,
    private imageSrv: ImageProviderService,
    private auth: AuthenticateService) {
  }

  ngOnInit() {
    this.downloadImageUrls();
  }

  downloadImageUrls() {
    this.images = this.imageSrv.images;
    console.log(this.images);
  }

  edit() {
    this.router.navigateByUrl('/edit-profile');
  }

  showGallery() {
    this.router.navigateByUrl('/gallery');
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
}


