import { Component, OnInit } from '@angular/core';
import { AngularFire} from 'angularfire2';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { AuthGuard } from './auth/auth-guard.service';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
=======
import { AuthGuard }            from './auth/auth-guard.service';

import { AppComponent }      from './app.component';
import { AdminComponent }    from './admin/admin.component';
>>>>>>> 8fec96a3d75fa9b83eddc27d07bec090a24ff7c0
import { DropdownDirective } from './shared/dropdown.directive';
import { ActiveDirective } from './shared/active.directive';

@Component({
  selector: 'app-header',
<<<<<<< HEAD
  templateUrl: './header.component.html',
  styles:[`
              .main-header .logo {
                height: 58px !important;
                padding-top:6px;
            }
        `]
})
export class HeaderComponent implements OnInit {
  
  userEmail;
  isLoggedIn;  

  constructor(public af: AngularFire, public router: Router, authguard: AuthGuard) { 
      
        let check = this.af.auth.subscribe(auth => auth);
        
        if(check !== null) {
          this.af.auth.subscribe(user => {
                if(user) {
                  // user logged in
                  this.isLoggedIn = true;
                  this.userEmail = user.auth.email;
                }
                else {
                  // user not logged in
                  this.userEmail = {};
                  this.isLoggedIn = false;
                }
            });
       }
=======
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
userEmail;
isLoggedIn;  
  constructor(public af: AngularFire, public router: Router, authguard: AuthGuard) { 
      
  
        let check = this.af.auth.subscribe(auth => auth);
        
        if(check !== null)
        {
          
          
          console.log(this.isLoggedIn);
          this.af.auth.subscribe(user => {
            if(user) {
            // user logged in
            this.isLoggedIn = true;
            this.userEmail = user.auth.email;
            }
            else {
            // user not logged in
            this.userEmail = {};
            this.isLoggedIn = false;
            }
            });
        }
 // this.userEmail = af.auth.subscribe((auth) => auth.auth.email); 
             

>>>>>>> 8fec96a3d75fa9b83eddc27d07bec090a24ff7c0
  }

  ngOnInit() {
  }

  signOut() {
        this.af.auth.logout();
        this.router.navigate(['/admin/login']);
    }

}
