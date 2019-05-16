import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joindetails',
  templateUrl: './joindetails.page.html',
  styleUrls: ['./joindetails.page.scss'],
})
export class JoindetailsPage implements OnInit {
ngOnInit() {}

  constructor (private router : Router){}

  go(){
    this.router.errorHandler=(error : any) =>{
    this.router.navigate(['tab1']);
  }
}
payment(){
  this.router.navigate(['payment']);

}
}