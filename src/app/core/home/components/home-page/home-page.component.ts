import { Component } from '@angular/core';
import {MatGridListModule} from "@angular/material/grid-list";
import {HookUniverseComponent} from "../hook-universe/hook-universe.component";
import {HookStudentComponent} from "../hook-student/hook-student.component";
import {LastOffersComponent} from "../last-offers/last-offers.component";
import {StudentSubscriptionBlockComponent} from "../student-subscription-block/student-subscription-block.component";
import {HookCompanyComponent} from "../hook-company/hook-company.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatGridListModule,
    HookUniverseComponent,
    HookStudentComponent,
    LastOffersComponent,
    StudentSubscriptionBlockComponent,
    HookCompanyComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.sass'
})
export class HomePageComponent {

}
