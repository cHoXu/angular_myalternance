import {AddressModel} from "./address.model";

export class LocationModel {
  constructor(
    public id: number,
    public title: string,
    public address: AddressModel
  ) { }
}
