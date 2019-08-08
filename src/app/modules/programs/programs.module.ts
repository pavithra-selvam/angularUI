import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxsFormPluginModule } from "@ngxs/form-plugin";
import { AgGridModule } from "ag-grid-angular";
//import { PendingChangesGuard } from "./components/add-contact/can-deactivate.guard";


import { ProgramsRoutingModule } from "./programs.routing";
import { MessageService } from "primeng/api";
import { AppPrgoramComponent } from './components/app-prgoram/app-prgoram.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { TableModule } from "./../../sdk/features/table/table.module";
import { FormFieldsComponent } from "./components/form-fields/form-fields.component";
import { MasterFormModule } from "./../../sdk/features/master-form/master-form.module";
import { StylingModule } from '../../shared/styling.imports';

 
@NgModule({
  declarations: [
    ProgramsComponent,
    AppPrgoramComponent,
    FormFieldsComponent,
  ],
  imports: [
    CommonModule,
    StylingModule,
    MasterFormModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsFormPluginModule,
    TableModule,
    ProgramsRoutingModule
  ],
  providers: [MessageService]
})
export class ProgramsModule {}
