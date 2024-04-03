import { Produtos } from "./Produtos";

export class Alimentos extends Produtos {
  private _alimentos: string;

  constructor(
    id: number,
    nome: string,
    tipo: number,
    preco: number,
    alimentos: string
  ) {
    super(id, nome, tipo, preco);
    this._alimentos = alimentos;
  }

  public get alimentos(): string {
    return this._alimentos;
  }

  public set alimentos(value: string) {
    this._alimentos = value;
  }

  public visualizar(): void {
    super.visualizar();
    console.log(`Alimento: ${this._alimentos}`);
  }
}
