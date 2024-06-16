import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import {UniverseService} from "../shared/services/universe.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ErrorRoutingModule
  ],
  providers: [
    UniverseService
  ]
})
export class ErrorModule { }
