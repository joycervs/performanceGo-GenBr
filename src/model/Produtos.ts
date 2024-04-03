export abstract class Produtos {
  private _id: number;
  private _nome: string;
  private _tipo: number;
  private _preco: number;

  constructor(id: number, nome: string, tipo: number, preco: number) {
    this._id = id;
    this._nome = nome;
    this._tipo = tipo;
    this._preco = preco;
  }

  public get id(): number {
    return this._id;
  }

  public get nome(): string {
    return this._nome;
  }

  public get tipo(): number {
    return this._tipo;
  }

  public get preco(): number {
    return this._preco;
  }

  public set id(value: number) {
    this._id = value;
  }

  public set nome(value: string) {
    this._nome = value;
  }

  public set tipo(value: number) {
    this._tipo = value;
  }

  public set preco(value: number) {
    this._preco = value;
  }

  public visualizar(): void {
    let tipo: string = "";
    switch (this._tipo) {
      case 1:
        tipo = "Alimentos";
        break;
      case 2:
        tipo = "Brinquedos";
        break;
      case 3:
        tipo = "Medicamentos";
        break;
    }

    console.log("***************************************************");
    console.log("Produto");
    console.log("***************************************************");
    console.log(`Id do Produto: ${this._id}`);
    console.log(`Nome do Produto: ${this._nome}`);
    console.log(`Tipo do Produto: ${tipo}`);
    console.log(`Preço do Produto R$: ${this._preco}`);
  }
}
