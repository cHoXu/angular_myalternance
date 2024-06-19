import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import {ArticlesService} from "./service/articles.service";
import {MenusService} from "./service/menus.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BlogRoutingModule,
  ],
  providers: [
    ArticlesService,
    MenusService
  ]
})
export class BlogModule { }
