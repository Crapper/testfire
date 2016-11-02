import { Routes, RouterModule } from '@angular/router';
import { AuthGuard }            from './auth/auth-guard.service';




export const routes: Routes = [
 

  { path: '**', loadChildren:'app/public/public.module#PublicModule'},
  
  
  { path: 'admin', loadChildren:'app/admin/admin.module#AdminModule' }
  
];

export const routing = RouterModule.forRoot(routes);