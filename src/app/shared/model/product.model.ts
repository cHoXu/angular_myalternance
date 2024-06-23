import {PriceModel} from "./price.model";

export class ProductModel {
  constructor(
    public id: number,
    public name: string,
    public price: PriceModel,
    public description: string
  ) { }
}
