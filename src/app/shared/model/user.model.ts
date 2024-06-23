export class UserModel {
  constructor(
    public id: number,
    public email: string,
    public roles: string[],
    public enabled: boolean,
    public username: string,
  ) { }
}
