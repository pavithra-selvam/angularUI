import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

export const routes: Routes = [
  { path: "", loadChildren: "./modules/home/home.module#HomeModule" },
  {
    path: "contacts",
    loadChildren: "./modules/contacts/contacts.module#ContactsModule"
  },
  {
    path: "programs",
    loadChildren: "./modules/programs/programs.module#ProgramsModule"
  },
  {
    path: "bulk-upload",
    loadChildren: "./modules/bulk-upload/bulk-upload.module#BulkUploadModule"
  },
  {
    path: "",
    redirectTo: "",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
/**@ignore */
export class AppRoutingModule {}
