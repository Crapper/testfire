import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html'
})
export class PublicHeaderComponent implements OnInit {
  
  menus: FirebaseListObservable<any>
  
  constructor(private af: AngularFire) { 

    this.menus = af.database.list('/menu',{
        query: {
          orderByChild: 'order'
        }
    });

  }

  ngOnInit() {
  }

}
