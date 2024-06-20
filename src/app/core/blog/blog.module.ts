import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import {ArticlesService} from "./service/articles.service";
import {MenusService} from "./service/menus.service";
import {ArticleBlogComponent} from "./components/article-blog/article-blog.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ArticleBlogComponent
  ],

  providers: [
    ArticlesService,
    MenusService
  ]
})
export class BlogModule { }
