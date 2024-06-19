import {Component, Input, OnInit} from '@angular/core';
import {CardBlogComponent} from "../card-blog/card-blog.component";
import {ArticlesService} from "../../service/articles.service";
import {BlocEnum} from "../../enum/bloc.enum";
import {Article} from "../../models/article";
import {NgClass, NgForOf} from "@angular/common";
import {MenusService} from "../../service/menus.service";

@Component({
  selector: 'app-card-list-blog',
  standalone: true,
  imports: [
    CardBlogComponent,
    NgForOf,
    NgClass
  ],
  templateUrl: './card-list-blog.component.html',
  styleUrl: './card-list-blog.component.sass'
})
export class CardListBlogComponent implements OnInit {
  @Input() contentType!: string;
  articles!: Article[];
  menuTitle!: string;

  constructor(
    private menusService: MenusService,
    private articlesService: ArticlesService
  ) {
  }
  ngOnInit(): void {
    switch (this.contentType) {
      case BlocEnum.MAIN:
        this.articles = this.articlesService.findArticles()
        this.menuTitle = this.menusService.findMenuTitleByMenuEnum(BlocEnum.MAIN)
        break;
      case BlocEnum.MOST_POPULAR:
        this.articles = this.articlesService.findMostPopularArticles()
        this.menuTitle = this.menusService.findMenuTitleByMenuEnum(BlocEnum.MOST_POPULAR)
        break;
    }
  }

  protected readonly BlocEnum = BlocEnum;
}
