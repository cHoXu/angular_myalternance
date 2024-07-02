import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {OfferComponent} from "../../../../shared/components/offer/offer.component";
import {OfferService} from "../../../formation/services/offer.service";
import {Offer} from "../../../../shared/model/offer";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-last-offers-list',
  standalone: true,
  imports: [
    OfferComponent,
    NgForOf
  ],
  templateUrl: './last-offers-list.component.html',
  styleUrl: './last-offers-list.component.sass'
})
export class LastOffersListComponent implements AfterViewInit {
  @ViewChild('offersScroll') offersScroll!: ElementRef;
  lastOffers!: Offer[];
  constructor(private offerService: OfferService) {
    this.lastOffers = this.offerService.findLatestOffers();
  }

  ngAfterViewInit(): void {
    this.offersScroll.nativeElement.scrollLeft = 100;
  }
}
