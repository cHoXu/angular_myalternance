import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home/components/home-page/home-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'blog' , loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)},
  { path: 'formations' , loadChildren: () => import('./formation/formation.module').then(m => m.FormationModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
