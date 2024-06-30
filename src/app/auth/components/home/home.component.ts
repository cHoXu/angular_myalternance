import { Component } from '@angular/core';
import {NgStyle, TitleCasePipe} from "@angular/common";
import {UniverseService} from "../../../shared/services/universe.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgStyle,
    TitleCasePipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  isSwitchBlock: boolean = true;
  espaceName!: string;

  constructor(private universeService:UniverseService) {
    this.universeService.universe$.subscribe((universe: string) => {
      switch (universe) {
        case 'student':
          this.espaceName = 'étudiant';
          break;
        case 'company':
          this.espaceName = 'entreprise';
          break;
      }
    });
  }
  onSwitchBlock() {
    this.isSwitchBlock = !this.isSwitchBlock;
  }
}
