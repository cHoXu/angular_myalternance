import {Component, Input} from '@angular/core';
import {Formation} from "../../models/formation";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-formation-card',
  standalone: true,
  imports: [
    NgClass,
    NgIf
  ],
  templateUrl: './formation-card.component.html',
  styleUrl: './formation-card.component.sass'
})
export class FormationCardComponent {
  @Input() formation!: Formation;
}
