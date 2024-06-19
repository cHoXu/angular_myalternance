import {Injectable} from "@angular/core";
import {Menu} from "../models/menu";
import {MenuItem} from "../models/menu.item";
import {BlocEnum} from "../enum/bloc.enum";

@Injectable({
  providedIn: 'root'
})
export class MenusService {
  findMenuTitleByMenuEnum(enumValue: string): string {
    switch (enumValue) {
      case BlocEnum.MAIN:
        return 'Tous les articles';
      case BlocEnum.MOST_POPULAR:
        return 'Articles les plus consultés';
      default:
        return '';
    }
  }
  findMainBlogMenu(): Menu {
    return new Menu(1, 'Tous les articles', [
      new MenuItem(1, '/', 'Trouver ma formation en alternance.', 1),
      new MenuItem(2, '/', 'Préparer mon CV et ma lettre de motivation.', 1),
      new MenuItem(3, '/', 'Comment postuler à des offres avec MyAlternance?', 1),
      new MenuItem(4, '/', 'Préparer mon entretien d’embauche.', 1),
      new MenuItem(5, '/', 'Conseils pour bien débuter en entreprise.', 1)
    ]);
  }

  findMostPopularBlogMenu(): Menu {
    return new Menu(2, 'Articles les plus consultés', [
      new MenuItem(1, '/', 'Trouver ma formation en alternance.', 2),
      new MenuItem(2, '/', 'Préparer mon CV et ma lettre de motivation.', 2),
      new MenuItem(3, '/', 'Comment postuler à des offres avec MyAlternance?', 2)
    ]);
  }
}
