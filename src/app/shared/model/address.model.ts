export class AddressModel {
  constructor(
    public id: number,
    public city: string,
    public code: string,
    public floor: string,
    public street: string,
    public country: string,
    public apartment: string,
    public codePostal: string,
    public houseNumber: string,
    public buildingNumber: string
  ) {
  }
}
