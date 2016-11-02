import {Routes, RouterModule} from '@angular/router';
import {MenuComponent} from './menu.component';
import {MenulistComponent} from './menulist/menulist.component';

const MENU_ROUTES: Routes = [
    { path:'', component:MenuComponent, children:[
        { path:'', component: MenulistComponent }
    ]}
]

export const menuRouting = RouterModule.forChild(MENU_ROUTES);