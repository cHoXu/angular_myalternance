import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormationHomeComponent} from "./components/formation-home/formation-home.component";

const routes: Routes = [
  {path: '', component: FormationHomeComponent},
  //{path: 'formation/:id', component: ArticleBlogComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationRoutingModule { }
