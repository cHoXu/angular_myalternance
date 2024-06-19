import { Component } from '@angular/core';
import {HeaderComponent} from "../../../components/header/header.component";
import {MenuBlogComponent} from "../menu-blog/menu-blog.component";
import {CardBlogComponent} from "../card-blog/card-blog.component";
import {CardListBlogComponent} from "../card-list-blog/card-list-blog.component";
import {HeaderBlogComponent} from "../header-blog/header-blog.component";
import {BlocBlogComponent} from "../bloc-blog/bloc-blog.component";
import {BlocEnum} from "../../enum/bloc.enum";

@Component({
  selector: 'app-home-blog',
  standalone: true,
  imports: [
    HeaderComponent,
    MenuBlogComponent,
    CardBlogComponent,
    CardListBlogComponent,
    HeaderBlogComponent,
    BlocBlogComponent
  ],
  templateUrl: './home-blog.component.html',
  styleUrl: './home-blog.component.sass'
})
export class HomeBlogComponent {

    protected readonly MenuEnum = BlocEnum;
}
