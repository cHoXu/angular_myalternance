import {Injectable} from "@angular/core";
import {Offer} from "../../../shared/model/offer";
import {Publisher} from "../../../shared/model/publisher";
import {Keyword} from "../../../shared/model/keyword";
import {AddressModel} from "../../../shared/model/address.model";

@Injectable()
export class OfferService {
  offers: Offer[] = [
    new Offer(
      1,
      '2021-02-01',
      'Développeur Web',
      'Google',
      '/images/icon/google-icon-transparent.png',
      new Publisher(
        1,
        'LinkedIn',
        '/images/publisher/linkedin-logo.png',
        'LinkedIn est un réseau social professionnel en ligne'
      ),
      false,
      [
        new Keyword(1,'Communication', null, "Domaine d'activité"),
        new Keyword(2,'Master 1', null, "Niveau d'étude"),
        new Keyword(3,'Paris', null, "Lieu"),
        new Keyword(4,'2 ans', null, "Expérience"),
        new Keyword(5,'2021-02-01', null, "Date de publication")
      ],
      new AddressModel(
        10,
        'Rennes',
        '35000',
        null,
        'Place de la République',
        'France',
        null,
        '35000',
        null,
        null
      )
    ),

    new Offer(
      2,
      '2021-03-15',
      'Data Analyst',
      'Facebook',
      '/images/icon/facebook-icon-transparent.png',
      new Publisher(
        2,
        'Indeed',
        '/images/publisher/indeed-logo.png',
        'Indeed est un moteur de recherche d\'emploi'
      ),
      false,
      [
        new Keyword(1,'Analyse de données', null, "Domaine d'activité"),
        new Keyword(2,'Master 2', null, "Niveau d'étude"),
        new Keyword(3,'Lyon', null, "Lieu"),
        new Keyword(4,'3 ans', null, "Expérience"),
        new Keyword(5,'2021-03-15', null, "Date de publication")
      ],
      new AddressModel(
        20,
        'Lyon',
        '69000',
        null,
        'Rue de la République',
        'France',
        null,
        '69000',
        null,
        null
      )
    ),

    new Offer(
      3,
      '2021-04-10',
      'Chef de Projet',
      'Amazon',
      '/images/icon/amazon-icon-transparent.png',
      new Publisher(
        3,
        'Exclusivité',
        '/images/icon/company-icon_clearBlue500.png',
        'Monster est un site d\'emploi'
      ),
      false,
      [
        new Keyword(1,'Gestion de projet', null, "Domaine d'activité"),
        new Keyword(2,'Master 2', null, "Niveau d'étude"),
        new Keyword(3,'Marseille', null, "Lieu"),
        new Keyword(4,'5 ans', null, "Expérience"),
        new Keyword(5,'2021-04-10', null, "Date de publication")
      ],
      new AddressModel(
        30,
        'Marseille',
        '13000',
        null,
        'La Canebière',
        'France',
        null,
        '13000',
        null,
        null
      )
    ),

    new Offer(
      4,
      '2021-05-20',
      'Consultant en Sécurité',
      'Microsoft',
      '/images/icon/microsoft-icon-transparent.png',
      new Publisher(
        4,
        'Apec',
        '/images/publisher/apec-logo.png',
        'Apec est une association pour l\'emploi des cadres'
      ),
      false,
      [
        new Keyword(1,'Sécurité informatique', null, "Domaine d'activité"),
        new Keyword(2,'Master 2', null, "Niveau d'étude"),
        new Keyword(3,'Bordeaux', null, "Lieu"),
        new Keyword(4,'4 ans', null, "Expérience"),
        new Keyword(5,'2021-05-20', null, "Date de publication")
      ],
      new AddressModel(
        40,
        'Bordeaux',
        '33000',
        null,
        'Cours de l\'Intendance',
        'France',
        null,
        '33000',
        null,
        null
      )
    ),

    new Offer(
      5,
      '2021-06-01',
      'Ingénieur DevOps',
      'IBM',
      '/images/icon/ibm-icon-transparent.png',
      new Publisher(
        5,
        'Keljob',
        '/images/publisher/keljob-logo.png',
        'Keljob est un site d\'emploi'
      ),
      false,
      [
        new Keyword(1,'DevOps', null, "Domaine d'activité"),
        new Keyword(2,'Master 1', null, "Niveau d'étude"),
        new Keyword(3,'Nantes', null, "Lieu"),
        new Keyword(4,'3 ans', null, "Expérience"),
        new Keyword(5,'2021-06-01', null, "Date de publication")
      ],
      new AddressModel(
        50,
        'Nantes',
        '44000',
        null,
        'Rue Crébillon',
        'France',
        null,
        '44000',
        null,
        null
      )
    ),

    new Offer(
      6,
      '2021-07-15',
      'Architecte Logiciel',
      'Apple',
      '/images/icon/apple-icon-transparent.png',
      new Publisher(
        6,
        'Pôle Emploi',
        '/images/publisher/pole-emploi-logo.png',
        'Pôle Emploi est un service public de l\'emploi'
      ),
      false,
      [
        new Keyword(1,'Architecture logicielle', null, "Domaine d'activité"),
        new Keyword(2,'Master 2', null, "Niveau d'étude"),
        new Keyword(3,'Toulouse', null, "Lieu"),
        new Keyword(4,'6 ans', null, "Expérience"),
        new Keyword(5,'2021-07-15', null, "Date de publication")
      ],
      new AddressModel(
        60,
        'Toulouse',
        '31000',
        null,
        'Place du Capitole',
        'France',
        null,
        '31000',
        null,
        null
      )
    ),

    new Offer(
      7,
      '2021-08-05',
      'Product Owner',
      'SAP',
      '/images/icon/sap-icon-transparent.png',
      new Publisher(
        7,
        'Cadremploi',
        '/images/publisher/cadremploi-logo.png',
        'Cadremploi est un site d\'emploi pour les cadres'
      ),
      false,
      [
        new Keyword(1,'Gestion de produit', null, "Domaine d'activité"),
        new Keyword(2,'Master 1', null, "Niveau d'étude"),
        new Keyword(3,'Strasbourg', null, "Lieu"),
        new Keyword(4,'4 ans', null, "Expérience"),
        new Keyword(5,'2021-08-05', null, "Date de publication")
      ],
      new AddressModel(
        70,
        'Strasbourg',
        '67000',
        null,
        'Rue des Grandes Arcades',
        'France',
        null,
        '67000',
        null,
        null
      )
    ),

    new Offer(
      8,
      '2021-09-10',
      'Ingénieur Systèmes',
      'Oracle',
      '/images/icon/oracle-icon-transparent.png',
      new Publisher(
        8,
        'Le Bon Coin',
        '/images/publisher/leboncoin-logo.png',
        'Le Bon Coin est un site de petites annonces'
      ),
      false,
      [
        new Keyword(1,'Ingénierie des systèmes', null, "Domaine d'activité"),
        new Keyword(2,'Master 2', null, "Niveau d'étude"),
        new Keyword(3,'Nice', null, "Lieu"),
        new Keyword(4,'5 ans', null, "Expérience"),
        new Keyword(5,'2021-09-10', null, "Date de publication")
      ],
      new AddressModel(
        80,
        'Nice',
        '06000',
        null,
        'Avenue Jean Médecin',
        'France',
        null,
        '06000',
        null,
        null
      )
    ),

    new Offer(
      9,
      '2021-10-01',
      'Spécialiste Cloud',
      'Salesforce',
      '/images/icon/salesforce-icon-transparent.png',
      new Publisher(
        9,
        'RegionsJob',
        '/images/publisher/regionsjob-logo.png',
        'RegionsJob est un site d\'emploi régional'
      ),
      false,
      [
        new Keyword(1,'Cloud computing', null, "Domaine d'activité"),
        new Keyword(2,'Master 2', null, "Niveau d'étude"),
        new Keyword(3,'Rennes', null, "Lieu"),
        new Keyword(4,'6 ans', null, "Expérience"),
        new Keyword(5,'2021-10-01', null, "Date de publication")
      ],
      new AddressModel(
        90,
        'Rennes',
        '35000',
        null,
        'Place de la République',
        'France',
        null,
        '35000',
        null,
        null
      )
    ),

    new Offer(
      10,
      '2021-11-20',
      'Responsable Marketing Digital',
      'Adobe',
      '/images/icon/adobe-icon-transparent.png',
      new Publisher(
        10,
        'Exclusivité',
        '/images/icon/company-icon_clearBlue500.png',
        'Glassdoor est un site de recherche d\'emploi et de recrutement'
      ),
      false,
      [
        new Keyword(1,'Marketing digital', null, "Domaine d'activité"),
        new Keyword(2,'Master 1', null, "Niveau d'étude"),
        new Keyword(3,'Lille', null, "Lieu"),
        new Keyword(4,'5 ans', null, "Expérience"),
        new Keyword(5,'2021-11-20', null, "Date de publication")
      ],
      new AddressModel(
        100,
        'Lille',
        '59000',
        null,
        'Rue Faidherbe',
        'France',
        null,
        '59000',
        null,
        null
      )
    )

  ];

  findOffers(): Offer[] {
    return this.offers;
  }

  findOfferById(id: number): Offer | undefined {
    return this.offers.find(offer => offer.id === id);
  }

  findLatestOffers(): Offer[] {
    return this.offers.slice(0, 4);
  }

  findOffersByKeyword(keywordId: number): Offer[] {
    return this.offers.filter(offer => offer.keywords.some(keyword => keyword.id === keywordId));
  }

  findOffersByLocation(locationId: number): Offer[] {
    return this.offers.filter(offer => offer.address.id === locationId);
  }

  findOffersByDate(date: string): Offer[] {
    return this.offers.filter(offer => offer.date === date);
  }

  findOffersByTitle(title: string): Offer[] {
    return this.offers.filter(offer => offer.title === title);
  }

}
