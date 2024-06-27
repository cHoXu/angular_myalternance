import {Injectable} from "@angular/core";

@Injectable()
export class UniverseService {
  private clear_blue_500:string = '#00C8F5'
  getUniverse(): string {
    return 'student';
    //return 'company';
  }

  getPrimaryColor(): string {
    if (this.getUniverse() === 'student') {
      return this.clear_blue_500;
    } else {
      return '#FFC107';
    }
  }
}
