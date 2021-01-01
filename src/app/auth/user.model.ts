export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}

  get token() {
    // can run code and is accessed like a property, and cannot be overriden
    return !this._tokenExpirationDate || new Date() > this._tokenExpirationDate
      ? null
      : this._token;
  }
}
