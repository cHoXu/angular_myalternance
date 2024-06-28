import {Component, ElementRef, Input, Renderer2} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-formation-header',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './formation-header.component.html',
  styleUrl: './formation-header.component.sass'
})
export class FormationHeaderComponent {
  @Input() title!: string;
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
