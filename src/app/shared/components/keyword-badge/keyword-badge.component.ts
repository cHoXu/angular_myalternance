import {Component, Input} from '@angular/core';
import {Keyword} from "../../model/keyword";

@Component({
  selector: 'app-keyword-badge',
  standalone: true,
  imports: [],
  templateUrl: './keyword-badge.component.html',
  styleUrl: './keyword-badge.component.sass'
})
export class KeywordBadgeComponent {
 @Input() keyword!: Keyword;
}
