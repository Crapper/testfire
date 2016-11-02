import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent {
  contentheader;
  boxtitle;
  constructor(private router: Router){
      let currentRoute = router.url;
      console.log(currentRoute);
      switch (currentRoute) {
            case '/admin/menu':
                this.contentheader = "Menu";
                this.boxtitle = "Menu Lijst"
                break;
            case '/admin/page':
                this.contentheader = "Pagina";
                this.boxtitle = "Pagina Lijst"
                break;
            default:

        }
      
  }

  
  
}
