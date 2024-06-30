import { Component } from '@angular/core';
import {Offer} from "../../../../shared/model/offer";
import {OfferService} from "../../../formation/services/offer.service";
import {CardBlogComponent} from "../../../blog/components/card-blog/card-blog.component";
import {NgForOf} from "@angular/common";

import {OfferComponent} from "../../../../shared/components/offer/offer.component";

@Component({
  selector: 'app-offer-list',
  standalone: true,
  imports: [
    CardBlogComponent,
    NgForOf,
    OfferComponent
  ],
  templateUrl: './offer-list.component.html',
  styleUrl: './offer-list.component.sass'
})
export class OfferListComponent {
  offers!: Offer[];

  constructor(private offerService: OfferService) {
    this.offers = this.offerService.findOffers();
  }
}
