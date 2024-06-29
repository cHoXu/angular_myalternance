import {Component, Input, OnInit} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {KeywordBadgeComponent} from "../keyword-badge/keyword-badge.component";
import {Offer} from "../../model/offer";
import {DatePipe, NgForOf, TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [
    MatIcon,
    KeywordBadgeComponent,
    TitleCasePipe,
    DatePipe,
    NgForOf
  ],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.sass'
})
export class OfferComponent implements OnInit{
  @Input() offer!: Offer;

  ngOnInit(): void {

  }

}
