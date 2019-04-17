import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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


