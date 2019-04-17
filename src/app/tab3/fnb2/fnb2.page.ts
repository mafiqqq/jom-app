import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-fnb2',
  templateUrl: './fnb2.page.html',
  styleUrls: ['./fnb2.page.scss'],
})
export class Fnb2Page implements OnInit {

  constructor(private router:Router)  { }

  ngOnInit() {
  }

  //Page navigation
  go(){
    this.router.navigate(['fnb3']);
  }  
  
  nav(){
    this.router.navigate(['fnb']);
  }  


}
