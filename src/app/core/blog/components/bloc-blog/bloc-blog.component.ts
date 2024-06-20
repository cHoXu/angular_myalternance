import {Component, Input, OnInit} from '@angular/core';
import {CardListBlogComponent} from "../card-list-blog/card-list-blog.component";
import {MenuBlogComponent} from "../menu-blog/menu-blog.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-bloc-blog',
  standalone: true,
  imports: [
    CardListBlogComponent,
    MenuBlogComponent,
    NgClass
  ],
  templateUrl: './bloc-blog.component.html',
  styleUrl: './bloc-blog.component.sass'
})
export class BlocBlogComponent implements OnInit {
  @Input() contentType!: string;

  ngOnInit(): void {
  }
}
