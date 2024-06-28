import { Component } from '@angular/core';
import {CardListBlogComponent} from "../../../blog/components/card-list-blog/card-list-blog.component";
import {MenuBlogComponent} from "../../../blog/components/menu-blog/menu-blog.component";
import {FormationMenuComponent} from "../formation-menu/formation-menu.component";
import {FormationCardListComponent} from "../formation-card-list/formation-card-list.component";

@Component({
  selector: 'app-formation-main',
  standalone: true,
  imports: [
    CardListBlogComponent,
    MenuBlogComponent,
    FormationMenuComponent,
    FormationCardListComponent
  ],
  templateUrl: './formation-main.component.html',
  styleUrl: './formation-main.component.sass'
})
export class FormationMainComponent {

}
