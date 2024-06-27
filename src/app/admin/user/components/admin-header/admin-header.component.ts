import {Component} from '@angular/core';
import {UniverseService} from "../../../../shared/services/universe.service";
import {NgStyle} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-admin-header',
  standalone: true,
  imports: [
    NgStyle,
    MatIcon
  ],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.sass'
})
export class AdminHeaderComponent {
  universe!: string;
  user_avatar_url: string ='url(/images/user/avatar/marina-navarro.png)';
  user_cover_url: string ='url(images/admin/student/admin-student-mobile-background.png)';

  constructor(universeService: UniverseService) {
    this.universe = universeService.getUniverse();
  }
}
