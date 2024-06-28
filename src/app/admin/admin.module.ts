import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminRouteService} from "./services/admin-route.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
  ]
})
export class AdminModule { }
