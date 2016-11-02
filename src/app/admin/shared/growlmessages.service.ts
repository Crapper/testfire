import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable,BehaviorSubject }    from 'rxjs/Rx';

@Injectable()
export class GrowlMessagesService {

  private messageSource = new Subject<string>();
  public message: Subject<string> = new BehaviorSubject<string>(null);

  pushMessage(message:string){
    this.message.next(message);
    
  }
}
