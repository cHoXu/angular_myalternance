import { Component } from '@angular/core';
import {UniverseService} from "../../../../../shared/services/universe.service";
import {NgClass} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [
    NgClass,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.sass'
})
export class MainMenuComponent {
  universe!: string;
  menuItems = [
    {name: "Blog", link: '/blog', ariaLabel: 'Le Blog'},
    {name: "Offres d'alternance", link: '/alternance', ariaLabel: "Les offres d'alternance"},
    {name: "Entreprise", link: '/entreprise', ariaLabel: "Espace entreprise"},
    {name: "Formations", link: '/formations', ariaLabel: "Les formations"},
  ];
  constructor(private universeService: UniverseService) {
    this.universe = this.universeService.getUniverse();
  }
}
