export class User {
  public username?: string;
  public email?: string;
  public password?: string;
  public address?: string ;
  public zip?: number;
  public city?: string;

  constructor(input?: User) {
    Object.assign(this, input);
  }
}
