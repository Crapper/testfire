import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { publicRouting } from './public.routing';

import { PublicComponent } from './public.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations:[ 
        PublicComponent, HomeComponent
=======

@NgModule({
    declarations:[ 
        PublicComponent
>>>>>>> 8fec96a3d75fa9b83eddc27d07bec090a24ff7c0
    ],
    imports:[
        CommonModule,
        publicRouting
    ]
})

export class PublicModule {

}