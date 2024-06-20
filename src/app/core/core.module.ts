import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreRoutingModule} from "./core-routing.module";
import {UniverseService} from "../shared/services/universe.service";
import {AuthService} from "../shared/services/auth.service";
import {BlogModule} from "./blog/blog.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule,
    BlogModule
  ],
  exports: [
    BlogModule
  ],
  providers: [
    UniverseService,
    AuthService
  ]
})
export class CoreModule { }
