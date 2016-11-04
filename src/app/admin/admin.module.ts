import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PageService } from './shared/page.service';

import { AdminComponent } from './admin.component';
import { LoginComponent } from '../login/login.component';
import { adminRouting } from './admin.routing';

@NgModule({
    declarations: [
        AdminComponent,
        LoginComponent
    ],
    imports: [
        adminRouting,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    providers: [
        PageService
    ]
})

export class AdminModule {


}