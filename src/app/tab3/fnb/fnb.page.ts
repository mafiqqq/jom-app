import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-fnb',
  templateUrl: './fnb.page.html',
  styleUrls: ['./fnb.page.scss'],
})
export class FnbPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  go()
  {
    this.router.navigate(['fnb1']);
  }
}
