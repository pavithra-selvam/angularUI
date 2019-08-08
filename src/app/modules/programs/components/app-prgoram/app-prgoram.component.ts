import { Component, OnInit, HostListener } from "@angular/core";
import { Observable } from "rxjs";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { Store, Select } from "@ngxs/store";
import { Program } from "./../../../../models/program.model";
import { ComponentCanDeactivate } from "./can-deactivate.guard";
import {
  ProgramState,
  ProgramStateModel,
  defaultProgramState,
  formIdProgram
} from "./../../../../state/program/program.state";
import {
  currentDate,
  minDOBDate
} from "./../../../../shared/constants/constants";
import { ProgramFormCreator } from "./program.form";
import { MasterFormService } from "./../../../../sdk/features/master-form/services/master-form.service";
import { SubmitForm } from "../../../../sdk/features/master-form/master-form.actions";
import { CDIState } from '../../../../state/cdi/cdi.state';
import { FetchCountries } from '../../../../state/cdi/cdi.actions';
import { ConstantParsingService } from "./../../../../services/constant-parsing.service";
import { ConstantState } from "./../../../../state/constants/constants.state";
import { country } from "./../../../../shared/constants/constantTypeCodes";
import { Constant } from "./../../../../models/constant.model";

export const formRouteProgram = "/programs/add-edit";
export const formCloseNavigationRouteProgram = "/programs";
export const formTitle = "Program Information";

@Component({
  selector: 'app-app-prgoram',
  templateUrl: './app-prgoram.component.html',
  styleUrls: ['./app-prgoram.component.scss']
})
export class AppPrgoramComponent implements OnInit {

  formId: string = formIdProgram;
  formTitle: string = formTitle;
  formCloseNavigationRoute: string = formCloseNavigationRouteProgram;
  ProgramForm: FormGroup = this.programFormCreator.generateProgramForm(
    new Program()
  );
  submittingForm: boolean = false;
  formSubmitted: boolean = false;
  showNotification: string;
  notificationMessage: string;
  @Select(ProgramState.state) programState$: Observable<ProgramStateModel>;
  programState: ProgramStateModel = new ProgramStateModel();
  @Select(ConstantState.constantValues)
  constantValues$: Observable<Constant[]>;
  constantValues: Constant[] = [];
  editingProgramForm: Program;
  recordId: number | "NEW";
  curDate = new Date();
  minDOB: Date = minDOBDate;
  countryOptions;
  fieldParams = {};
  prepareDropdownOptions(list) {
    let options = [
      {
        label: "Select",
        value: ""
      }
    ];
    list.map(item => {
      options = [
        ...options,
        {
          label: item.text,
          value: item.key
        }
      ];
    });
    return options;
  }

  constructor(private programFormCreator: ProgramFormCreator,
    private store: Store,private constantService: ConstantParsingService,
    private masterFormService: MasterFormService,public router: Router,
    private messageService: MessageService) {
      this.programState$.subscribe(latestState => {
        this.editingProgramForm = latestState.programForm.model;
        this.submittingForm = latestState.submittingForm;
        this.formSubmitted = latestState.formSubmitted;
        this.recordId = this.editingProgramForm.id;
        this.showNotification = latestState.showNotification;
        this.notificationMessage = latestState.notificationMessage;
        this.programState = latestState;
      });      
      this.ProgramForm = this.programFormCreator.generateProgramForm(
        this.editingProgramForm
      );
  
      this.constantValues$.subscribe(value => {
        this.constantValues = value;
        let countries = this.constantService.getConstantValues(
          this.constantValues,
          country
        );
        this.countryOptions = this.prepareDropdownOptions(countries);
      });
   }


  /**
   * Checks whether form can be closed safely
   */
  formCanClose(): boolean {
    return this.masterFormService.formCanClose(
      this.ProgramForm,
      this.formSubmitted
    );
  }

  ngOnInit() {
    this.store.dispatch(new FetchCountries());
  }

  submitForm() {
    console.log(this.ProgramForm);
    this.masterFormService.submitForm(this.ProgramForm, this.formId);
    // (<any>Object).values(this.ContactForm.controls).forEach(control => {
    //   control.markAsDirty();
    // });

    // if (this.ContactForm.status === "INVALID") {
    //   this.validateAllFields(this.ContactForm);
    //   return;
    // }
    // this.store.dispatch(new SubmitForm(this.formId));
  }
  cancelForm() {
    this.masterFormService.cancelForm(this.formCloseNavigationRoute);
    // this.router.navigate([this.formCloseNavigationRoute]);
  }

  // @HostListener allows us to also guard against browser refresh, close, etc.
  @HostListener("window:beforeunload")
  canDeactivate(): Observable<boolean> | boolean {
    // insert logic to check if there are pending changes here;
    // returning true will navigate without confirmation
    // returning false will show a confirm dialog before navigating away
    return this.formCanClose();
  }

}
