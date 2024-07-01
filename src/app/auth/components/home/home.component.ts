import { Component } from '@angular/core';
import {Location, NgClass, NgIf, NgStyle, TitleCasePipe} from "@angular/common";
import {UniverseService} from "../../../shared/services/universe.service";
import {LoginComponent} from "../login/login.component";
import {MatIcon} from "@angular/material/icon";
import {RegisterComponent} from "../register/register.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgStyle,
    TitleCasePipe,
    LoginComponent,
    NgClass,
    NgIf,
    MatIcon,
    RegisterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  isSwitchBlock: boolean = true;
  espaceName!: string;
  universe!: string;
  activeForm: string = 'login';

  constructor(
    private location: Location,
    private universeService:UniverseService
  ) {
    this.universeService.universe$.subscribe((universe: string) => {
      this.universe = universe;
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

  onGoBack(): void {
    this.location.back();
  }

  onSwitchForm(form:string) {
    this.activeForm = form;
  }
  onSwitchBlock() {
    this.isSwitchBlock = !this.isSwitchBlock;
    this.universeService.updateUniverse(this.universe === 'student' ? 'company' : 'student');
  }
}
