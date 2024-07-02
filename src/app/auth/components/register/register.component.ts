import { Component } from '@angular/core';
import {UniverseService} from "../../../shared/services/universe.service";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.sass'
})
export class RegisterComponent {
  universe!: string;
  constructor(private universeService:UniverseService) {
    this.universeService.universe$.subscribe((universe: string) => {
      this.universe = universe;
    });
  }
}
