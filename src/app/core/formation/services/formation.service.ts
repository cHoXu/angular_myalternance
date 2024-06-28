import {Injectable} from "@angular/core";
import {Formation} from "../models/formation";
import {Link} from "../../../shared/model/link";
import {AddressModel} from "../../../shared/model/address.model";

@Injectable()
export class FormationService {
  formations: Formation[] = [
    new Formation(
      1,
      new Link('https://angular.io/', 'Angular'),
      'Formation Angular pour les nuls !',
      new AddressModel(
        1,
        'Paris',
        '24C54',
        null,
        'Rue de Rivoli',
        'France',
        null,
        '75000',
        null,
        null
      ),
      true
    ),
    new Formation(
      2,
      new Link('https://reactjs.org/', 'React'),
      'Formation React pur ceux qui veulent aller plus loin !',
      new AddressModel(
        2,
        'Lyon',
        '69002',
        null,
        'Place Bellecour',
        'France',
        null,
        '69002',
        null,
        null
      ),
      true
    ),
    new Formation(
      3,
      new Link('https://vuejs.org/', 'Vue.js'),
      'Formation Vue.js pour les experts en JavaScript !',
      new AddressModel(
        3,
        'Marseille',
        '13001',
        null,
        'La Canebière',
        'France',
        null,
        '13001',
        null,
        null
      ),
      false
    ),
    new Formation(
      4,
      new Link('https://www.typescriptlang.org/', 'TypeScript'),
      'Formation TypeScript pour les développeurs aguerris !',
      new AddressModel(
        4,
        'Bordeaux',
        '33000',
        null,
        'Cours de l\'Intendance',
        'France',
        null,
        '33000',
        null,
        null
      ),
      true
    ),
    new Formation(
      5,
      new Link('https://nodejs.org/', 'Node.js'),
      'Formation Node.js pour les débutants !',
      new AddressModel(
        5,
        'Lille',
        '59000',
        null,
        'Grand Place',
        'France',
        null,
        '59000',
        null,
        null
      ),
      false
    ),
    new Formation(
      6,
      new Link('https://www.python.org/', 'Python'),
      'Formation Python pour les experts en IA !',
      new AddressModel(
        6,
        'Toulouse',
        '31000',
        null,
        'Place du Capitole',
        'France',
        null,
        '31000',
        null,
        null
      ),
      true
    ),
    new Formation(
      7,
      new Link('https://www.java.com/', 'Java'),
      'Formation Java pour les développeurs Java !',
      new AddressModel(
        7,
        'Nantes',
        '44000',
        null,
        'Rue Crébillon',
        'France',
        null,
        '44000',
        null,
        null
      ),
      true
    ),
    new Formation(
      8,
      new Link('https://www.docker.com/', 'Docker'),
      'Formation Docker quand on est fan de conteneurs !',
      new AddressModel(
        8,
        'Strasbourg',
        '67000',
        null,
        'Place Kléber',
        'France',
        null,
        '67000',
        null,
        null
      ),
      false
    ),
    new Formation(
      9,
      new Link('https://kubernetes.io/', 'Kubernetes'),
      'Formation Kubernetes avec Google Cloud Platform !',
      new AddressModel(
        9,
        'Montpellier',
        '34000',
        null,
        'Place de la Comédie',
        'France',
        null,
        '34000',
        null,
        null
      ),
      true
    ),
    new Formation(
      10,
      new Link('https://www.mongodb.com/', 'MongoDB'),
      'Formation MongoDB avec atlas et compass !',
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
      ),
      false
    )
    ];

  findFormations(options: any = {}): Formation[]{
    return this.formations;
  }

  findFormation(id: number): Formation{
    return this.formations.find(formation => formation.id == id) as Formation;
  }

}
