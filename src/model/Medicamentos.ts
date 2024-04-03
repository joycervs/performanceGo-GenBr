import { Produtos } from "./Produtos";

export class Medicamentos extends Produtos {
  private _tipoMedicamento: string;

  constructor(
    id: number,
    nome: string,
    tipo: number,
    preco: number,
    tipoMedicamento: string
  ) {
    super(id, nome, tipo, preco);
    this._tipoMedicamento = tipoMedicamento;
  }

  public get tipoMedicamento(): string {
    return this._tipoMedicamento;
  }

  public set tipoMedicamento(value: string) {
    this._tipoMedicamento = value;
  }

  public visualizar(): void {
    super.visualizar();
    console.log(`Medicamentos: ${this._tipoMedicamento}`);
  }
}
