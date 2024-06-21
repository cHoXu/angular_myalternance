import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeBlogComponent} from "./blog/components/home-blog/home-blog.component";
import {HomePageComponent} from "./home/components/home-page/home-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'blog', component: HomeBlogComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
