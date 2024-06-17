import {Injectable} from "@angular/core";

@Injectable()
export class UniverseService {
  getUniverse(): string {
    return 'student';
    //return 'company';
  }
}
