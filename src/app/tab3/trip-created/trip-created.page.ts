import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-trip-created',
  templateUrl: './trip-created.page.html',
  styleUrls: ['./trip-created.page.scss'],
})
export class TripCreatedPage implements OnInit {
  constructor(private router: Router, private alertCtrl: AlertController) { }

  go() {
    this.router.navigateByUrl('/trip-details');
  }
  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Delete Trip',
      message: '<strong>Do you want to delete trip?</strong>',
      buttons: ['Yes','No'] });      

    await alert.present();
  }


  ngOnInit() {
  }



}

