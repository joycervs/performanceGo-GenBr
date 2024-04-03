import { Produtos } from "./Produtos";

export class Brinquedos extends Produtos {
  private _brinquedos: string;

  constructor(
    id: number,
    nome: string,
    tipo: number,
    preco: number,
    brinquedos: string
  ) {
    super(id, nome, tipo, preco);
    this._brinquedos = brinquedos;
  }

  public get brinquedos(): string {
    return this._brinquedos;
  }

  public set brinquedos(value: string) {
    this._brinquedos = value;
  }

  public visualizar(): void {
    super.visualizar();
    console.log(`Brinquedos: ${this._brinquedos}`);
  }
}
