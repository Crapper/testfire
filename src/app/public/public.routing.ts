import {Routes, RouterModule} from '@angular/router';

import {PublicComponent} from './public.component';

const PUBLIC_ROUTES: Routes = [
    { path:'', component:PublicComponent, children:[
        { path:'', component: PublicComponent }
    ]}
]

export const publicRouting = RouterModule.forChild(PUBLIC_ROUTES);