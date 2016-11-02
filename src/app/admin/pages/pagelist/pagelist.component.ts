import { Component, OnInit, AfterViewInit, ViewEncapsulation  } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { LimitcharsPipe } from '../../../shared/limitchars.pipe';

import {Message} from 'primeng/primeng';
import { GrowlMessagesService } from '../../shared/growlmessages.service';

@Component({
  selector: 'app-pagelist',
  templateUrl: './pagelist.component.html',
  styleUrls: ['./pagelist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PagelistComponent implements OnInit, AfterViewInit {
  pages: FirebaseListObservable<any>;
  menuheader= [];
  display: boolean = false;
  msgs: Message[] = [];
  message;
  subscription: any;

  constructor(private af:AngularFire, private growl: GrowlMessagesService) { 
    this.pages = af.database.list('pages');
    this.menuheader.push({ headeritem:'Pagina Titel'}, {headeritem: 'Pagina Body'});
    
  }
  
    ngAfterViewInit() {
      if(this.message){
       this.msgs.push({severity:'success', summary:'Info', detail:this.message});
      }
    }

  ngOnInit() {
        
   
        this.subscription = this.growl.message.subscribe((data) =>{
          this.message = data;
        
        });
        
  
  }
  
    
  ngOnDestroy() {
    
    this.growl.pushMessage('');
    this.msgs = [];
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
