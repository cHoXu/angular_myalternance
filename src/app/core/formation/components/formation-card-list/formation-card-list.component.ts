import { Component } from '@angular/core';
import {Formation} from "../../models/formation";
import {FormationService} from "../../services/formation.service";
import {NgForOf} from "@angular/common";
import {FormationCardComponent} from "../formation-card/formation-card.component";

@Component({
  selector: 'app-formation-card-list',
  standalone: true,
  imports: [
    NgForOf,
    FormationCardComponent
  ],
  templateUrl: './formation-card-list.component.html',
  styleUrl: './formation-card-list.component.sass'
})
export class FormationCardListComponent {
  formations!:Formation[];
  constructor(private formationService: FormationService) {
    this.formations = this.formationService.findFormations();
  }
}
