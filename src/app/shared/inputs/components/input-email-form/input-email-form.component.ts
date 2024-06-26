import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AsyncPipe, NgClass, NgIf, NgStyle} from "@angular/common";
import {Observable} from "rxjs";
import {EmailModel} from "../../../model/email.model";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-input-email-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass,
    NgIf,
    AsyncPipe,
    MatIcon,
    NgStyle
  ],
  templateUrl: './input-email-form.component.html',
  styleUrl: './input-email-form.component.sass'
})
export class InputEmailFormComponent implements OnInit, OnDestroy {
  @Input() formGroup:FormGroup
  @Input() email!: EmailModel;

  emailAddress !: string;
  isEmailUpdatable: boolean = false;
  placeholder: string = "Ton adresse email: ";
  validMessage: string = "Ton email est valide ! 🎉";
  invalidMessage: string = "S'il te plaît, choisis une adresse email valide ! 😢";

  formPreview$!:Observable<{ email: string }>

  constructor(private formBuilder: FormBuilder) {
    if (!this.email) {
      this.emailAddress = "";
    }

    this.formGroup = this.formBuilder.group(({
      email: [this.emailAddress, [Validators.required, Validators.email]]
    }));
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.formPreview$ = this.formGroup.valueChanges;
    this.formPreview$.subscribe(
      (address) => {
        this.emailAddress = address.email;
        this.placeholder = this.emailAddress;
        if (!address.email || address.email === "") {
          this.placeholder = "Ton adresse email: ";
        }
        this.isEmailUpdatable = false;
      }
    );
  }

  public isValidEmail(): boolean {
    const regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');

    return regex.test(this.emailAddress);
  }

  public onUpdateEmail() {
    this.isEmailUpdatable = true
  }

}
