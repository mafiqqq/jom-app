import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-fnb1',
  templateUrl: './fnb1.page.html',
  styleUrls: ['./fnb1.page.scss'],
})
export class Fnb1Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  //Page navigation
  go(){
    this.router.navigate(['fnb2']);
  }
}
