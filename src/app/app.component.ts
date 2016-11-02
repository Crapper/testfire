import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    admin;
    constructor(private router: Router, private activatedRoute:ActivatedRoute) {
    if(window.location.pathname.indexOf('admin', 1))  // true = admin, false = public
    {
      this.admin = true;
    }
    else{
      this.admin = false;
    }
  }
}
