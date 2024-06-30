import {Component, Input} from '@angular/core';
import {Offer} from "../../../../shared/model/offer";
import {NgForOf, TitleCasePipe} from "@angular/common";
import {KeywordBadgeComponent} from "../../../../shared/components/keyword-badge/keyword-badge.component";

@Component({
  selector: 'app-offer-modal',
  standalone: true,
  imports: [
    TitleCasePipe,
    NgForOf,
    KeywordBadgeComponent
  ],
  templateUrl: './offer-modal.component.html',
  styleUrl: './offer-modal.component.sass'
})
export class OfferModalComponent {
  @Input() offer!: Offer
}
