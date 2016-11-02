import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { AngularFireModule} from 'angularfire2';

import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { PublicHeaderComponent } from './public/public-header.component';

import { AuthGuard } from './auth/auth-guard.service';
import { GrowlMessagesService } from './admin/shared/growlmessages.service';


import { AdminModule } from './admin/admin.module';
import { PublicModule } from './public/public.module';

import { DropdownDirective } from './shared/dropdown.directive';
import { ActiveDirective } from './shared/active.directive';





// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyB9sfjFV51l3_VU_wYG8B_TTUnuPU_RfnQ',
  authDomain: 'firetest-50afd.firebaseapp.com',
  databaseURL: 'https://firetest-50afd.firebaseio.com',
  storageBucket: 'firetest-50afd.appspot.com',
  messagingSenderId: "583705214229"
};



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PublicHeaderComponent,
    DropdownDirective,
    ActiveDirective,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AdminModule,
    PublicModule
  ],
  providers: [AuthGuard, GrowlMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
