import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppPrgoramComponent } from './components/app-prgoram/app-prgoram.component';
import { ProgramsComponent } from './components/programs/programs.component';
const routes: Routes = [
  {
    path: "",
    component: ProgramsComponent
  }, 
  {
    path: "add-edit",
    component: AppPrgoramComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule {}
