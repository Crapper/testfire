import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { menuRouting } from './menu.routing';
import { MenulistComponent } from './menulist/menulist.component';
import { MenuComponent } from './menu.component';

@NgModule({
    declarations:[  
   MenulistComponent, MenuComponent
    ],
    imports:[
        CommonModule,
        menuRouting
    ]
})

export class MenuModule {

}