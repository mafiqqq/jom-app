import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  ngOnInit() {}
  
    constructor (private router : Router){}
  
    go(){
      this.router.errorHandler=(error : any) =>{
      this.router.navigate(['joindetails']);
    }
  }
  }