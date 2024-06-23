import {ProductModel} from "./product.model";
import {LocationModel} from "./location.model";
import {WarningModel} from "../../core/form/models/warning.model";
import {DurationModel} from "./duration.model";

export class PrestationModel {
  public endDate!: Date;
  constructor(
    public id: number,
    public price: number,
    public title: string,
    public startDate: Date,
    public description: string,
    public product: ProductModel,
    public location: LocationModel,
    public duration: DurationModel,
    public warnings: WarningModel[]
  ) {
    /** @todo: This is a hack to get the end date from the start date and duration */
    this.endDate = new Date(startDate.getTime() + duration.number * 60000);
  }
}
