import { Component } from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  isSwitchBlock: boolean = true;
  onSwitchBlock() {
    this.isSwitchBlock = !this.isSwitchBlock;
  }
}
