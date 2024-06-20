import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {NgClass, NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-header-blog',
  standalone: true,
  imports: [
    NgClass,
    NgStyle,
    NgIf
  ],
  templateUrl: './header-blog.component.html',
  styleUrl: './header-blog.component.sass'
})
export class HeaderBlogComponent implements OnInit {
  @Input() displayBreadcrumb: boolean = false;
  @Input() title!: string;
  @Input() contentType!: string;
  @Input() backgroundImage!: string;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    if (this.backgroundImage) {
      const headerElement = this.el.nativeElement.querySelector('.header');
      this.renderer.setStyle(headerElement, 'backgroundImage', 'url(' + this.backgroundImage + ')');
    }
  }

}
