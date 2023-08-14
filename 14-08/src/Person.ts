export class Person {
  private _name: string = '';

  constructor(
  ) {
  }

  public set name(newName: string) {
    this._name = newName;
  }

  public get name(): string {
    return this._name;
  }
}
