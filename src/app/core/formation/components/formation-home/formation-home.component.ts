import { Component } from '@angular/core';
import {BlocEnum} from "../../../blog/enum/bloc.enum";
import {FormationHeaderComponent} from "../formation-header/formation-header.component";
import {FormationMainComponent} from "../formation-main/formation-main.component";

@Component({
  selector: 'app-formation-home',
  standalone: true,
  imports: [
    FormationHeaderComponent,
    FormationMainComponent
  ],
  templateUrl: './formation-home.component.html',
  styleUrl: './formation-home.component.sass'
})
export class FormationHomeComponent {
  protected readonly MenuEnum = BlocEnum;
}
