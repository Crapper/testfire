import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { GrowlMessagesService } from '../../shared/growlmessages.service';

@Component({
  selector: 'app-pageedit',
  templateUrl: './pageedit.component.html',
  styleUrls: ['./pageedit.component.css']
})
export class PageeditComponent implements OnInit {
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
  keyupHandlerFunction(content){
    this.body = content;
  }

  updatePage(newTitle: any) {
    this.growl.pushMessage('Pagina is ge-updated');
    this.page.update({title: newTitle, body: this.body}).then(_ => this.router.navigate(['/admin/pages']));
   
    

  }

  backToList(){
    this.growl.pushMessage('');
    this.router.navigate(['/admin/pages']);
  }
  ngOnDestroy(){
    
    
    
  }

}
