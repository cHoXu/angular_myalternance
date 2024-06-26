import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputEmailFormComponent} from "../input-email-form/input-email-form.component";
import {InputEmailConfirmFormComponent} from "../input-email-confirm-form/input-email-confirm-form.component";

@Component({
  selector: 'app-input-form-example',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputEmailFormComponent,
    InputEmailConfirmFormComponent
  ],
  templateUrl: './input-form-example.component.html',
  styleUrl: './input-form-example.component.sass'
})
export class InputFormExampleComponent implements OnInit, AfterViewInit {
  formGroup:FormGroup;
  isValid: boolean = false;
  emailAddressConfirm: string = "";
  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      emailConfirm: [null, [Validators.required, Validators.email]],
    });
  }

  @ViewChild('emailInputMaster')
  emailInputMaster!: InputEmailFormComponent;
  ngAfterViewInit(): void {
    this.formGroup.valueChanges.subscribe(
      (formValues) => {
        this.isValid = formValues.email === formValues.emailConfirm
        && this.emailInputMaster.isValidEmail()
        && this.isValidEmail(formValues.emailConfirm);
      }
    )
  }

  ngOnInit(): void {
  }

  public isValidEmail(email:string): boolean {
    const regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');

    return regex.test(email);
  }

}
