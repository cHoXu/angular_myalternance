import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UniverseService} from "./services/universe.service";
import {AuthService} from "./services/auth.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    UniverseService,
    AuthService
  ],
  providers: [
  ]
})
export class SharedModule { }
