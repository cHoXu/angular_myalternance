import {PersonModel} from "../../../shared/model/person.model";
import {StatusType} from "../../../shared/types/status.type";

export class ClientModel {
  constructor(
    public id: number,
    public status: StatusType,
    public person: PersonModel,
  ) { }
}
