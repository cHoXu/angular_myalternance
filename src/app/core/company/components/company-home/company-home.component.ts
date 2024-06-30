import { Component } from '@angular/core';
import {CompanyHookComponent} from "../company-hook/company-hook.component";
import {CompanyGuidedTourComponent} from "../company-guided-tour/company-guided-tour.component";
import {CompanyOffersComponent} from "../company-offers/company-offers.component";
import {CompanySubscriptionComponent} from "../company-subscription/company-subscription.component";
import {CompanyTrustComponent} from "../company-trust/company-trust.component";

@Component({
  selector: 'app-company-home',
  standalone: true,
  imports: [
    CompanyHookComponent,
    CompanyGuidedTourComponent,
    CompanyOffersComponent,
    CompanySubscriptionComponent,
    CompanyTrustComponent
  ],
  templateUrl: './company-home.component.html',
  styleUrl: './company-home.component.sass'
})
export class CompanyHomeComponent {

}
