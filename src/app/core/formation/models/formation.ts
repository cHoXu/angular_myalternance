import {AddressModel} from "../../../shared/model/address.model";
import {Link} from "../../../shared/model/link";

export class Formation {
  constructor(
    public id: number,
    public link: Link,
    public title: string,
    public address: AddressModel,
    public isAlternating: boolean,
  ) {}
}
