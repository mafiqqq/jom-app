import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular'; 


@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {

  constructor(private router:Router, public alertController: AlertController) { }

  ngOnInit() {
  }

    //Pop-up window
    async pop() {
      const alert = await this.alertController.create({
        header: 'Alert',
        message: 'Are you sure to cancel the rating?',
        buttons: ['Yes', 'No']
      });
  
      await alert.present();
    }
}
