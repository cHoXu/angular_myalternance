import { Component } from '@angular/core';
import {Location, NgClass} from "@angular/common";
import {UniverseService} from "../../../shared/services/universe.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  universe!: string;
  constructor(private universeService:UniverseService) {
    this.universeService.universe$.subscribe((universe: string) => {
      this.universe = universe;
    });
  }
}
