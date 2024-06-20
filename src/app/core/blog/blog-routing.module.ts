import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeBlogComponent} from "./components/home-blog/home-blog.component";
import {ArticleBlogComponent} from "./components/article-blog/article-blog.component";

const routes: Routes = [
  {path: '', component: HomeBlogComponent},
  {path: 'article/:id', component: ArticleBlogComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
