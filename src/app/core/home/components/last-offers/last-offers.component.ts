import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {LastOffersListComponent} from "../last-offers-list/last-offers-list.component";

@Component({
  selector: 'app-last-offers',
  standalone: true,
  imports: [
    MatIcon,
    LastOffersListComponent
  ],
  templateUrl: './last-offers.component.html',
  styleUrl: './last-offers.component.sass'
})
export class LastOffersComponent {

}
