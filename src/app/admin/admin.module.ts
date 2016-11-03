import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

<<<<<<< HEAD
import { PageService } from './shared/page.service';

=======
>>>>>>> 8fec96a3d75fa9b83eddc27d07bec090a24ff7c0
import { AdminComponent } from './admin.component';
import { LoginComponent } from '../login/login.component';
import { adminRouting } from './admin.routing';

@NgModule({
    declarations:[
    AdminComponent,
    LoginComponent
    ],
    imports:[
        adminRouting,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
<<<<<<< HEAD
    ],
    providers:[
        PageService
=======
>>>>>>> 8fec96a3d75fa9b83eddc27d07bec090a24ff7c0
    ]
})

export class AdminModule {


}