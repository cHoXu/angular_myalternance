import {Component} from '@angular/core';
import {UniverseService} from "../../../../shared/services/universe.service";
import {Location} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-admin-menu',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './admin-menu.component.html',
  styleUrl: './admin-menu.component.sass'
})
export class AdminMenuComponent {
  universe!: string;

  constructor(
    private universeService: UniverseService,
    private location: Location
  ) {
    this.universe = universeService.getUniverse();
  }

  goBack(): void {
    this.location.back();
  }
}
