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
<<<<<<< HEAD
    if(window.location.pathname.startsWith('admin', 1))  // true = admin, false = public
=======
    if(window.location.pathname.indexOf('admin', 1))  // true = admin, false = public
>>>>>>> 8fec96a3d75fa9b83eddc27d07bec090a24ff7c0
    {
      this.admin = true;
    }
    else{
      this.admin = false;
    }
  }
}
