import {Component, Input, OnInit} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {EmailModel} from "../../../../model/email.model";
import {NgIf} from "@angular/common";
import {InputEmailFormComponent} from "../../../../inputs/components/input-email-form/input-email-form.component";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-accordion-email',
  standalone: true,
  imports: [
    MatIcon,
    NgIf,
    InputEmailFormComponent,
    ReactiveFormsModule
  ],
  templateUrl: './accordion-email.component.html',
  styleUrl: './accordion-email.component.sass'
})
export class AccordionEmailComponent implements OnInit {

  @Input() email!: EmailModel;
  @Input() formGroup:FormGroup

  emailInForm: string = "";
  confirmEmailInForm: string = "";

  formPreview$!:Observable<{
    email: string,
    confirmEmail: string,
  }>

  constructor(private formBuilder: FormBuilder) {

    if (this.email) {
      this.emailInForm = this.email.address;
      if (this.email.isValidEmail()) {
        this.confirmEmailInForm = this.email.address;
      }
    }

    this.formGroup = this.formBuilder.group(({
      email: [[], [Validators.required, Validators.email]],
      confirmEmail: [[], [Validators.required, Validators.email]]
    }));
  }

  ngOnInit(): void {
    this.formPreview$ = this.formGroup.valueChanges;
    this.formPreview$.subscribe(formPreview => {
      this.emailInForm = formPreview.email
      }
    );
  }

}
