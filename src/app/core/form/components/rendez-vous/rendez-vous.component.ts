import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {RendezVousModel} from "../../models/rendez-vous.model";
import {StatusEnum} from "../../../../shared/enum/status.enum";
import {ClientModel} from "../../models/client.model";
import {PrestationModel} from "../../../../shared/model/prestation.model";
import {PersonModel} from "../../../../shared/model/person.model";
import {LocationModel} from "../../../../shared/model/location.model";
import {PhoneModel} from "../../../../shared/model/phone.model";
import {EmailModel} from "../../../../shared/model/email.model";
import {AddressModel} from "../../../../shared/model/address.model";
import {ProductModel} from "../../../../shared/model/product.model";
import {PriceModel} from "../../../../shared/model/price.model";
import {DurationModel} from "../../../../shared/model/duration.model";
import {WarningModel} from "../../models/warning.model";
import { MatIconModule} from "@angular/material/icon";
import {NgClass, TitleCasePipe, UpperCasePipe} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {
  AccordionEmailComponent
} from "../../../../shared/accordion/item/components/accordion-email/accordion-email.component";

@Component({
  selector: 'app-rendez-vous',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatIconModule,
    TitleCasePipe,
    NgClass,
    UpperCasePipe,
    MatInputModule,
    MatFormFieldModule,
    AccordionEmailComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './rendez-vous.component.html',
  styleUrl: './rendez-vous.component.sass'
})
export class RendezVousComponent implements OnInit {
  title = 'Prise de Rendez-vous';
  rdv: RendezVousModel = this.getRdv();
  rdvForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) { }
  ngOnInit(): void {
    this.initFormControls();
    this.initMainForm();
  }

  private initMainForm(): void {
  }

  private initFormControls(): void {
    this.rdvForm = this.formBuilder.group({});
  }

  private getRdv(): RendezVousModel {
    return new RendezVousModel(
      1,
      StatusEnum.INFO,
      new ClientModel(1,
        StatusEnum.SUCCESS,
        new PersonModel(1,
          'john.doe',
          'Doe',
          'John',
          new EmailModel('john@example.com'),
          new PhoneModel(1, '33', '1234567890'),
          new LocationModel(1,
            'Chez moi',
            new AddressModel(1,
              'Paris',
              '21op4',
              '4',
              'rue de la République',
              'France',
              '104',
              '75008',
              '124',
              'a13'
            )
          ),
        ),
      ),
      new Date(),
      [
        new PrestationModel(1, 0,
          "Rendez-vous Premium",
          new Date(),
          "Profitez d’un rendez-vous Premium pour bénéficier de conseils personnalisés " +
          "et de recommandations adaptées à vos besoins.",
          new ProductModel(1,
            "Abonnement Premium Mensuel",
            new PriceModel(1, 2.99, '€'),
            "Mettez toutes les chances de votre côté en passant à l’abonnement Premium.",
          ),
          new LocationModel(2, "En déplacement",
            new AddressModel(2,
              'Paris',
              "tr45jh",
              '1',
              'Boulevard Haussmann',
              'France',
              '12',
              '75003',
              '478',
              '244'
            )
          ),
          new DurationModel(1, 'h', 1),
          [
            new WarningModel(1, 'all', "Réservé aux abonnés Premium",
              new Date(2025, 12, 31),
              new Date(2022, 12, 31),
              "Cette prestation est réservée aux abonnés Premium ayant souscrit à l’option FULL."
            ),
            new WarningModel(2, '2024-08-24', "Les Jeux Olympiques de Paris 2024 sont là",
              new Date(2025, 12, 31),
              new Date(2022, 12, 31),
              "Priviliégiez la mobilité douce pour vous rendre à votre rendez-vous."
            ),
          ]
        ),
        new PrestationModel(2, 47.50,
          "Les premiers pas",
          new Date(),
          "Mettez toutes les chances de votre côté. Le dossier de candidature " +
          "est un élément clé de votre candidature. Apprenez à le rédiger et à le valoriser.",
          new ProductModel(1,
            "Abonnement Premium Mensuel",
            new PriceModel(1, 2.99, '€'),
            "Mettez toutes les chances de votre côté en passant à l’abonnement Premium.",
          ),
          new LocationModel(2, "Domicile",
            new AddressModel(3,
              'Paris',
              "54j2",
              '8',
              'Avenue Victoria',
              'France',
              '2',
              '75016',
              '14',
              '1'
            )
          ),
          new DurationModel(2, 'h', 2),
          [
            new WarningModel(3, 'all', "Réservé aux abonnés Premium",
              new Date(2025, 12, 31),
              new Date(2023, 4, 7),
              "Cette prestation est réservée aux abonnés Premium."
            ),
            new WarningModel(2, '2024-08-24', "Les Jeux Olympiques de Paris 2024 sont là",
              new Date(2025, 12, 31),
              new Date(2022, 12, 31),
              "Priviliégiez la mobilité douce pour vous rendre à votre rendez-vous."
            ),
          ]
        ),
      ],
    );
}

}
