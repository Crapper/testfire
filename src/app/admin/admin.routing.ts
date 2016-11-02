import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';
import { LoginComponent } from '../login/login.component';

import { AdminComponent } from './admin.component';

const ADMIN_ROUTES: Routes = [
    { path: 'admin', component: AdminComponent, children: [
        { path:'', component: AdminComponent, canActivate: [AuthGuard] },
        { path: 'login', component: LoginComponent, pathMatch: 'full' },
        { path: 'menu', loadChildren:'app/admin/menu/menu.module#MenuModule' },
        { path: 'pages', loadChildren:'app/admin/pages/page.module#PageModule' },
        
    ]}
    

]

export const adminRouting = RouterModule.forChild(ADMIN_ROUTES);