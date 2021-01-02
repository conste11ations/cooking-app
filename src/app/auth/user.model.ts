export class User {
  constructor(
    public email: string,
    public id: string,
    // tslint:disable-next-line: variable-name
    private _token: string,
    // tslint:disable-next-line: variable-name
    private _tokenExpirationDate: Date
  ) {}

  get token(): string {
    // can run code and is accessed like a property, and cannot be overriden
    return !this._tokenExpirationDate || new Date() > this._tokenExpirationDate
      ? null
      : this._token;
  }
}
