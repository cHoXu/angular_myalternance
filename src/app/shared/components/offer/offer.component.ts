import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {KeywordBadgeComponent} from "../keyword-badge/keyword-badge.component";

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [
    MatIcon,
    KeywordBadgeComponent
  ],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.sass'
})
export class OfferComponent {

}
