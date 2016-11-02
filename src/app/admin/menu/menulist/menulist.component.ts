import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.css']
})
export class MenulistComponent {

  menu: FirebaseListObservable<any>;
  menuheader= [];
  constructor(public af: AngularFire, private router:Router) {
    this.menu = af.database.list('/menu');
    this.menuheader.push({ headeritem:'Menu Naam'}, {headeritem: 'Menu Volgorde'});

  }
  
  addItem(newName: string) {
    this.menu.push({ text: newName });
  }
  updateItem(key: string, newText: string, newOrder: number) {
    this.menu.update(key, { text: newText, order: newOrder });
  }
  deleteItem(key: string) {    
    this.menu.remove(key); 
  }
  deleteEverything() {
    this.menu.remove();
  }

}
