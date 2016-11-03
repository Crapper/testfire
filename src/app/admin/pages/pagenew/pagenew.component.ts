import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD

import { PageService } from '../../shared/page.service';
=======
import { AngularFire, FirebaseListObservable } from 'angularfire2';
>>>>>>> 8fec96a3d75fa9b83eddc27d07bec090a24ff7c0

@Component({
  selector: 'app-pagenew',
  templateUrl: './pagenew.component.html',
  styleUrls: ['./pagenew.component.css']
})
<<<<<<< HEAD
export class PagenewComponent implements OnInit{

  allImages;
  body;

  constructor(private router: Router, private pageService: PageService) {
             
  }
  ngOnInit(){
    this.allImages = this.pageService.getImageList();
  }

=======
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
>>>>>>> 8fec96a3d75fa9b83eddc27d07bec090a24ff7c0
  keyupHandlerFunction(content){
    this.body = content;
  }

<<<<<<< HEAD
  saveItem(newTitle: string, isHome:boolean) {
    this.pageService.savePage(newTitle,this.body, isHome);
=======
  saveItem(newTitle: string) {
    this.pages.push({ title: newTitle, body: this.body });
>>>>>>> 8fec96a3d75fa9b83eddc27d07bec090a24ff7c0
  }

  backToList(){
    this.router.navigate(['/admin/pages']);
  }

}
