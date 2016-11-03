import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  pages:FirebaseListObservable<any>;

  constructor(private af: AngularFire) {

    this.pages = af.database.list('/pages');
    console.log(this.pages);
   }

  ngOnInit() {
  }

}
