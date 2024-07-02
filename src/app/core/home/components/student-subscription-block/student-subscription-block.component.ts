import { Component } from '@angular/core';
import {
  SubscriptionOfferCardComponent
} from "../../../components/subscription-offer-card/subscription-offer-card.component";

@Component({
  selector: 'app-student-subscription-block',
  standalone: true,
  imports: [
    SubscriptionOfferCardComponent
  ],
  templateUrl: './student-subscription-block.component.html',
  styleUrl: './student-subscription-block.component.sass'
})
export class StudentSubscriptionBlockComponent {

}
