import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AdminUserFormComponent} from "../admin-user-form/admin-user-form.component";
import {NgClass, NgIf} from "@angular/common";
import {AdminUserOffersComponent} from "../admin-user-offers/admin-user-offers.component";
import {AdminRouteService} from "../../../../services/admin-route.service";

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    AdminUserFormComponent,
    NgIf,
    AdminUserOffersComponent,
    NgClass
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.sass'
})
export class BoardComponent implements OnInit {
  board!:string;

  constructor(private adminRouteService: AdminRouteService) {
    this.adminRouteService.board$.subscribe(board => {
      this.board = board;
    });
  }
  ngOnInit(): void {
    this.adminRouteService.board$.subscribe(board => {
      this.board = board;
    });
  }

  onChangeBoard(board:string){
    this.adminRouteService.updateRouteBoard(board);
  }

}
