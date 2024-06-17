import {Component, OnInit} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {UniverseService} from "../../../shared/services/universe.service";
import {NgClass} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-error404',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    NgClass,
    RouterLink
  ],
  templateUrl: './error404.component.html',
  styleUrl: './error404.component.sass'
})
export class Error404Component implements OnInit {
  universe!: string;

  constructor(private universeService: UniverseService) {
  }

  ngOnInit(): void {
    this.universe = this.universeService.getUniverse();
  }
}
