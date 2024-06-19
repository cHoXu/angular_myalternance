import {Component, Input, OnInit} from '@angular/core';
import {MenusService} from "../../service/menus.service";
import {BlocEnum} from "../../enum/bloc.enum";
import {Menu} from "../../models/menu";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-menu-blog',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './menu-blog.component.html',
  styleUrl: './menu-blog.component.sass'
})
export class MenuBlogComponent implements OnInit {
  @Input() contentType!: string;
  menu!: Menu;

  constructor(
    private menusService: MenusService
  ) {
  }

  ngOnInit(): void {
    switch (this.contentType) {
      case BlocEnum.MAIN:
        this.menu = this.menusService.findMainBlogMenu();
        break;
      case BlocEnum.MOST_POPULAR:
        this.menu = this.menusService.findMostPopularBlogMenu();
        break;
    }
  }
}
