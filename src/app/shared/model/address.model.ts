export class AddressModel {
  constructor(
    public id: number,
    public city: string,
    public floor: string,
    public street: string,
    public country: string,
    public apartment: string,
    public postalCode: string,
    public houseNumber: string,
    public buildingNumber: string
  ) {
  }
}
