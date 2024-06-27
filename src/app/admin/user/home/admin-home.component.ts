import {Component} from '@angular/core';
import {AdminHeaderComponent} from "../components/admin-header/admin-header.component";
import {AdminMenuComponent} from "../components/admin-menu/admin-menu.component";
import {UniverseService} from "../../../shared/services/universe.service";
import {AdminMainComponent} from "../components/admin-main/admin-main.component";

@Component({
  selector: 'app-home-admin-user',
  standalone: true,
  imports: [
    AdminHeaderComponent,
    AdminMenuComponent,
    AdminMainComponent
  ],
  templateUrl: './admin-home.component.html',
  styleUrl: './home.component.sass'
})

export class AdminHomeComponent {
  primaryColor: string;

  constructor(private universeService:UniverseService) {
    this.primaryColor = this.universeService.getPrimaryColor();
  }
}
