import {Component} from '@angular/core';
import {UniverseService} from "../../../../shared/services/universe.service";
import {Location, NgClass} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {AdminRouteService} from "../../../services/admin-route.service";

@Component({
  selector: 'app-admin-menu',
  standalone: true,
  imports: [
    MatIcon,
    NgClass
  ],
  templateUrl: './admin-menu.component.html',
  styleUrl: './admin-menu.component.sass'
})
export class AdminMenuComponent {
  board!: string;
  universe!: string;


  constructor(
    private location: Location,
    private universeService: UniverseService,
    private adminRouteService: AdminRouteService,
  ) {
    this.adminRouteService.board$.subscribe(board => {
      this.board = board;
    });
    this.universe = universeService.getUniverse();
  }

  goBack(): void {
    this.location.back();
  }

  onChangeBoard(board:string){
    this.adminRouteService.updateRouteBoard(board);
  }
}
