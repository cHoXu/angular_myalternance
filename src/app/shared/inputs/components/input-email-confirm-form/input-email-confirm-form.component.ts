import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";
import {NgClass, NgIf} from "@angular/common";
import {EmailModel} from "../../../model/email.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-input-email-confirm-form',
  standalone: true,
  imports: [
    FormsModule,
    MatIcon,
    NgIf,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './input-email-confirm-form.component.html',
  styleUrl: './input-email-confirm-form.component.sass'
})
export class InputEmailConfirmFormComponent {
  @Input() formGroup:FormGroup
  @Input() email!: EmailModel;

  emailAddressMaster !: string;
  emailAddressSlave !: string;
  placeholder: string = "Confirme ton email: ";
  validMessage: string = "Ton email est valide ! 🎉";
  invalidMessage: string = "Ton adresse email n'est pas valide ! 😢";

  formPreview$!:Observable<{
    email: string,
    emailConfirm: string
  }>

  constructor(private formBuilder: FormBuilder) {
    if (!this.email) {
      this.emailAddressMaster = "";
    }

    this.formGroup = this.formBuilder.group(({
      emailConfirm: [this.emailAddressMaster, [Validators.required, Validators.email]]
    }));
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.formPreview$ = this.formGroup.valueChanges;
    this.formPreview$.subscribe(
      (address) => {
        this.emailAddressMaster = address.email;
        this.emailAddressSlave = address.emailConfirm
      }
    );
  }

  public isValidEmail(): boolean {
    const regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');

    return regex.test(this.emailAddressMaster)
      && this.emailAddressMaster === this.emailAddressSlave;
  }

}
