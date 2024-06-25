import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputEmailFormComponent} from "../input-email-form/input-email-form.component";

@Component({
  selector: 'app-input-form-example',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputEmailFormComponent
  ],
  templateUrl: './input-form-example.component.html',
  styleUrl: './input-form-example.component.sass'
})
export class InputFormExampleComponent {
  formGroup:FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]]
    });
  }
}
