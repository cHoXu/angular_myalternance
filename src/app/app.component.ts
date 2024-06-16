import {Component, ViewEncapsulation} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  encapsulation: ViewEncapsulation.Emulated // or ViewEncapsulation.Native or ViewEncapsulation.ShadowDom

})
export class AppComponent {
  title = 'myalternance';
}
