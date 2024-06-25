
export class EmailModel {
  public id: number | null = null;
  constructor(public address: string) {}

  public isValidEmail(): boolean {
    return (
      new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
    ).test(this.address);
  }
}
