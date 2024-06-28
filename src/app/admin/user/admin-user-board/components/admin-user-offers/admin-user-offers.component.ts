import { Component } from '@angular/core';
import {OfferComponent} from "../../../../../shared/components/offer/offer.component";

@Component({
  selector: 'app-admin-user-offers',
  standalone: true,
    imports: [
        OfferComponent
    ],
  templateUrl: './admin-user-offers.component.html',
  styleUrl: './admin-user-offers.component.sass'
})
export class AdminUserOffersComponent {

}
