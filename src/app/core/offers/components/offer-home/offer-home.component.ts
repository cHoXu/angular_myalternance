import { Component } from '@angular/core';
import {OfferMenuComponent} from "../offer-menu/offer-menu.component";
import {OfferListComponent} from "../offer-list/offer-list.component";

@Component({
  selector: 'app-offer-home',
  standalone: true,
  imports: [
    OfferMenuComponent,
    OfferListComponent
  ],
  templateUrl: './offer-home.component.html',
  styleUrl: './offer-home.component.sass'
})
export class OfferHomeComponent {

}
