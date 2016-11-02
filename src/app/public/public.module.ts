import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { publicRouting } from './public.routing';

import { PublicComponent } from './public.component';

@NgModule({
    declarations:[ 
        PublicComponent
    ],
    imports:[
        CommonModule,
        publicRouting
    ]
})

export class PublicModule {

}