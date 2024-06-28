import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminUserFormComponent} from "./components/admin-user-form/admin-user-form.component";

const routes: Routes = [
  {path: '', component: AdminUserFormComponent, outlet: 'user-admin-board'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminUserBoardRoutingModule { }
