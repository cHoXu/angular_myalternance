import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RendezVousComponent} from "./components/rendez-vous/rendez-vous.component";

const routes: Routes = [
  { path: '', component: RendezVousComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
