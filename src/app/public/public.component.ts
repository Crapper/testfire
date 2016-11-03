import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AngularFire, FirebaseListObservable } from 'angularfire2';
=======
>>>>>>> 8fec96a3d75fa9b83eddc27d07bec090a24ff7c0

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

<<<<<<< HEAD
  pages:FirebaseListObservable<any>;

  constructor(private af: AngularFire) {

    this.pages = af.database.list('/pages');
    console.log(this.pages);
=======
  constructor() {
>>>>>>> 8fec96a3d75fa9b83eddc27d07bec090a24ff7c0
   }

  ngOnInit() {
  }

}
