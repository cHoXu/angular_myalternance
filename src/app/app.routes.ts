import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
  { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
  { path: 'auth' , loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  { path: 'blog' , loadChildren: () => import('./core/blog/blog.module').then(m => m.BlogModule)},
  { path: '**', redirectTo: 'error' }
];
