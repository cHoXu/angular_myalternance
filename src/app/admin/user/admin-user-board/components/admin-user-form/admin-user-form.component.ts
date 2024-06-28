import { Component } from '@angular/core';
import {LastOffersComponent} from "../../../../../core/home/components/last-offers/last-offers.component";
import {OfferComponent} from "../../../../../shared/components/offer/offer.component";

@Component({
  selector: 'app-admin-user-form',
  standalone: true,
  imports: [
    LastOffersComponent,
    OfferComponent
  ],
  templateUrl: './admin-user-form.component.html',
  styleUrl: './admin-user-form.component.sass'
})
export class AdminUserFormComponent {

}
