export class AddressModel {
  constructor(
    public id: number,
    public city: string,
    public code: string,
    public floor: string|null,
    public street: string,
    public country: string,
    public apartment: string|null,
    public codePostal: string,
    public houseNumber: string|null,
    public buildingNumber: string|null
  ) {
  }
}
