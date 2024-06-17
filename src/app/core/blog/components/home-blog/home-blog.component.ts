import { Component } from '@angular/core';
import {HeaderComponent} from "../../../components/header/header.component";

@Component({
  selector: 'app-home-blog',
  standalone: true,
    imports: [
        HeaderComponent
    ],
  templateUrl: './home-blog.component.html',
  styleUrl: './home-blog.component.sass'
})
export class HomeBlogComponent {

}
