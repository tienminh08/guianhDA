export class Product{
  private _id!:number;
  private _name!:string;
  private _img!:string;

  constructor(id: number, name: string, img: string) {
    this._id = id;
    this._name = name;
    this._img = img;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get img(): string {
    return this._img;
  }

  set img(value: string) {
    this._img = value;
  }
}
