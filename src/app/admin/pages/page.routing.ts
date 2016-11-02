import {Routes, RouterModule} from '@angular/router';

import {PageComponent} from './page.component';
import {PagelistComponent} from './pagelist/pagelist.component';
import {PagenewComponent} from './pagenew/pagenew.component';
import {PageeditComponent} from './pageedit/pageedit.component';

const PAGE_ROUTES: Routes = [
    { path: '', component: PageComponent, children:[
        {path:'', component: PagelistComponent},
        {path:'new', component: PagenewComponent},
        {path:'edit/:key', component: PageeditComponent}
    ]}
    
]

export const pageRouting = RouterModule.forChild(PAGE_ROUTES);