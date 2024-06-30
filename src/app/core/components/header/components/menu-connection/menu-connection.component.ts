import {Component, OnInit} from '@angular/core';
import {UniverseService} from "../../../../../shared/services/universe.service";
import {NgClass} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-menu-connection',
  standalone: true,
  imports: [
    NgClass,
    MatIcon,
    RouterLink
  ],
  templateUrl: './menu-connection.component.html',
  styleUrl: './menu-connection.component.sass'
})
export class MenuConnectionComponent implements OnInit {
  universe!: string;
  constructor(
    private universeService: UniverseService
  ) {
    this.universeService.universe$.subscribe(universe => {
      this.universe = universe;
    });
  }
  ngOnInit(): void {

  }
}
