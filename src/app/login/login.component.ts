import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, AuthProviders, AuthMethods } from 'angularfire2';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

  items: FirebaseListObservable<any>;
  constructor(fb:FormBuilder, public af: AngularFire, private router: Router) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
    this.af.auth.subscribe(auth => console.log(auth));
    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  ngOnInit() {
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
       console.log(values);
      // Email and password
    this.af.auth.login({
      email: values['email'],
      password: values['password'],
    },
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    }).then(
        (success) => {
        console.log(success);
        this.router.navigate(['/admin']);
      }).catch(
        (err) => {
        console.log(err);
        this.router.navigate(['/']);
      })
    }
    
  }

  signOut() {
        this.af.auth.logout();
    }

}
