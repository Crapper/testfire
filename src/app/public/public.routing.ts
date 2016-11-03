import {Routes, RouterModule} from '@angular/router';

import {PublicComponent} from './public.component';
<<<<<<< HEAD
import {HomeComponent} from './home/home.component';

const PUBLIC_ROUTES: Routes = [
    { path:'', component:PublicComponent, children:[
        { path:'', component: HomeComponent }
=======

const PUBLIC_ROUTES: Routes = [
    { path:'', component:PublicComponent, children:[
        { path:'', component: PublicComponent }
>>>>>>> 8fec96a3d75fa9b83eddc27d07bec090a24ff7c0
    ]}
]

export const publicRouting = RouterModule.forChild(PUBLIC_ROUTES);