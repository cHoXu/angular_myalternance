import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OfferHomeComponent} from "./components/offer-home/offer-home.component";

const routes: Routes = [
  {path: '', component: OfferHomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersRoutingModule { }
