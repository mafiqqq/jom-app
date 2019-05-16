import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { getOrCreateCurrentQueries } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-jointrip',
  templateUrl: './jointrip.page.html',
  styleUrls: ['./jointrip.page.scss'],
})
export class JointripPage implements OnInit{
  ngOnInit() {
  }
  constructor (private router : Router){}

go(){
  this.router.navigate(['joindetails']);
}
gohome(){
  this.router.navigate(['tab1']);
}
}
