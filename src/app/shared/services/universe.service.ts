import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class UniverseService {
  private clear_blue_500:string = '#00C8F5'
  private dark_blue_400:string = '#4265FF'

  universe: string = 'student';
  private universeSubject: BehaviorSubject<string> = new BehaviorSubject<string>('student');
  public universe$: Observable<string> = this.universeSubject.asObservable();

  updateUniverse(universe: string): void {
    this.universeSubject.next(universe);
    this.universe = universe;
  }
  getUniverse(): string {
    return this.universe;
  }

  getPrimaryColor(): string {
    if (this.getUniverse() === 'student') {
      return this.clear_blue_500;
    } else {
      return this.dark_blue_400;
    }
  }
}
