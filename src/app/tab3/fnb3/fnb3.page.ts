import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-fnb3',
  templateUrl: './fnb3.page.html',
  styleUrls: ['./fnb3.page.scss'],
})
export class Fnb3Page implements OnInit {

  constructor(private router:Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  go(){
    this.router.navigate(['fnb2']);
  }

  nav(){
    this.router.navigate(['fnb']);
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
