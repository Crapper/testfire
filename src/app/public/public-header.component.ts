import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AngularFire, FirebaseListObservable } from 'angularfire2';
=======
>>>>>>> 8fec96a3d75fa9b83eddc27d07bec090a24ff7c0

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html'
})
export class PublicHeaderComponent implements OnInit {
<<<<<<< HEAD
  
  menus: FirebaseListObservable<any>
  
  constructor(private af: AngularFire) { 

    this.menus = af.database.list('/menu',{
        query: {
          orderByChild: 'order'
        }
    });

  }
=======

  constructor() { }
>>>>>>> 8fec96a3d75fa9b83eddc27d07bec090a24ff7c0

  ngOnInit() {
  }

}
