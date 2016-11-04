import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { publicRouting } from './public.routing';

import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations:[ 
        PublicComponent, HomeComponent
    ],
    imports:[
        CommonModule,
        publicRouting
    ]
})

export class PublicModule {

}