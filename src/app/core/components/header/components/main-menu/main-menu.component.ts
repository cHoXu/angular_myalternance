import {Component} from '@angular/core';
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
    {name: "Blog", link: '/blog', ariaLabel: 'Le Blog', universe: 'student'},
    {name: "Offres d'alternance", link: '/alternance', ariaLabel: "Les offres d'alternance", universe: 'student'},
    {name: "Entreprise", link: '/company', ariaLabel: "Espace entreprise", universe: 'company'},
    {name: "Formations", link: '/formations', ariaLabel: "Les formations", universe: 'student'},
  ];
  constructor(private universeService: UniverseService) {
    this.universeService.universe$.subscribe(universe => {
      this.universe = universe;
    });
  }

  onUniversChange(universe: string) {
    this.universeService.updateUniverse(universe);
  }

}
