import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class AdminRouteService {
  private boardSubject: BehaviorSubject<string> = new BehaviorSubject<string>('form');
  public board$: Observable<string> = this.boardSubject.asObservable();


  updateRouteBoard(route: string): void {
    this.boardSubject.next(route);
  }

}
