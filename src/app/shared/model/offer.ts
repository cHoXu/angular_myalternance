import {AddressModel} from "./address.model";
import {Keyword} from "./keyword";
import {Publisher} from "./publisher";

export class Offer {
  constructor(
    public id: number,
    public date: string,
    public title: string,
    public company: string,
    public companyLogo: string,
    public publishedBy: Publisher,
    public isFavorite: boolean,
    public keywords: Keyword[],
    public address:AddressModel
  ) {
  }
}
