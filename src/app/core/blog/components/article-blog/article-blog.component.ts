import {Component, OnInit} from '@angular/core';
import {BlocEnum} from "../../enum/bloc.enum";
import {HeaderBlogComponent} from "../header-blog/header-blog.component";
import {BlocBlogComponent} from "../bloc-blog/bloc-blog.component";
import {MenuBlogComponent} from "../menu-blog/menu-blog.component";
import {NgClass, TitleCasePipe} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {ArticlesService} from "../../service/articles.service";
import {Article} from "../../models/article";

@Component({
  selector: 'app-article-blog',
  standalone: true,
  imports: [
    HeaderBlogComponent,
    BlocBlogComponent,
    MenuBlogComponent,
    NgClass,
    TitleCasePipe
  ],
  templateUrl: './article-blog.component.html',
  styleUrl: './article-blog.component.sass'
})
export class ArticleBlogComponent implements OnInit {
  protected readonly BlocEnum = BlocEnum;
  article!: Article;

  constructor(
    private route:ActivatedRoute,
    private articlesService: ArticlesService
  ) {

  }
  ngOnInit(): void {
    const cardId = this.route.snapshot.params['id'];
    this.article = this.articlesService.findArticle(cardId);
  }


}
