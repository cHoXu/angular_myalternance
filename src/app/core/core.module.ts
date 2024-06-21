import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreRoutingModule} from "./core-routing.module";
import {UniverseService} from "../shared/services/universe.service";
import {AuthService} from "../shared/services/auth.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule,
  ],
  exports: [
  ],
  providers: [
    UniverseService,
    AuthService
  ]
})
export class CoreModule { }
