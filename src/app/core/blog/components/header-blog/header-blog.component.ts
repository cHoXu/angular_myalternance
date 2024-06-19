import { Component } from '@angular/core';
import {NgClass, NgStyle} from "@angular/common";

@Component({
  selector: 'app-header-blog',
  standalone: true,
  imports: [
    NgClass,
    NgStyle
  ],
  templateUrl: './header-blog.component.html',
  styleUrl: './header-blog.component.sass'
})
export class HeaderBlogComponent {
}
