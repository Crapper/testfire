import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pages: FirebaseListObservable<any>;

  constructor(private af: AngularFire) {
    this.pages = af.database.list('/pages', {
      query: {
        orderByChild: 'ishome',
        equalTo: true
      }
    });
  }

  ngOnInit() {
  }

}
