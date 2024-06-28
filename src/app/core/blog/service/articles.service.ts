import {Injectable} from "@angular/core";
import {Article} from "../models/article";
import {Image} from "../models/image";
import {Link} from "../../../shared/model/link";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  articles: Article[] = [
    new Article(
      1,
      'Trouver ma formation en alternance.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n' +
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      new Link('article/1', 'Lire la suite'),
      new Image(
        1,
        'https://www.placealemploi.fr/wp-content/uploads/bfi_thumb/Entretien-embauche-questions-scaled-3dzr96ugjeyob3tvz3vsay.jpg',
        'Image 1',
        'Une description'
      )
    ),
    new Article(
      2,
      'Réussir son entretien d\'embauche',
      'Préparez-vous à répondre aux questions les plus courantes lors d\'un entretien d\'embauche. Découvrez nos conseils pour vous démarquer et décrocher le poste de vos rêves.',
      new Link('https://www.google.com', 'Lire la suite'),        new Image(
        2,
        'https://www.jobology.fr/wp-content/uploads/2021/03/AdobeStock_271740202-1024x683.jpg',
        'Entretien d\'embauche',
        'Une candidate répondant aux questions d\'un recruteur'
      )
    ),
    new Article(
      3,
      'Rédiger un CV percutant',
      'Votre CV est votre meilleure carte de visite pour décrocher un entretien. Apprenez à mettre en valeur vos compétences et votre expérience de manière attractive.',
      new Link('https://www.google.com', 'Lire la suite'),        new Image(
        3,
        'https://www.smallbusinessact.com/wp-content/uploads/2018/12/bien-mener-entretien-embauche-01.png',
        'Rédaction de CV',
        'Une personne rédigeant un CV sur son ordinateur'
      )
    ),
    new Article(
      4,
      'Négocier son salaire',
      'Vous avez décroché le job de vos rêves ? Découvrez nos astuces pour négocier au mieux votre rémunération et vos avantages.',
      new Link('https://www.google.com', 'Lire la suite'),        new Image(
        4,
        'https://www.reussirmavie.net/photo/art/default/618975-20281694.jpg?v=1496740521',
        'Négociation de salaire',
        'Un homme d\'affaires négociant son salaire avec un recruteur'
      )
    ),
    new Article(
      5,
      'Réussir sa période d\'essai',
      'Vous venez d\'être embauché ? Voici nos conseils pour bien démarrer votre nouvelle mission et confirmer votre recrutement à l\'issue de la période d\'essai.',
      new Link('https://www.google.com', 'Lire la suite'),        new Image(
        5,
        'https://assets-global.website-files.com/5d78b20f584e1413997bfda0/5feb2c8b9204bde4e058770c_recruter-interne-femmes-souriantes-recrutement-interne-2-origin-1696x993-lossy.jpg',
        'Période d\'essai',
        'Un nouveau collaborateur prenant ses marques dans son nouvel environnement de travail'
      )
    )
  ];
  findArticles(options: any = {}): Article[]{
    return this.articles;
  }

  findArticle(id: number): Article{
    return this.articles.find(article => article.id == id) as Article;
  }

  findMostPopularArticles(quantity:number = 3): Article[]{
    return this.articles.slice(0, quantity);
  }
}
