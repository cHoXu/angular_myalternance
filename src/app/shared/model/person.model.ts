import {LocationModel} from "./location.model";
import {PhoneModel} from "./phone.model";
import {EmailModel} from "./email.model";

export class PersonModel {
  constructor(
    public id: number,
    public username: string,
    public lastName: string,
    public firstName: string,
    public email: EmailModel,
    public phone: PhoneModel,
    public location: LocationModel
  ) { }
 }
