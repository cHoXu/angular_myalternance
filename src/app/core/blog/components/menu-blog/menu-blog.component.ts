import {Component, Input, OnInit} from '@angular/core';
import {MenusService} from "../../service/menus.service";
import {BlocEnum} from "../../enum/bloc.enum";
import {Menu} from "../../models/menu";
import {NgClass, NgForOf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-blog',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
  ],
  templateUrl: './menu-blog.component.html',
  styleUrl: './menu-blog.component.sass'
})
export class MenuBlogComponent implements OnInit {
  @Input() contentType!: string;
  menu!: Menu;

  constructor(
    private router: Router,
    private menusService: MenusService
  ) {
  }

  ngOnInit(): void {
    switch (this.contentType) {
      case BlocEnum.MAIN: case BlocEnum.PAGE_ARTICLE:
        this.menu = this.menusService.findMainBlogMenu();
        break;
      case BlocEnum.MOST_POPULAR:
        this.menu = this.menusService.findMostPopularBlogMenu();
        break;
    }
  }

  isActive(url: string) {
    return this.router.url === url;
  }
}
