<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PageService } from '../../shared/page.service';

=======
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
>>>>>>> 8fec96a3d75fa9b83eddc27d07bec090a24ff7c0
import { GrowlMessagesService } from '../../shared/growlmessages.service';

@Component({
  selector: 'app-pageedit',
  templateUrl: './pageedit.component.html',
  styleUrls: ['./pageedit.component.css']
})
export class PageeditComponent implements OnInit {
<<<<<<< HEAD
  
  key: string;
  page: any;
  allImages;
  body;
  message;

  constructor(private router: Router, private activateRoute: ActivatedRoute, private growl: GrowlMessagesService, private pageService: PageService) { 

  }

  ngOnInit() {
    this.allImages = this.pageService.getImageList();
    this.key = this.activateRoute.snapshot.params['key'];
    this.page = this.pageService.getPage(this.key);
    
  }

=======
  key: string;
  page: FirebaseObjectObservable<any>;
  pageTitle: string;
  body;
  message;
  constructor(private router: Router, private activateRoute: ActivatedRoute, private af : AngularFire, private growl: GrowlMessagesService) { 
    
    
  }

  ngOnInit() {
    this.key = this.activateRoute.snapshot.params['key'];

    this.page = this.af.database.object('/pages/' + this.key);
  }
>>>>>>> 8fec96a3d75fa9b83eddc27d07bec090a24ff7c0
  keyupHandlerFunction(content){
    this.body = content;
  }

<<<<<<< HEAD
  updatePage(form: NgForm){
      this.growl.pushMessage('Pagina is ge-updated');
      this.pageService.updatePage(form.value,this.body, this.key)
      .then( _ => this.router.navigate(['/admin/pages']) );
  }
  
=======
  updatePage(newTitle: any) {
    this.growl.pushMessage('Pagina is ge-updated');
    this.page.update({title: newTitle, body: this.body}).then(_ => this.router.navigate(['/admin/pages']));
   
    

  }

>>>>>>> 8fec96a3d75fa9b83eddc27d07bec090a24ff7c0
  backToList(){
    this.growl.pushMessage('');
    this.router.navigate(['/admin/pages']);
  }
<<<<<<< HEAD
=======
  ngOnDestroy(){
    
    
    
  }
>>>>>>> 8fec96a3d75fa9b83eddc27d07bec090a24ff7c0

}
