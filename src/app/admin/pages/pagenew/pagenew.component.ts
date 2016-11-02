import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-pagenew',
  templateUrl: './pagenew.component.html',
  styleUrls: ['./pagenew.component.css']
})
export class PagenewComponent implements OnInit {
pages: FirebaseListObservable<any>;
images: FirebaseListObservable<any>;
allImages = [];
body;
  constructor(private af: AngularFire, private router: Router) {
    var storage = firebase.storage();

     this.images = af.database.list('/images', { preserveSnapshot: true });
     this.images.subscribe(snapshots => {
                            snapshots.forEach(snapshot => {
                              this.allImages.push({title: snapshot.val().name, value: snapshot.val().link})
                            });
                          })

     this.pages = af.database.list('/pages');                      
  }
  ngOnInit() {
  }
  keyupHandlerFunction(content){
    this.body = content;
  }

  saveItem(newTitle: string) {
    this.pages.push({ title: newTitle, body: this.body });
  }

  backToList(){
    this.router.navigate(['/admin/pages']);
  }

}
