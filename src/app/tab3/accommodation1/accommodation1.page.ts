import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-accommodation1',
  templateUrl: './accommodation1.page.html',
  styleUrls: ['./accommodation1.page.scss'],
})
export class Accommodation1Page implements OnInit {

  constructor(private router:Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  //Pop-up window
  async pop() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Are you sure to delete?',
      buttons: ['Delete', 'Cancel']
    });

    await alert.present();
  }

}
