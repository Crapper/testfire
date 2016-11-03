<<<<<<< HEAD
import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { LimitcharsPipe } from '../../../shared/limitchars.pipe';
import { PageService } from '../../shared/page.service';

import { Message } from 'primeng/primeng';
=======
import { Component, OnInit, AfterViewInit, ViewEncapsulation  } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { LimitcharsPipe } from '../../../shared/limitchars.pipe';

import {Message} from 'primeng/primeng';
>>>>>>> 8fec96a3d75fa9b83eddc27d07bec090a24ff7c0
import { GrowlMessagesService } from '../../shared/growlmessages.service';

@Component({
  selector: 'app-pagelist',
  templateUrl: './pagelist.component.html',
  styleUrls: ['./pagelist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PagelistComponent implements OnInit, AfterViewInit {
<<<<<<< HEAD
  pages:any;
=======
  pages: FirebaseListObservable<any>;
>>>>>>> 8fec96a3d75fa9b83eddc27d07bec090a24ff7c0
  menuheader= [];
  display: boolean = false;
  msgs: Message[] = [];
  message;
  subscription: any;

<<<<<<< HEAD
  constructor(private growl: GrowlMessagesService, private pageService: PageService) { 
    this.pages = pageService.getPageList();
=======
  constructor(private af:AngularFire, private growl: GrowlMessagesService) { 
    this.pages = af.database.list('pages');
>>>>>>> 8fec96a3d75fa9b83eddc27d07bec090a24ff7c0
    this.menuheader.push({ headeritem:'Pagina Titel'}, {headeritem: 'Pagina Body'});
    
  }
  
    ngAfterViewInit() {
      if(this.message){
<<<<<<< HEAD
        this.msgs.push({severity:'success', summary:'Info', detail:this.message});
=======
       this.msgs.push({severity:'success', summary:'Info', detail:this.message});
>>>>>>> 8fec96a3d75fa9b83eddc27d07bec090a24ff7c0
      }
    }

  ngOnInit() {
<<<<<<< HEAD
    this.subscription = this.growl.message.subscribe((data) =>{
      this.message = data;
    });
    
=======
        
   
        this.subscription = this.growl.message.subscribe((data) =>{
          this.message = data;
        
        });
        
  
>>>>>>> 8fec96a3d75fa9b83eddc27d07bec090a24ff7c0
  }
  
    
  ngOnDestroy() {
<<<<<<< HEAD
    this.growl.pushMessage('');
    this.msgs = [];

      if(this.subscription){
        this.subscription.unsubscribe();
      }
=======
    
    this.growl.pushMessage('');
    this.msgs = [];
    if(this.subscription){
      this.subscription.unsubscribe();
    }
>>>>>>> 8fec96a3d75fa9b83eddc27d07bec090a24ff7c0
  }

}
