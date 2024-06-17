import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {MenuConnectionComponent} from "./components/menu-connection/menu-connection.component";
import {MainMenuComponent} from "./components/main-menu/main-menu.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    MenuConnectionComponent,
    MainMenuComponent,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent  {
  isMenuOpen = false;

  onOpenMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
