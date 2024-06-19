import {Component, Input} from '@angular/core';
import {Article} from "../../models/article";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-card-blog',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './card-blog.component.html',
  styleUrl: './card-blog.component.sass'
})
export class CardBlogComponent {
@Input() article!: Article;
}
