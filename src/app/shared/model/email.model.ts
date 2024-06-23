
export class EmailModel {
  public isVerified: boolean = false;
  constructor(
    public id: number,
    public address: string
  ) {
  }
}
