import { Component } from '@angular/core';
import {OfferComponent} from "../../../../../shared/components/offer/offer.component";
import {OfferService} from "../../../../../core/formation/services/offer.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-admin-user-offers',
  standalone: true,
  imports: [
    OfferComponent,
    NgForOf
  ],
  templateUrl: './admin-user-offers.component.html',
  styleUrl: './admin-user-offers.component.sass'
})
export class AdminUserOffersComponent {
  offers = this.offersService.offers
  constructor(private offersService: OfferService) {
  }
}
