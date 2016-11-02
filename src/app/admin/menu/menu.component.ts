import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
