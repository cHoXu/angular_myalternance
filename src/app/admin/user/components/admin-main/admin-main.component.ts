import { Component } from '@angular/core';
import {AdminUserProfilComponent} from "../admin-user-profil/admin-user-profil.component";
import {BoardComponent} from "../../admin-user-board/components/board/board.component";

@Component({
  selector: 'app-admin-main',
  standalone: true,
  imports: [
    AdminUserProfilComponent,
    BoardComponent
  ],
  templateUrl: './admin-main.component.html',
  styleUrl: './admin-main.component.sass'
})
export class AdminMainComponent {

}
