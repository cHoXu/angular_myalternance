import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./core/components/header/header.component";
import {HeaderBlogComponent} from "./core/blog/components/header-blog/header-blog.component";
import {NgIf} from "@angular/common";
import {FooterComponent} from "./core/components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeaderBlogComponent, NgIf, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent implements OnInit {
  title = 'myalternance';
  curUrl !: string;

  constructor(private router:Router) {
    this.curUrl = this.router.url;
  }

  ngOnInit() {
    // Subscribe to the NavigationEnd event
    this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.curUrl = event.url;
        }
    });
  }

  isIndependentPage() {
    return this.curUrl === '/error'
    || this.curUrl === '/auth'
    || this.curUrl === '/admin/user';
  }

}
