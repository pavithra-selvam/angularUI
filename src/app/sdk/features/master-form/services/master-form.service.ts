import { Injectable } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Store } from "@ngxs/store";
import { Router } from "@angular/router";
import { SubmitForm } from "../master-form.actions";

@Injectable()
export class MasterFormService {
  /**
   * Checks whether form can be closed safely
   */
  formCanClose(Form: FormGroup, formSubmitted: boolean): boolean {
    if ((Form.touched && formSubmitted) || !Form.touched) {
      return true;
    } else return false;
  }
  validateAllFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFields(control);
      }
    });
  }
  submitForm(form, formId) {
    console.log('form data',form);
    (<any>Object).values(form.controls).forEach(control => {
      control.markAsDirty();
    });

    if (form.status === "INVALID") {
      this.validateAllFields(form);
      return;
    }
    this.store.dispatch(new SubmitForm(formId));
  }
  cancelForm(cancelRoute) {
    this.router.navigate([cancelRoute]);
  }

  constructor(private store: Store, private router: Router) {}
}
