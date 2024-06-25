import { Routes } from '@angular/router';
import {InputFormExampleComponent} from "./shared/inputs/components/input-form-example/input-form-example.component";

export const routes: Routes = [
  { path: '', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
  { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
  { path: 'auth' , loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  { path: 'blog' , loadChildren: () => import('./core/blog/blog.module').then(m => m.BlogModule)},
  { path: 'formulaire' , loadChildren: () => import('./core/form/form.module').then(m => m.FormModule)},
  { path: 'formulaire/example' , component: InputFormExampleComponent},
  { path: '**', redirectTo: 'error' }
];
