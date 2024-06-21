import { Component } from '@angular/core';
import {OfferComponent} from "../../../../shared/components/offer/offer.component";

@Component({
  selector: 'app-last-offers-list',
  standalone: true,
  imports: [
    OfferComponent
  ],
  templateUrl: './last-offers-list.component.html',
  styleUrl: './last-offers-list.component.sass'
})
export class LastOffersListComponent {

}
