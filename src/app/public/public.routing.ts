import {Routes, RouterModule} from '@angular/router';

import {PublicComponent} from './public.component';
import {HomeComponent} from './home/home.component';

const PUBLIC_ROUTES: Routes = [
    { path:'', component:PublicComponent, children:[
        { path:'', component: HomeComponent }
    ]}
]

export const publicRouting = RouterModule.forChild(PUBLIC_ROUTES);